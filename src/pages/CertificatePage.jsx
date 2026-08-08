import { motion } from 'framer-motion';
import { Award, Calendar, Download, Lock, ShieldCheck, Sparkles, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useChallengeAction, useChallenge } from '../context/ChallengeContext';
import './ChallengePage.css';

function formatDate(date = new Date()) {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function buildCertificateId(completedDays, xp) {
  const stamp = String(completedDays.length * 17 + xp + 60).padStart(6, '0');
  return `ABT-M60-${stamp}`;
}

export default function CertificatePage() {
  const { challenge } = useChallenge();
  const { openChallenge } = useChallengeAction();
  const complete = challenge.challengeCompleted;
  const certificateId = buildCertificateId(challenge.completedDays, challenge.xp);
  const completionDate = formatDate();

  return (
    <main className={`challenge-page certificate-page ${complete ? 'certificate-page--unlocked' : 'certificate-page--locked'}`}>
      <div className="challenge-page-glow challenge-page-glow--purple" aria-hidden="true" />
      <div className="challenge-page-glow challenge-page-glow--cyan" aria-hidden="true" />
      <div className="challenge-page-glow challenge-page-glow--gold" aria-hidden="true" />

      <header className="challenge-topbar certificate-topbar">
        <Link to="/" className="challenge-brand" aria-label="Return to ABTalks landing page">
          <span aria-hidden="true">AB</span>
          <strong>
            ABTalks <small>Mission 60</small>
          </strong>
        </Link>
        <Link to="/dashboard" className="challenge-dashboard-link">
          Dashboard
        </Link>
      </header>

      {complete ? (
        <motion.section
          className="certificate-shell"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="certificate-actions no-print">
            <button
              type="button"
              className="btn-primary certificate-button"
              onClick={() => window.print()}
            >
              <Download size={17} aria-hidden="true" />
              Print / Save as PDF
            </button>
            <Link to="/dashboard" className="certificate-secondary-link">
              Back to dashboard
            </Link>
          </div>

          <motion.article
            className="certificate-frame"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            aria-label="Mission 60 completion certificate"
          >
            <div className="certificate-frame-border" aria-hidden="true" />
            <div className="certificate-frame-inner">
              <div className="certificate-header">
                <span className="certificate-seal" aria-hidden="true">
                  <Award size={28} />
                </span>
                <span className="certificate-eyebrow">
                  <Sparkles size={14} aria-hidden="true" />
                  Certificate of Completion
                </span>
                <h1>Mission 60</h1>
                <p className="certificate-lead">
                  This certifies that the following builder completed the ABTalks 60-day
                  coding challenge with consistency, public proof of work, and momentum.
                </p>
              </div>

              <div className="certificate-recipient">
                <span className="certificate-presented">Presented to</span>
                <p className="certificate-name">Rajat Kumar</p>
              </div>

              <div className="certificate-meta-grid">
                <div>
                  <Calendar size={15} aria-hidden="true" />
                  <span>
                    <small>Completion date</small>
                    <strong>{completionDate}</strong>
                  </span>
                </div>
                <div>
                  <Trophy size={15} aria-hidden="true" />
                  <span>
                    <small>Days completed</small>
                    <strong>60 / 60</strong>
                  </span>
                </div>
                <div>
                  <ShieldCheck size={15} aria-hidden="true" />
                  <span>
                    <small>Certificate ID</small>
                    <strong>{certificateId}</strong>
                  </span>
                </div>
              </div>

              <div className="certificate-signatures">
                <div className="certificate-sign">
                  <span className="certificate-sign-line" aria-hidden="true" />
                  <strong>ABTalks Mission 60</strong>
                  <small>Program Director</small>
                </div>
                <div className="certificate-sign">
                  <span className="certificate-sign-line certificate-sign-line--script" aria-hidden="true" />
                  <strong>Verified Builder</strong>
                  <small>Digital Credential</small>
                </div>
              </div>

              <footer className="certificate-footer">
                <span>ABTalks · Build in public · Proof of work</span>
              </footer>
            </div>
          </motion.article>
        </motion.section>
      ) : (
        <motion.section
          className="certificate-locked card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <span className="certificate-locked-icon" aria-hidden="true">
            <Lock size={28} />
          </span>
          <span className="challenge-eyebrow">
            <Sparkles size={15} aria-hidden="true" /> Mission 60
          </span>
          <h1>Your certificate is waiting.</h1>
          <p>
            Complete every daily mission to unlock your Mission 60 certificate. You have finished{' '}
            <strong>{challenge.completedDays.length}</strong> of <strong>60</strong> days.
          </p>

          <div
            className="certificate-locked-progress"
            role="progressbar"
            aria-valuenow={challenge.completedDays.length}
            aria-valuemin={0}
            aria-valuemax={60}
            aria-label="Challenge progress"
          >
            <span style={{ width: `${(challenge.completedDays.length / 60) * 100}%` }} />
          </div>
          <small className="certificate-locked-caption">
            {60 - challenge.completedDays.length} days remaining
          </small>

          <div className="certificate-locked-actions">
            <button type="button" className="btn-primary certificate-button" onClick={openChallenge}>
              Continue Challenge
            </button>
            <Link to="/dashboard" className="certificate-secondary-link">
              Back to dashboard
            </Link>
          </div>
        </motion.section>
      )}
    </main>
  );
}
