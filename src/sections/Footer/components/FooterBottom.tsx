export const FooterBottom = () => {
  const links = [
    { href: "#solutions", label: "Solutions" },
    { href: "#team", label: "Team" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="border-t border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="w-[83.3333%] mx-auto py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <p className="text-gray-400 text-xs md:text-sm order-3 md:order-1">
          © 2026 Ranken Bio Medical Engineering.
        </p>

        <div className="flex items-center gap-5 md:gap-7 order-2">
          <a
            href="#faq"
            className="text-gray-500 text-xs md:text-sm hover:text-gray-900 transition-colors"
          >
            Service FAQ
          </a>
          <a
            href="#contact"
            className="text-gray-500 text-xs md:text-sm hover:text-gray-900 transition-colors"
          >
            Request a Quote
          </a>
        </div>

        <div className="flex items-center gap-3 md:gap-4 order-1 md:order-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 hover:bg-cyan-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
