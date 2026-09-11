import { Instagram } from "lucide-react";
import {
  ChunkyLink,
  DiscordIcon,
  Eyebrow,
  PageHeader,
  PhotoCard,
  SuitRule,
} from "@/components/Bits";
import { CLUB } from "@/lib/club";

import crewSelfie from "@/assets/photos/crew-selfie.jpg";
import groupLineup from "@/assets/photos/group-lineup.jpg";
import pizza from "@/assets/photos/pizza.jpg";

const steps = [
  {
    n: "01",
    title: "Follow us somewhere",
    body: "Discord or Instagram — we post the room, the week's lesson and everything else in both, and the club is split fairly evenly between them. Pick whichever you already open.",
  },
  {
    n: "02",
    title: "Turn up on a Friday",
    body: "Any Friday. You do not need to tell anyone you are coming, and you do not need to bring anything — cards, boards and pizza are all handled.",
  },
  {
    n: "03",
    title: "Sit down and play",
    body: "You will be put at a table with people who were also new not long ago. By the end of the night you will have played real hands.",
  },
];

const faqs = [
  {
    q: "Do I need to know how to play?",
    a: "No — and most people who show up do not. Nearly everyone in the club learned here. If you have never held a bridge hand, Friday is a completely normal time to start.",
  },
  {
    q: "Is the $15 an hour real?",
    a: `Yes. ${CLUB.pay.condition} There is no application and no skill requirement attached to it; the only condition is attendance.`,
  },
  {
    q: "What do I need to bring?",
    a: "Yourself. Cards, bidding boxes and duplicate boards are all provided, and the pizza is free. Bringing a friend is encouraged — bridge takes four.",
  },
  {
    q: "Is there a membership fee?",
    a: "No dues, no tryouts, no commitment. Come once and never again if you like; nobody will chase you.",
  },
  {
    q: "Can I come if I can only make some weeks?",
    a: "Of course. Half the quarter's sessions is the threshold for the stipend, but it is not a threshold for being welcome. Drop in when you can.",
  },
  {
    q: "I already play. Is this too beginner for me?",
    a: "Not at all — experienced players are badly needed and end up teaching a bit, which is its own kind of fun. Come find a partner.",
  },
];

const JoinUs = () => (
  <>
    <PageHeader
      eyebrow="Join"
      title={
        <>
          There is no
          <br />
          sign-up form.
        </>
      }
      lede="Follow us in whichever place you already check, so you know which room it is, then walk in on a Friday. That is the entire process, and it has been the entire process for years."
    />

    {/* -------- Three steps -------- */}
    <section className="border-b-2 border-ink bg-cream py-20 md:py-28">
      <div className="container">
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="keyline relative flex flex-col bg-white p-8"
            >
              <span
                aria-hidden
                className="font-display text-[3.4rem] leading-none text-gold text-stamp"
              >
                {s.n}
              </span>
              <h2 className="mt-5 font-display text-[1.7rem] leading-tight text-ink">
                {s.title}
              </h2>
              <p className="mt-4 font-body leading-relaxed text-ink/70">{s.body}</p>
            </li>
          ))}
        </ol>

        {/* Two channels, deliberately equal — the club is split between them. */}
        <div className="mt-20 max-w-2xl">
          <Eyebrow className="text-blue">Either one works</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,5vw,3rem)] text-ink">
            We post everything in both places.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="keyline flex flex-col justify-between gap-8 bg-blue p-9 text-cream">
            <div>
              <DiscordIcon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-display text-[1.9rem] leading-tight text-gold">
                Discord
              </h3>
              <p className="mt-3 font-body leading-relaxed text-cream/80">
                Room announcements, the week's lesson topic, partner-finding, and
                a running argument about a hand from three weeks ago.
              </p>
            </div>
            <ChunkyLink href={CLUB.discord} variant="gold" className="w-full">
              <DiscordIcon className="h-[1.15rem] w-[1.15rem]" />
              Join the server
            </ChunkyLink>
          </div>

          <div className="keyline flex flex-col justify-between gap-8 bg-red p-9 text-cream">
            <div>
              <Instagram className="h-8 w-8 text-cream" />
              <h3 className="mt-5 font-display text-[1.9rem] leading-tight text-cream">
                Instagram
              </h3>
              <p className="mt-3 font-body leading-relaxed text-cream/85">
                The weekly flyer, the room, and photos from the last session.
                Follow it if you would rather the reminder turned up in a feed
                you already scroll.
              </p>
            </div>
            <ChunkyLink href={CLUB.instagram} variant="cream" className="w-full">
              <Instagram className="h-[1.15rem] w-[1.15rem]" />
              Follow {CLUB.instagramHandle}
            </ChunkyLink>
          </div>
        </div>
      </div>
    </section>

    {/* -------- FAQ -------- */}
    <section className="border-b-2 border-ink bg-cream-deep py-20 md:py-28">
      <div className="container grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow className="text-blue">Before you ask</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,5.5vw,3.2rem)] text-ink">
            The six questions we always get.
          </h2>
          <PhotoCard
            src={pizza}
            alt="An open pizza box beside duplicate bridge boards"
            rot={-3}
            index={0}
            className="mt-10 hidden w-full max-w-[18rem] lg:block"
            imgClassName="aspect-[4/3]"
            caption="Question seven is usually about the pizza. Yes, it is free."
          />
        </div>

        <dl className="divide-y-2 divide-ink border-y-2 border-ink">
          {faqs.map((f) => (
            <div key={f.q} className="py-7">
              <dt className="font-display text-[1.35rem] leading-tight text-ink md:text-[1.5rem]">
                {f.q}
              </dt>
              <dd className="mt-3 font-body leading-relaxed text-ink/75">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* -------- Closing -------- */}
    <section className="suit-lattice relative overflow-hidden bg-blue-deep py-20 text-cream md:py-24">
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <h2 className="font-display text-[clamp(2rem,6vw,3.6rem)] text-gold text-stamp">
            Come and eat our pizza.
          </h2>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-cream/85">
            {CLUB.meets.day}, {CLUB.meets.time}. Bring nothing, know nothing, sit
            down anyway. It works out.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ChunkyLink href={CLUB.discord} variant="gold">
              <DiscordIcon className="h-[1.15rem] w-[1.15rem]" />
              Join the Discord
            </ChunkyLink>
            <ChunkyLink href={CLUB.instagram} variant="cream">
              <Instagram className="h-[1.15rem] w-[1.15rem]" />
              {CLUB.instagramHandle}
            </ChunkyLink>
          </div>
          <SuitRule className="mt-12 justify-start text-cream opacity-30" />
        </div>

        <div className="relative mx-auto w-full max-w-[24rem]">
          <PhotoCard
            src={crewSelfie}
            alt="A crowd of club members squeezed into a selfie"
            rot={4}
            index={0}
            imgClassName="aspect-[4/3]"
          />
          <PhotoCard
            src={groupLineup}
            alt="Members lined up in front of the whiteboard"
            rot={-6}
            index={1}
            className="absolute -bottom-10 -left-4 w-[52%]"
            imgClassName="aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  </>
);

export default JoinUs;
