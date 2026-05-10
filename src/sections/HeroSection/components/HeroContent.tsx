import { HeroActions } from "./HeroActions";

export const HeroContent = () => (
  <div className="flex-1 max-w-xl animate-fade-in-up">
    <h1 className="flex flex-col gap-1 mb-6">
      <span className="text-sky-400 text-5xl md:text-7xl font-bold tracking-tight leading-none">
        Biomedical
      </span>
      <span className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight">
        Solutions for Safer
      </span>
      <span className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight">
        Healthcare Systems
      </span>
    </h1>
    <p className="text-white/70 text-base md:text-xl leading-relaxed mb-8 max-w-lg">
      Ranken Bio Medical Engineering supplies, designs, maintains, and supports
      practical medical technologies for hospitals, clinics, laboratories, and
      health innovators across Malawi.
    </p>
    <HeroActions />
  </div>
);
