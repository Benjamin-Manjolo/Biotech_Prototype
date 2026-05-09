import { FooterBrand } from "./FooterBrand";
import { FooterLinkColumn } from "./FooterLinkColumn";

export const FooterMain = () => (
  <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-6 w-[83.3333%] mx-auto py-12 md:py-20">
    <FooterBrand />
    <FooterLinkColumn
      title="Solutions"
      links={[
        { text: "Payment Gateway", href: "/payment-gateway" },
        { text: "Virtual and Physical Cards", href: "/virtual-cards" },
        { text: "Bill Payments", href: "/bill-payments" },
        { text: "Payment Link", href: "/payment-link" },
        { text: "Event Ticketing", href: "/event-ticketing" },
        { text: "POS", href: "/pos" },
        { text: "Capital", href: "/paychangu-capital" },
      ]}
    />
    <FooterLinkColumn
      title="Company"
      links={[
        { text: "About Us", href: "/about" },
        { text: "Contact", href: "/contact" },
        { text: "Careers", href: "/careers" },
        { text: "Brand Assets", href: "/brand" },
      ]}
    />
    <FooterLinkColumn
      title="Contact"
      links={[
        { text: "Contact Sales", href: "/contact" },
        { text: "Contact Support", href: "mailto:support@paychangu.com" },
        { text: "Help Center", href: "https://support.paychangu.com/" },
        { text: "Live Chat", href: "https://support.paychangu.com/livechat" },
      ]}
    />
    <FooterLinkColumn
      title="Developers"
      links={[
        { text: "API Reference", href: "/developers" },
        { text: "SDK Documentation", href: "/developers/sdks" },
        { text: "Documentation", href: "https://developer.paychangu.com/docs/welcome" },
        {
          content: (
            <a
              href="https://status.paychangu.com"
              className="flex items-center gap-2 text-gray-400 text-sm md:text-base hover:text-sky-500 transition-colors"
            >
              <span>API Status</span>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
            </a>
          ),
        },
      ]}
    />
  </div>
);
