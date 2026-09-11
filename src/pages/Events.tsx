import { Clock, Instagram, MapPin, Pizza, Users } from "lucide-react";
import { ChunkyLink, DiscordIcon, Eyebrow, PageHeader, PhotoCard } from "@/components/Bits";
import { CLUB } from "@/lib/club";

import sessionWide from "@/assets/photos/session-wide.jpg";
import tablePlay from "@/assets/photos/table-play.jpg";
import pizzaNight from "@/assets/photos/pizza-night.jpg";
import groupLineup from "@/assets/photos/group-lineup.jpg";
import afterSession from "@/assets/photos/after-session.jpg";
import fullClub from "@/assets/photos/full-club.jpg";
import tableSelfie from "@/assets/photos/table-selfie.jpg";

/** A session, hour by hour. Times are the shape of the night, not a contract. */
const runOfShow = [
  {
    time: "6:00",
    title: "Doors and pizza",
    body: "Boxes open, people drift in, nobody is late in any meaningful sense. If it is your first week this is the easiest possible moment to arrive.",
  },
  {
    time: "6:20",
    title: "The lesson",
    body: "Twenty minutes on one idea — an opening bid, a defensive signal, how to count a suit. Aimed at whoever is newest in the room that week.",
  },
  {
    time: "6:45",
    title: "Play",
    body: "Duplicate boards, rotating partners, roughly an hour and a half of actual bridge. Someone experienced floats between tables.",
  },
  {
    time: "8:00",
    title: "Post-mortem",
    body: "Scores go up, the interesting hands get argued about, and a few people stay late to keep arguing about them.",
  },
];

const facts = [
  { icon: Clock, label: "When", value: `${CLUB.meets.day}, ${CLUB.meets.time}` },
  { icon: MapPin, label: "Where", value: CLUB.meets.placeShort },
  { icon: Pizza, label: "Food", value: "Free pizza, every week" },
  { icon: Users, label: "Who", value: "Any level, any year, no signup" },
];

