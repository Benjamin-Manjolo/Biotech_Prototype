export const FooterBottom = () => {
  const socials = [
    { href: "https://x.com/paychangu", alt: "X / Twitter", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/icon-10.svg" },
    { href: "https://www.facebook.com/PayChangu", alt: "Facebook", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/icon-11.svg" },
    { href: "https://www.instagram.com/paychangu", alt: "Instagram", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/icon-12.svg" },
    { href: "https://www.linkedin.com/company/paychangumw/", alt: "LinkedIn", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/icon-13.svg" },
    { href: "https://www.tiktok.com/@paychangu", alt: "TikTok", src: "https://c.animaapp.com/moys5pp3xEfm8f/assets/icon-14.svg" },
  ];

  return (
    <div className="border-t border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="w-[83.3333%] mx-auto py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <p className="text-gray-400 text-xs md:text-sm order-3 md:order-1">
          © 2026 Thrive in the Digital Economy.
        </p>

        <div className="flex items-center gap-5 md:gap-7 order-2">
          <a
            href="/privacy-policy"
            className="text-gray-500 text-xs md:text-sm hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-gray-500 text-xs md:text-sm hover:text-gray-900 transition-colors"
          >
            Terms of Service
          </a>
        </div>

        <div className="flex items-center gap-4 md:gap-5 order-1 md:order-3">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              aria-label={social.alt}
              className="text-gray-400 hover:text-sky-500 transition-colors"
            >
              <img src={social.src} alt={social.alt} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
