import { ArrowUpRight, Instagram } from "lucide-react";
import FinesseDemo from "@/components/FinesseDemo";
import {
  ChunkyLink,
  DiscordIcon,
  Eyebrow,
  PageHeader,
  PhotoCard,
} from "@/components/Bits";
import { CLUB, RESOURCES } from "@/lib/club";

import tablePlay from "@/assets/photos/table-play.jpg";
import sessionWide from "@/assets/photos/session-wide.jpg";
import tableSelfie from "@/assets/photos/table-selfie.jpg";
import fullClub from "@/assets/photos/full-club.jpg";

/** The four beats of a hand, told plainly. */
const phases = [
  {
    suit: "♠",
    red: false,
    name: "The deal",
    body: "Thirteen cards each, four players, two fixed partnerships sitting opposite one another. You and your partner are one side for the whole hand — you win together or not at all.",
  },
  {
    suit: "♥",
    red: true,
    hard: true,
    name: "The auction",
    body: "The hard part. You are bidding for a contract you will only have to play later — how many tricks you promise to take, and what trumps. But a bid is not really a bet, it is a sentence: with a vocabulary of thirty-eight possible calls you have to convey your strength, your shape and your intentions to a partner who cannot see a single one of your cards. It is learning a language, and it takes about as long.",
  },
  {
    suit: "♦",
    red: true,
    name: "The play",
    body: "Whichever of the two winners first bid the suit the contract ended in becomes the declarer. Their partner lays all thirteen cards face up on the table — that hand is the dummy — and then takes no further part, while declarer plays both hands. Everyone can now see the dummy, and nobody can see the other two hands, so all four players are working from an incomplete picture and every card played is a clue about what is still out there.",
  },
  {
    suit: "♣",
    red: false,
    name: "The score",
    body: "Everyone plays the same deals, so your result gets compared against every other pair who held your cards. Luck evens out. Over a night, the better decisions win.",
  },
];

const misconceptions = [
  {
    myth: "Bridge is a game for retirees.",
    truth:
      "The world's top players are professionals, and plenty of them started in college clubs like this one. It is also, for what it's worth, extremely fun to be the only twenty-year-old in the room who can play.",
  },
  {
    myth: "You need a good memory.",
    truth:
      "You need a system, and the system does the remembering. Counting a hand is a habit you build in a few weeks, not a talent you are born with.",
  },
  {
    myth: "It will take years to be any good.",
    truth:
      "You will play your first real hand on your first night. You will be competent within a quarter. Getting genuinely good does take years — that is rather the appeal.",
  },
];

