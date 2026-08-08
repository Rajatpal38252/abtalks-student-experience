import { motion } from 'framer-motion';

const BADGES = ['Daily Projects', 'GitHub Growth', 'Recruiter Ready'];

export default function CTA() {
  return (
    <motion.section
      className="cta"
      id="cta"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
    >
      <style>{`
        .cta {
          position: relative;
          padding: 5.5rem 1.25rem 6.5rem;
          background: #000000;
          overflow: hidden;
        }

        .cta::before,
        .cta::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }

        .cta::before {
          width: min(520px, 80vw);
          height: min(520px, 80vw);
          top: -10%;
          left: -14%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.32) 0%, transparent 72%);
        }

        .cta::after {
          width: min(500px, 75vw);
          height: min(500px, 75vw);
          bottom: -12%;
          right: -10%;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.24) 0%, transparent 72%);
        }

        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          gap: 2rem;
        }

        .cta-card {
          position: relative;
          overflow: hidden;
          padding: 3rem 2.25rem;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.22);
        }

        .cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          margin: 1px;
          border-radius: 32px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.02));
          pointer-events: none;
        }

        .cta-copy {
          display: grid;
          gap: 1.25rem;
          max-width: 760px;
        }

        .cta-title {
          margin: 0;
          font-size: clamp(2.5rem, 4vw, 3.75rem);
          font-weight: 800;
          line-height: 1.04;
          color: #ffffff;
        }

        .cta-title span {
          background: linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-description {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.72);
          max-width: 720px;
        }

        .cta-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.875rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.75rem 1.1rem;
          border-radius: 999px;
          font-size: 0.92rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .cta-actions {
          display: flex;
          justify-content: flex-start;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 1.7rem;
          border-radius: 16px;
          font-size: 0.98rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #7c3aed 0%, #22d3ee 100%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 16px 38px rgba(124, 58, 237, 0.28);
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
          animation: cta-pulse 8s ease-in-out infinite;
        }

        .cta-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 50px rgba(124, 58, 237, 0.35);
          filter: brightness(1.05);
        }

        @keyframes cta-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.005); }
        }

        @media (max-width: 880px) {
          .cta-card {
            padding: 2.5rem 1.5rem;
          }

          .cta-title {
            font-size: clamp(2.2rem, 6vw, 3rem);
          }

          .cta-button {
            width: 100%;
          }
        }
      `}</style>

      <div className="cta-inner">
        <div className="cta-card">
          <div className="cta-copy">
            <h2 className="cta-title">
              Ready to Build Your <span>Proof of Work</span>?
            </h2>
            <p className="cta-description">
              Join Mission 60 and transform 60 days of consistency into a recruiter-ready portfolio.
            </p>
            <ul className="cta-badges">
              {BADGES.map((badge) => (
                <li key={badge} className="cta-badge">
                  ✓ {badge}
                </li>
              ))}
            </ul>
          </div>
          <div className="cta-actions">
            <motion.a
              className="cta-button"
              href="#start"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              Start Mission 60 →
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
