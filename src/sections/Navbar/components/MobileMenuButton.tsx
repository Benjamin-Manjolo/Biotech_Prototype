import { Menu, X } from "lucide-react";

type Props = { open: boolean; onToggle: () => void };

export const MobileMenuButton = ({ open, onToggle }: Props) => (
  <button
    type="button"
    onClick={onToggle}
    className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
    aria-label={open ? "Close menu" : "Open menu"}
    aria-expanded={open}
    aria-controls="mobile-navigation"
  >
    {open ? <X size={24} /> : <Menu size={24} />}
  </button>
);
