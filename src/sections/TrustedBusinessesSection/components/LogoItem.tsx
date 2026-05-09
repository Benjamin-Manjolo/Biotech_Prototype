export type LogoItemProps = { alt: string; src: string; heightClass: string };

export const LogoItem = ({ alt, src, heightClass }: LogoItemProps) => (
  <div className="flex items-center justify-center shrink-0 px-8 md:px-12">
    <img
      alt={alt}
      src={src}
      className={`object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 ${heightClass}`}
    />
  </div>
);
