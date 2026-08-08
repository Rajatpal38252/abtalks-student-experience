import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'What is Mission 60?',
    answer: 'Mission 60 is a premium 60-day challenge designed for students to build consistency, ship polished projects, and grow GitHub momentum with a glassmorphic learning experience.',
  },
  {
    question: 'Is it free?',
    answer: 'The challenge is crafted like a premium learning journey. Check the published experience for any current access or pricing announcements.',
  },
  {
    question: 'How much time does it take daily?',
    answer: 'Most students spend 45–75 minutes per day. The focus is on steady progress, not burnout, so tasks are structured to fit busy schedules.',
  },
  {
    question: 'Do I need prior coding experience?',
    answer: 'No prior experience is required. Mission 60 supports beginners with actionable steps while still delivering meaningful outcomes for learners at every level.',
  },
  {
    question: 'Can I pause my challenge?',
    answer: 'Yes. The system is built around momentum, but you can pause and return later while keeping your progress visible and easy to pick up again.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <style>{`
        .faq {
          position: relative;
          padding: 5rem 1.25rem 6rem;
          background: #000000;
          overflow: hidden;
        }

        .faq-inner {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-badge {
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

        .faq-title {
          margin-top: 1rem;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          line-height: 1.12;
          color: #ffffff;
        }

        .faq-title span {
          background: linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .faq-list {
          display: grid;
          gap: 1rem;
        }

        .faq-item {
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.22);
        }

        .faq-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.45rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .faq-button:hover,
        .faq-button:focus-visible {
          background: rgba(255, 255, 255, 0.04);
        }

        .faq-question {
          max-width: 92%;
        }

        .faq-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.08);
          color: #22d3ee;
          transition: transform 0.3s ease;
        }

        .faq-item-open .faq-icon {
          transform: rotate(180deg);
        }

        .faq-panel {
          padding: 0 1.5rem 1.5rem;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.72);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
        }
      `}</style>

      <div className="faq-inner">
        <div className="faq-header">
          <span className="faq-badge">? FAQ</span>
          <h2 className="faq-title">
            Everything You Need
            <span> To Know</span>
          </h2>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <article
                key={item.question}
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-icon">
                    <ChevronDown size={20} strokeWidth={3} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      id={`faq-panel-${index}`}
                      className="faq-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
