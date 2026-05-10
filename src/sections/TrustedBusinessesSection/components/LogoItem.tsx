export type LogoItemProps = { alt: string; label: string; heightClass: string };

export const LogoItem = ({ alt, label, heightClass }: LogoItemProps) => (
  <div className="flex items-center justify-center shrink-0 px-4 md:px-6">
    <div
      aria-label={alt}
      className={`flex items-center justify-center rounded-2xl border border-cyan-100 bg-white px-6 md:px-8 text-cyan-800 font-bold shadow-sm ${heightClass}`}
    >
      {label}
    </div>
  </div>
);
