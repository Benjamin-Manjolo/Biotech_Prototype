import type { ReactNode } from "react";

export type SolutionCardProps = {
  className?: string;
  iconSrc: string;
  iconAlt: string;
  iconBg?: string;
  title: string;
  titleColor?: string;
  description: string;
  descriptionColor?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlay?: boolean;
  bottomContent?: ReactNode;
};

export const SolutionCard = ({
  className = "",
  iconSrc,
  iconAlt,
  iconBg = "bg-gray-400",
  title,
  titleColor = "text-gray-900",
  description,
  descriptionColor = "text-white",
  imageSrc,
  imageAlt = "",
  overlay,
  bottomContent,
}: SolutionCardProps) => (
  <div
    className={`relative flex flex-col overflow-hidden rounded-3xl ${className}`}
  >
    {overlay && <div className="absolute inset-0 bg-black/20 z-0" />}
    <div className="relative z-10 flex items-center gap-3 backdrop-blur-sm bg-white/90 rounded-full pl-2 pr-6 py-1 self-start">
      <div
        className={`flex items-center justify-center h-9 w-9 rounded-full ${iconBg}`}
      >
        <img src={iconSrc} alt={iconAlt} className="h-5 w-5" />
      </div>
      <h3 className={`font-semibold text-lg whitespace-nowrap ${titleColor}`}>
        {title}
      </h3>
    </div>

    {bottomContent ? (
      <div className="relative z-10 flex flex-col flex-1 justify-end">
        <p
          className={`text-xl font-medium leading-relaxed ${descriptionColor}`}
        >
          {description}
        </p>
      </div>
    ) : (
      <p className={`mt-4 text-lg leading-relaxed ${descriptionColor}`}>
        {description}
      </p>
    )}

    {imageSrc && (
      <div className="flex-1 flex items-end mt-4">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="w-full object-cover rounded-lg scale-110 origin-bottom"
        />
      </div>
    )}
  </div>
);
