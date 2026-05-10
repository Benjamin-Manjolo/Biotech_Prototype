import { LogoItem } from "./LogoItem";

const LOGOS = [
  { alt: "Biomedical Device Design", label: "Device Design", h: "h-12 md:h-16" },
  { alt: "Clinical Engineering", label: "Clinical Engineering", h: "h-12 md:h-16" },
  { alt: "Medical Imaging", label: "Medical Imaging", h: "h-12 md:h-16" },
  { alt: "Biomaterials", label: "Biomaterials", h: "h-12 md:h-16" },
  { alt: "Rehabilitation Technology", label: "Rehab Tech", h: "h-12 md:h-16" },
  { alt: "Diagnostics", label: "Diagnostics", h: "h-12 md:h-16" },
  { alt: "Lab Automation", label: "Lab Automation", h: "h-12 md:h-16" },
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
        <LogoItem key={i} alt={logo.alt} label={logo.label} heightClass={logo.h} />
      ))}
    </div>
  </div>
);
