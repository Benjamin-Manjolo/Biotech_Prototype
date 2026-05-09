import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type DropdownItem = { label: string; href: string };

const SOLUTIONS: DropdownItem[] = [
  { label: "Payment Gateway", href: "/payment-gateway" },
  { label: "Virtual & Physical Cards", href: "/virtual-cards" },
  { label: "Bill Payments", href: "/bill-payments" },
  { label: "Payment Link", href: "/payment-link" },
  { label: "Event Ticketing", href: "/event-ticketing" },
  { label: "POS", href: "/pos" },
  { label: "Capital", href: "/paychangu-capital" },
];

const COMPANY: DropdownItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "Brand Assets", href: "/brand" },
];

const DEVELOPERS: DropdownItem[] = [
  { label: "API Reference", href: "/developers" },
  { label: "SDK Documentation", href: "/developers/sdks" },
  { label: "API Status", href: "https://status.paychangu.com" },
];

function NavDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-white/90 hover:text-sky-400 font-medium text-[15px] transition-colors"
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-gray-100">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:text-sky-500 hover:bg-sky-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export const DesktopNavMenu = () => (
  <div className="hidden md:flex items-center border border-white/30 rounded-full px-8 h-11 gap-8">
    <NavDropdown label="Solutions" items={SOLUTIONS} />
    <a
      href="/pricing"
      className="text-white/90 hover:text-sky-400 font-medium text-[15px] transition-colors"
    >
      Pricing
    </a>
    <NavDropdown label="Company" items={COMPANY} />
    <NavDropdown label="Developers" items={DEVELOPERS} />
  </div>
);
