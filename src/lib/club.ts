/**
 * Everything factual about the club lives here, so a room change or a new
 * Discord invite is a one-line edit rather than a hunt through four pages.
 */

export const CLUB = {
  name: "Bridge Club @ UCLA",
  discord: "https://discord.gg/BXm7HPEuHQ",
  instagram: "https://www.instagram.com/bridgeclubucla/",
  instagramHandle: "@bridgeclubucla",
  meets: {
    day: "Fridays",
    time: "6–8 PM",
    place: "Posted on Discord & Instagram",
    placeShort: "Room posted weekly",
  },
  pay: {
    rate: "$15",
    unit: "an hour",
    condition:
      "Paid to members who attend at least half of that quarter's sessions.",
  },
} as const;

export const SUITS = [
  { glyph: "♠", red: false, label: "spades" },
  { glyph: "♥", red: true, label: "hearts" },
  { glyph: "♦", red: true, label: "diamonds" },
  { glyph: "♣", red: false, label: "clubs" },
] as const;

/**
 * Where to learn bridge when it isn't Friday. Curated rather than exhaustive —
 * everything here is free (or, for CBO, $5 a year) and open to a beginner.
 */
export const RESOURCES = [
  {
    suit: "♠",
    red: false,
    name: "Bridge with Pete",
    href: "https://www.youtube.com/@BridgeWithPete",
    host: "youtube.com",
    kind: "Start here",
    body: "Peter Hollands has posted a video every week for over a decade. His “Learn to Play Bridge in 5 Minutes” has been watched more than half a million times, and the rest of the channel is him playing hands out loud so you can hear the thinking.",
  },
  {
    suit: "♥",
    red: true,
    name: "Bridge Base Online",
    href: "https://www.bridgebase.com/",
    host: "bridgebase.com",
    kind: "Play tonight",
    body: "The biggest bridge site in the world, and free. Robots will partner you at two in the morning without complaint, which is the single fastest way to get the bidding into your hands.",
  },
  {
    suit: "♦",
    red: true,
    name: "College Bridge Online",
    href: "https://acbl.org/cbo/",
    host: "acbl.org",
    kind: "For students",
    body: "An ACBL club that only college students can enter: daily practice games, plus tournaments on the 1st and 15th with real masterpoints and gift-card prizes. ACBL membership is $5 a year if you are 25 or under.",
  },
  {
    suit: "♣",
    red: false,
    name: "IntoBridge",
    href: "https://intobridge.com/",
    host: "intobridge.com",
    kind: "Play on your phone",
    body: "Unlimited free play in a browser or an app, with no daily hand limit. There is also a free weekly learning game hosted by Larry Cohen, with a postmortem afterwards where the hands get pulled apart.",
  },
  {
    suit: "♠",
    red: false,
    name: "Larry Cohen's articles",
    href: "https://larryco.com/bridge-articles",
    host: "larryco.com",
    kind: "When you want it in writing",
    body: "A Hall of Famer and 25-time national champion writing plainly for beginners. If a concept refuses to land in a video, it is usually because you needed to read it instead.",
  },
  {
    suit: "♥",
    red: true,
    name: "Collegiate Bridge Bowl",
    href: "https://www.acbl.org/portfolio/bridge-bowl/",
    host: "acbl.org",
    kind: "The reason to get good",
    body: "The national college championship. Teams of university players, and a genuine target to point a year of Fridays at — ask us about it if that sounds like your kind of thing.",
  },
] as const;
