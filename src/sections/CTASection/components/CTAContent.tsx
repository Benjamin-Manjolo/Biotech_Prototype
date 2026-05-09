export const CTAContent = () => (
  <div className="bg-gradient-to-br from-[#35acce] via-[#277f98] to-[#41b5768] rounded-[32px] md:rounded-[40px] p-6 md:p-12 h-64 md:h-[340px] flex flex-col md:flex-row items-center relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-x-1/4 pointer-events-none" />

    <div className="relative">
      <h2 className="text-white text-2xl md:text-5xl font-medium leading-tight mb-2 md:mb-3">
        Join the{" "}
        <span className="text-sky-300 font-bold">10,000+</span>{" "}
        businesses
      </h2>
      <p className="text-white/80 text-sm md:text-xl leading-relaxed">
        Simplifying their finances with PayChangu.
      </p>
    </div>

    <div className="relative flex items-center justify-end gap-3 md:gap-4 mt-6 md:mt-0 md:ml-auto">
      <img
        alt="Decorative arrow"
        src="https://c.animaapp.com/moys5pp3xEfm8f/assets/image-4.png"
        className="h-14 md:h-20 w-auto object-contain pointer-events-none translate-x-14 md:translate-x-20 -translate-y-14 md:-translate-y-20 -scale-x-100 opacity"
      />
      <a
        href="https://dashboard.paychangu.com/register"
        className="text-white text-sm md:text-base font-semibold whitespace-nowrap border-2 border-white rounded-full px-5 md:px-7 py-2 md:py-2.5 hover:bg-white/20 transition-colors"
      >
        Get Started Free
      </a>
      <a
        href="/contact"
        className="text-white text-sm md:text-base font-semibold whitespace-nowrap border-2 border-white/40 rounded-full px-5 md:px-7 py-2 md:py-2.5 hover:bg-white/10 transition-colors"
      >
        Contact Us
      </a>
    </div>
  </div>
);
