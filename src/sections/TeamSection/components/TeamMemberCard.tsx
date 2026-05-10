import { ExternalLink } from "lucide-react";

type Highlight = {
  label: string;
  value: string;
};

const HIGHLIGHTS: Highlight[] = [
  { label: "Focus", value: "Affordable medical devices" },
  { label: "Innovation", value: "Portable compression therapy system" },
  { label: "Impact", value: "Local solutions for Malawian healthcare" },
];

export const TeamMemberCard = () => (
  <article className="relative overflow-hidden rounded-[36px] bg-white p-6 md:p-8 shadow-2xl shadow-cyan-900/10 border border-cyan-100">
    <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-100/70 blur-3xl translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-emerald-100/70 blur-3xl -translate-x-1/3 translate-y-1/3" />

    <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-8">
      <div className="shrink-0">
        <div className="flex h-32 w-32 md:h-40 md:w-40 items-center justify-center rounded-[32px] bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-300 text-white text-4xl md:text-5xl font-black shadow-xl shadow-cyan-500/20">
          RC
        </div>
      </div>

      <div className="relative flex-1">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <span className="inline-flex rounded-full bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 mb-3">
              Chief Technology Officer
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-gray-950">
              Ranken Chisambi
            </h3>
            <p className="mt-2 text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
              Biomedical engineering innovator focused on practical, low-cost
              healthcare technology for Malawi and other resource-limited
              settings.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/ranken-chisambi/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200 px-5 py-2.5 text-sm font-bold text-cyan-700 hover:bg-cyan-50 transition-colors"
          >
            LinkedIn
            <ExternalLink size={15} />
          </a>
        </div>

        <p className="text-gray-600 leading-relaxed mb-5">
          Public reporting describes Ranken as a final-year biomedical
          engineering student at the Malawi University of Business and Applied
          Sciences whose work includes a portable compression therapy device,
          the Neo Smart Baby Incubator, and a cardiac monitoring device. His
          approach emphasizes locally available parts, maintainability, and
          medical technologies that can be evaluated with Malawian hospitals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-bold text-slate-800 leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </article>
);
