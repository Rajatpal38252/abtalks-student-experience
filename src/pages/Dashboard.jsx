import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useChallenge } from '../context/ChallengeContext';
import {
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Code2,
  ExternalLink,
  Flame,
  FolderKanban,
  GitBranch,
  Home,
  Lock,
  LogOut,
  Menu,
  MoreHorizontal,
  Play,
  Settings,
  Sparkles,
  Target,
  Trophy,
  UserRound,
  X,
  Zap,
} from 'lucide-react';
import './Dashboard.css';

const NAV_ITEMS = [
  { label: 'Overview', icon: Home, target: 'overview' },
  { label: 'Today’s mission', icon: Target, target: 'mission' },
  { label: 'Projects', icon: FolderKanban, target: 'projects' },
  { label: 'Achievements', icon: Award, target: 'achievements' },
  { label: 'Leaderboard', icon: Trophy, target: 'leaderboard' },
];

const STATS = [
  { label: 'Current Streak', value: '12 days', detail: 'Personal best: 14', icon: Flame, tone: 'purple' },
  { label: 'Total Projects', value: '18', detail: '3 published this week', icon: FolderKanban, tone: 'blue' },
  { label: 'GitHub Commits', value: '247', detail: '+31 this week', icon: GitBranch, tone: 'cyan' },
  { label: 'Consistency Score', value: '92%', detail: 'Top 12% of builders', icon: BarChart3, tone: 'violet' },
];

const PROJECTS = [
  { title: 'Focus Flow', description: 'A distraction-free task timer built for deep work.', tech: ['React', 'CSS', 'Vite'], status: 'Published', tone: 'blue' },
  { title: 'Pocket Ledger', description: 'A clean expense tracker with category insights.', tech: ['React', 'Charts'], status: 'In review', tone: 'purple' },
  { title: 'Weather Canvas', description: 'A responsive forecast dashboard with motion states.', tech: ['API', 'JavaScript'], status: 'Published', tone: 'cyan' },
];

const ACHIEVEMENTS = [
  { title: 'First Ship', caption: 'Publish your first project', icon: RocketIcon, unlocked: true },
  { title: 'Week Warrior', caption: 'Complete 7 daily missions', icon: Flame, unlocked: true },
  { title: 'Commit Craft', caption: 'Reach 100 GitHub commits', icon: GitBranch, unlocked: true },
  { title: 'Momentum Maker', caption: 'Maintain a 14 day streak', icon: Zap, unlocked: false },
  { title: 'Portfolio Ready', caption: 'Publish 10 projects', icon: Trophy, unlocked: false },
  { title: 'Mission Complete', caption: 'Finish all 60 days', icon: Award, unlocked: false },
];

const LEADERS = [
  { rank: 1, name: 'Aanya Kapoor', initials: 'AK', streak: 34, tone: 'purple' },
  { rank: 2, name: 'Jayden Lee', initials: 'JL', streak: 29, tone: 'blue' },
  { rank: 3, name: 'Maya Nair', initials: 'MN', streak: 26, tone: 'cyan' },
];

const ACTIVITY = [
  { title: 'Published Focus Flow', detail: 'Project 18 · GitHub synced', icon: GitBranch, tone: 'cyan' },
  { title: 'Completed Day 17 mission', detail: 'UI state and accessibility', icon: Check, tone: 'purple' },
  { title: 'Earned Commit Craft', detail: '100 GitHub commits reached', icon: Award, tone: 'violet' },
];

const WEEK = [4, 3, 4, 2, 4, 1, 3];

function RocketIcon(props) {
  return <Sparkles {...props} />;
}

