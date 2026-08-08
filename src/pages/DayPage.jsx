import { useState } from 'react';
import { motion } from 'framer-motion';
import { MISSIONS } from "../data/missions";
import { ArrowLeft, Check, Clock3, Code2, Compass, ExternalLink, Flame, Sparkles, Star, Target } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useChallenge } from '../context/ChallengeContext';
import ProjectSubmission from '../components/ProjectSubmission';
import './ChallengePage.css';

function dayMission(day) {
    return MISSIONS.find(m => m.day === day);
}

function DayOneDetails({ submitted, onSubmit }) {
  const [repoUrl, setRepoUrl] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const submit = (event) => {
    event.preventDefault();
    if (!repoUrl.trim() || !demoUrl.trim()) { setError('Add both your GitHub repository and live demo URLs to submit.'); return; }
    onSubmit();
  };
  if (submitted) return <motion.div className="day-success" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }}><span><Sparkles size={25} /></span><h2>Day Completed</h2><p>+50 XP</p><p><Flame size={16} /> Streak Updated</p><Link to="/challenge/day/2" className="btn-primary">Continue to Day 2</Link></motion.div>;
  return <><div className="day-detail-grid"><section><h2>Tech Stack</h2><div className="day-chip-list"><span>HTML</span><span>CSS</span><span>JavaScript</span></div></section><section><h2>Resources</h2><div className="day-resource-list"><a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">Problem Statement <ExternalLink size={13} /></a><a href="https://www.behance.net/" target="_blank" rel="noreferrer">Reference Design <ExternalLink size={13} /></a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube Guide <small>(optional)</small><ExternalLink size={13} /></a></div></section></div><section className="day-deliverables"><h2>Deliverables</h2><span><Check size={16} /> GitHub Repository</span><span><Check size={16} /> Live Demo</span></section><form className="day-submission" onSubmit={submit}><h2>Submission</h2><label>GitHub Repo URL<input type="url" value={repoUrl} onChange={(event) => setRepoUrl(event.target.value)} placeholder="https://github.com/your-username/project" /></label><label>Live Demo URL<input type="url" value={demoUrl} onChange={(event) => setDemoUrl(event.target.value)} placeholder="https://your-project.vercel.app" /></label><label>Notes<textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="What did you build or learn today?" rows="4" /></label>{error && <p className="day-form-error">{error}</p>}<button className="btn-primary challenge-complete" type="submit">Submit Project <Check size={17} /></button></form></>;
}

export default function DayPage() {
  const { day: rawDay } = useParams();
  const navigate = useNavigate();
  const { challenge, completeDay, submitProject } = useChallenge();
  const [submitted, setSubmitted] = useState(false);
  const requestedDay = Math.min(Math.max(Number(rawDay) || 1, 1), 60);
  const day = challenge.challengeStarted ? Math.min(requestedDay, challenge.currentDay) : 1;
  const completed = challenge.completedDays.includes(day);
  const mission = dayMission(day);
  const complete = () => { if (!completed) completeDay(day); setSubmitted(true); };
  const handleProjectSubmit = (projectData) => {
    submitProject({
      ...projectData,
      day,
      title: mission.title,
    });
    navigate('/dashboard');
  };

  return <main className="challenge-page"><div className="challenge-page-glow challenge-page-glow--purple" /><div className="challenge-page-glow challenge-page-glow--cyan" /><header className="challenge-topbar"><Link to="/" className="challenge-brand"><span>AB</span><strong>ABTalks <small>Mission 60</small></strong></Link><Link to="/dashboard" className="challenge-dashboard-link">Dashboard <Compass size={16} /></Link></header><motion.section className="challenge-content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><Link to="/dashboard" className="challenge-back"><ArrowLeft size={16} /> Back to dashboard</Link><div className="challenge-progress"><span>Mission 60</span><div><i style={{ width: `${(day / 60) * 100}%` }} /></div><strong>Day {day} of 60</strong></div><article className="challenge-card card"><span className="challenge-eyebrow"><Sparkles size={15} /> Today’s challenge</span><h1>Day {day} — {mission.title}</h1>{day === 1 && <div className="day-rating"><span>Difficulty:</span><span aria-label="Two out of five difficulty stars"><Star fill="currentColor" /><Star fill="currentColor" /><Star /><Star /><Star /></span></div>}<p>{mission.description}</p><div className="challenge-meta"><span><Clock3 size={16} /> {mission.time}</span><span><Code2 size={16} /> Build in public</span><span><Target size={16} /> {mission.focus}</span></div>{day === 1 ? <DayOneDetails submitted={submitted || completed} onSubmit={complete} /> : <><div className="challenge-steps"><h2>Your mission checklist</h2><ol><li>Set a small, shippable outcome before you begin.</li><li>Build the core experience and commit your progress.</li><li>Write down one thing you learned before you publish.</li></ol></div><ProjectSubmission day={day} title={mission.title} skills={[mission.focus]} onSubmit={handleProjectSubmit} /></>}</article></motion.section></main>;
}
