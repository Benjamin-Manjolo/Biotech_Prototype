export type FeatureCardProps = {
  badgeText: string;
  title: string;
  description: string;
  variant?: "dark" | "slate";
};

export const FeatureCard = ({
  badgeText,
  title,
  description,
  variant = "dark",
}: FeatureCardProps) => (
  <div
    className={`relative rounded-2xl md:rounded-[32px] p-4 md:p-7 h-[90px] md:h-[140px] flex flex-col justify-center overflow-hidden ${
      variant === "slate" ? "bg-slate-900" : "bg-cyan-800"
    }`}
  >
    <span className="absolute top-2 right-2 md:top-4 md:right-4 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
      {badgeText}
    </span>
    <h3 className="text-white text-sm md:text-xl font-bold mb-0.5">{title}</h3>
    <p className="text-white/80 text-[9px] md:text-xs font-medium">
      {description}
    </p>
  </div>
);
