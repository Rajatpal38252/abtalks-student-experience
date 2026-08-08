import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useChallenge } from '../context/ChallengeContext';
import { MISSIONS } from "../data/missions";
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
  { label: "Today's mission", icon: Target, target: 'mission' },
  { label: 'Projects', icon: FolderKanban, target: 'projects' },
  { label: 'Achievements', icon: Award, target: 'achievements' },
  { label: 'Leaderboard', icon: Trophy, target: 'leaderboard' },
  { label: 'Certificate', icon: Award, target: 'certificate' },
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

function Sidebar({ active, challenge, onNavigate, mobileOpen, onClose }) {
  return (
    <>
      <AnimatePresence>
        {mobileOpen && (
          <motion.button
            type="button"
            className="dashboard-scrim"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <aside className={`dashboard-sidebar ${mobileOpen ? 'dashboard-sidebar--open' : ''}`}>
        <div className="dashboard-sidebar-head">
          <Brand />
          <button type="button" className="dashboard-icon-button dashboard-sidebar-close" onClick={onClose} aria-label="Close navigation">
            <X size={20} />
          </button>
        </div>
        <nav className="dashboard-nav" aria-label="Dashboard navigation">
          {NAV_ITEMS.map(({ label, icon: Icon, target }) => (
            <button
              key={target}
              type="button"
              className={`dashboard-nav-item ${active === target ? 'dashboard-nav-item--active' : ''}`}
              onClick={() => { onNavigate(target); onClose(); }}
            >
              <Icon size={18} /><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="dashboard-sidebar-footer glass">
          <span className="dashboard-sidebar-footer-icon"><Sparkles size={17} /></span>
          <div>
            <strong>Day {challenge.currentDay} of 60</strong>
            <small>{challenge.completedDays.length} challenges completed</small>
          </div>
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
      <button type="button" className="dashboard-profile" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-haspopup="menu">
        <span className="dashboard-avatar">RK</span>
        <span className="dashboard-profile-name">Rajat Kumar</span>
        <ChevronDown size={16} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="dashboard-profile-menu glass" role="menu" initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.97 }}>
            <button type="button" role="menuitem" onClick={() => { setNotice('Profile settings are ready for your account connection.'); setOpen(false); }}><UserRound size={16} /> Profile</button>
            <button type="button" role="menuitem" onClick={() => { setNotice('Notifications are all caught up.'); setOpen(false); }}><Bell size={16} /> Notifications</button>
            <button type="button" role="menuitem" onClick={() => { setNotice('Settings will be available with your connected account.'); setOpen(false); }}><Settings size={16} /> Settings</button>
            <a role="menuitem" href="/"><LogOut size={16} /> Return to landing</a>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>{notice && <motion.p className="dashboard-toast" role="status" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{notice}</motion.p>}</AnimatePresence>
    </div>
  );
}

function Topbar({ onMenu }) {
  return (
    <header className="dashboard-topbar">
      <button type="button" className="dashboard-icon-button dashboard-menu-toggle" onClick={onMenu} aria-label="Open navigation"><Menu size={21} /></button>
      <div className="dashboard-topbar-copy"><span className="dashboard-kicker">Mission 60</span><span>Build something meaningful today.</span></div>
      <div className="dashboard-topbar-actions">
        <button type="button" className="dashboard-icon-button" aria-label="Notifications"><Bell size={19} /><i /></button>
        <ProfileMenu />
      </div>
    </header>
  );
}

function StatCards({ challenge }) {
  const stats = [
    { label: 'Current Streak', value: `${challenge.streak} Days`, detail: 'Keep your streak alive!', icon: Flame, tone: 'purple' },
    { label: 'Projects', value: challenge.projects.length, detail: 'Portfolio Projects', icon: FolderKanban, tone: 'blue' },
    { label: 'XP Earned', value: challenge.xp, detail: 'Experience Points', icon: Zap, tone: 'cyan' },
    { label: 'Completed Days', value: `${challenge.completedDays.length}/60`, detail: `${60 - challenge.completedDays.length} Remaining`, icon: BarChart3, tone: 'violet' },
  ];
  return (
    <div className="dashboard-stats">
      {stats.map(({ label, value, detail, icon: Icon, tone }, index) => (
        <motion.article key={label} className="dashboard-stat card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + index * 0.06 }} whileHover={{ y: -3 }}>
          <span className={`dashboard-stat-icon dashboard-stat-icon--${tone}`}><Icon size={20} /></span>
          <div><p>{label}</p><strong>{value}</strong><small>{detail}</small></div>
        </motion.article>
      ))}
    </div>
  );
}

function ProgressSection({ challenge }) {
  const done = challenge.completedDays.length;
  const progress = Math.round((done / 60) * 100);
  return (
    <section className="dashboard-panel dashboard-progress-panel card" id="overview">
      <div className="dashboard-panel-heading">
        <div><span className="dashboard-kicker">Your progress</span><h2>One day at a time.</h2></div>
        <span className="dashboard-progress-caption">{done} / 60 days</span>
      </div>
      <div className="dashboard-progress-layout">
        <div className="dashboard-ring" style={{ '--progress': `${progress * 3.6}deg` }} role="img" aria-label={`${progress}% complete`}>
          <div><strong>{progress}%</strong><span>complete</span></div>
        </div>
        <div className="dashboard-tracker-wrap">
          <div className="dashboard-tracker-labels"><span>Day 1</span><span>Day 60</span></div>
          <div className="dashboard-tracker" aria-label={`${done} out of 60 days completed`}>
            {Array.from({ length: 60 }, (_, index) => (
              <motion.span key={index} className={index < done ? 'dashboard-day dashboard-day--complete' : index === done ? 'dashboard-day dashboard-day--current' : 'dashboard-day'} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: Math.min(index * 0.012, 0.6) }} />
            ))}
          </div>
          <div className="dashboard-progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <motion.span initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.9, ease: 'easeOut' }} />
          </div>
          <div className="dashboard-progress-meta">
            <span><Check size={15} /> {done} completed</span>
            <span>{60 - done} remaining</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionCard({ challenge, onStart }) {
  const completed = challenge.completedDays.includes(challenge.currentDay);
  const mission = dayMission(challenge.currentDay);
  return (
    <section className="dashboard-panel dashboard-mission card" id="mission">
      <div className="dashboard-mission-glow" />
      <div className="dashboard-panel-heading">
        <div>
          <span className="dashboard-kicker">Today's Mission · Day {challenge.currentDay}</span>
          <h2>{mission.title}</h2>
        </div>
        <span className="dashboard-difficulty"><Zap size={14} />{mission.difficulty || 'Intermediate'}</span>
      </div>
      <p className="dashboard-mission-copy">{mission.description}</p>
      <div className="dashboard-mission-meta">
        <span><Code2 size={16} />{mission.focus}</span>
        <span><BookOpen size={16} />{mission.time}</span>
        <span><Target size={16} />Day {challenge.currentDay}</span>
      </div>
      <div className="dashboard-mission-actions">
        <button type="button" className="btn-primary dashboard-main-button" onClick={onStart}>
          <Play size={17} fill="currentColor" /> Continue Today's Challenge
        </button>
        <button type="button" className={`dashboard-complete-button ${completed ? 'dashboard-complete-button--done' : ''}`} onClick={onStart}>
          <Check size={17} />{completed ? 'Mission Complete' : 'Open Challenge'}
        </button>
      </div>
    </section>
  );
}

function dayMission(day) {
  return MISSIONS.find((mission) => mission.day === day) || {
    title: `Project Challenge ${day}`,
    description: "Complete today's development challenge.",
    focus: 'React',
    time: '60–90 mins',
    difficulty: 'Intermediate',
  };
}

function WeeklyActivity() {
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <section className="dashboard-panel dashboard-weekly card">
      <div className="dashboard-panel-heading">
        <div><span className="dashboard-kicker">Weekly activity</span><h2>Keep the graph green.</h2></div>
        <span className="dashboard-legend"><i /><span>More activity</span></span>
      </div>
      <div className="dashboard-week-grid">
        {WEEK.map((level, index) => (
          <motion.div className="dashboard-week-day" key={labels[index]} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }}>
            <span className="dashboard-week-cells">
              {Array.from({ length: 5 }, (_, cell) => (
                <i key={cell} className={`dashboard-heat dashboard-heat--${cell < level ? level : 0}`} />
              ))}
            </span>
            <small>{labels[index]}</small>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects({ projects, onStart }) {
  return (
    <section className="dashboard-panel" id="projects">
      <div className="dashboard-section-heading">
        <div><span className="dashboard-kicker">Recent projects</span><h2>Your proof of work</h2></div>
        <button type="button" className="dashboard-text-button" onClick={() => scrollToSection('projects')}>View all <ExternalLink size={15} /></button>
      </div>
      <div className="dashboard-project-grid">
        {projects.length === 0 ? (
          <motion.div className="dashboard-empty-state card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="dashboard-empty-icon" aria-hidden="true"><FolderKanban size={32} /></div>
            <h3>No projects yet</h3>
            <p>Start today's challenge and publish your first GitHub project. Your portfolio will automatically appear here.</p>
            <button type="button" className="btn-primary dashboard-main-button" onClick={onStart}><Play size={16} /> Start Building</button>
          </motion.div>
        ) : projects.map((project, index) => (
          <motion.article className="dashboard-project card" key={project.day} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} whileHover={{ y: -5 }}>
            <div className="dashboard-project-art dashboard-project-art--blue">
              <Code2 size={25} />
              <button type="button" aria-label={`Project options for ${project.title}`}><MoreHorizontal size={18} /></button>
            </div>
            <div className="dashboard-project-copy">
              <div>
                <h3>{project.title}</h3>
                <span className="dashboard-project-status dashboard-project-status--blue">Day {project.day}</span>
              </div>
              <p>{project.learned || project.description || 'No description provided'}</p>
              <div className="dashboard-tech-list">{project.skills && project.skills.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="dashboard-project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="dashboard-github-link"><GitBranch size={16} /> GitHub <ExternalLink size={13} /></a>
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="dashboard-github-link"><ExternalLink size={16} /> Live Demo</a>}
              </div>
              <div className="dashboard-project-meta">
                <span className="dashboard-project-xp">+{project.xpEarned ?? 50} XP</span>
                <span className="dashboard-project-date">{new Date(project.completedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Achievements({ challenge }) {
  const achievements = [
    { title: 'First Ship', caption: 'Publish your first project', icon: RocketIcon, unlocked: challenge.projects.length >= 1 },
    { title: 'Week Warrior', caption: 'Complete 7 daily missions', icon: Flame, unlocked: challenge.completedDays.length >= 7 },
    { title: 'Commit Craft', caption: 'Complete 15 projects', icon: GitBranch, unlocked: challenge.projects.length >= 15 },
    { title: 'Momentum Maker', caption: 'Maintain a 14 day streak', icon: Zap, unlocked: challenge.streak >= 14 },
    { title: 'Portfolio Ready', caption: 'Publish 10 projects', icon: Trophy, unlocked: challenge.projects.length >= 10 },
    { title: 'Mission Complete', caption: 'Finish all 60 days', icon: Award, unlocked: challenge.completedDays.length === 60 },
  ];
  const unlockedCount = achievements.filter((item) => item.unlocked).length;
  return (
    <section className="dashboard-panel" id="achievements">
      <div className="dashboard-section-heading">
        <div><span className="dashboard-kicker">Achievements</span><h2>Momentum worth celebrating</h2></div>
        <span className="dashboard-unlocked-count">{unlockedCount} of {achievements.length} unlocked</span>
      </div>
      <div className="dashboard-achievement-grid">
        {achievements.map(({ title, caption, icon: Icon, unlocked }, index) => (
          <motion.article key={title} className={`dashboard-achievement card ${unlocked ? 'dashboard-achievement--unlocked' : 'dashboard-achievement--locked'}`} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
            <span className="dashboard-achievement-icon">{unlocked ? <Icon size={21} /> : <Lock size={19} />}</span>
            <div><h3>{title}</h3><p>{caption}</p></div>
            {unlocked && <Check className="dashboard-achievement-check" size={15} />}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Leaderboard({ challenge }) {
  const leaders = [
    { rank: 1, name: 'You', initials: 'RK', streak: challenge.streak, tone: 'purple' },
    { rank: 2, name: 'Builder #102', initials: 'B1', streak: Math.max(challenge.streak + 4, 18), tone: 'blue' },
    { rank: 3, name: 'Builder #241', initials: 'B2', streak: Math.max(challenge.streak + 2, 15), tone: 'cyan' },
  ];
  return (
    <section className="dashboard-panel dashboard-leaderboard card" id="leaderboard">
      <div className="dashboard-panel-heading">
        <div><span className="dashboard-kicker">Leaderboard</span><h2>Community builders</h2></div>
        <Trophy size={21} className="dashboard-heading-icon" />
      </div>
      <ol>
        {leaders.map((leader) => (
          <li key={leader.name}>
            <span className={`dashboard-rank dashboard-rank--${leader.rank}`}>{leader.rank}</span>
            <span className={`dashboard-leader-avatar dashboard-leader-avatar--${leader.tone}`}>{leader.initials}</span>
            <strong>{leader.name}</strong>
            <span className="dashboard-leader-streak"><Flame size={15} />{leader.streak}</span>
          </li>
        ))}
      </ol>
      <button type="button" className="dashboard-text-button">Global leaderboard coming soon</button>
    </section>
  );
}

function Timeline({ challenge }) {
  const activities = [
    { title: `Completed ${challenge.completedDays.length} challenge${challenge.completedDays.length === 1 ? '' : 's'}`, detail: `${challenge.completedDays.length}/60 days finished`, icon: Check, tone: 'purple' },
    { title: `${challenge.projects.length} portfolio project${challenge.projects.length === 1 ? '' : 's'} submitted`, detail: 'Projects synced successfully', icon: GitBranch, tone: 'cyan' },
    { title: `${challenge.xp} XP earned`, detail: 'Keep completing challenges to level up', icon: Award, tone: 'violet' },
  ];
  return (
    <section className="dashboard-panel dashboard-timeline card" id="support">
      <div className="dashboard-panel-heading">
        <div><span className="dashboard-kicker">Recent activity</span><h2>Your latest wins</h2></div>
      </div>
      <div>
        {activities.map(({ title, detail, icon: Icon, tone }) => (
          <article className="dashboard-timeline-item" key={title}>
            <span className={`dashboard-timeline-icon dashboard-timeline-icon--${tone}`}><Icon size={15} /></span>
            <div><strong>{title}</strong><p>{detail}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Dashboard() {
  const [active, setActive] = useState('overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lockedMessage, setLockedMessage] = useState('');
  const navigateTo = useNavigate();
  const { challenge, startChallenge } = useChallenge();
  const { projects } = challenge;
  const today = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

  useEffect(() => {
    const listener = () => setMobileOpen(false);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  const navigate = (target) => {
    if (target === 'certificate') {
      if (challenge.challengeCompleted) {
        navigateTo('/certificate');
      } else {
        setLockedMessage('Complete all 60 challenges to unlock your certificate.');
        setTimeout(() => { setLockedMessage(''); }, 2500);
      }
      return;
    }
    setActive(target);
    scrollToSection(target);
  };

  const openCurrentChallenge = () => {
    if (challenge.challengeCompleted) {
      navigateTo('/certificate');
      return;
    }
    startChallenge();
    navigateTo(`/challenge/day/${challenge.currentDay}`);
  };

  return (
    <div className="dashboard-app">
      <Sidebar active={active} challenge={challenge} onNavigate={navigate} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="dashboard-main">
        <Topbar onMenu={() => setMobileOpen(true)} />
        {lockedMessage && (
          <div className="dashboard-locked-toast" role="status" aria-live="polite">{lockedMessage}</div>
        )}
        <main className="dashboard-content">
          <motion.section className="dashboard-welcome" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div>
              <span className="dashboard-kicker">{today}</span>
              <h1>Welcome back, Rajat <span>✦</span></h1>
              <p>You're building a strong portfolio, one focused day at a time.</p>
            </div>
            <button type="button" className="btn-primary dashboard-main-button" onClick={openCurrentChallenge}>
              Continue today's challenge <Play size={17} fill="currentColor" />
            </button>
          </motion.section>
          <StatCards challenge={challenge} />
          <div className="dashboard-primary-grid">
            <ProgressSection challenge={challenge} />
            <MissionCard challenge={challenge} onStart={openCurrentChallenge} />
          </div>
          <WeeklyActivity />
          <Projects projects={projects} onStart={openCurrentChallenge} />
          <Achievements challenge={challenge} />
          <div className="dashboard-bottom-grid">
            <Leaderboard challenge={challenge} />
            <Timeline challenge={challenge} />
          </div>
        </main>
      </div>
    </div>
  );
}
