import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const MILESTONES = [
  {
    day: 1,
    variant: 'gray',
    items: ['Zero Projects', 'No Portfolio', 'Low Confidence'],
    floatDelay: 0,
  },
  {
    day: 30,
    variant: 'purple',
    items: ['30 Projects', 'GitHub Active', 'LinkedIn Growing'],
    floatDelay: 0.4,
  },
  {
    day: 60,
    variant: 'cyan',
    items: ['Recruiter Ready', 'Strong Portfolio', 'Interview Confidence'],
    floatDelay: 0.8,
  },
];

function JourneyStyles() {
  return (
    <style>{`
      .journey {
        position: relative;
        padding: 5rem 1.25rem 6rem;
        background: #000000;
        overflow: hidden;
        isolation: isolate;
      }

      .journey-glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        pointer-events: none;
        z-index: 0;
      }

      .journey-glow--purple {
        width: min(400px, 80vw);
        height: min(400px, 80vw);
        top: 10%;
        left: -10%;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
      }

      .journey-glow--cyan {
        width: min(380px, 75vw);
        height: min(380px, 75vw);
        bottom: 5%;
        right: -8%;
        background: radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%);
      }

      .journey-container {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
      }

      .journey-header {
        text-align: center;
        max-width: 640px;
        margin: 0 auto 3.5rem;
      }

      .journey-theme {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.45rem 1rem;
        margin-bottom: 1.25rem;
        border-radius: 999px;
        font-size: 0.8125rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: #c4b5fd;
        background: rgba(139, 92, 246, 0.1);
        border: 1px solid rgba(139, 92, 246, 0.3);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }

      .journey-theme-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #a78bfa;
        box-shadow: 0 0 8px #a78bfa;
      }

      .journey-title {
        font-size: clamp(1.75rem, 4.5vw, 2.75rem);
        font-weight: 700;
        line-height: 1.15;
        letter-spacing: -0.03em;
        color: #ffffff;
        margin-bottom: 1rem;
      }

      .journey-title-accent {
        background: linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .journey-subtitle {
        font-size: clamp(1rem, 2.5vw, 1.125rem);
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.58);
      }

      .journey-roadmap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
      }

      .journey-roadmap-step {
        display: contents;
      }

      .journey-connector {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 3rem;
        color: rgba(167, 139, 250, 0.6);
      }

      .journey-connector-line {
        width: 2px;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(139, 92, 246, 0.5) 0%,
          rgba(34, 211, 238, 0.5) 100%
        );
        box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
        border-radius: 1px;
      }

      .journey-connector-icon {
        flex-shrink: 0;
        margin-top: -4px;
        filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.5));
      }

      .journey-card {
        position: relative;
        width: 100%;
        max-width: 300px;
        padding: 1.5rem 1.625rem;
        border-radius: 18px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .journey-card::before {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: 19px;
        padding: 1px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        transition: background 0.25s ease;
      }

      .journey-card:hover {
        transform: translateY(-6px);
      }

      .journey-card--gray {
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
      }

      .journey-card--gray:hover {
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      }

      .journey-card--gray::before {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04));
      }

      .journey-card--purple {
        border: 1px solid rgba(139, 92, 246, 0.35);
        box-shadow:
          0 4px 24px rgba(0, 0, 0, 0.3),
          0 0 40px rgba(139, 92, 246, 0.15);
      }

      .journey-card--purple:hover {
        box-shadow:
          0 12px 40px rgba(0, 0, 0, 0.35),
          0 0 56px rgba(139, 92, 246, 0.3);
      }

      .journey-card--purple::before {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(167, 139, 250, 0.2));
      }

      .journey-card--cyan {
        border: 1px solid rgba(34, 211, 238, 0.35);
        box-shadow:
          0 4px 24px rgba(0, 0, 0, 0.3),
          0 0 40px rgba(34, 211, 238, 0.12);
      }

      .journey-card--cyan:hover {
        box-shadow:
          0 12px 40px rgba(0, 0, 0, 0.35),
          0 0 56px rgba(34, 211, 238, 0.28);
      }

      .journey-card--cyan::before {
        background: linear-gradient(135deg, rgba(34, 211, 238, 0.5), rgba(139, 92, 246, 0.2));
      }

      .journey-card-day {
        display: inline-block;
        margin-bottom: 1rem;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.45);
      }

      .journey-card--purple .journey-card-day {
        color: #c4b5fd;
      }

      .journey-card--cyan .journey-card-day {
        color: #22d3ee;
      }

      .journey-card-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
      }

      .journey-card-item {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        font-size: 0.9375rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.78);
      }

      .journey-card-item::before {
        content: '';
        flex-shrink: 0;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
      }

      .journey-card--purple .journey-card-item::before {
        background: #a78bfa;
        box-shadow: 0 0 8px rgba(167, 139, 250, 0.5);
      }

      .journey-card--cyan .journey-card-item::before {
        background: #22d3ee;
        box-shadow: 0 0 8px rgba(34, 211, 238, 0.5);
      }

      .journey-quote {
        margin-top: 4rem;
        text-align: center;
        padding: 2rem 1.5rem;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }

      .journey-quote-text {
        font-size: clamp(1.0625rem, 2.5vw, 1.25rem);
        font-weight: 500;
        line-height: 1.65;
        font-style: italic;
        color: rgba(255, 255, 255, 0.55);
      }

      .journey-quote-text em {
        font-style: normal;
        background: linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 600;
      }

      @media (min-width: 768px) {
        .journey {
          padding: 6rem 2rem 7rem;
        }

        .journey-header {
          margin-bottom: 4rem;
        }

        .journey-roadmap {
          flex-direction: row;
          align-items: stretch;
          justify-content: center;
          gap: 0;
        }

        .journey-connector {
          flex-direction: row;
          width: 4rem;
          height: auto;
          align-self: center;
          flex-shrink: 0;
        }

        .journey-connector-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(139, 92, 246, 0.5) 0%,
            rgba(34, 211, 238, 0.5) 100%
          );
        }

        .journey-connector-icon {
          transform: rotate(-90deg);
          margin-top: 0;
          margin-left: -4px;
        }

        .journey-card {
          flex: 1;
          max-width: 280px;
        }

        .journey-quote {
          margin-top: 5rem;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media (min-width: 1024px) {
        .journey-connector {
          width: 5rem;
        }

        .journey-card {
          max-width: 320px;
        }
      }
    `}</style>
  );
}

