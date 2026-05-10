export const NavbarBrand = () => (
  <a href="/" className="flex items-center gap-3 shrink-0">
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-300 to-emerald-300 text-black font-black shadow-lg shadow-cyan-500/20">
      RB
    </span>
    <span className="flex flex-col leading-none">
      <span className="text-white text-base md:text-lg font-semibold tracking-tight">
        Ranken Bio
      </span>
      <span className="text-sky-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
        Medical Engineering
      </span>
    </span>
  </a>
);