function scrollToSection(target) {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Brand() {
  return (
    <a className="dashboard-brand" href="/" aria-label="Return to ABTalks landing page">
      <span className="dashboard-brand-mark">AB</span>
      <span><strong>ABTalks</strong><small>Mission 60</small></span>
    </a>
  );
}

function Sidebar({ active, onNavigate, mobileOpen, onClose }) {
  return (
    <>
      <AnimatePresence>
        {mobileOpen && <motion.button className="dashboard-scrim" aria-label="Close menu" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}
      </AnimatePresence>
      <aside className={`dashboard-sidebar ${mobileOpen ? 'dashboard-sidebar--open' : ''}`}>
        <div className="dashboard-sidebar-head"><Brand /><button className="dashboard-icon-button dashboard-sidebar-close" onClick={onClose} aria-label="Close navigation"><X size={20} /></button></div>
        <nav className="dashboard-nav" aria-label="Dashboard navigation">
          {NAV_ITEMS.map(({ label, icon: Icon, target }) => (
            <button key={target} className={`dashboard-nav-item ${active === target ? 'dashboard-nav-item--active' : ''}`} onClick={() => { onNavigate(target); onClose(); }}>
              <Icon size={18} /><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="dashboard-sidebar-footer glass">
          <span className="dashboard-sidebar-footer-icon"><Sparkles size={17} /></span>
          <div><strong>Day 18 of 60</strong><small>Your momentum looks great.</small></div>
        </div>
        <a className="dashboard-help-link" href="#support"><CircleHelp size={17} /> Need help?</a>
      </aside>
    </>
  );
}

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('');
  return (
    <div className="dashboard-profile-wrap">
      <button className="dashboard-profile" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-haspopup="menu">
        <span className="dashboard-avatar">RK</span><span className="dashboard-profile-name">Rajat Kumar</span><ChevronDown size={16} />
      </button>
      <AnimatePresence>
        {open && <motion.div className="dashboard-profile-menu glass" role="menu" initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }}>
          <button role="menuitem" onClick={() => { setNotice('Profile settings are ready for your account connection.'); setOpen(false); }}><UserRound size={16} /> Profile</button>
          <button role="menuitem" onClick={() => { setNotice('Notifications are all caught up.'); setOpen(false); }}><Bell size={16} /> Notifications</button>
          <button role="menuitem" onClick={() => { setNotice('Settings will be available with your connected account.'); setOpen(false); }}><Settings size={16} /> Settings</button>
          <a role="menuitem" href="/"><LogOut size={16} /> Return to landing</a>
        </motion.div>}
      </AnimatePresence>
      <AnimatePresence>{notice && <motion.p className="dashboard-toast" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{notice}</motion.p>}</AnimatePresence>
    </div>
  );
}

function Topbar({ onMenu }) {
  return <header className="dashboard-topbar"><button className="dashboard-icon-button dashboard-menu-toggle" onClick={onMenu} aria-label="Open navigation"><Menu size={21} /></button><div className="dashboard-topbar-copy"><span className="dashboard-kicker">Mission 60</span><span>Build something meaningful today.</span></div><div className="dashboard-topbar-actions"><button className="dashboard-icon-button" aria-label="Notifications"><Bell size={19} /><i /></button><ProfileMenu /></div></header>;
}

function StatCards() {
  return <div className="dashboard-stats">{STATS.map(({ label, value, detail, icon: Icon, tone }, index) => <motion.article className="dashboard-stat card" key={label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + index * 0.06 }}><span className={`dashboard-stat-icon dashboard-stat-icon--${tone}`}><Icon size={20} /></span><div><p>{label}</p><strong>{value}</strong><small>{detail}</small></div></motion.article>)}</div>;
}

function ProgressSection({ challenge }) {
  const done = challenge.completedDays.length;
  const progress = Math.round((done / 60) * 100);
  return <section className="dashboard-panel dashboard-progress-panel card" id="overview"><div className="dashboard-panel-heading"><div><span className="dashboard-kicker">Your progress</span><h2>One day at a time.</h2></div><span className="dashboard-progress-caption">{done} / 60 days</span></div><div className="dashboard-progress-layout"><div className="dashboard-ring" style={{ '--progress': `${progress * 3.6}deg` }}><div><strong>{progress}%</strong><span>complete</span></div></div><div className="dashboard-tracker-wrap"><div className="dashboard-tracker-labels"><span>Day 1</span><span>Day 60</span></div><div className="dashboard-tracker" aria-label={`${done} out of 60 days completed`}>{Array.from({ length: 60 }, (_, index) => <motion.span key={index} className={index < done ? 'dashboard-day dashboard-day--complete' : index === done ? 'dashboard-day dashboard-day--current' : 'dashboard-day'} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: Math.min(index * 0.012, 0.6) }} />)}</div><div className="dashboard-progress-bar"><motion.span initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.9, ease: 'easeOut' }} /></div><div className="dashboard-progress-meta"><span><Check size={15} /> {done} completed</span><span>{60 - done} remaining</span></div></div></div></section>;
}

function MissionCard({ challenge, onStart }) {
  const completed = challenge.completedDays.includes(challenge.currentDay);
  return <section className="dashboard-panel dashboard-mission card" id="mission"><div className="dashboard-mission-glow" /><div className="dashboard-panel-heading"><div><span className="dashboard-kicker">Today’s mission · Day {challenge.currentDay}</span><h2>Build a polished settings panel</h2></div><span className="dashboard-difficulty"><Zap size={14} /> Intermediate</span></div><p className="dashboard-mission-copy">Create an account settings experience with accessible form states, clear feedback, and a responsive layout.</p><div className="dashboard-mission-meta"><span><Code2 size={16} /> React + CSS</span><span><BookOpen size={16} /> 60–75 min</span><span><Target size={16} /> UI systems</span></div><div className="dashboard-mission-actions"><button className="btn-primary dashboard-main-button" onClick={onStart}><Play size={17} fill="currentColor" /> Continue today’s challenge</button><button className={`dashboard-complete-button ${completed ? 'dashboard-complete-button--done' : ''}`} onClick={onStart}><Check size={17} /> {completed ? 'Mission complete' : 'Open challenge'}</button></div></section>;
}

function WeeklyActivity() {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return <section className="dashboard-panel dashboard-weekly card"><div className="dashboard-panel-heading"><div><span className="dashboard-kicker">Weekly activity</span><h2>Keep the graph green.</h2></div><span className="dashboard-legend"><i /><span>More activity</span></span></div><div className="dashboard-week-grid">{WEEK.map((level, index) => <motion.div className="dashboard-week-day" key={labels[index]} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }}><span className="dashboard-week-cells">{Array.from({ length: 5 }, (_, cell) => <i key={cell} className={`dashboard-heat dashboard-heat--${cell < level ? level : 0}`} />)}</span><small>{labels[index]}</small></motion.div>)}</div></section>;
}

