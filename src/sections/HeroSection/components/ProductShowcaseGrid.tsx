const Column1Items = () => (
  <>
    <div className="relative bg-cyan-800 rounded-2xl md:rounded-[32px] p-4 md:p-7 h-[90px] md:h-[140px] flex flex-col justify-center overflow-hidden">
      <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/60">
        NEW
      </span>
      <h3 className="text-white text-sm md:text-xl font-bold leading-snug mb-0.5">
        Capital
      </h3>
      <p className="text-white/80 text-[9px] md:text-xs font-medium">
        Quick access to flexible loans.
      </p>
    </div>
    <div className="rounded-2xl md:rounded-[40px] overflow-hidden h-40 md:h-72 shrink-0 shadow-xl">
      <img
        src="https://c.animaapp.com/moys5pp3xEfm8f/assets/image_1-B49x3Ngi.png"
        alt="Restaurant business"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="bg-white rounded-2xl md:rounded-[40px] p-4 md:p-10 h-[90px] md:h-[140px] flex flex-col justify-center">
      <h3 className="text-gray-500 text-xs md:text-xl font-bold leading-snug">
        Built to perform.
        <br />
        Designed to adapt.
      </h3>
    </div>
    <div className="relative bg-cyan-800 rounded-2xl md:rounded-[32px] p-4 md:p-7 h-[90px] md:h-[140px] flex flex-col justify-center overflow-hidden">
      <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/60">
        NEW
      </span>
      <h3 className="text-white text-sm md:text-xl font-bold leading-snug mb-0.5">
        Capital
      </h3>
      <p className="text-white/80 text-[9px] md:text-xs font-medium">
        Quick access to flexible loans.
      </p>
    </div>
  </>
);

const Column2Items = () => (
  <>
    <div className="rounded-2xl md:rounded-[40px] overflow-hidden h-40 md:h-72 shrink-0 shadow-xl">
      <img
        src="https://c.animaapp.com/moys5pp3xEfm8f/assets/image_2-Cre0IV7o.png"
        alt="Woman using phone"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative bg-slate-900 rounded-2xl md:rounded-[32px] p-4 md:p-7 h-[90px] md:h-[140px] flex flex-col justify-center overflow-hidden">
      <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/60">
        NEW
      </span>
      <h3 className="text-white text-sm md:text-xl font-bold leading-snug mb-0.5">
        POS
      </h3>
      <p className="text-white/80 text-[9px] md:text-xs font-medium">
        Modern card machines.
      </p>
    </div>
    <div className="relative rounded-2xl md:rounded-[40px] overflow-hidden h-40 md:h-72 shrink-0 shadow-xl">
      <img
        src="https://c.animaapp.com/moys5pp3xEfm8f/assets/image_3-DOPFTkUu.png"
        alt="PayChangu checkout app"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-600/10" />
    </div>
    <div className="rounded-2xl md:rounded-[40px] overflow-hidden h-40 md:h-72 shrink-0 shadow-xl">
      <img
        src="https://c.animaapp.com/moys5pp3xEfm8f/assets/image_2-Cre0IV7o.png"
        alt="Woman using phone"
        className="w-full h-full object-cover"
      />
    </div>
  </>
);

export const ProductShowcaseGrid = () => (
  <div
    className="flex-1 max-w-[540px] ml-auto h-[620px] md:h-[760px] relative overflow-hidden pointer-events-none"
    style={{
      maskImage:
        "linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)",
    }}
  >
    <div className="grid grid-cols-2 gap-3 md:gap-5 animate-[scroll_40s_linear_infinite]">
      <div className="flex flex-col gap-3 md:gap-5">
        {[0, 1].map((i) => (
          <Column1Items key={i} />
        ))}
      </div>
      <div className="flex flex-col gap-3 md:gap-5 pt-10 md:pt-14">
        {[0, 1].map((i) => (
          <Column2Items key={i} />
        ))}
      </div>
    </div>
  </div>
);
