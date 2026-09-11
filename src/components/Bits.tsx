import { forwardRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import BearMark from "@/components/BearMark";
import { SUITS } from "@/lib/club";

/* -------------------------------------------------------------------------
   Small shared pieces. Each one is a device lifted off the club's flyers:
   the suit rule, the gold-on-blue callout, the fat-keyline button.
   ------------------------------------------------------------------------- */

/** The four suits in a row — the club's own sign-off, used as a divider. */
export const SuitRule = ({ className = "" }: { className?: string }) => (
  // Opacity goes on the wrapper, not the colours — otherwise a dimmed
  // `text-…/25` would fade the black suits while the red ones stayed solid.
  <div
    aria-hidden
    className={`flex items-center justify-center gap-4 text-2xl leading-none ${className}`}
  >
    {SUITS.map((s) => (
      <span key={s.label} className={s.red ? "text-red" : undefined}>
        {s.glyph}
      </span>
    ))}
  </div>
);

/** Wide-tracked label that sits above a section heading. */
export const Eyebrow = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <p className={`eyebrow ${className}`}>{children}</p>;

/**
 * The flyer's chunky button: solid fill, 2px black keyline, hard offset
 * shadow that collapses on press so it feels like it physically depresses.
 */
const buttonBase =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-ink " +
  "px-6 py-3.5 font-body text-[0.95rem] font-bold leading-none " +
  "transition-[transform,box-shadow,background-color] duration-150 " +
  "shadow-[4px_5px_0_hsl(var(--ink))] hover:-translate-y-0.5 hover:shadow-[5px_7px_0_hsl(var(--ink))] " +
  "active:translate-x-[3px] active:translate-y-[4px] active:shadow-[1px_1px_0_hsl(var(--ink))]";

const variants = {
  gold: "bg-gold text-ink hover:bg-gold-bright",
  cream: "bg-cream text-ink hover:bg-white",
  blue: "bg-blue text-cream hover:bg-blue-deep",
} as const;

type Variant = keyof typeof variants;

export const ChunkyLink = ({
  to,
  href,
  variant = "gold",
  className = "",
  children,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) => {
  const cls = `${buttonBase} ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
};

export const DiscordIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden focusable="false">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

/**
 * A photo hung like a dealt card: white border, black keyline, slight tilt
 * that straightens on hover. `rot` is degrees; `index` staggers the deal-in.
 */
export const PhotoCard = forwardRef<
  HTMLDivElement,
  {
    src: string;
    alt: string;
    rot?: number;
    index?: number;
    className?: string;
    imgClassName?: string;
    caption?: string;
    corner?: string;
  }
>(({ src, alt, rot = 0, index = 0, className = "", imgClassName = "", caption, corner }, ref) => (
  // Wrapper owns the deal-in and any positioning; the figure owns the tilt.
  <div
    ref={ref}
    className={`animate-deal-in ${className}`}
    style={{ animationDelay: `${index * 110}ms` }}
  >
    <figure className="photo-card" style={{ "--rot": `${rot}deg` } as React.CSSProperties}>
      <div className="relative overflow-hidden rounded-[0.4rem]">
        <img src={src} alt={alt} loading="lazy" className={imgClassName} />
        {corner ? (
          <span
            aria-hidden
            className="absolute left-2 top-1.5 font-display text-lg leading-none text-ink/85 mix-blend-multiply"
          >
            {corner}
          </span>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="px-1 pb-0.5 pt-2.5 font-body text-[0.78rem] font-medium leading-snug text-ink/65">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  </div>
));
PhotoCard.displayName = "PhotoCard";

/** Shared masthead for the interior pages — blue field, gold stamped title. */
export const PageHeader = ({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
}) => (
  <section className="suit-lattice relative overflow-hidden border-b-2 border-ink bg-blue py-16 text-cream md:py-24">
    <div className="container relative">
      <Eyebrow className="animate-rise text-gold">{eyebrow}</Eyebrow>
      <h1
        className="animate-rise mt-5 max-w-4xl font-display text-[clamp(2.5rem,8vw,4.8rem)] text-gold text-stamp"
        style={{ animationDelay: "80ms" }}
      >
        {title}
      </h1>
      <p
        className="animate-rise mt-7 max-w-2xl font-body text-[1.05rem] leading-relaxed text-cream/85 md:text-lg"
        style={{ animationDelay: "160ms" }}
      >
        {lede}
      </p>
    </div>
  </section>
);

/* -------------------------------------------------------------------------
   Playing cards, for hand diagrams. Face-down cards use the club's own bear
   as the card back, so a diagram still reads as "our" deck.
   ------------------------------------------------------------------------- */

const RED_SUITS = new Set(["♥", "♦"]);

export const PlayingCard = ({
  rank,
  suit,
  faceDown = false,
  className = "",
}: {
  rank?: string;
  suit?: string;
  faceDown?: boolean;
  className?: string;
}) => {
  if (faceDown) {
    return (
      <span
        aria-hidden
        className={`inline-flex h-[3.2rem] w-[2.2rem] shrink-0 items-center justify-center rounded-[0.3rem] border-2 border-ink bg-blue shadow-[2px_2px_0_hsl(var(--ink))] sm:h-[4.4rem] sm:w-[3.1rem] ${className}`}
      >
        <BearMark className="h-4 w-auto text-gold/70" />
      </span>
    );
  }

  const red = suit ? RED_SUITS.has(suit) : false;
  return (
    <span
      role="img"
      aria-label={`${rank} of ${suit === "♠" ? "spades" : suit === "♥" ? "hearts" : suit === "♦" ? "diamonds" : "clubs"}`}
      className={`inline-flex h-[3.2rem] w-[2.2rem] shrink-0 flex-col items-center justify-center rounded-[0.3rem] border-2 border-ink bg-white leading-none shadow-[2px_2px_0_hsl(var(--ink))] sm:h-[4.4rem] sm:w-[3.1rem] ${
        red ? "text-red" : "text-ink"
      } ${className}`}
    >
      <span className="font-display text-[1rem] sm:text-[1.35rem]">{rank}</span>
      <span className="text-[0.95rem] sm:text-[1.3rem]">{suit}</span>
    </span>
  );
};
