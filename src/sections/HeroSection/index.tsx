import { HeroContent } from "./components/HeroContent";
import { ProductShowcaseGrid } from "./components/ProductShowcaseGrid";

export const HeroSection = () => (
  <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_40%,rgba(3,188,225,0.08),transparent)]" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12 md:pt-32 md:pb-0">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12 gap-10">
        <HeroContent />
        <ProductShowcaseGrid />
      </div>
    </div>
  </section>
);
