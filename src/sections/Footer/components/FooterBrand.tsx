export const FooterBrand = () => (
  <div className="flex flex-col items-start col-span-2">
    <div className="flex items-center gap-3 mb-5">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-300 text-black font-black">
        RB
      </span>
      <span className="text-sky-500 text-xl font-semibold">Ranken Bio Medical Engineering</span>
    </div>
    <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-1">
      Engineering Health Innovation
    </h3>
    <p className="text-gray-500 text-sm md:text-base">
      Teaching biomedical device design, clinical systems, diagnostics, and rehabilitation technology.
    </p>
    <div className="mt-7 rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3">
      <span className="text-cyan-700 text-[10px] font-bold uppercase tracking-widest block mb-1">
        Focus
      </span>
      <p className="text-cyan-900 text-sm font-semibold">Hands-on engineering for patient-centered care</p>
    </div>
  </div>
);
