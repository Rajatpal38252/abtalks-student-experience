import { motion } from 'framer-motion';
import { ChevronDown, X, Check, Zap, Rocket, Award, DoorOpen } from 'lucide-react';

const TRADITIONAL_STEPS = [
  { icon: <X size={16} />, label: 'Day 1' },
  { icon: <Check size={16} />, label: 'Day 7' },
  { icon: <X size={16} />, label: 'Miss One Day' },
  { icon: <X size={16} />, label: 'Lose Streak' },
  { icon: <X size={16} />, label: 'Lose Motivation' },
  { icon: <DoorOpen size={16} />, label: 'Quit' },
];

const RECOVERY_STEPS = [
  { icon: <Check size={16} />, label: 'Day 1' },
  { icon: <Check size={16} />, label: 'Day 7' },
  { icon: <Zap size={16} />, label: 'Miss One Day' },
  { icon: <Rocket size={16} />, label: 'Recover Momentum' },
  { icon: <Rocket size={16} />, label: 'Continue Building' },
  { icon: <Award size={16} />, label: 'Complete 60 Days' },
];

function MomentumRecoveryStyles() {
  return (
    <style>{`
      .momentum {
        position: relative;
        padding: 5rem 1.25rem 6rem;
        background: #000000;
        overflow: hidden;
        isolation: isolate;
      }

      .momentum-glow {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        pointer-events: none;
        z-index: 0;
      }

      .momentum-glow--red {
        width: min(360px, 75vw);
        height: min(360px, 75vw);
        top: 20%;
        left: -12%;
        background: radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, transparent 70%);
      }

      .momentum-glow--purple {
        width: min(400px, 80vw);
        height: min(400px, 80vw);
        top: 15%;
        right: -10%;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, transparent 70%);
      }

      .momentum-glow--cyan {
        width: min(320px, 70vw);
        height: min(320px, 70vw);
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        background: radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%);
      }

      .momentum-container {
        position: relative;
        z-index: 1;
        max-width: 1200px;
        margin: 0 auto;
      }

      .momentum-header {
        text-align: center;
        max-width: 680px;
        margin: 0 auto 3.5rem;
      }

      .momentum-title {
        font-size: clamp(1.75rem, 4.5vw, 2.75rem);
        font-weight: 700;
        line-height: 1.15;
        letter-spacing: -0.03em;
        color: #ffffff;
        margin-bottom: 1rem;
      }

      .momentum-title-accent {
        background: linear-gradient(135deg, #f87171 0%, #a78bfa 50%, #22d3ee 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .momentum-subtitle {
        font-size: clamp(1rem, 2.5vw, 1.125rem);
        line-height: 1.75;
        color: rgba(255, 255, 255, 0.58);
      }

      .momentum-subtitle strong {
        color: rgba(255, 255, 255, 0.82);
        font-weight: 600;
      }

      .momentum-cards {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 3rem;
      }

      .momentum-card-wrap {
        flex: 1;
        display: flex;
      }

      .momentum-card-wrap .momentum-card {
        width: 100%;
      }

      .momentum-card {
        position: relative;
        flex: 1;
        padding: 1.75rem 1.625rem;
        border-radius: var(--radius);
        background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
        border: 1px solid rgba(255,255,255,0.06);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        box-shadow: 0 12px 40px rgba(2,6,23,0.6);
      }

      .momentum-card::before {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: 21px;
        padding: 1px;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      .momentum-card--traditional {
        border: 1px solid rgba(239, 68, 68, 0.18);
        box-shadow: 0 8px 36px rgba(239, 68, 68, 0.06);
      }

      .momentum-card--traditional::before {
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.45), rgba(255, 255, 255, 0.06));
      }

      .momentum-card--traditional:hover {
        box-shadow:
          0 8px 32px rgba(0, 0, 0, 0.4),
          0 0 64px rgba(239, 68, 68, 0.18);
      }

      .momentum-card--recovery {
        border: 1px solid rgba(139, 92, 246, 0.22);
        box-shadow: 0 12px 44px rgba(139,92,246,0.08), 0 8px 28px rgba(2,6,23,0.5);
      }

      .momentum-card--recovery::before {
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.55), rgba(34, 211, 238, 0.3));
      }

      .momentum-card--recovery:hover {
        box-shadow:
          0 8px 32px rgba(0, 0, 0, 0.4),
          0 0 72px rgba(139, 92, 246, 0.22),
          0 0 48px rgba(34, 211, 238, 0.12);
      }

      .momentum-card-title {
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      }

      .momentum-card--traditional .momentum-card-title {
        color: #fca5a5;
      }

      .momentum-card--recovery .momentum-card-title {
        background: linear-gradient(135deg, #c4b5fd 0%, #22d3ee 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .momentum-timeline {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }

      .momentum-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      .momentum-step-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
        max-width: 260px;
        padding: 0.75rem 1rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
      }

      .momentum-card--traditional .momentum-step-content {
        border-color: rgba(239, 68, 68, 0.12);
      }

      .momentum-card--recovery .momentum-step-content {
        border-color: rgba(139, 92, 246, 0.15);
      }

      .momentum-step-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
        font-size: 1rem;
        flex-shrink: 0;
        border-radius: 8px;
        background: rgba(255,255,255,0.03);
      }

      .momentum-step-label {
        font-size: 0.9375rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.82);
      }

      .momentum-connector {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 1.75rem;
        color: rgba(255, 255, 255, 0.25);
      }

      .momentum-card--traditional .momentum-connector {
        color: rgba(239, 68, 68, 0.45);
      }

      .momentum-card--recovery .momentum-connector {
        color: rgba(167, 139, 250, 0.55);
      }

      .momentum-connector-line {
        width: 2px;
        height: 100%;
        border-radius: 1px;
        background: currentColor;
        box-shadow: 0 0 8px currentColor;
      }

      .momentum-connector-icon {
        margin-top: -3px;
        filter: drop-shadow(0 0 4px currentColor);
      }

      .momentum-quote {
        position: relative;
        max-width: 720px;
        margin: 0 auto;
        padding: 2.5rem 2.25rem;
        text-align: center;
        border-radius: 16px;
        background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
        border: 1px solid rgba(255,255,255,0.06);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        box-shadow: 0 20px 60px rgba(2,6,23,0.6), 0 0 40px rgba(139,92,246,0.06);
      }

      .momentum-quote::before {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: 21px;
        padding: 1px;
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(34, 211, 238, 0.2));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      .momentum-quote-text {
        font-size: clamp(1.125rem, 2.4vw, 1.5rem);
        font-weight: 700;
        line-height: 1.28;
        letter-spacing: -0.02em;
        font-style: italic;
        color: #ffffff;
        margin-bottom: 0.75rem;
      }

      .momentum-quote-text em {
        font-style: normal;
        background: linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .momentum-quote-desc {
        font-size: clamp(0.9375rem, 2vw, 1.0625rem);
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.52);
      }

      @media (min-width: 768px) {
        .momentum {
          padding: 6rem 2rem 7rem;
        }

        .momentum-header {
          margin-bottom: 4rem;
        }

        .momentum-cards {
          flex-direction: row;
          align-items: stretch;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .momentum-card {
          padding: 2rem 1.75rem;
        }
      }

      @media (min-width: 1024px) {
        .momentum-cards {
          gap: 2.5rem;
        }
      }
    `}</style>
  );
}

