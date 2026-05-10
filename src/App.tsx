import { Navbar } from "@/sections/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { TrustedBusinessesSection } from "@/sections/TrustedBusinessesSection";
import { SolutionsSection } from "@/sections/SolutionsSection";
import { IntegrationsSection } from "@/sections/IntegrationsSection";
import { IndustrySection } from "@/sections/IndustrySection";
import { TeamSection } from "@/sections/TeamSection";
import { FAQSection } from "@/sections/FAQSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBusinessesSection />
        <SolutionsSection />
        <IntegrationsSection />
        <TeamSection />
        <IndustrySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
