import { FooterBrand } from "./FooterBrand";
import { FooterLinkColumn } from "./FooterLinkColumn";

export const FooterMain = () => (
  <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-6 w-[83.3333%] mx-auto py-12 md:py-20">
    <FooterBrand />
    <FooterLinkColumn
      title="Programs"
      links={[
        { text: "Clinical Devices", href: "#industries" },
        { text: "Medical Imaging Support", href: "#industries" },
        { text: "Diagnostics & Data", href: "#solutions" },
        { text: "Rehabilitation Devices", href: "#industries" },
        { text: "Lab Automation", href: "#integrations" },
      ]}
    />
    <FooterLinkColumn
      title="Services"
      links={[
        { text: "Device Prototyping", href: "#integrations" },
        { text: "Biosignal Processing", href: "#integrations" },
        { text: "Equipment QA", href: "#solutions" },
        { text: "Maintenance Plans", href: "#contact" },
      ]}
    />
    <FooterLinkColumn
      title="Contact"
      links={[
        { text: "Request a Quote", href: "#contact" },
        { text: "Email Our Team", href: "mailto:info@rankenbiomedical.example" },
        { text: "Partner With Us", href: "#clients" },
      ]}
    />
    <FooterLinkColumn
      title="Company"
      links={[
        { text: "Our Team", href: "#team" },
        { text: "Clients", href: "#clients" },
        { text: "FAQ", href: "#faq" },
        { text: "Solution Areas", href: "#solutions" },
        { text: "Healthcare Sectors", href: "#industries" },
      ]}
    />
  </div>
);
