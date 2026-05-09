import { IntegrationIconCard } from "./IntegrationIconCard";

export const IntegrationIcons = () => (
  <div className="relative flex items-center justify-center h-64 md:h-64 my-4">
    <div className="relative w-full max-w-3xl mx-auto h-full">
      <IntegrationIconCard
        imageAlt="Python"
        imageSrc="https://c.animaapp.com/moys5pp3xEfm8f/assets/267_Python_logo_512_1-DwaVSVD6.png"
        imageClass="h-6 w-6 md:h-14 md:w-14 p-0"
        className="-translate-x-[220px] md:-translate-x-[480px] rotate-[-13deg] top-4 md:top-10 h-14 w-16 md:h-[140px] md:w-[140px]"
      />
      <IntegrationIconCard
        imageAlt="Give"
        imageSrc="https://c.animaapp.com/moys5pp3xEfm8f/assets/Give-Logo-1_1-Ckq6pa_0.png"
        imageClass="h-7 w-7 md:h-[72px] md:w-[72px] p-0"
        className="-translate-x-[140px] md:-translate-x-[320px] -rotate-[4deg] top-1 md:-top-2 h-14 w-16 md:h-[140px] md:w-[140px]"
      />
      <IntegrationIconCard
        imageAlt="WooCommerce"
        imageSrc="https://c.animaapp.com/moys5pp3xEfm8f/assets/image-2.svg"
        imageClass="h-8 w-8 md:h-[90px] md:w-[90px] p-0"
        className="-translate-x-[70px] md:-translate-x-[170px] rotate-[-15deg] top-5 md:top-14 h-14 w-16 md:h-[140px] md:w-[140px]"
      />
      <IntegrationIconCard
        imageAlt="WordPress"
        imageSrc="https://c.animaapp.com/moys5pp3xEfm8f/assets/WordPress_logo.svg_1-8cVIxQ-o.png"
        imageClass="h-10 w-10 md:h-[100px] md:w-[100px] p-0"
        className="-translate-x-1/2 rotate-[2deg] top-0 h-14 w-16 md:h-[140px] md:w-[170px] p-4 md:p-7 z-30"
      />
      <IntegrationIconCard
        imageAlt="Shopify"
        imageSrc="https://c.animaapp.com/moys5pp3xEfm8f/assets/image-3.svg"
        imageClass="h-7 w-7 md:h-[72px] md:w-[72px] p-0"
        className="translate-x-[10px] md:translate-x-[30px] -rotate-[8deg] top-2 md:top-6 h-14 w-16 md:h-[140px] md:w-[140px]"
      />
      <IntegrationIconCard
        imageAlt="JavaScript"
        imageSrc="https://c.animaapp.com/moys5pp3xEfm8f/assets/JavaScript_logo_2.svg-BLo4obvD.png"
        imageClass="h-7 w-7 md:h-[76px] md:w-[76px] p-0"
        className="translate-x-[80px] md:translate-x-[160px] rotate-[23deg] top-5 md:top-16 h-14 w-16 md:h-[140px] md:w-[140px]"
      />
    </div>
  </div>
);
