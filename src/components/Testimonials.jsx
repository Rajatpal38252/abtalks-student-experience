import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Aanya Kapoor',
    role: 'Software Engineering Student',
    college: 'IIT Bombay',
    quote: 'Mission 60 helped me move from scattered side projects to a crisp portfolio recruiters actually care about.',
    growth: '+420 GitHub Contributions',
  },
  {
    name: 'Jayden Lee',
    role: 'Computer Science Junior',
    college: 'UC Berkeley',
    quote: 'The daily structure felt premium. I built momentum fast, and my repo activity went from zero to daily commits.',
    growth: 'Top 8% Consistency',
  },
  {
    name: 'Maya Nair',
    role: 'Design + Code Student',
    college: 'SDA Bocconi',
    quote: 'This challenge made my projects recruiter-ready. I learned to ship polished features and tell a clear story.',
    growth: '+360 GitHub Contributions',
  },
];

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.article
      className="testimonial-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.7, delay: index * 0.08 },
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.12 },
      }}
      whileHover={{ y: -10, scale: 1.01 }}
    >
      <div className="testimonial-avatar">
        <span>{testimonial.name.split(' ').map((part) => part[0]).join('')}</span>
      </div>

      <div className="testimonial-copy">
        <div className="testimonial-stars" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <span key={starIndex}>★</span>
          ))}
        </div>

        <p className="testimonial-quote">“{testimonial.quote}”</p>

        <div className="testimonial-meta">
          <div>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-college">{testimonial.college}</p>
          </div>
          <p className="testimonial-growth">{testimonial.growth}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <style>{`
        .testimonials {
          position: relative;
          padding: 5.5rem 1.25rem 6.5rem;
          background: #000000;
          overflow: hidden;
        }

        .testimonials::before,
        .testimonials::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          z-index: 0;
        }

        .testimonials::before {
          width: min(520px, 80vw);
          height: min(520px, 80vw);
          top: -8%;
          left: -12%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 68%);
        }

        .testimonials::after {
          width: min(500px, 75vw);
          height: min(500px, 75vw);
          bottom: -10%;
          right: -8%;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.28) 0%, transparent 68%);
        }

        .testimonials-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 3.75rem;
          display: grid;
          gap: 1rem;
        }

        .testimonials-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.15rem;
          border-radius: 999px;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.14);
          border: 1px solid rgba(139, 92, 246, 0.32);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 0 22px rgba(139, 92, 246, 0.14);
        }

        .testimonials-title {
          margin: 0;
          font-size: clamp(2.25rem, 4vw, 3.4rem);
          font-weight: 800;
          line-height: 1.05;
          color: #ffffff;
        }

        .testimonials-title span {
          display: block;
          margin-top: 0.4rem;
          background: linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .testimonials-copy {
          max-width: 640px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.68);
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.75rem;
          margin-bottom: 3rem;
        }

        .testimonial-card {
          position: relative;
          overflow: hidden;
          min-height: 20rem;
          padding: 2rem;
          border-radius: var(--radius);
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 18px 48px rgba(2,6,23,0.6);
          transition: transform 0.28s ease, box-shadow 0.28s ease, background 0.28s ease, border-color 0.28s ease;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          margin: 1px;
          border-radius: calc(var(--radius) + 2px);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          pointer-events: none;
        }

        .testimonial-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(167, 139, 250, 0.35);
          box-shadow: 0 32px 76px rgba(0, 0, 0, 0.32), 0 0 40px rgba(167, 139, 250, 0.12);
          transform: translateY(-2px);
        }

        .testimonial-card:hover .testimonial-avatar {
          transform: scale(1.08);
          box-shadow: 0 0 28px rgba(124, 58, 237, 0.35);
        }

        .testimonial-avatar {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          background: linear-gradient(135deg, rgba(124,58,237,0.95), rgba(34,184,255,0.9));
          box-shadow: 0 10px 30px rgba(124,58,237,0.18), inset 0 -6px 18px rgba(0,0,0,0.12);
          margin-bottom: 1.35rem;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          border: 2px solid rgba(255,255,255,0.06);
        }

        .testimonial-stars {
          display: inline-flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
          font-size: 0.95rem;
          color: #facc15;
          text-shadow: 0 0 10px rgba(250, 204, 21, 0.45);
        }

        .testimonial-quote {
          margin: 0;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.86);
          margin-bottom: 1.5rem;
        }

        .testimonial-meta {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .testimonial-name {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .testimonial-role {
          margin: 0.35rem 0 0;
          font-size: 0.94rem;
          color: rgba(255, 255, 255, 0.72);
        }

        .testimonial-college {
          margin: 0.35rem 0 0;
          font-size: 0.9rem;
          color: rgba(167, 139, 250, 0.75);
        }

        .testimonial-growth {
          margin: 0;
          font-size: 0.94rem;
          font-weight: 700;
          color: #22d3ee;
          text-align: right;
          min-width: 10rem;
        }

        .testimonial-cta-card {
          position: relative;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem 2.25rem;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          box-shadow: 0 26px 68px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }

        .testimonial-cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          margin: 1px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.02));
          pointer-events: none;
        }

        .testimonial-cta-copy {
          display: grid;
          gap: 0.8rem;
        }

        .testimonial-cta-title {
          margin: 0;
          font-size: clamp(1.75rem, 3.5vw, 2.35rem);
          font-weight: 800;
          line-height: 1.08;
          color: #ffffff;
        }

        .testimonial-cta-text {
          margin: 0;
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.68);
          max-width: 42rem;
        }

        .testimonial-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 10rem;
          padding: 0.95rem 1.5rem;
          border-radius: 14px;
          font-size: 0.975rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #7c3aed 0%, #22d3ee 100%);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 14px 30px rgba(124, 58, 237, 0.25);
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
        }

        .testimonial-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px rgba(124, 58, 237, 0.35);
          filter: brightness(1.05);
        }

        @media (max-width: 980px) {
          .testimonial-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-cta-card {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .testimonial-cta-button {
            justify-self: center;
          }

          .testimonial-growth {
            width: 100%;
            text-align: left;
            min-width: auto;
          }
        }
      `}</style>

      <div className="testimonials-inner">
        <div className="testimonials-header">
          <span className="testimonials-badge">❤️ Student Stories</span>
          <motion.h2
            className="testimonials-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            Built by Students.
            <span> Trusted by Recruiters.</span>
          </motion.h2>
          <motion.p
            className="testimonials-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            See how consistent builders transformed their skills.
          </motion.p>
        </div>

        <div className="testimonial-grid">
          {TESTIMONIALS.map((item, index) => (
            <TestimonialCard key={item.name} testimonial={item} index={index} />
          ))}
        </div>

        <div className="testimonial-cta-card">
          <div className="testimonial-cta-copy">
            <h3 className="testimonial-cta-title">Ready to Build Your Story?</h3>
            <p className="testimonial-cta-text">
              Join thousands of students building proof of work that recruiters actually notice.
            </p>
          </div>
          <a className="testimonial-cta-button" href="#start">
            Start Challenge →
          </a>
        </div>
      </div>
    </section>
  );
}