const AboutPage = () => (
  <>
    <PageHeader
      eyebrow="The game"
      title={
        <>
          Chess has a clock.
          <br />
          Bridge has a partner.
        </>
      }
      lede="It is the hardest card game in the world and the most social one, which is a strange combination and exactly why it has lasted a century."
    />

    {/* -------- The premise -------- */}
    <section className="border-b-2 border-ink bg-cream py-20 md:py-28">
      <div className="container grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Eyebrow className="text-blue">The premise</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] text-ink">
            You are trying to describe your hand to someone who cannot see it.
          </h2>
          <div className="mt-7 space-y-5 font-body text-[1.05rem] leading-relaxed text-ink/75">
            <p>
              That is the whole game. Your partner holds thirteen cards you know
              nothing about, and between you there are twenty-six that need to
              be played as one. The only way to communicate is through the
              bidding — a vocabulary made entirely of numbers and suits,
              and a short one at that.
            </p>
            <p>
              So you learn a language. Then you learn that your opponents are
              listening to every word of it, and are allowed to lie to each
              other in the same language, in front of you.
            </p>
            <p className="font-semibold text-ink">
              It is a very good game. That is the honest pitch.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[28rem] lg:mt-6">
          <PhotoCard
            src={tablePlay}
            alt="Bidding boxes and hands of cards spread across the table mid-auction"
            rot={-3}
            index={0}
            corner="A♥"
            imgClassName="aspect-[4/3]"
            caption="A hand in progress — bidding boxes out, boards ready for the next round."
          />
          <PhotoCard
            src={tableSelfie}
            alt="Members around the table between hands"
            rot={6}
            index={1}
            className="absolute -bottom-12 -right-3 w-[50%]"
            imgClassName="aspect-[4/3]"
          />
        </div>
      </div>
    </section>

    {/* -------- How a hand goes -------- */}
    <section className="border-b-2 border-ink bg-blue py-20 text-cream md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <Eyebrow className="text-gold">How a hand goes</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] text-gold text-stamp">
            Four parts, ten minutes.
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {phases.map((p, i) => (
            <li
              key={p.name}
              className={`keyline relative p-8 md:p-9 ${
                "hard" in p
                  ? "bg-blue-ink text-cream"
                  : "bg-cream text-ink"
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden
                  className={`font-display text-5xl leading-none ${
                    p.red ? "text-red" : "hard" in p ? "text-cream" : "text-ink"
                  }`}
                >
                  {p.suit}
                </span>
                <div>
                  <p className={`eyebrow ${"hard" in p ? "text-gold" : "text-blue"}`}>
                    {"hard" in p ? `Step ${i + 1} — the hard one` : `Step ${i + 1}`}
                  </p>
                  <h3
                    className={`mt-1.5 font-display text-[1.9rem] leading-none ${
                      "hard" in p ? "text-gold" : "text-ink"
                    }`}
                  >
                    {p.name}
                  </h3>
                </div>
              </div>
              <p
                className={`mt-5 font-body leading-relaxed ${
                  "hard" in p ? "text-cream/85" : "text-ink/75"
                }`}
              >
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* -------- Declarer play, with a playable finesse -------- */}
    <section className="border-b-2 border-ink bg-cream py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl">
          <Eyebrow className="text-blue">Step three, in detail</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] text-ink">
            The play looks like the easy half.
          </h2>
          <p className="mt-7 font-body text-[1.05rem] leading-relaxed text-ink/75">
            Declarer sees twenty-six cards — their own and the dummy's — and
            plays both of them. The defenders each see their own thirteen and
            the dummy. So nobody at the table can see everything, and every
            player has to work out the missing half from what has been bid and
            what has already been played. Bridge is a game of incomplete
            information, and that is what makes an apparently obvious card the
            wrong one.
          </p>
        </div>

        {/* What a trick is — the thing everything else is measured in. */}
        <div className="keyline mt-12 grid gap-8 bg-white p-8 md:grid-cols-[auto_1fr] md:gap-12 md:p-10">
          <div className="flex gap-2 self-start">
            {["♠", "♥", "♦", "♣"].map((g, i) => (
              <span
                key={g}
                aria-hidden
                className={`flex h-11 w-8 items-center justify-center rounded-[0.25rem] border-2 border-ink bg-cream text-[0.95rem] shadow-[2px_2px_0_hsl(var(--ink))] ${
                  i === 1 || i === 2 ? "text-red" : "text-ink"
                }`}
              >
                {g}
              </span>
            ))}
          </div>
          <div>
            <h3 className="font-display text-[1.5rem] leading-tight text-ink">
              First, what a trick is
            </h3>
            <p className="mt-3 font-body leading-relaxed text-ink/75">
              Four cards, one from each player, going clockwise. You must follow
              the suit that was led if you hold it. Highest card of the suit led
              takes the trick — and whoever takes it leads the first card of the
              next one. Thirteen cards each, so thirteen tricks, and the contract
              you bid in the auction is a promise about how many you will win.
            </p>
          </div>
        </div>

        {/* The interactive suit combination. */}
        <div className="keyline suit-lattice mt-8 overflow-hidden bg-blue-ink p-5 text-cream sm:p-8 md:p-12">
          <div className="mb-10 max-w-xl">
            <p className="eyebrow text-gold">Try it — you are South</p>
            <h3 className="mt-3 font-display text-[clamp(1.6rem,4vw,2.2rem)] leading-tight text-gold">
              2 tricks. Only one order wins both tricks.
            </h3>
          </div>
          <FinesseDemo />
        </div>
      </div>
    </section>

    {/* -------- Misconceptions -------- */}
    <section className="border-b-2 border-ink bg-cream-deep py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <Eyebrow className="text-blue">Things people say to us</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] text-ink">
            Three objections, answered.
          </h2>
        </div>

        <dl className="mt-12 divide-y-2 divide-ink border-y-2 border-ink">
          {misconceptions.map((m) => (
            <div key={m.myth} className="grid gap-4 py-8 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
              <dt className="font-display text-[1.5rem] leading-tight text-ink/45 line-through decoration-red decoration-[3px] md:text-[1.75rem]">
                {m.myth}
              </dt>
              <dd className="font-body text-[1.02rem] leading-relaxed text-ink/80">
                {m.truth}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* -------- Learning here -------- */}
    <section className="border-b-2 border-ink bg-cream py-20 md:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <PhotoCard
          src={fullClub}
          alt="The full club gathered in a classroom after a teaching session"
          rot={-2}
          index={0}
          className="mx-auto w-full max-w-[32rem]"
          imgClassName="aspect-[4/3]"
        />
        <div>
          <Eyebrow className="text-blue">Learning it here</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.2rem)] text-ink">
            Nobody hands you a rulebook.
          </h2>
          <div className="mt-6 space-y-5 font-body text-[1.05rem] leading-relaxed text-ink/75">
            <p>
              Sessions run as a short lesson and then a lot of play. You are put
              at a table with people at roughly your level, someone experienced
              sits in when a hand goes sideways, and you talk through what
              happened afterwards. That is the entire pedagogy and it works.
            </p>
            <p>
              We use duplicate boards, which means every table plays the same
              deals and you can compare directly against everyone else. It is
              the fastest feedback loop the game has.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ChunkyLink href={CLUB.discord} variant="blue">
              <DiscordIcon className="h-[1.15rem] w-[1.15rem]" />
              Join the Discord
            </ChunkyLink>
            <ChunkyLink href={CLUB.instagram} variant="cream">
              <Instagram className="h-[1.15rem] w-[1.15rem]" />
              {CLUB.instagramHandle}
            </ChunkyLink>
          </div>
        </div>
      </div>
    </section>

    {/* -------- Resources -------- */}
    <section className="border-b-2 border-ink bg-cream-deep py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <Eyebrow className="text-blue">Between Fridays</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.4rem)] text-ink">
            Where to learn it on your own time.
          </h2>
          <p className="mt-6 font-body text-[1.05rem] leading-relaxed text-ink/75">
            None of this is required reading — we teach from scratch every week.
            But bridge rewards the people who play a few extra hands between
            sessions, and all of the below is free or nearly so.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => (
            <li key={r.name}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="keyline group flex h-full flex-col bg-white p-7 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow text-blue">{r.kind}</p>
                  <span
                    aria-hidden
                    className={`font-display text-2xl leading-none ${
                      r.red ? "text-red" : "text-ink"
                    }`}
                  >
                    {r.suit}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-ink group-hover:text-blue">
                  {r.name}
                </h3>
                <p className="mt-3 flex-1 font-body text-[0.95rem] leading-relaxed text-ink/70">
                  {r.body}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 font-body text-[0.82rem] font-bold text-blue">
                  {r.host}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl font-body text-[0.95rem] leading-relaxed text-ink/60">
          If you only click one, make it the first. Five minutes of Pete will
          tell you more about whether you want to play this game than anything
          on this page.
        </p>
      </div>
    </section>

    {/* -------- Closing photo band -------- */}
    <section className="relative overflow-hidden border-b-2 border-ink">
      <img
        src={sessionWide}
        alt="A Friday session in full swing around the long table"
        loading="lazy"
        className="h-[22rem] w-full object-cover md:h-[26rem]"
      />
      <div className="absolute inset-0 bg-blue-ink/70" />
      <div className="container absolute inset-0 flex items-center">
        <p className="max-w-xl font-display text-[clamp(1.6rem,4.5vw,2.8rem)] leading-[1.05] text-cream">
          Somewhere in this photo, someone is about{" "}
          <span className="text-gold">to take a finesse.</span>
        </p>
      </div>
    </section>
  </>
);

export default AboutPage;
