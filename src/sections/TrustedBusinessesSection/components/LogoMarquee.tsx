import { LogoItem } from "./LogoItem";

const CLIENTS = [
  {
    alt: "MACRA client logo",
    name: "MACRA",
    logoText: "MACRA",
    colorClass: "bg-gradient-to-br from-sky-600 to-blue-800",
    description: "Malawi Communications Regulatory Authority",
  },
  {
    alt: "UNIPOD client logo",
    name: "UNIPOD",
    logoText: "UNI",
    colorClass: "bg-gradient-to-br from-emerald-500 to-cyan-700",
    description: "Innovation and physical product development hub",
  },
  {
    alt: "NextGen Creatives client logo",
    name: "NextGen Creatives",
    logoText: "NGC",
    colorClass: "bg-gradient-to-br from-fuchsia-500 to-violet-700",
    description: "Creative technology and storytelling partner",
  },
  {
    alt: "mHub Solutions client logo",
    name: "mHub Solutions",
    logoText: "mHub",
    colorClass: "bg-gradient-to-br from-orange-500 to-red-600",
    description: "Malawian innovation, technology, and enterprise ecosystem",
  },
  {
    alt: "Ministry of Health client logo",
    name: "Ministry of Health",
    logoText: "MOH",
    colorClass: "bg-gradient-to-br from-green-600 to-emerald-800",
    description: "Public health institution supporting national healthcare priorities",
  },
];

export const LogoMarquee = () => (
  <div
    className="relative overflow-hidden"
    style={{
      maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
    }}
  >
    <div className="flex animate-marquee w-max py-2">
      {[...CLIENTS, ...CLIENTS].map((client, i) => (
        <LogoItem key={`${client.name}-${i}`} {...client} />
      ))}
    </div>
  </div>
);
