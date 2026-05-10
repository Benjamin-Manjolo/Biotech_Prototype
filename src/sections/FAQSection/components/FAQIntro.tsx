export const FAQIntro = () => (
  <div>
    <h2 className="text-xl md:text-4xl font-bold tracking-tight mb-3 md:mb-5">
      <span className="text-white">Frequently Asked</span>
      <br />
      <span className="text-sky-400">Questions</span>
    </h2>
    <p className="text-zinc-300 text-base md:text-xl max-w-sm mb-10 md:mb-14 leading-relaxed">
      Learn how our biomedical solutions team supports procurement, installation,
      preventive maintenance, repairs, device documentation, and custom health
      technology projects.
    </p>

    <div className="flex items-start gap-8 md:gap-12 mt-10 md:mt-20">
      <div className="flex flex-col items-center relative">
        <span className="h-14 w-14 md:h-20 md:w-20 rounded-full border-2 border-sky-400/60 text-sky-300 flex items-center justify-center text-2xl md:text-4xl font-black translate-x-5 -translate-y-2 md:translate-x-12 md:-translate-y-3">
          ?
        </span>
        <a
          href="#contact"
          className="text-white text-xs md:text-sm font-semibold border-2 border-sky-500 rounded-full px-5 py-2 md:px-7 md:py-2.5 hover:bg-sky-500 transition-colors"
        >
          Contact Us
        </a>
      </div>
      <p className="text-zinc-300 text-sm md:text-lg leading-relaxed ml-1 -mt-1 md:ml-4 md:-mt-4">
        Need a service plan, equipment quote, or technical consultation?
      </p>
    </div>
  </div>
);
