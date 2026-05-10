export const FeaturedSolutionCard = () => (
  <div className="relative bg-cyan-500 rounded-3xl p-8 h-80 md:h-96 overflow-hidden mt-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center h-9 w-9 bg-cyan-800 rounded-full shrink-0 text-white font-black">
        +
      </div>
      <h3 className="text-white text-2xl font-semibold">Clinical Devices</h3>
    </div>

    <div className="absolute -left-8 -bottom-8 w-[310px] md:w-[380px] pointer-events-none z-10">
      <img
        alt="MRI scanner used in clinical biomedical engineering"
        src="https://commons.wikimedia.org/wiki/Special:FilePath/Modern_3T_MRI.JPG"
        className="w-full rounded-3xl object-cover drop-shadow-2xl"
      />
    </div>

    <div className="ml-36 md:ml-48 mt-2">
      <p className="text-white text-lg md:text-xl leading-relaxed">
        Explore how patient monitors, imaging systems, infusion technology, and
        safety checks move from engineering requirements into real clinical use.
      </p>
    </div>
  </div>
);
