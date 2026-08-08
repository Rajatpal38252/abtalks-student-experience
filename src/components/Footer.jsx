import { Globe } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="footer site-container"
      style={{ position: "relative", padding: "4.5rem 1.25rem 3rem", overflow: "hidden" }}
    >
      <style>{`
        .footer-link {
          display: block;
          width: fit-content;
          margin-top: 0.55rem;
          transition: color 0.2s ease;
        }

        .footer-link:hover { color: #ffffff; }

        .footer-social-link {
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .footer-social-link:hover {
          border-color: rgba(34, 211, 238, 0.35);
          background: rgba(255, 255, 255, 0.07);
        }

        @media (max-width: 760px) {
          .footer { padding: 3.5rem 1rem 2rem !important; }
          .footer-inner { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
          .footer-bottom { margin-top: 2rem !important; }
        }
      `}</style>
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: -120,
          top: -60,
          width: 420,
          height: 420,
          borderRadius: "50%",
          filter: "blur(60px)",
          background: "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.14), rgba(34,184,255,0.06) 40%, transparent 60%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div className="footer-inner" style={{ position: "relative", zIndex: 1, maxWidth: "var(--container)", margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "2rem", alignItems: "start" }}>
        <div className="footer-brand">
          <div className="footer-name heading-2">ABTalks</div>
          <p className="footer-copy lead muted">Helping students build proof of work.</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-title heading-2">Quick Links</div>
          <a className="footer-link muted" href="#home">Home</a>
          <a className="footer-link muted" href="#journey">Journey</a>
          <a className="footer-link muted" href="#testimonials">Testimonials</a>
          <a className="footer-link muted" href="#start">Mission 60</a>
        </div>

        <div>
          <div className="footer-links-title heading-2">Follow</div>
          <div className="footer-social" style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", marginTop: "0.6rem" }}>
            <motion.a className="footer-social-link glass" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" whileHover={{ y: -4, scale: 1.03 }} transition={{ duration: 0.25 }} style={{ width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <Globe size={18} strokeWidth={2} />
            </motion.a>
            <motion.a className="footer-social-link glass" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" whileHover={{ y: -4, scale: 1.03 }} transition={{ duration: 0.25 }} style={{ width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <FaLinkedin size={18} />
            </motion.a>
            <motion.a className="footer-social-link glass" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" whileHover={{ y: -4, scale: 1.03 }} transition={{ duration: 0.25 }} style={{ width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <FaXTwitter size={18} />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="footer-bottom muted" style={{ position: "relative", zIndex: 1, marginTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", color: "var(--muted-40)", fontSize: "0.9rem" }}>
        <div>© 2026 ABTalks. All rights reserved.</div>
        <div className="muted" style={{ fontSize: "0.9rem" }}>Built with care • Privacy • Terms</div>
      </div>
    </motion.footer>
  );
}
