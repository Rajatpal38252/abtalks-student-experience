import { motion } from 'framer-motion';
import { Award, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useChallengeAction, useChallenge } from '../context/ChallengeContext';
import './ChallengePage.css';

export default function CertificatePage() {
  const { challenge } = useChallenge();
  const { openChallenge } = useChallengeAction();
  const complete = challenge.challengeCompleted;
  return <main className="challenge-page certificate-page"><div className="challenge-page-glow challenge-page-glow--purple" /><div className="challenge-page-glow challenge-page-glow--cyan" /><header className="challenge-topbar"><Link to="/" className="challenge-brand"><span>AB</span><strong>ABTalks <small>Mission 60</small></strong></Link><Link to="/dashboard" className="challenge-dashboard-link">Dashboard</Link></header><motion.section className="certificate-card card" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5 }}><span className="certificate-icon"><Award size={34} /></span><span className="challenge-eyebrow"><Sparkles size={15} /> Mission 60</span><h1>{complete ? 'Challenge completed.' : 'Your certificate is waiting.'}</h1><p>{complete ? 'You built 60 days of proof of work, consistency, and momentum. This is your next chapter.' : 'Complete every daily mission to unlock your Mission 60 certificate.'}</p><div className="certificate-name">Rajat Kumar</div>{complete ? <button className="btn-primary certificate-button" onClick={() => window.print()}><Download size={17} /> Print certificate</button> : <button className="btn-primary certificate-button" onClick={openChallenge}>Continue Challenge</button>}</motion.section></main>;
}
