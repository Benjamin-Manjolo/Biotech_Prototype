export type ImageCardProps = {
  imageAlt: string;
  imageSrc: string;
  showOverlay?: boolean;
  className?: string;
};

export const ImageCard = ({
  imageAlt,
  imageSrc,
  showOverlay,
  className = "",
}: ImageCardProps) => (
  <div
    className={`relative rounded-2xl md:rounded-[40px] overflow-hidden shadow-xl ${className}`}
  >
    {showOverlay && <div className="absolute inset-0 bg-blue-600/10 z-10" />}
    <img alt={imageAlt} src={imageSrc} className="w-full h-full object-cover" />
  </div>
);
