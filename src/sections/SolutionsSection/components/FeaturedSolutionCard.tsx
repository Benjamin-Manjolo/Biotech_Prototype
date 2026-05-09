export const FeaturedSolutionCard = () => (
  <div className="relative bg-cyan-400 rounded-3xl p-8 h-80 md:h-96 overflow-hidden mt-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center h-9 w-9 bg-cyan-700 rounded-full shrink-0">
        <img
          src="https://c.animaapp.com/moys5pp3xEfm8f/assets/icon-4.svg"
          alt="Card machine icon"
          className="h-5 w-5"
        />
      </div>
      <h3 className="text-white text-2xl font-semibold">Card Machine</h3>
    </div>

    {/* Card machine image — positioned left */}
    <div className="absolute -left-10 -bottom-8 w-[300px] md:w-[360px] pointer-events-none z-10">
      <img
        alt="PayChangu card machine"
        src="https://c.animaapp.com/moys5pp3xEfm8f/assets/wei-C5o-LV3u.png"
        className="w-full object-contain drop-shadow-2xl"
      />
    </div>

    <div className="ml-36 md:ml-44 mt-2">
      <p className="text-white text-lg md:text-xl leading-relaxed">
        Reliable, fast, and easy to use — PayChangu card machines are built to
        keep your business moving.
      </p>
    </div>
  </div>
);
