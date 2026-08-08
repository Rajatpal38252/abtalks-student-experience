import { ArrowRight } from 'lucide-react';
import { useChallengeAction } from '../context/ChallengeContext';

export default function ChallengeButton({ className = '', onClick, showArrow = true }) {
  const { label, openChallenge } = useChallengeAction();
  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        openChallenge();
      }}
    >
      {label}
      {showArrow && <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />}
    </button>
  );
}
