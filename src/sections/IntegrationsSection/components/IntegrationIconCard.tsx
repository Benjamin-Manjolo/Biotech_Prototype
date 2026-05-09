export type IntegrationIconCardProps = {
  imageAlt: string;
  imageSrc: string;
  imageClass: string;
  className?: string;
};

export const IntegrationIconCard = ({
  imageAlt,
  imageSrc,
  imageClass,
  className = "",
}: IntegrationIconCardProps) => (
  <div
    className={`absolute flex items-center justify-center bg-white border border-neutral-200 rounded-xl md:rounded-3xl ${className}`}
  >
    <img
      alt={imageAlt}
      src={imageSrc}
      className={`object-contain ${imageClass}`}
    />
  </div>
);
