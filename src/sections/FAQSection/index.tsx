import { FAQIntro } from "./components/FAQIntro";
import { FAQList } from "./components/FAQList";

export const FAQSection = () => (
  <section
    className="bg-cover bg-center py-12 md:py-20"
    style={{
      backgroundImage: "url('https://paychangu.com/FAQ_section.svg')",
      backgroundColor: "#0f172a",
    }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <FAQIntro />
        <FAQList />
      </div>
    </div>
  </section>
);