const Events = () => (
  <>
    <PageHeader
      eyebrow="Sessions"
      title={
        <>
          Friday nights,
          <br />
          six till eight.
        </>
      }
      lede="One session a week, all quarter. Turn up to half of them and you get paid for the hours. Turn up to one and you will still have eaten."
    />

    {/* -------- The facts strip -------- */}
    <section className="border-b-2 border-ink bg-blue-deep py-12">
      <div className="container grid gap-px overflow-hidden rounded-xl border-2 border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.label} className="bg-cream p-6">
              <Icon className="h-5 w-5 text-blue" aria-hidden />
              <p className="eyebrow mt-4 text-ink/45">{f.label}</p>
              <p className="mt-1.5 font-display text-[1.35rem] leading-tight text-ink">
                {f.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>

    {/* -------- Run of show -------- */}
    <section className="border-b-2 border-ink bg-cream py-20 md:py-28">
      <div className="container grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Eyebrow className="text-blue">How a night runs</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] text-ink">
            Two hours, roughly like this.
          </h2>

          {/* The time badges sit in their own gutter to the left of the rule,
              so the rail is `ml-` past them and the copy is `pl-` past the rule. */}
          <ol className="mt-12 ml-[4.75rem] border-l-2 border-ink pl-7">
            {runOfShow.map((s) => (
              <li key={s.time} className="relative pb-11 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[4.75rem] top-0.5 flex h-9 w-[3.5rem] items-center justify-center rounded-md border-2 border-ink bg-gold font-body text-[0.8rem] font-bold text-ink shadow-[2px_2px_0_hsl(var(--ink))]"
                >
                  {s.time}
                </span>
                <h3 className="pt-1 font-display text-[1.6rem] leading-none text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-lg font-body leading-relaxed text-ink/70">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:mt-10">
          <PhotoCard
            src={sessionWide}
            alt="Boards being set up around the long table at the start of a session"
            rot={-3.5}
            index={0}
            corner="A♠"
            imgClassName="aspect-[4/3]"
            caption="Six o'clock. Boards out, pizza open."
          />
          <PhotoCard
            src={tablePlay}
            alt="Hands of cards mid-play with bidding boxes on the table"
            rot={4}
            index={1}
            className="mt-8"
            imgClassName="aspect-[4/3]"
            caption="Seven. Nobody is talking about anything else."
          />
        </div>
      </div>
    </section>

    {/* -------- Getting paid -------- */}
    <section className="suit-lattice relative overflow-hidden border-b-2 border-ink bg-blue py-20 text-cream md:py-28">
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <Eyebrow className="text-gold">The stipend</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,6vw,3.6rem)] text-gold text-stamp">
            Half the sessions.
            <br />
            That is the whole rule.
          </h2>
          <p className="mt-7 max-w-xl font-body text-[1.05rem] leading-relaxed text-cream/85">
            Attend at least half of a quarter's sessions and you are paid{" "}
            <strong className="text-gold">{CLUB.pay.rate} {CLUB.pay.unit}</strong>{" "}
            for the time you spend learning. There is no application, no
            interview and no minimum skill level — the only thing being measured
            is whether you showed up.
          </p>
          <p className="mt-5 max-w-xl font-body text-[0.92rem] leading-relaxed text-cream/60">
            Message us on either channel if you want the exact count for the
            current quarter; it is tracked week by week and anyone can check
            theirs.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ChunkyLink href={CLUB.discord} variant="gold">
              <DiscordIcon className="h-[1.15rem] w-[1.15rem]" />
              Ask on Discord
            </ChunkyLink>
            <ChunkyLink href={CLUB.instagram} variant="cream">
              <Instagram className="h-[1.15rem] w-[1.15rem]" />
              Ask on Instagram
            </ChunkyLink>
          </div>
        </div>

        <PhotoCard
          src={pizzaNight}
          alt="Members behind a table of pizza boxes at the end of a session"
          rot={3}
          index={0}
          className="mx-auto w-full max-w-[26rem]"
          imgClassName="aspect-[4/3]"
        />
      </div>
    </section>

    {/* -------- Nobody here has finished learning -------- */}
    <section className="border-b-2 border-ink bg-cream py-20 md:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <PhotoCard
          src={fullClub}
          alt="The whole club gathered together at the end of a session"
          rot={-2}
          index={0}
          className="mx-auto w-full max-w-[30rem]"
          imgClassName="aspect-[4/3]"
        />
        <div>
          <Eyebrow className="text-blue">What the room is like</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] text-ink">
            Every person here was a complete beginner not very long ago.
          </h2>
          <div className="mt-6 space-y-5 font-body text-[1.05rem] leading-relaxed text-ink/75">
            <p>
              That is not a recruiting line, it is just the situation. Almost
              everyone in the club learned bridge at this table, most of them
              within the last year or two, and the people running the sessions
              are still learning it themselves — including whoever is teaching
              you on your first Friday.
            </p>
            <p>
              Which means nobody is going to sigh at you for a bad bid, because
              everyone in the room made the same one recently enough to remember
              it. Questions are the normal mode of the evening. Hands get
              replayed. People say &ldquo;wait, why did that work?&rdquo; out
              loud, and someone answers, and sometimes the answer is that they
              are not sure either.
            </p>
            <p className="font-semibold text-ink">
              It is a friendly room full of people who are all mid-way through
              the same thing. Come and be mid-way through it with us.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* -------- Gallery -------- */}
    <section className="border-b-2 border-ink bg-cream-deep py-20 md:py-24">
      <div className="container">
        <div className="max-w-xl">
          <Eyebrow className="text-blue">From last year</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.2rem)] text-ink">
            The same room, most Fridays.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          <PhotoCard src={groupLineup} alt="Members lined up together after a session" rot={-2} index={0} imgClassName="aspect-square" />
          <PhotoCard src={tableSelfie} alt="A selfie across the table mid-session" rot={2.5} index={1} className="lg:mt-8" imgClassName="aspect-square" />
          <PhotoCard src={afterSession} alt="Members outside the room after a late session" rot={-3} index={2} imgClassName="aspect-square" />
          <PhotoCard src={pizzaNight} alt="Pizza boxes and members at the end of the night" rot={2} index={3} className="lg:mt-8" imgClassName="aspect-square" />
        </div>
      </div>
    </section>

    {/* -------- Closing -------- */}
    <section className="bg-ink py-16 text-center text-cream">
      <div className="container">
        <p className="font-display text-[clamp(1.5rem,4.5vw,2.4rem)] leading-tight text-gold">
          The room changes. The Friday does not.
        </p>
        <p className="mx-auto mt-5 max-w-lg font-body leading-relaxed text-cream/60">
          We post the location on Discord and Instagram every week, usually a
          few days ahead. That is the one thing worth checking before you come.
        </p>
      </div>
    </section>
  </>
);

export default Events;
