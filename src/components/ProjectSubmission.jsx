import { useState } from 'react';
import { Check, ShieldCheck, Star } from 'lucide-react';
import { motion } from "framer-motion";

const TIME_OPTIONS = ['Under 1 Hour', '1–2 Hours', '2–4 Hours', '4+ Hours'];

function isGitHubUrl(value) {
  try { return new URL(value).href.startsWith('https://github.com/'); } catch { return false; }
}

function isDemoUrl(value) {
  if (!value) return true;
  try { return ['http:', 'https:'].includes(new URL(value).protocol); } catch { return false; }
}

export default function ProjectSubmission({ day, title, skills, onSubmit }) {
  const [github, setGithub] = useState('');
  const [demo, setDemo] = useState('');
  const [learned, setLearned] = useState('');
  const [timeTaken, setTimeTaken] = useState(day === 1 ? '1–2 Hours' : 'Under 1 Hour');
  const [difficulty, setDifficulty] = useState(3);
  const [verified, setVerified] = useState(false);
  const githubValid = isGitHubUrl(github);
  const demoValid = isDemoUrl(demo);
  const submitEnabled = githubValid && demoValid;

  const verify = () => { if (githubValid) setVerified(true); };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!submitEnabled) return;
    onSubmit({ day, title, github, demo, learned, timeTaken, difficulty, skills });
  };

  return <form className="project-submission" onSubmit={handleSubmit}><div className="project-submission-heading"><div><span className="challenge-eyebrow">Project submission</span><h2>Turn today into proof of work.</h2></div>{verified && <motion.span className="repository-verified" initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }}><ShieldCheck size={16} /> Repository Verified</motion.span>}</div><label>GitHub Repository URL <em>Required</em><input type="url" value={github} onChange={(event) => { setGithub(event.target.value); setVerified(false); }} placeholder="https://github.com/your-username/project" />{github && !githubValid && <small className="submission-error">Use a URL that begins with https://github.com/</small>}</label><label>Live Demo URL <em>Optional</em><input type="url" value={demo} onChange={(event) => setDemo(event.target.value)} placeholder="https://your-project.vercel.app" />{demo && !demoValid && <small className="submission-error">Enter a valid https:// or http:// URL.</small>}</label><label>What I Learned<textarea value={learned} onChange={(event) => setLearned(event.target.value)} placeholder="Share the key idea, skill, or challenge you worked through." rows="4" /></label><div className="submission-controls"><label>Time Taken<select value={timeTaken} onChange={(event) => setTimeTaken(event.target.value)}>{TIME_OPTIONS.map((time) => <option key={time}>{time}</option>)}</select></label><fieldset><legend>Difficulty Rating</legend><div>{[1, 2, 3, 4, 5].map((rating) => <button type="button" key={rating} onClick={() => setDifficulty(rating)} aria-label={`${rating} star difficulty`} className={rating <= difficulty ? 'rating-star rating-star--active' : 'rating-star'}><Star size={18} fill="currentColor" /></button>)}</div></fieldset></div><div className="submission-actions"><button type="button" className="btn-secondary verify-button" onClick={verify} disabled={!githubValid}><ShieldCheck size={16} /> Verify Repository</button><button type="submit" className="btn-primary challenge-complete" disabled={!submitEnabled}><Check size={17} /> Submit Project</button></div></form>;
}
