export const NavbarActions = () => (
  <div className="hidden md:flex items-center gap-4">
    <a
      href="#faq"
      className="text-white font-medium text-[15px] border border-white/30 rounded-full px-6 h-11 flex items-center hover:bg-white/10 transition-colors"
    >
      FAQs
    </a>
    <a
      href="#contact"
      className="text-black font-semibold text-[15px] bg-white rounded-full px-6 h-11 flex items-center hover:bg-sky-100 transition-colors"
    >
      Request Info
    </a>
  </div>
);
