import { LogoMarquee } from "./components/LogoMarquee";

export const TrustedBusinessesSection = () => (
  <section className="bg-white py-8 md:py-14 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start mb-6 md:mb-8">
        <span className="text-zinc-500 text-xs md:text-sm font-medium border border-zinc-300 rounded-full px-5 py-2">
          Trusted by Over 10,000 businesses
        </span>
      </div>
      <LogoMarquee />
    </div>
  </section>
);
