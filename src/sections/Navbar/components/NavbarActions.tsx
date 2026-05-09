export const NavbarActions = () => (
  <div className="hidden md:flex items-center gap-4">
    <a
      href="https://dashboard.paychangu.com/login"
      className="text-white font-medium text--[15px] border border-white/30 rounded-full px-6 h-11 flex items-center hover:bg-white/10 transition-colors"
    >
      Log In
    </a>
    <a
      href="https://dashboard.paychangu.com/register"
      className="text-black font-semibold text-[15px] bg-white rounded-full px-6 h-11 flex items-center hover:bg-sky-100 transition-colors"
    >
      Get Started
    </a>
  </div>
);
