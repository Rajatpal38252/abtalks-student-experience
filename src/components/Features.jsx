import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Terminal, Zap } from 'lucide-react';

const FEATURES = [
  {
    title: 'Daily momentum flows',
    description: 'Structured 60-day rhythm with small wins, quick deliverables, and no guesswork.',
    icon: Zap,
    accent: '#22d3ee',
  },
  {
    title: 'Project-first curriculum',
    description: 'Build real apps while learning serviceable design, deployment, and Git skills.',
    icon: Terminal,
    accent: '#7c3aed',
  },
  {
    title: 'Recruiter-focused outcomes',
    description: 'Showcase growth with GitHub contributions, polished demos, and a clear learning story.',
    icon: Layers,
    accent: '#a78bfa',
  },
  {
    title: 'Community accountability',
    description: 'Stay on track with support, daily check-ins, and a challenge-ready cohort vibe.',
    icon: ShieldCheck,
    accent: '#0891b2',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <style>{`
        .features {
          position: relative;
          padding: 5rem 1.25rem 5.5rem;
          background: #000000;
          overflow: hidden;
        }

        .features-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .features-card {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
          padding: 2rem;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.24);
        }

        .features-card::before {
          content: '';
          position: absolute;
          inset: 0;
          margin: 1px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02));
          pointer-events: none;
        }

        .features-card-inner {
          position: relative;
          z-index: 1;
        }

        .features-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          color: var(--accent);
        }

        .features-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
        }

        .features-copy {
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.68);
        }

        @media (max-width: 860px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="features-inner">
        <div className="features-grid">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="features-card"
                style={{ '--accent': feature.accent }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.14 }}
                whileHover={{ y: -6 }}
              >
                <div className="features-card-inner">
                  <span className="features-icon">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="features-title">{feature.title}</h3>
                  <p className="features-copy">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
