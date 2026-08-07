import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          position: relative;
          padding: 4rem 1.25rem 3rem;
          background: #000000;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
          gap: 2rem;
          align-items: start;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .footer-logo-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 14px;
          background: linear-gradient(135deg, #7c3aed 0%, #0891b2 100%);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 800;
          box-shadow: 0 0 24px rgba(124, 58, 237, 0.35);
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .footer-logo-title {
          font-size: 1.125rem;
        }

        .footer-logo-sub {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.65);
        }

        .footer-copy {
          max-width: 320px;
          font-size: 0.95rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.65);
        }

        .footer-links {
          display: grid;
          gap: 0.8rem;
        }

        .footer-section-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.96rem;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-social {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.85rem;
          height: 2.85rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .footer-social-link:hover {
          transform: translateY(-2px);
          background: rgba(124, 58, 237, 0.18);
        }

        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.92rem;
        }

        @media (max-width: 960px) {
          .footer-inner {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-mark">M60</span>
            <span className="footer-logo-text">
              <span className="footer-logo-title">Mission 60</span>
              <span className="footer-logo-sub">Built for student momentum</span>
            </span>
          </a>
          <p className="footer-copy">
            A premium student experience crafted to help you ship projects daily, build GitHub momentum, and position yourself for recruiter success.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <div className="footer-section-title">Quick Links</div>
            <a className="footer-link" href="#home">Challenge</a>
            <br />
            <a className="footer-link" href="#dashboard">Dashboard</a>
            <br />
            <a className="footer-link" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <br />
            <a className="footer-link" href="#community">Community</a>
          </div>
        </div>

        <div>
          <div className="footer-section-title">Connect</div>
          <div className="footer-social">
            <a className="footer-social-link" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} strokeWidth={2} />
            </a>
            <a className="footer-social-link" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={2} />
            </a>
            <a className="footer-social-link" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={18} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Made with ?? for students.</span>
        <span>© {new Date().getFullYear()} Mission 60.</span>
      </div>
    </footer>
  );
}
