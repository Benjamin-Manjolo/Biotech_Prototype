export const CTAContent = () => (
  <div id="contact" className="bg-gradient-to-br from-[#35acce] via-[#277f98] to-[#1f8a5d] rounded-[32px] md:rounded-[40px] p-6 md:p-12 h-64 md:h-[340px] flex flex-col md:flex-row items-center relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-x-1/4 pointer-events-none" />

    <div className="relative">
      <h2 className="text-white text-2xl md:text-5xl font-medium leading-tight mb-2 md:mb-3">
        Build technology that improves patient care
      </h2>
      <p className="text-white/80 text-sm md:text-xl leading-relaxed">
        Request information about biomedical engineering labs, projects, and partnerships at Ranken.
      </p>
    </div>

    <div className="relative flex items-center justify-end gap-3 md:gap-4 mt-6 md:mt-0 md:ml-auto">
      <span className="hidden md:flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 text-white text-4xl font-black translate-x-10 -translate-y-16">
        +
      </span>
      <a
        href="mailto:info@rankenbiomedical.example"
        className="text-white text-sm md:text-base font-semibold whitespace-nowrap border-2 border-white rounded-full px-5 md:px-7 py-2 md:py-2.5 hover:bg-white/20 transition-colors"
      >
        Email Admissions
      </a>
      <a
        href="#solutions"
        className="text-white text-sm md:text-base font-semibold whitespace-nowrap border-2 border-white/40 rounded-full px-5 md:px-7 py-2 md:py-2.5 hover:bg-white/10 transition-colors"
      >
        View Programs
      </a>
    </div>
  </div>
);
