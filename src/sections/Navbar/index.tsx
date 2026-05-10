import { useState, useEffect } from "react";
import { NavbarBrand } from "./components/NavbarBrand";
import { DesktopNavMenu } from "./components/DesktopNavMenu";
import { NavbarActions } from "./components/NavbarActions";
import { MobileMenuButton } from "./components/MobileMenuButton";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavbarBrand />
          <DesktopNavMenu />
          <NavbarActions />
          <MobileMenuButton
            open={mobileOpen}
            onToggle={() => setMobileOpen((v) => !v)}
          />
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 px-4 py-4 space-y-2"
        >
          {["Programs", "Labs", "Research", "Resources"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white/80 hover:text-sky-400 font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#faq"
              className="block text-center text-white border border-white/30 rounded-full py-2.5 font-medium hover:bg-white/10 transition-colors"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="block text-center text-black bg-white rounded-full py-2.5 font-semibold hover:bg-sky-100 transition-colors"
            >
              Request Info
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
