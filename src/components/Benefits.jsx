import { motion } from 'framer-motion';

const BENEFITS = [
  {
    title: 'Craft a standout portfolio',
    description: 'Ship portfolio quality projects while maintaining daily consistency and real outcomes.',
  },
  {
    title: 'Earn recruiter trust',
    description: 'Show repeatable growth with documented contributions, polished demos, and strong storytelling.',
  },
  {
    title: 'Build daily confidence',
    description: 'Stay in the flow with manageable tasks, meaningful feedback, and progress that feels real.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <style>{`
        .benefits {
          position: relative;
          padding: 5rem 1.25rem 6rem;
          background: #000000;
          overflow: hidden;
        }

        .benefits-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
        }

        .benefits-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .benefits-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.28);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .benefits-title {
          margin-top: 1rem;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          line-height: 1.15;
          color: #ffffff;
        }

        .benefits-copy {
          margin-top: 1rem;
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.62);
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .benefits-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .benefits-card {
          position: relative;
          min-height: 18rem;
          padding: 2rem;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 22px 48px rgba(0, 0, 0, 0.22);
        }

        .benefits-card::before {
          content: '';
          position: absolute;
          inset: 0;
          margin: 1px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02));
          pointer-events: none;
        }

        .benefits-card-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 14px;
          margin-bottom: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(34, 211, 238, 0.8));
        }

        .benefits-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.9rem;
        }

        .benefits-card-description {
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.68);
        }

        @media (max-width: 980px) {
          .benefits-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="benefits-inner">
        <div className="benefits-header">
          <span className="benefits-badge">Benefits</span>
          <h2 className="benefits-title">Your daily work, sharpened for recruiters.</h2>
          <p className="benefits-copy">
            Every benefit is designed to help you stay consistent, make progress visible, and feel confident when you show your work.
          </p>
        </div>

        <div className="benefits-list">
          {BENEFITS.map((item, index) => (
            <motion.article
              key={item.title}
              className="benefits-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
            >
              <div className="benefits-card-number">{index + 1}</div>
              <h3 className="benefits-card-title">{item.title}</h3>
              <p className="benefits-card-description">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
