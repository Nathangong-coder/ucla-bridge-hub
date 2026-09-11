import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import BearMark from "@/components/BearMark";
import { DiscordIcon, SuitRule } from "@/components/Bits";
import { CLUB } from "@/lib/club";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "The Game" },
  { path: "/events", label: "Sessions" },
  { path: "/join", label: "Join" },
];

const Footer = () => (
  <footer className="border-t-2 border-ink bg-ink text-cream">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        {/* Lockup */}
        <div>
          <BearMark className="h-12 w-auto text-gold" title={CLUB.name} />
          <p className="mt-5 font-body text-[0.7rem] font-bold uppercase tracking-[0.28em] text-cream/70">
            Bridge Club <span className="text-gold">@</span> UCLA
          </p>
          <p className="mt-5 max-w-xs font-body text-[0.95rem] leading-relaxed text-cream/55">
            {CLUB.meets.day}, {CLUB.meets.time}. Free pizza, a stipend, and a
            game worth the rest of your life.
          </p>
        </div>

        {/* Pages */}
        <nav aria-label="Footer">
          <h2 className="eyebrow text-gold">Pages</h2>
          <ul className="mt-5 space-y-3">
            {pages.map((p) => (
              <li key={p.path}>
                <Link
                  to={p.path}
                  className="font-body text-cream/70 transition-colors hover:text-gold"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Elsewhere */}
        <div>
          <h2 className="eyebrow text-gold">Find us</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={CLUB.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-body text-cream/70 transition-colors hover:text-gold"
              >
                <DiscordIcon className="h-[1.15rem] w-[1.15rem]" />
                Discord
              </a>
            </li>
            <li>
              <a
                href={CLUB.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-body text-cream/70 transition-colors hover:text-gold"
              >
                <Instagram className="h-[1.15rem] w-[1.15rem]" />
                {CLUB.instagramHandle}
              </a>
            </li>
          </ul>
          <p className="mt-6 font-body text-[0.82rem] leading-relaxed text-cream/40">
            We post the week's room in both places. No dues, no tryouts, no
            prior experience — cards are provided.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center gap-6 border-t border-cream/15 pt-8 sm:flex-row sm:justify-between">
        <SuitRule className="text-cream opacity-35" />
        <p className="font-body text-[0.78rem] text-cream/40">
          © {new Date().getFullYear()} Bridge Club @ UCLA
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
