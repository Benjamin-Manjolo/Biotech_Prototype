import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type DropdownItem = { label: string; href: string };

const PROGRAMS: DropdownItem[] = [
  { label: "Biomedical Engineering", href: "#solutions" },
  { label: "Clinical Equipment", href: "#solutions" },
  { label: "Medical Imaging", href: "#industries" },
  { label: "Rehabilitation Devices", href: "#industries" },
  { label: "Lab Automation", href: "#integrations" },
];

const RESEARCH: DropdownItem[] = [
  { label: "Device Design", href: "#solutions" },
  { label: "Biomaterials", href: "#industries" },
  { label: "Diagnostics", href: "#faq" },
  { label: "Student Projects", href: "#contact" },
];

const RESOURCES: DropdownItem[] = [
  { label: "Admissions", href: "#contact" },
  { label: "Faculty Labs", href: "#integrations" },
  { label: "Our Team", href: "#team" },
  { label: "Our Clients", href: "#clients" },
];

function NavDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = `${label.toLowerCase().replace(/\s+/g, "-")}-menu`;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-white/90 hover:text-sky-400 font-medium text-[15px] transition-colors"
        aria-expanded={open}
        aria-controls={menuId}
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          id={menuId}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100"
        >
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:text-sky-500 hover:bg-sky-50 transition-colors"
              onClick={() => setOpen(false)}
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
    <NavDropdown label="Programs" items={PROGRAMS} />
    <a
      href="#team"
      className="text-white/90 hover:text-sky-400 font-medium text-[15px] transition-colors"
    >
      Team
    </a>
    <NavDropdown label="Research" items={RESEARCH} />
    <NavDropdown label="Resources" items={RESOURCES} />
  </div>
);
