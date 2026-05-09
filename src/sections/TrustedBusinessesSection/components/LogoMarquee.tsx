import { LogoItem } from "./LogoItem";

const LOGOS = [
  { alt: "Zonse Lotto", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/zonse_lotto_1-CM9EzoWk.png", h: "h-14 md:h-24" },
  { alt: "Changu", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/Changulogo-BdpxbdpN.png", h: "h-14 md:h-24" },
  { alt: "888bets", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/888bet-logo-BSV1kAod.png", h: "h-6 md:h-10" },
  { alt: "Betway", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/image-1.svg", h: "h-6 md:h-8" },
  { alt: "Malawi Government", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/994px-Coat_of_arms_of_Malawi.svg_-DimctDxW.webp", h: "h-10 md:h-16" },
  { alt: "Yellow Card", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/yellow-card-logo-png_seeklogo-446595-BYpGHWfs.png", h: "h-14 md:h-24" },
  { alt: "Sunday Soiree", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/sunday_soiree-BybMiNMe.png", h: "h-14 md:h-24" },
  { alt: "Amaryllis Hotel", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/amaryllis_nobg-BJy-zdbv.png", h: "h-12 md:h-24" },
  { alt: "WSB", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/wsb-logo-2026-Bh9w9mNG.png", h: "h-7 md:h-10" },
  { alt: "Times", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/timeslogo-CEHrGtxg.png", h: "h-10 md:h-14" },
  { alt: "NPL", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/NPLlogo-o4ZeHS9k.png", h: "h-11 md:h-16" },
];

export const LogoMarquee = () => (
  <div
    className="relative overflow-hidden"
    style={{
      maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
    }}
  >
    <div className="flex animate-marquee w-max">
      {[...LOGOS, ...LOGOS].map((logo, i) => (
        <LogoItem key={i} alt={logo.alt} src={logo.src} heightClass={logo.h} />
      ))}
    </div>
  </div>
);
