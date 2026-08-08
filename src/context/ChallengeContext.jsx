/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'mission60.challenge';
const DEFAULT_CHALLENGE = {
  challengeStarted: false,
  currentDay: 1,
  completedDays: [],
  streak: 0,
  challengeCompleted: false,
};

const ChallengeContext = createContext(null);

function readChallenge() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (!saved) return DEFAULT_CHALLENGE;
    const completedDays = [...new Set((saved.completedDays || []).filter((day) => Number.isInteger(day) && day >= 1 && day <= 60))].sort((a, b) => a - b);
    const challengeCompleted = Boolean(saved.challengeCompleted || completedDays.length === 60);
    return {
      challengeStarted: Boolean(saved.challengeStarted || completedDays.length),
      currentDay: challengeCompleted ? 60 : Math.min(Math.max(Number(saved.currentDay) || 1, 1), 60),
      completedDays,
      streak: Math.max(Number(saved.streak) || 0, 0),
      challengeCompleted,
    };
  } catch {
    return DEFAULT_CHALLENGE;
  }
}

export function ChallengeProvider({ children }) {
  const [challenge, setChallenge] = useState(readChallenge);

  const updateChallenge = useCallback((updater) => {
    setChallenge((previous) => {
      const next = typeof updater === 'function' ? updater(previous) : updater;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const startChallenge = useCallback(() => {
    updateChallenge((previous) => previous.challengeStarted ? previous : {
      ...previous,
      challengeStarted: true,
      currentDay: 1,
      streak: Math.max(previous.streak, 1),
    });
  }, [updateChallenge]);

  const completeDay = useCallback((day) => {
    updateChallenge((previous) => {
      const completedDays = [...new Set([...previous.completedDays, day])].sort((a, b) => a - b);
      const challengeCompleted = completedDays.length === 60;
      return {
        ...previous,
        challengeStarted: true,
        completedDays,
        currentDay: challengeCompleted ? 60 : Math.max(previous.currentDay, Math.min(day + 1, 60)),
        streak: Math.max(previous.streak, completedDays.length),
        challengeCompleted,
      };
    });
  }, [updateChallenge]);

  const value = useMemo(() => ({ challenge, startChallenge, completeDay }), [challenge, startChallenge, completeDay]);
  return <ChallengeContext.Provider value={value}>{children}</ChallengeContext.Provider>;
}

export function useChallenge() {
  const context = useContext(ChallengeContext);
  if (!context) throw new Error('useChallenge must be used inside ChallengeProvider');
  return context;
}

export function useChallengeAction() {
  const navigate = useNavigate();
  const { challenge, startChallenge } = useChallenge();
  const label = challenge.challengeCompleted ? 'View Certificate' : challenge.challengeStarted ? 'Continue Challenge' : 'Start Challenge';
  const openChallenge = useCallback(() => {
    if (challenge.challengeCompleted) {
      navigate('/certificate');
      return;
    }
    startChallenge();
    navigate(`/challenge/day/${challenge.challengeStarted ? challenge.currentDay : 1}`);
  }, [challenge, navigate, startChallenge]);
  return { label, openChallenge };
}
