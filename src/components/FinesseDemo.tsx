import { useCallback, useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import { PlayingCard } from "@/components/Bits";

/* ---------------------------------------------------------------------------
   A playable suit combination: A-Q opposite two small, with the king missing.

   Two cards per hand, so two tricks and exactly one decision — which of
   dummy's honours to play on the first trick. Play the queen and you take
   both; play the ace and the king kills the queen on the second. There is no
   third line, which is the whole point of the block.

   You play both declarer hands (South and North). The defenders play
   themselves using the two rules that decide this position: second hand plays
   low, fourth hand wins as cheaply as it can. Those rules are what make the
   finesse work, so the puzzle is honest rather than rigged.
   --------------------------------------------------------------------------- */

type Seat = "N" | "E" | "S" | "W";

const VALUE: Record<string, number> = {
  "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, Q: 12, K: 13, A: 14,
};

const DEAL: Record<Seat, string[]> = {
  N: ["A", "Q"],
  E: ["6", "5"],
  S: ["4", "3"],
  W: ["K", "2"],
};

/** Clockwise around the table. */
const NEXT: Record<Seat, Seat> = { N: "E", E: "S", S: "W", W: "N" };

const SEAT_LABEL: Record<Seat, string> = {
  N: "Dummy",
  E: "East",
  S: "You",
  W: "West",
};

const TOTAL_TRICKS = 2;
const DECLARER: Seat[] = ["N", "S"];

type Card = { seat: Seat; rank: string };

type State = {
  hands: Record<Seat, string[]>;
  trick: Card[];
  leader: Seat;
  tricksPlayed: number;
  won: number;
  message: string;
  started: boolean;
};

const initial = (): State => ({
  hands: { N: [...DEAL.N], E: [...DEAL.E], S: [...DEAL.S], W: [...DEAL.W] },
  trick: [],
  leader: "S",
  tricksPlayed: 0,
  won: 0,
  message:
    "South is on lead, which means you play the first card of the trick. Click one of your own cards to begin.",
  started: false,
});

const seatToPlay = (s: State): Seat => {
  let seat = s.leader;
  for (let i = 0; i < s.trick.length; i += 1) seat = NEXT[seat];
  return seat;
};

const bestSoFar = (trick: Card[]) =>
  trick.reduce((best, c) => Math.max(best, VALUE[c.rank]), 0);

/** Second hand plays low; fourth hand wins as cheaply as it can. */
const defenderCard = (hand: string[], trick: Card[]): string => {
  const low = [...hand].sort((a, b) => VALUE[a] - VALUE[b]);
  if (trick.length === 3) {
    const cheapestWinner = low.find((c) => VALUE[c] > bestSoFar(trick));
    if (cheapestWinner) return cheapestWinner;
  }
  return low[0];
};

const describe = (seat: Seat, rank: string, isLead: boolean): string => {
  switch (seat) {
    case "S":
      return isLead
        ? `You lead the ${rank} from your own hand.`
        : `You follow with the ${rank}.`;
    case "N":
      return isLead
        ? `Dummy leads the ${rank}.`
        : `You call for dummy's ${rank}.`;
    case "W":
      if (isLead) return `West leads the ${rank}.`;
      return rank === "K"
        ? "West produces the king."
        : `West follows with the ${rank}, keeping the rest back.`;
    default:
      return isLead ? `East leads the ${rank}.` : `East follows with the ${rank}.`;
  }
};

const playCard = (s: State, seat: Seat, rank: string): State => ({
  ...s,
  started: true,
  hands: { ...s.hands, [seat]: s.hands[seat].filter((c) => c !== rank) },
  trick: [...s.trick, { seat, rank }],
  message: describe(seat, rank, s.trick.length === 0),
});

const resolveTrick = (s: State): State => {
  const best = s.trick.reduce((a, b) => (VALUE[a.rank] > VALUE[b.rank] ? a : b));
  const declarerWon = DECLARER.includes(best.seat);
  const tricksPlayed = s.tricksPlayed + 1;
  const finished = tricksPlayed >= TOTAL_TRICKS;

  return {
    ...s,
    trick: [],
    leader: best.seat,
    tricksPlayed,
    won: s.won + (declarerWon ? 1 : 0),
    message: finished
      ? ""
      : declarerWon
        ? `Trick ${tricksPlayed} to you. Whoever wins a trick leads the next one, so you are on lead again — from ${best.seat === "N" ? "dummy" : "your own hand"}.`
        : `Trick ${tricksPlayed} to the defence, so ${SEAT_LABEL[best.seat]} leads the next one.`,
  };
};

const FinesseDemo = () => {
  const [s, setS] = useState<State>(initial);

  const finished = s.tricksPlayed >= TOTAL_TRICKS;
  const trickFull = s.trick.length === 4;
  const turn = seatToPlay(s);
  const yourTurn = !finished && !trickFull && DECLARER.includes(turn);

  // The defenders play themselves, a beat after it becomes their turn.
  useEffect(() => {
    if (finished || trickFull || DECLARER.includes(turn)) return;
    const t = window.setTimeout(() => {
      setS((cur) => {
        const seat = seatToPlay(cur);
        if (DECLARER.includes(seat) || cur.trick.length === 4) return cur;
        return playCard(cur, seat, defenderCard(cur.hands[seat], cur.trick));
      });
    }, 800);
    return () => window.clearTimeout(t);
  }, [s, finished, trickFull, turn]);

  // Let a completed trick sit on the table before it is swept up.
  useEffect(() => {
    if (!trickFull) return;
    const t = window.setTimeout(
      () => setS((cur) => (cur.trick.length === 4 ? resolveTrick(cur) : cur)),
      1700,
    );
    return () => window.clearTimeout(t);
  }, [trickFull]);

  const play = useCallback((seat: Seat, rank: string) => {
    setS((cur) =>
      DECLARER.includes(seat) &&
      seatToPlay(cur) === seat &&
      cur.trick.length < 4 &&
      cur.tricksPlayed < TOTAL_TRICKS
        ? playCard(cur, seat, rank)
        : cur,
    );
  }, []);

  const cardInTrick = (seat: Seat) => s.trick.find((c) => c.seat === seat) ?? null;

  const winningRank = s.trick.length
    ? s.trick.reduce((a, b) => (VALUE[a.rank] > VALUE[b.rank] ? a : b)).rank
    : null;

  const prompt = finished
    ? null
    : trickFull
      ? "Trick complete…"
      : turn === "S"
        ? s.trick.length === 0
          ? "Your lead — play a card from South"
          : "Your turn — play from South"
        : turn === "N"
          ? "Your turn — call a card from dummy"
          : `${SEAT_LABEL[turn]} to play…`;

  const verdict = !finished
    ? null
    : s.won >= TOTAL_TRICKS
      ? {
          good: true,
          title: "Both tricks. That is the finesse.",
          body: "Because you led from your own hand, West had to commit before dummy played — so the queen slipped past the king, and the ace took the second trick on its own. Two winners out of one honour holding. Play the same two cards in the other order and you get one.",
        }
      : {
          good: false,
          title: s.won === 1 ? "One trick." : "No tricks.",
          body: "The ace won, and then the king ate the queen. Both honours can win, but only if West has to choose before dummy plays — so call for the queen first, while West has already committed, and keep the ace for later. Deal again and try it.",
        };

  const seatCards = (seat: Seat) => {
    const playable = yourTurn && turn === seat;
    return (
      <div className="mt-2.5 flex justify-center gap-1 sm:gap-1.5">
        {DEAL[seat].map((rank) => {
          if (!s.hands[seat].includes(rank)) {
            return (
              <PlayingCard
                key={rank}
                rank={rank}
                suit="♠"
                className="opacity-20 saturate-0"
              />
            );
          }
          return playable ? (
            <button
              key={rank}
              type="button"
              onClick={() => play(seat, rank)}
              aria-label={`Play the ${rank} of spades from ${
                seat === "N" ? "dummy" : "your own hand"
              }`}
              className="rounded-[0.3rem] transition-transform duration-150 hover:-translate-y-1.5"
            >
              <PlayingCard rank={rank} suit="♠" className="ring-[3px] ring-gold" />
            </button>
          ) : (
            <PlayingCard key={rank} rank={rank} suit="♠" />
          );
        })}
      </div>
    );
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-14">
      {/* ---------------- The table ---------------- */}
      <div>
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center justify-items-center gap-x-2 gap-y-5 sm:gap-x-5">
          <div className="col-start-2 row-start-1 text-center">
            <p className="eyebrow text-gold">North — dummy</p>
            {seatCards("N")}
          </div>

          <div className="col-start-1 row-start-2 text-center">
            <p className="eyebrow text-cream/50">West</p>
            {/* Reserve the row height so the label does not jump once a
                defender has run out of cards. */}
            <div className="mt-2.5 flex min-h-[3.2rem] items-center justify-center gap-1 sm:min-h-[4.4rem]">
              {s.hands.W.length ? (
                s.hands.W.map((c) => <PlayingCard key={c} faceDown />)
              ) : (
                <span className="font-body text-[0.7rem] text-cream/25">out</span>
              )}
            </div>
          </div>

          {/* The trick: a 3×3 grid seats each card at its own compass point. */}
          <div className="col-start-2 row-start-2">
            <div className="relative mx-auto grid grid-cols-3 grid-rows-3 place-items-center gap-1 rounded-xl border-2 border-dashed border-cream/20 p-1.5 sm:gap-1.5 sm:p-2">
              {(["N", "E", "S", "W"] as Seat[]).map((seat) => {
                const card = cardInTrick(seat);
                const cell = {
                  N: "col-start-2 row-start-1",
                  E: "col-start-3 row-start-2",
                  S: "col-start-2 row-start-3",
                  W: "col-start-1 row-start-2",
                }[seat];
                return (
                  <span
                    key={seat}
                    className={`${cell} h-[3.2rem] w-[2.2rem] sm:h-[4.4rem] sm:w-[3.1rem]`}
                  >
                    {card ? (
                      <span className="card-drop block">
                        <PlayingCard
                          rank={card.rank}
                          suit="♠"
                          className={
                            trickFull && card.rank === winningRank
                              ? "ring-[3px] ring-gold"
                              : ""
                          }
                        />
                      </span>
                    ) : null}
                  </span>
                );
              })}
              {s.trick.length === 0 ? (
                <span className="col-start-2 row-start-2 font-body text-[0.68rem] text-cream/35">
                  the trick
                </span>
              ) : null}
            </div>
          </div>

          <div className="col-start-3 row-start-2 text-center">
            <p className="eyebrow text-cream/50">East</p>
            {/* Reserve the row height so the label does not jump once a
                defender has run out of cards. */}
            <div className="mt-2.5 flex min-h-[3.2rem] items-center justify-center gap-1 sm:min-h-[4.4rem]">
              {s.hands.E.length ? (
                s.hands.E.map((c) => <PlayingCard key={c} faceDown />)
              ) : (
                <span className="font-body text-[0.7rem] text-cream/25">out</span>
              )}
            </div>
          </div>

          <div className="col-start-2 row-start-3 text-center">
            <p className="eyebrow text-gold">South — you</p>
            {seatCards("S")}
          </div>
        </div>

        <p className="mt-6 text-center font-body text-[0.72rem] leading-relaxed text-cream/40">
          Spades only. You play both of declarer's hands; West and East play
          themselves, and stay face down until they commit a card.
        </p>
      </div>

      {/* ---------------- Goal, prompt, commentary ---------------- */}
      <div className="flex flex-col">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <p className="eyebrow text-gold">Your goal — win both tricks</p>
          <p className="font-body text-[0.78rem] uppercase tracking-[0.16em] text-cream/45">
            {s.won} of {TOTAL_TRICKS} won
          </p>
        </div>

        <p className="mt-4 font-body text-[0.92rem] leading-relaxed text-cream/60">
          You hold the ace and the queen between the two hands you control. The
          king is missing, and it is in one of the two hands you cannot see.
          Two cards each, so two tricks — and one real decision.
        </p>

        {prompt ? (
          <p
            className={`mt-6 font-display text-[1.15rem] leading-tight ${
              yourTurn ? "text-gold" : "text-cream/45"
            }`}
          >
            {prompt}
          </p>
        ) : null}

        <p
          key={s.message}
          className="beat-in mt-3 min-h-[4rem] font-body text-[1.02rem] leading-relaxed text-cream/85 sm:min-h-[5rem]"
        >
          {s.message}
        </p>

        {verdict ? (
          <div
            className={`rounded-xl border-2 p-6 ${
              verdict.good ? "border-gold bg-gold/10" : "border-red/70 bg-red/10"
            }`}
          >
            <p
              className={`font-display text-[1.5rem] leading-tight ${
                verdict.good ? "text-gold" : "text-red"
              }`}
            >
              {verdict.title}
            </p>
            <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-cream/75">
              {verdict.body}
            </p>
            <p className="mt-4 border-t border-cream/20 pt-3 font-body text-[0.85rem] leading-relaxed text-cream/50">
              West held the king this time. Half the time it is East instead —
              and then the finesse loses and one trick is all there is. A coin
              flip still beats a certainty of one.
            </p>
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <button
            type="button"
            onClick={() => setS(initial())}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-gold px-5 py-2.5 font-body text-[0.85rem] font-bold text-ink shadow-[3px_3px_0_hsl(var(--ink))] transition-all duration-150 hover:bg-gold-bright active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_hsl(var(--ink))]"
          >
            <RotateCcw className="h-4 w-4" />
            {s.started ? "Deal again" : "Reset"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinesseDemo;
