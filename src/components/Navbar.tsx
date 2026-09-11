import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import BearMark from "@/components/BearMark";
import { DiscordIcon } from "@/components/Bits";
import { CLUB } from "@/lib/club";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "The Game" },
  { path: "/events", label: "Sessions" },
  { path: "/join", label: "Join" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the mobile sheet on navigation, and scroll to top between pages.
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-blue text-cream">
      <nav className="container flex h-[70px] items-center justify-between gap-4">
        {/* Logo — the club's own bear, plus the lockup text from the flyers */}
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <BearMark
            title={CLUB.name}
            className="h-8 w-auto text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
          />
          <span className="font-body text-[0.62rem] font-bold uppercase leading-[1.35] tracking-[0.16em] text-cream sm:text-[0.7rem] sm:tracking-[0.2em]">
            Bridge Club
            <br />
            <span className="text-gold">@ UCLA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`relative block py-1 font-body text-[0.82rem] font-bold uppercase tracking-[0.16em] transition-colors ${
                  isActive(link.path) ? "text-gold" : "text-cream/75 hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[3px] bg-gold transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Both channels carry equal weight — the club is about evenly split
            between them — so the one button points at the Join page instead. */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={CLUB.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram — ${CLUB.instagramHandle}`}
            className="text-cream/70 transition-colors hover:text-gold"
          >
            <Instagram className="h-[1.15rem] w-[1.15rem]" />
          </a>
          <a
            href={CLUB.discord}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="text-cream/70 transition-colors hover:text-gold"
          >
            <DiscordIcon className="h-[1.15rem] w-[1.15rem]" />
          </a>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-gold px-4 py-2 font-body text-[0.8rem] font-bold text-ink shadow-[3px_3px_0_hsl(var(--ink))] transition-all duration-150 hover:bg-gold-bright active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_hsl(var(--ink))]"
          >
            Join us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 p-2 text-cream md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="suit-lattice border-t-2 border-ink bg-blue-deep md:hidden"
        >
          <ul className="container flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.path} className="border-b border-cream/15 last:border-0">
                <Link
                  to={link.path}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`block py-4 font-display text-2xl ${
                    isActive(link.path) ? "text-gold" : "text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container flex items-center gap-3 pb-6 pt-3">
            <a
              href={CLUB.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-ink bg-gold px-4 py-3 font-body text-sm font-bold text-ink shadow-[3px_3px_0_hsl(var(--ink))]"
            >
              <DiscordIcon className="h-4 w-4" />
              Discord
            </a>
            <a
              href={CLUB.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-ink bg-cream px-4 py-3 font-body text-sm font-bold text-ink shadow-[3px_3px_0_hsl(var(--ink))]"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