function Projects() {
  return <section className="dashboard-panel" id="projects"><div className="dashboard-section-heading"><div><span className="dashboard-kicker">Recent projects</span><h2>Your proof of work</h2></div><button className="dashboard-text-button" onClick={() => scrollToSection('projects')}>View all <ExternalLink size={15} /></button></div><div className="dashboard-project-grid">{PROJECTS.map((project, index) => <motion.article className="dashboard-project card" key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} whileHover={{ y: -5 }}><div className={`dashboard-project-art dashboard-project-art--${project.tone}`}><Code2 size={25} /><button aria-label={`Project options for ${project.title}`}><MoreHorizontal size={18} /></button></div><div className="dashboard-project-copy"><div><h3>{project.title}</h3><span className={`dashboard-project-status dashboard-project-status--${project.tone}`}>{project.status}</span></div><p>{project.description}</p><div className="dashboard-tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><a href="https://github.com/" target="_blank" rel="noreferrer" className="dashboard-github-link"><GitBranch size={16} /> View on GitHub <ExternalLink size={13} /></a></div></motion.article>)}</div></section>;
}

function Achievements() {
  return <section className="dashboard-panel" id="achievements"><div className="dashboard-section-heading"><div><span className="dashboard-kicker">Achievements</span><h2>Momentum worth celebrating</h2></div><span className="dashboard-unlocked-count">3 of 6 unlocked</span></div><div className="dashboard-achievement-grid">{ACHIEVEMENTS.map(({ title, caption, icon: Icon, unlocked }, index) => <motion.article className={`dashboard-achievement card ${unlocked ? 'dashboard-achievement--unlocked' : 'dashboard-achievement--locked'}`} key={title} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}><span className="dashboard-achievement-icon">{unlocked ? <Icon size={21} /> : <Lock size={19} />}</span><div><h3>{title}</h3><p>{caption}</p></div>{unlocked && <Check className="dashboard-achievement-check" size={15} />}</motion.article>)}</div></section>;
}

function Leaderboard() {
  return <section className="dashboard-panel dashboard-leaderboard card" id="leaderboard"><div className="dashboard-panel-heading"><div><span className="dashboard-kicker">Leaderboard</span><h2>This week’s builders</h2></div><Trophy size={21} className="dashboard-heading-icon" /></div><ol>{LEADERS.map((leader) => <li key={leader.name}><span className={`dashboard-rank dashboard-rank--${leader.rank}`}>{leader.rank}</span><span className={`dashboard-leader-avatar dashboard-leader-avatar--${leader.tone}`}>{leader.initials}</span><strong>{leader.name}</strong><span className="dashboard-leader-streak"><Flame size={15} /> {leader.streak}</span></li>)}</ol><button className="dashboard-text-button" onClick={() => scrollToSection('leaderboard')}>See full leaderboard <ExternalLink size={15} /></button></section>;
}

function Timeline() {
  return <section className="dashboard-panel dashboard-timeline card" id="support"><div className="dashboard-panel-heading"><div><span className="dashboard-kicker">Recent activity</span><h2>Your latest wins</h2></div></div><div>{ACTIVITY.map(({ title, detail, icon: Icon, tone }) => <article className="dashboard-timeline-item" key={title}><span className={`dashboard-timeline-icon dashboard-timeline-icon--${tone}`}><Icon size={15} /></span><div><strong>{title}</strong><p>{detail}</p></div></article>)}</div></section>;
}

export default function Dashboard() {
  const [active, setActive] = useState('overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigateTo = useNavigate();
  const { challenge, startChallenge } = useChallenge();

  useEffect(() => {
    const listener = () => setMobileOpen(false);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  const navigate = (target) => { setActive(target); scrollToSection(target); };
  const openCurrentChallenge = () => {
    if (challenge.challengeCompleted) {
      navigateTo('/certificate');
      return;
    }
    startChallenge();
    navigateTo(`/challenge/day/${challenge.currentDay}`);
  };

  return <div className="dashboard-app"><Sidebar active={active} onNavigate={navigate} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} /><div className="dashboard-main"><Topbar onMenu={() => setMobileOpen(true)} /><main className="dashboard-content"><motion.section className="dashboard-welcome" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}><div><span className="dashboard-kicker">Tuesday, 18 June</span><h1>Welcome back, Rajat <span>✦</span></h1><p>You’re building a strong portfolio, one focused day at a time.</p></div><button className="btn-primary dashboard-main-button" onClick={openCurrentChallenge}>Continue today’s challenge <Play size={17} fill="currentColor" /></button></motion.section><StatCards /><div className="dashboard-primary-grid"><ProgressSection challenge={challenge} /><MissionCard challenge={challenge} onStart={openCurrentChallenge} /></div><WeeklyActivity /><Projects /><Achievements /><div className="dashboard-bottom-grid"><Leaderboard /><Timeline /></div></main></div></div>;
}