function TimelineConnector() {
  return (
    <div className="journey-connector" aria-hidden="true">
      <div className="journey-connector-line" />
      <ChevronDown size={20} strokeWidth={2.5} className="journey-connector-icon" />
    </div>
  );
}

function MilestoneCard({ day, variant, items, floatDelay }) {
  return (
    <motion.article
      className={`journey-card journey-card--${variant}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: floatDelay * 0.2 },
        y: {
          duration: 4.5 + floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: floatDelay,
        },
      }}
    >
      <span className="journey-card-day">Day {day}</span>
      <ul className="journey-card-list">
        {items.map((item) => (
          <li key={item} className="journey-card-item">
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="journey">
      <JourneyStyles />

      <div className="journey-glow journey-glow--purple" aria-hidden="true" />
      <div className="journey-glow journey-glow--cyan" aria-hidden="true" />

      <div className="journey-container">
        <header className="journey-header">
          <div className="journey-theme">
            <span className="journey-theme-dot" aria-hidden="true" />
            Your Future in 60 Days
          </div>
          <h2 className="journey-title">
            See Where <span className="journey-title-accent">Consistency</span> Takes You.
          </h2>
          <p className="journey-subtitle">
            Small actions every day become undeniable proof of your skills.
          </p>
        </header>

        <div className="journey-roadmap">
          {MILESTONES.map((milestone, index) => (
            <div key={milestone.day} className="journey-roadmap-step">
              <MilestoneCard {...milestone} />
              {index < MILESTONES.length - 1 && <TimelineConnector />}
            </div>
          ))}
        </div>

        <blockquote className="journey-quote">
          <p className="journey-quote-text">
            Your future isn&apos;t built in one day.
            <br />
            It&apos;s built <em>every day</em>.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
