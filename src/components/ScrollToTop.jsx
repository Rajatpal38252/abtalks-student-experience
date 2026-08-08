import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          className="scroll-top"
          onClick={handleClick}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          aria-label="Scroll to top"
        >
          <style>{`
            .scroll-top {
              position: fixed;
              right: 1.5rem;
              bottom: 1.5rem;
              width: 3.4rem;
              height: 3.4rem;
              border-radius: 16px;
              border: 1px solid rgba(255, 255, 255, 0.18);
              background: rgba(255, 255, 255, 0.08);
              backdrop-filter: blur(18px);
              -webkit-backdrop-filter: blur(18px);
              box-shadow: 0 16px 40px rgba(34, 64, 237, 0.18);
              color: #ffffff;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 1200;
              transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
            }

            .scroll-top:hover {
              transform: translateY(-2px);
              box-shadow: 0 22px 58px rgba(34, 211, 238, 0.28);
              background: rgba(255, 255, 255, 0.14);
            }

            @media (max-width: 640px) {
              .scroll-top {
                right: 1rem;
                bottom: 1rem;
              }
            }
          `}</style>
          <ArrowUp size={18} strokeWidth={3} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
