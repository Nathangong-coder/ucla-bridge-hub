import { Link } from "react-router-dom";
import { ArrowRight, Instagram } from "lucide-react";
import BearMark from "@/components/BearMark";
import { ChunkyLink, DiscordIcon, Eyebrow, PhotoCard, SuitRule } from "@/components/Bits";
import { CLUB } from "@/lib/club";

import crewSelfie from "@/assets/photos/crew-selfie.jpg";
import sessionWide from "@/assets/photos/session-wide.jpg";
import pizza from "@/assets/photos/pizza.jpg";
import pizzaNight from "@/assets/photos/pizza-night.jpg";
import groupLineup from "@/assets/photos/group-lineup.jpg";
import tablePlay from "@/assets/photos/table-play.jpg";
import fullClub from "@/assets/photos/full-club.jpg";
import afterSession from "@/assets/photos/after-session.jpg";

const tickerItems = [
  "No experience needed",
  "Free pizza every session",
  `${CLUB.pay.rate} an hour`,
  "All years welcome",
  "Cards provided",
  "Bring a friend",
];

const Home = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="suit-lattice relative overflow-hidden border-b-2 border-ink bg-blue text-cream">
        {/* Oversized bear watermark, bled off the right edge */}
        <BearMark
          className="pointer-events-none absolute -right-16 top-1/2 hidden h-[130%] w-auto -translate-y-1/2 text-cream/[0.05] lg:block"
        />

        <div className="container relative grid items-center gap-14 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-24">
          {/* --- Copy --- */}
          <div>
            <Eyebrow className="animate-rise text-gold">
              Bridge Club @ UCLA · Est. on a Friday night
            </Eyebrow>

            <h1
              className="animate-rise mt-6 font-display text-[clamp(2.9rem,9.2vw,5.6rem)] text-gold text-stamp"
              style={{ animationDelay: "80ms" }}
            >
              Get paid
              <br />
              to play cards.
            </h1>

            <p
              className="animate-rise mt-7 max-w-[34rem] font-body text-[1.05rem] leading-relaxed text-cream/85 md:text-[1.15rem]"
              style={{ animationDelay: "170ms" }}
            >
              We are a room full of people who did not know how to play bridge a
              year ago. Now we do. There is pizza, there is a stipend, and there
              is a table with your name on it.
            </p>

            {/* Meeting strip — the flyer's white callout box, reused */}
            <div
              className="animate-rise keyline-sm mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-1 bg-cream px-5 py-3 font-body text-[0.95rem] font-bold text-ink"
              style={{ animationDelay: "240ms" }}
            >
              <span>{CLUB.meets.day}</span>
              <span aria-hidden className="text-red">
                ♦
              </span>
              <span>{CLUB.meets.time}</span>
              <span aria-hidden className="text-red">
                ♦
              </span>
              <span className="font-medium text-ink/70">{CLUB.meets.placeShort}</span>
            </div>

            <div
              className="animate-rise mt-8 flex flex-wrap gap-4"
              style={{ animationDelay: "310ms" }}
            >
              <ChunkyLink href={CLUB.discord} variant="gold">
                <DiscordIcon className="h-[1.15rem] w-[1.15rem]" />
                Join the Discord
              </ChunkyLink>
              <ChunkyLink href={CLUB.instagram} variant="cream">
                <Instagram className="h-[1.15rem] w-[1.15rem]" />
                {CLUB.instagramHandle}
              </ChunkyLink>
            </div>
          </div>

          {/* --- Fanned photos --- */}
          <div className="relative mx-auto aspect-[4/3.4] w-full max-w-[30rem] lg:max-w-none">
            <PhotoCard
              src={sessionWide}
              alt="Members setting up boards around the long table at a Friday session"
              rot={-7}
              index={0}
              corner="A♠"
              className="absolute left-0 top-[6%] w-[58%]"
              imgClassName="aspect-[4/3]"
            />
            <PhotoCard
              src={pizza}
              alt="An open pizza box next to duplicate bridge boards"
              rot={8}
              index={1}
              corner="K♦"
              className="absolute right-[1%] top-0 w-[42%]"
              imgClassName="aspect-[3/4]"
            />
            <PhotoCard
              src={crewSelfie}
              alt="A dozen club members crowded into a selfie at the end of a session"
              rot={-2.5}
              index={2}
              corner="Q♥"
              className="absolute bottom-0 right-[6%] w-[64%]"
              imgClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ================= TICKER ================= */}
      <div className="overflow-hidden border-b-2 border-ink bg-ink py-3.5">
        <div className="ticker-track flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {tickerItems.map((item) => (
                <li
                  key={item}
                  className="flex shrink-0 items-center whitespace-nowrap font-body text-sm font-bold uppercase tracking-[0.18em] text-gold"
                >
                  {item}
                  <span aria-hidden className="px-6 text-base text-cream/35">
                    ♠
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ================= WHY JOIN ================= */}
      <section className="border-b-2 border-ink bg-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl">
            <Eyebrow className="text-blue">Why join</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,3.6rem)] text-ink">
              Three honest reasons.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {/* --- 1. The money --- */}
            <article className="keyline suit-lattice relative flex flex-col justify-center overflow-hidden bg-blue p-8 text-cream md:p-11 lg:col-span-7">
              <span
                aria-hidden
                className="absolute -right-6 -top-10 font-display text-[11rem] leading-none text-cream/[0.07] md:text-[15rem]"
              >
                01
              </span>
              <div className="relative">
                <Eyebrow className="text-gold">You get paid to learn</Eyebrow>
                <p className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-display text-[clamp(4.2rem,15vw,8rem)] leading-[0.8] text-gold text-stamp">
                    {CLUB.pay.rate}
                  </span>
                  <span className="font-display text-[clamp(1.5rem,4.5vw,2.4rem)] leading-none text-cream">
                    {CLUB.pay.unit}
                  </span>
                </p>
                <p className="mt-7 max-w-md font-body text-[1.02rem] leading-relaxed text-cream/85">
                  Not a typo. Show up, learn a genuinely difficult game, and get
                  paid for the hours you spend at the table — the best minimum
                  wage job you will ever have. No shift, no manager, no name tag.
                </p>
                <p className="mt-5 border-t border-cream/25 pt-4 font-body text-[0.82rem] leading-relaxed text-cream/60">
                  {CLUB.pay.condition}
                </p>
              </div>
            </article>

            {/* --- 2. The pizza --- */}
            <article className="keyline flex flex-col overflow-hidden bg-white lg:col-span-5">
              <div className="relative">
                <img
                  src={pizzaNight}
                  alt="Club members behind a table of open pizza boxes after a session"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <span
                  aria-hidden
                  className="absolute right-4 top-4 font-display text-5xl leading-none text-white/85 mix-blend-overlay"
                >
                  02
                </span>
              </div>
              <div className="flex-1 border-t-2 border-ink p-8">
                <Eyebrow className="text-red">And there is free pizza</Eyebrow>
                <h3 className="mt-4 font-display text-[2rem] leading-[0.95] text-ink">
                  Every single session.
                </h3>
                <p className="mt-4 font-body leading-relaxed text-ink/70">
                  Boxes open around six. Nobody has ever had to ask twice and
                  no one has ever left hungry, though pepperoni and onion run
                  out the fastest — arrive early if you have opinions.
                </p>
              </div>
            </article>

            {/* --- 3. The people --- */}
            <article className="keyline grid overflow-hidden bg-white lg:col-span-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative order-2 lg:order-1">
                <img
                  src={crewSelfie}
                  alt="Members packed together laughing for a group selfie"
                  loading="lazy"
                  className="h-full min-h-[16rem] w-full object-cover"
                />
              </div>
              <div className="order-1 border-b-2 border-ink p-8 md:p-11 lg:order-2 lg:border-b-0 lg:border-l-2">
                <span
                  aria-hidden
                  className="float-right font-display text-6xl leading-none text-cream-deep"
                >
                  03
                </span>
                <Eyebrow className="text-blue">The actual reason people stay</Eyebrow>
                <h3 className="mt-4 max-w-md font-display text-[clamp(1.9rem,4.5vw,2.9rem)] text-ink">
                  It is a small club, and that turns out to be the point.
                </h3>
                <p className="mt-5 max-w-lg font-body text-[1.02rem] leading-relaxed text-ink/70">
                  Bridge is played in fixed partnerships, so you do not sit
                  anonymously in a lecture hall — you sit across from the same
                  person for two hours and figure them out. There are ten or so
                  of us who keep coming back, and by week three everyone knows
                  everyone's bidding habits and their coffee order.
                </p>
                <p className="mt-5 max-w-lg font-body text-[1.02rem] leading-relaxed text-ink/70">
                  People show up on Friday nights, in Los Angeles, by choice.
                  That should tell you something.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= PHOTO STRIP ================= */}
      <section className="overflow-hidden border-b-2 border-ink bg-cream-deep py-20 md:py-24">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow className="text-blue">Last year, at the table</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.2rem)] text-ink">
                Every photo here is ours.
              </h2>
            </div>
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-[0.16em] text-blue underline decoration-gold decoration-[3px] underline-offset-[6px] hover:text-blue-deep"
            >
              See a session
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-7 md:grid-cols-4">
            <PhotoCard
              src={groupLineup}
              alt="Club members lined up in front of the whiteboard at the end of a session"
              rot={-2.5}
              index={0}
              imgClassName="aspect-[4/3]"
            />
            <PhotoCard
              src={tablePlay}
              alt="Hands of cards and bidding boxes spread across the long table mid-play"
              rot={2}
              index={1}
              className="md:mt-8"
              imgClassName="aspect-[4/3]"
            />
            <PhotoCard
              src={fullClub}
              alt="A full classroom of club members posing together"
              rot={-1.5}
              index={2}
              imgClassName="aspect-[4/3]"
            />
            <PhotoCard
              src={afterSession}
              alt="Members outside the classroom after a late session"
              rot={3}
              index={3}
              className="md:mt-8"
              imgClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT IS BRIDGE ================= */}
      <section className="border-b-2 border-ink bg-cream py-20 md:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow className="text-blue">If you are wondering</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,3.6rem)] text-ink">
              What even <span className="text-blue">is</span> bridge?
            </h2>
            <div className="mt-6 space-y-5 font-body text-[1.05rem] leading-relaxed text-ink/75">
              <p>
                Four people, two partnerships, one deck. You bid to describe
                your hand to your partner using a restricted vocabulary, then
                you play out the hand and try to make what you promised.
              </p>
              <p>
                It is the most demanding card game there is, and it is the
                reason bridge has been played seriously for a hundred years
                while other card games came and went.
              </p>
              <p className="font-semibold text-ink">
                You do not need to know any of that on your first Friday. That
                is what we are there for.
              </p>
            </div>
            <div className="mt-8">
              <ChunkyLink to="/about" variant="blue">
                Learn the game
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </ChunkyLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[30rem]">
            <PhotoCard
              src={tablePlay}
              alt="Cards, bidding boxes and duplicate boards laid out mid-session"
              rot={-3}
              index={0}
              corner="J♣"
              imgClassName="aspect-[4/3]"
            />
            <PhotoCard
              src={sessionWide}
              alt="Members mid-session around the long table"
              rot={5}
              index={1}
              className="absolute -bottom-10 -right-2 w-[52%] sm:-right-6"
              imgClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="suit-lattice relative overflow-hidden bg-blue-deep py-20 text-center text-cream md:py-28">
        <div className="container relative">
          <BearMark className="mx-auto h-14 w-auto text-gold" />
          <h2 className="mt-8 font-display text-[clamp(2.2rem,7vw,4.2rem)] text-gold text-stamp">
            This Friday, then.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-cream/85">
            {CLUB.meets.day}, {CLUB.meets.time}. We post the room on Discord and
            Instagram every week — whichever one you already have open is fine.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <ChunkyLink href={CLUB.discord} variant="gold">
              <DiscordIcon className="h-[1.15rem] w-[1.15rem]" />
              Join the Discord
            </ChunkyLink>
            <ChunkyLink href={CLUB.instagram} variant="cream">
              <Instagram className="h-[1.15rem] w-[1.15rem]" />
              {CLUB.instagramHandle}
            </ChunkyLink>
          </div>
          <SuitRule className="mt-12 text-cream opacity-30" />
        </div>
      </section>
    </>
  );
};

export default Home;
