import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Journey', href: '#journey' },
  { label: 'Features', href: '#features' },
  { label: 'Community', href: '#community' },
];

const SCROLL_THRESHOLD = 24;

/* ── Hooks ─────────────────────────────────────────────── */

function useScrollState(threshold = SCROLL_THRESHOLD) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

function useMobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, close]);

  return { open, toggle, close, menuRef, toggleRef };
}

/* ── Sub-components ────────────────────────────────────── */

function NavLogo() {
  return (
    <a href="#home" className="navbar-logo" aria-label="ABTalks home">
      <span className="navbar-logo-mark" aria-hidden="true">AB</span>
      <span className="navbar-logo-text">
        <span className="navbar-logo-name">ABTalks</span>
        <span className="navbar-logo-sub">Mission 60</span>
      </span>
    </a>
  );
}

function NavLinks({ links, onNavigate, className = '' }) {
  return (
    <ul className={`navbar-links ${className}`.trim()}>
      {links.map(({ label, href }) => (
        <li key={href}>
          <a href={href} className="navbar-link" onClick={onNavigate}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function NavCTA({ className = '', onClick }) {
  return (
    <a
      href="#start"
      className={`navbar-cta ${className}`.trim()}
      onClick={onClick}
    >
      Start Challenge
      <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
    </a>
  );
}

function HamburgerButton({ open, onToggle, buttonRef }) {
  return (
    <button
      ref={buttonRef}
      type="button"
      className={`navbar-hamburger ${open ? 'navbar-hamburger--open' : ''}`}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="navbar-mobile-menu"
      aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
    >
      <span className="navbar-hamburger-line" />
      <span className="navbar-hamburger-line" />
      <span className="navbar-hamburger-line" />
    </button>
  );
}

function MobileMenu({ open, onClose, menuRef }) {
  return (
    <>
      <div
        className={`navbar-overlay ${open ? 'navbar-overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        id="navbar-mobile-menu"
        ref={menuRef}
        className={`navbar-mobile ${open ? 'navbar-mobile--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <NavLinks links={NAV_LINKS} onNavigate={onClose} className="navbar-links--mobile" />
        <NavCTA className="navbar-cta--mobile" onClick={onClose} />
      </nav>
    </>
  );
}

function NavbarStyles() {
  return (
    <style>{`
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 0 1.25rem;
        transition:
          background 0.35s ease,
          border-color 0.35s ease,
          box-shadow 0.35s ease,
          backdrop-filter 0.35s ease;
      }

      .navbar--scrolled {
        background: rgba(0, 0, 0, 0.55);
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow:
          0 4px 24px rgba(0, 0, 0, 0.35),
          0 1px 0 rgba(139, 92, 246, 0.08) inset;
      }

      .navbar-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        max-width: 1200px;
        height: 4rem;
        margin: 0 auto;
      }

      /* Logo */
      .navbar-logo {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        flex-shrink: 0;
        transition: opacity 0.2s ease;
      }

      .navbar-logo:hover {
        opacity: 0.9;
      }

      .navbar-logo:focus-visible {
        outline: 2px solid #a78bfa;
        outline-offset: 4px;
        border-radius: 8px;
      }

      .navbar-logo-mark {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 10px;
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: -0.04em;
        color: #ffffff;
        background: linear-gradient(135deg, #7c3aed 0%, #0891b2 100%);
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.35);
        transition: box-shadow 0.3s ease, transform 0.3s ease;
      }

      .navbar-logo:hover .navbar-logo-mark {
        box-shadow:
          0 0 28px rgba(139, 92, 246, 0.55),
          0 0 48px rgba(34, 211, 238, 0.2);
        transform: scale(1.04);
      }

      .navbar-logo-text {
        display: flex;
        flex-direction: column;
        line-height: 1.15;
      }

      .navbar-logo-name {
        font-size: 1.0625rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #ffffff;
        text-shadow: 0 0 24px rgba(167, 139, 250, 0.25);
        transition: text-shadow 0.3s ease;
      }

      .navbar-logo:hover .navbar-logo-name {
        text-shadow: 0 0 32px rgba(167, 139, 250, 0.45);
      }

      .navbar-logo-sub {
        font-size: 0.6875rem;
        font-weight: 500;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: rgba(34, 211, 238, 0.75);
      }

      /* Desktop nav */
      .navbar-desktop {
        display: none;
        align-items: center;
        gap: 2rem;
      }

      .navbar-links {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .navbar-link {
        position: relative;
        display: block;
        padding: 0.5rem 0.875rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.65);
        border-radius: 8px;
        transition: color 0.2s ease, background 0.2s ease;
      }

      .navbar-link::after {
        content: '';
        position: absolute;
        bottom: 0.25rem;
        left: 50%;
        width: 0;
        height: 2px;
        border-radius: 1px;
        background: linear-gradient(90deg, #a78bfa, #22d3ee);
        transform: translateX(-50%);
        transition: width 0.25s ease;
      }

      .navbar-link:hover,
      .navbar-link:focus-visible {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.05);
      }

      .navbar-link:hover::after,
      .navbar-link:focus-visible::after {
        width: 60%;
      }

      .navbar-link:focus-visible {
        outline: 2px solid #a78bfa;
        outline-offset: 2px;
      }

      /* CTA */
      .navbar-cta {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.625rem 1.125rem;
        border-radius: 10px;
        font-size: 0.875rem;
        font-weight: 600;
        color: #ffffff;
        white-space: nowrap;
        background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #0891b2 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 20px rgba(124, 58, 237, 0.35);
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease,
          background 0.2s ease;
      }

      .navbar-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 28px rgba(124, 58, 237, 0.5);
      }

      .navbar-cta:active {
        transform: translateY(0);
      }

      .navbar-cta:focus-visible {
        outline: 2px solid #22d3ee;
        outline-offset: 3px;
      }

      /* Hamburger */
      .navbar-hamburger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 2.5rem;
        height: 2.5rem;
        padding: 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        transition: background 0.2s ease, border-color 0.2s ease;
      }

      .navbar-hamburger:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(139, 92, 246, 0.3);
      }

      .navbar-hamburger:focus-visible {
        outline: 2px solid #a78bfa;
        outline-offset: 2px;
      }

      .navbar-hamburger-line {
        display: block;
        width: 18px;
        height: 2px;
        border-radius: 1px;
        background: #ffffff;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      .navbar-hamburger--open .navbar-hamburger-line:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }

      .navbar-hamburger--open .navbar-hamburger-line:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }

      .navbar-hamburger--open .navbar-hamburger-line:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }

      /* Mobile menu */
      .navbar-overlay {
        position: fixed;
        inset: 0;
        z-index: 998;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.35s ease, visibility 0.35s ease;
      }

      .navbar-overlay--visible {
        opacity: 1;
        visibility: visible;
      }

      .navbar-mobile {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: min(320px, 85vw);
        height: 100vh;
        height: 100dvh;
        padding: 5rem 1.5rem 2rem;
        background: rgba(10, 10, 14, 0.92);
        border-left: 1px solid rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        box-shadow: -8px 0 40px rgba(0, 0, 0, 0.5);
        transform: translateX(100%);
        transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        visibility: hidden;
      }

      .navbar-mobile--open {
        transform: translateX(0);
        visibility: visible;
      }

      .navbar-links--mobile {
        flex-direction: column;
        align-items: stretch;
        gap: 0.25rem;
      }

      .navbar-links--mobile .navbar-link {
        padding: 0.875rem 1rem;
        font-size: 1rem;
        border-radius: 10px;
      }

      .navbar-links--mobile .navbar-link::after {
        display: none;
      }

      .navbar-cta--mobile {
        justify-content: center;
        padding: 0.875rem 1.25rem;
        font-size: 0.9375rem;
        margin-top: auto;
      }

      /* Responsive */
      @media (min-width: 768px) {
        .navbar {
          padding: 0 2rem;
        }

        .navbar-inner {
          height: 4.5rem;
        }

        .navbar-desktop {
          display: flex;
        }

        .navbar-hamburger {
          display: none;
        }

        .navbar-mobile,
        .navbar-overlay {
          display: none;
        }
      }
    `}</style>
  );
}

/* ── Main component ──────────────────────────────────────── */

export default function Navbar() {
  const scrolled = useScrollState();
  const { open, toggle, close, menuRef, toggleRef } = useMobileMenu();

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <NavbarStyles />

      <div className="navbar-inner">
        <NavLogo />

        <div className="navbar-desktop">
          <NavLinks links={NAV_LINKS} />
          <NavCTA />
        </div>

        <HamburgerButton open={open} onToggle={toggle} buttonRef={toggleRef} />
      </div>

      <MobileMenu open={open} onClose={close} menuRef={menuRef} />
    </header>
  );
}
