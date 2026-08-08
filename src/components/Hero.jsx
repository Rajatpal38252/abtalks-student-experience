import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, LayoutDashboard } from "lucide-react";

const HEATMAP_COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

function generateHeatmap() {
  const weeks = 52;
  const days = 7;
  const grid = [];

  for (let w = 0; w < weeks; w++) {
    const column = [];
    for (let d = 0; d < days; d++) {
      const seed = Math.sin(w * 12.9898 + d * 78.233) * 43758.5453;
      const rand = seed - Math.floor(seed);
      let level = 0;
      if (rand > 0.35) level = 1;
      if (rand > 0.55) level = 2;
      if (rand > 0.72) level = 3;
      if (rand > 0.88) level = 4;
      column.push(level);
    }
    grid.push(column);
  }

  return grid;
}

function HeatmapPreview() {
  const heatmap = useMemo(() => generateHeatmap(), []);

  return (
    <div className="hero-heatmap">
      <div className="hero-heatmap-header">
        <GitBranch size={18} strokeWidth={2} />
        <span>Contribution Activity</span>
      </div>
      <div className="hero-heatmap-grid" aria-hidden="true">
        {heatmap.map((column, weekIndex) => (
          <div key={weekIndex} className="hero-heatmap-column">
            {column.map((level, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className="hero-heatmap-cell"
                style={{ backgroundColor: HEATMAP_COLORS[level] }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="hero-heatmap-footer">
        <span className="hero-heatmap-stat">
          <span className="hero-heatmap-stat-prefix">Future GitHub</span>
          <strong>847</strong> Contributions
        </span>
        <span className="hero-heatmap-stat">
          <strong>60</strong> day streak
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const container = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, when: "beforeChildren" } },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.58, ease: "easeOut" } },
  };

  return (
    <section className="hero" id="home">
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          padding: 6rem 1.25rem 4rem;
          background: #000000;
          overflow: hidden;
          isolation: isolate;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-glow--purple {
          width: min(520px, 90vw);
          height: min(520px, 90vw);
          top: -12%;
          left: -18%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, transparent 70%);
        }

        .hero-glow--cyan {
          width: min(480px, 85vw);
          height: min(480px, 85vw);
          bottom: -15%;
          right: -12%;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, transparent 70%);
        }

        .hero-glow--center {
          width: min(360px, 70vw);
          height: min(360px, 70vw);
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%);
        }

        .hero-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 640px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          width: fit-content;
          padding: 0.45rem 1rem;
          border-radius: 999px;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 0 24px rgba(139, 92, 246, 0.2);
        }

        .hero-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 8px #a78bfa;
          animation: hero-pulse 2s ease-in-out infinite;
        }

        @keyframes hero-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        .hero-title {
          font-size: clamp(2rem, 5.5vw, 3.25rem);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .hero-title-accent {
          background: linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-tagline {
          font-size: clamp(0.9375rem, 2vw, 1.0625rem);
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(34, 211, 238, 0.85);
          margin-top: -0.5rem;
        }

        .hero-description {
          font-size: clamp(1rem, 2.5vw, 1.125rem);
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.62);
          max-width: 540px;
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          border-radius: 12px;
          font-size: 0.9375rem;
          font-weight: 600;
          border: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .hero-btn:active {
          transform: scale(0.98);
        }

        .hero-btn--primary {
          color: #ffffff;
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #0891b2 100%);
          box-shadow: 0 4px 24px rgba(124, 58, 237, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08) inset;
        }

        .hero-btn--primary:hover {
          box-shadow: 0 6px 32px rgba(124, 58, 237, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.12) inset;
          transform: translateY(-1px);
        }

        .hero-btn--secondary {
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .hero-btn--secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(34, 211, 238, 0.35);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.15);
          transform: translateY(-1px);
        }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .hero-stat-card {
          flex: 1 1 calc(33.333% - 0.5rem);
          min-width: 110px;
          padding: 1rem 1.125rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.03) inset;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-stat-card:hover {
          border-color: rgba(139, 92, 246, 0.25);
          box-shadow:
            0 4px 20px rgba(139, 92, 246, 0.12),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
        }

        .hero-stat-value {
          display: block;
          font-size: 1.375rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .hero-stat-label {
          display: block;
          margin-top: 0.2rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.45);
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .hero-visual-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          padding: 1.5rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset,
            -20px -20px 60px rgba(139, 92, 246, 0.08),
            20px 20px 60px rgba(34, 211, 238, 0.06);
        }

        .hero-visual-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 21px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(34, 211, 238, 0.2), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .hero-heatmap-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
        }

        .hero-heatmap-grid {
          display: flex;
          gap: 3px;
          overflow: hidden;
          border-radius: 6px;
        }

        .hero-heatmap-column {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .hero-heatmap-cell {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .hero-heatmap-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 1.125rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hero-heatmap-stat {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .hero-heatmap-stat strong {
          color: #22d3ee;
          font-weight: 700;
        }

        .hero-heatmap-stat-prefix {
          display: block;
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(167, 139, 250, 0.7);
          margin-bottom: 0.15rem;
        }

        .hero-float-badge {
          position: absolute;
          top: -12px;
          right: -8px;
          padding: 0.5rem 0.875rem;
          border-radius: 10px;
          font-size: 0.6875rem;
          font-weight: 600;
          color: #22d3ee;
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(34, 211, 238, 0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 16px rgba(34, 211, 238, 0.2);
          white-space: nowrap;
        }

        @media (min-width: 480px) {
          .hero-actions {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .hero-btn {
            flex: 0 0 auto;
          }
        }

        @media (min-width: 768px) {
          .hero {
            padding: 7rem 2rem 5rem;
          }

          .hero-container {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 4rem;
          }

          .hero-content {
            flex: 1;
          }

          .hero-visual {
            flex: 0 0 auto;
            width: auto;
          }

          .hero-visual-card {
            max-width: 440px;
          }
        }

        @media (min-width: 1024px) {
          .hero-heatmap-cell {
            width: 11px;
            height: 11px;
          }
        }
      `}</style>

      <div className="hero-glow hero-glow--purple" aria-hidden="true" />
      <div className="hero-glow hero-glow--cyan" aria-hidden="true" />
      <div className="hero-glow hero-glow--center" aria-hidden="true" />

      <div className="hero-container">
        <motion.div className="hero-content" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.div className="hero-badge" variants={item} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span className="hero-badge-dot" aria-hidden="true" />
            60-Day Coding Challenge
          </motion.div>

          <motion.h1 className="hero-title heading-1" variants={item}>
            From <span className="hero-title-accent">Zero Commits</span> to Recruiter Ready.
          </motion.h1>

          <motion.p className="hero-tagline muted" variants={item}>
            One Day. One Project. One Better Developer.
          </motion.p>

          <motion.p className="hero-description lead" variants={item}>
            Build one project every day. Share your progress publicly. Transform 60
            days of consistency into a GitHub profile, portfolio, and proof of work
            that recruiters instantly recognize.
          </motion.p>

          <motion.div className="hero-actions" variants={item} style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <motion.a href="#start" className="hero-btn btn-primary hero-btn--primary" whileHover={{ scale: 1.02 }} transition={{ duration: 0.18 }}>
              Start Challenge
              <ArrowRight size={18} strokeWidth={2.5} />
            </motion.a>
            <motion.a href="#journey" className="hero-btn hero-btn--secondary" whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
              <LayoutDashboard size={18} strokeWidth={2} />
              View Dashboard
            </motion.a>
          </motion.div>

          <motion.div className="hero-stats" variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 12 }}>
            <motion.div className="hero-stat-card card" variants={item} style={{ padding: '1rem 1.125rem', minWidth: 110 }}>
              <span className="hero-stat-value">60+</span>
              <span className="hero-stat-label">Projects Built</span>
            </motion.div>
            <motion.div className="hero-stat-card card" variants={item} style={{ padding: '1rem 1.125rem', minWidth: 110 }}>
              <span className="hero-stat-value">365+</span>
              <span className="hero-stat-label">GitHub Contributions</span>
            </motion.div>
            <motion.div className="hero-stat-card card" variants={item} style={{ padding: '1rem 1.125rem', minWidth: 110 }}>
              <span className="hero-stat-value">Recruiter</span>
              <span className="hero-stat-label">Ready</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <motion.div
            className="hero-visual-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <span className="hero-float-badge">🏆 Top 9% Consistency</span>
            <HeatmapPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
