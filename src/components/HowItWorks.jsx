import { motion } from 'framer-motion';
import { Rocket, Code2, Sparkles } from 'lucide-react';

const STEPS = [
  {
    title: 'Learn the path',
    description: 'Follow a daily roadmap built for students who want to ship projects, build confidence, and stay consistent.',
    icon: Rocket,
    accent: '#7c3aed',
  },
  {
    title: 'Build real code',
    description: 'Write portfolio-ready projects with practical guidance, paired tasks, and incremental milestones.',
    icon: Code2,
    accent: '#22d3ee',
  },
  {
    title: 'Ship with polish',
    description: 'Refine your work, document wins, and show the kind of momentum recruiters are looking for.',
    icon: Sparkles,
    accent: '#a78bfa',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <style>{`
        .how-it-works {
          position: relative;
          padding: 5rem 1.25rem 5.5rem;
          background: #000000;
          overflow: hidden;
        }

        .how-it-works::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(139, 92, 246, 0.14), transparent 28%),
                      radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.12), transparent 28%);
          pointer-events: none;
        }

        .how-it-works-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .how-it-works-header {
          max-width: 620px;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .how-it-works-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .how-it-works-title {
          margin-top: 1rem;
          font-size: clamp(2rem, 4vw, 2.95rem);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .how-it-works-subtitle {
          margin-top: 1rem;
          font-size: clamp(1rem, 2.2vw, 1.125rem);
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.65);
        }

        .how-it-works-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .how-it-works-card {
          position: relative;
          overflow: hidden;
          min-height: 18rem;
          padding: 2rem;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
        }

        .how-it-works-card::before {
          content: '';
          position: absolute;
          inset: 0;
          margin: 1px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02));
          pointer-events: none;
        }

        .how-it-works-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 16px;
          margin-bottom: 1.5rem;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .how-it-works-step {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.85rem;
        }

        .how-it-works-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.9rem;
          line-height: 1.35;
        }

        .how-it-works-card-copy {
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.64);
        }

        @media (max-width: 960px) {
          .how-it-works-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="how-it-works-inner">
        <div className="how-it-works-header">
          <span className="how-it-works-badge">How It Works</span>
          <h2 className="how-it-works-title">Build the habit. Ship the work. Own the growth.</h2>
          <p className="how-it-works-subtitle">
            Mission 60 keeps every day focused, practical, and easy to follow so you can move from student to recruiter-ready faster.
          </p>
        </div>

        <div className="how-it-works-grid">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                className="how-it-works-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
              >
                <span className="how-it-works-icon" style={{ color: step.accent }}>
                  <Icon size={24} strokeWidth={1.8} />
                </span>
                <span className="how-it-works-step">Step {index + 1}</span>
                <h3 className="how-it-works-card-title">{step.title}</h3>
                <p className="how-it-works-card-copy">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
