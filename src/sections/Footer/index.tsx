import { FooterMain } from "./components/FooterMain";
import { FooterBottom } from "./components/FooterBottom";

export const Footer = () => (
  <footer className="relative bg-white overflow-hidden">
    <FooterMain />
    <div className="absolute bottom-24 inset-x-0 flex items-center justify-center pointer-events-none h-24 md:h-48">
      <span className="text-gray-100 text-5xl md:text-[160px] font-extrabold leading-none whitespace-nowrap select-none">
        RANKEN BIO
      </span>
    </div>
    <FooterBottom />
  </footer>
);
