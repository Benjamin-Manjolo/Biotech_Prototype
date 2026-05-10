import { ArrowRight } from "lucide-react";

export type IndustryCardProps = {
  imageAlt: string;
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  buttonText: string;
  featured?: boolean;
};

export const IndustryCard = ({
  imageAlt,
  imageSrc,
  category,
  title,
  description,
  buttonText,
  featured = false,
}: IndustryCardProps) => (
  <div
    className={`relative overflow-hidden rounded-3xl md:rounded-[40px] group cursor-pointer transition-all duration-500 ${
      featured
        ? "flex-[4] min-w-[260px]"
        : "flex-[0.8] min-w-[240px] md:min-w-0"
    }`}
    style={{ minHeight: "380px" }}
  >
    <img
      alt={imageAlt}
      src={imageSrc}
      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
        featured ? "scale-110" : ""
      }`}
    />

    {/* Gradient overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-300`}
    />

    {/* Content */}
    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-10 transition-all duration-300">
      {/* Category badge */}
      <div className="inline-block backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3">
        <span className="text-white text-[9px] md:text-xs font-bold uppercase tracking-widest">
          {category}
        </span>
      </div>

      {/* Title — always visible */}
      <h3 className="text-white text-lg md:text-3xl font-extrabold leading-tight mb-3 md:mb-6">
        {title}
      </h3>

      {/* Description — visible on featured, hover on others */}
      <p
        className={`text-white/80 text-sm md:text-base leading-relaxed mb-4 transition-all duration-300 ${
          featured ? "block" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {description}
      </p>

      {/* Button */}
      <button
        type="button"
        className="flex items-center gap-2 bg-sky-500 text-white text-xs md:text-sm font-bold rounded-full px-4 py-2 hover:bg-sky-600 transition-colors"
      >
        {buttonText}
        <ArrowRight size={14} />
      </button>
    </div>
  </div>
);
