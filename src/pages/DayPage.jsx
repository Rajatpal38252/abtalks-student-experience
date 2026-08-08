import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock3, Code2, Compass, Sparkles, Target } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useChallenge } from '../context/ChallengeContext';
import './ChallengePage.css';

function dayMission(day) {
  const missions = [
    ['Set up your builder space', 'Create a focused project workspace, a GitHub repository, and your first meaningful commit.', 'Foundation'],
    ['Build a responsive component', 'Turn a small interface idea into a responsive component with thoughtful states.', 'UI systems'],
    ['Ship a useful interaction', 'Add a clear user interaction and document the decision behind it.', 'Product thinking'],
    ['Polish the experience', 'Improve visual hierarchy, keyboard support, and feedback states.', 'Craft'],
  ];
  const [title, description, focus] = missions[(day - 1) % missions.length];
  return { title, description, focus };
}

export default function DayPage() {
  const { day: rawDay } = useParams();
  const navigate = useNavigate();
  const { challenge, completeDay } = useChallenge();
  const requestedDay = Math.min(Math.max(Number(rawDay) || 1, 1), 60);
  const day = challenge.challengeStarted ? Math.min(requestedDay, challenge.currentDay) : 1;
  const completed = challenge.completedDays.includes(day);
  const mission = dayMission(day);

  const markComplete = () => {
    if (completed) return;
    completeDay(day);
    navigate(day === 60 ? '/certificate' : `/challenge/day/${day + 1}`);
  };

  return (
    <main className="challenge-page">
      <div className="challenge-page-glow challenge-page-glow--purple" />
      <div className="challenge-page-glow challenge-page-glow--cyan" />
      <header className="challenge-topbar">
        <Link to="/" className="challenge-brand"><span>AB</span><strong>ABTalks <small>Mission 60</small></strong></Link>
        <Link to="/dashboard" className="challenge-dashboard-link">Dashboard <Compass size={16} /></Link>
      </header>
      <motion.section className="challenge-content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link to="/dashboard" className="challenge-back"><ArrowLeft size={16} /> Back to dashboard</Link>
        <div className="challenge-progress"><span>Mission 60</span><div><i style={{ width: `${(day / 60) * 100}%` }} /></div><strong>Day {day} of 60</strong></div>
        <article className="challenge-card card">
          <span className="challenge-eyebrow"><Sparkles size={15} /> Today’s challenge</span>
          <h1>Day {day}: {mission.title}</h1>
          <p>{mission.description}</p>
          <div className="challenge-meta"><span><Clock3 size={16} /> 45–60 min</span><span><Code2 size={16} /> Build in public</span><span><Target size={16} /> {mission.focus}</span></div>
          <div className="challenge-steps"><h2>Your mission checklist</h2><ol><li>Set a small, shippable outcome before you begin.</li><li>Build the core experience and commit your progress.</li><li>Write down one thing you learned before you publish.</li></ol></div>
          <div className="challenge-actions"><button className={`btn-primary challenge-complete ${completed ? 'challenge-complete--done' : ''}`} onClick={markComplete}><Check size={17} /> {completed ? 'Completed' : 'Mark day complete'}</button><Link to="/dashboard" className="btn-secondary">Save and return</Link></div>
        </article>
      </motion.section>
    </main>
  );
}
