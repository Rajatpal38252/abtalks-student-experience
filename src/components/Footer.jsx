import { Globe } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          position: relative;
          padding: 4.5rem 1.25rem 3rem;
          background: #000000;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        .footer-brand {
          display: grid;
          gap: 1rem;
        }

        .footer-name {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
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

        .footer-links-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
        }

        .footer-link {
          display: inline-block;
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.96rem;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-link:hover {
          color: #ffffff;
          transform: translateX(2px);
        }

        .footer-social {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.9rem;
          height: 2.9rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .footer-social-link:hover {
          transform: translateY(-2px);
          background: rgba(124, 58, 237, 0.18);
        }

        .footer-bottom {
          margin-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.9rem;
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
          <div className="footer-name">ABTalks</div>
          <p className="footer-copy">Helping students build proof of work.</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-title">Quick Links</div>
          <a className="footer-link" href="#home">Home</a>
          <a className="footer-link" href="#journey">Journey</a>
          <a className="footer-link" href="#testimonials">Testimonials</a>
          <a className="footer-link" href="#cta">Mission 60</a>
        </div>

        <div>
          <div className="footer-links-title">Follow</div>
          <div className="footer-social">
            <a className="footer-social-link" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Globe size={18} strokeWidth={2}/>
            </a>
            <a className="footer-social-link" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a className="footer-social-link" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© 2026 ABTalks. All rights reserved.</div>
    </footer>
  );
}