function TimelineConnector() {
  return (
    <div className="momentum-connector" aria-hidden="true">
      <div className="momentum-connector-line" />
      <ChevronDown size={16} strokeWidth={2.5} className="momentum-connector-icon" />
    </div>
  );
}

function TimelineStep({ icon, label, index, variant }) {
  return (
    <div className="momentum-step">
      <motion.div
        className="momentum-step-content"
        initial={{ opacity: 0, x: variant === 'traditional' ? -16 : 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
      >
        <motion.span
          className="momentum-step-icon"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3,
          }}
          aria-hidden="true"
        >
          {icon}
        </motion.span>
        <span className="momentum-step-label">{label}</span>
      </motion.div>
    </div>
  );
}

function ComparisonTimeline({ steps, variant }) {
  return (
    <div className="momentum-timeline">
      {steps.map((step, index) => (
        <div key={step.label}>
          <TimelineStep {...step} index={index} variant={variant} />
          {index < steps.length - 1 && <TimelineConnector />}
        </div>
      ))}
    </div>
  );
}

function ComparisonCard({ title, steps, variant, floatDelay }) {
  return (
    <motion.div
      className="momentum-card-wrap"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: floatDelay }}
    >
      <motion.article
        className={`momentum-card momentum-card--${variant}`}
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 5 + floatDelay,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: floatDelay,
        }}
      >
        <h3 className="momentum-card-title">{title}</h3>
        <ComparisonTimeline steps={steps} variant={variant} />
      </motion.article>
    </motion.div>
  );
}

function QuoteCard() {
  return (
    <motion.blockquote
      className="momentum-quote"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p className="momentum-quote-text">
        &ldquo;<em>Progress beats perfection.</em>&rdquo;
      </p>
      <p className="momentum-quote-desc">
        One missed day should never erase weeks of effort.
        Momentum Recovery keeps you moving forward.
      </p>
    </motion.blockquote>
  );
}

export default function MomentumRecovery() {
  return (
    <section className="momentum">
      <MomentumRecoveryStyles />

      <div className="momentum-glow momentum-glow--red" aria-hidden="true" />
      <div className="momentum-glow momentum-glow--purple" aria-hidden="true" />
      <div className="momentum-glow momentum-glow--cyan" aria-hidden="true" />

      <div className="momentum-container">
        <header className="momentum-header">
          <h2 className="momentum-title">
            Why Students <span className="momentum-title-accent">Quit</span>...
            And Why You Won&apos;t.
          </h2>
          <p className="momentum-subtitle">
            Most students don&apos;t quit because they&apos;re lazy.
            They quit because one missed day becomes a broken streak.
            <strong> Mission 60</strong> fixes that with Momentum Recovery.
          </p>
        </header>

        <div className="momentum-cards">
          <ComparisonCard
            title="Traditional Learning"
            steps={TRADITIONAL_STEPS}
            variant="traditional"
            floatDelay={0}
          />
          <ComparisonCard
            title="Mission 60 Momentum Recovery"
            steps={RECOVERY_STEPS}
            variant="recovery"
            floatDelay={0.15}
          />
        </div>

        <QuoteCard />
      </div>
    </section>
  );
}
