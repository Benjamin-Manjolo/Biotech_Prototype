export type LogoItemProps = {
  alt: string;
  name: string;
  logoText: string;
  colorClass: string;
  description: string;
};

export const LogoItem = ({ alt, name, logoText, colorClass, description }: LogoItemProps) => (
  <div className="flex items-stretch justify-center shrink-0 px-3 md:px-4">
    <div
      aria-label={alt}
      className="group flex min-w-[220px] md:min-w-[260px] flex-col justify-between rounded-3xl border border-cyan-100 bg-white p-5 shadow-sm hover:shadow-xl hover:shadow-cyan-900/10 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white text-sm font-black tracking-tight ${colorClass}`}>
          {logoText}
        </div>
        <div>
          <h3 className="text-gray-950 font-black leading-tight">{name}</h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-600">
            Malawi based
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-500">{description}</p>
    </div>
  </div>
);
