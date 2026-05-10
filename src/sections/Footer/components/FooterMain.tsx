import { FooterBrand } from "./FooterBrand";
import { FooterLinkColumn } from "./FooterLinkColumn";

export const FooterMain = () => (
  <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-6 w-[83.3333%] mx-auto py-12 md:py-20">
    <FooterBrand />
    <FooterLinkColumn
      title="Programs"
      links={[
        { text: "Biomedical Engineering", href: "#solutions" },
        { text: "Clinical Devices", href: "#industries" },
        { text: "Medical Imaging", href: "#industries" },
        { text: "Biomaterials", href: "#industries" },
        { text: "Rehab Tech", href: "#industries" },
      ]}
    />
    <FooterLinkColumn
      title="Labs"
      links={[
        { text: "Device Prototyping", href: "#integrations" },
        { text: "Biosignal Processing", href: "#integrations" },
        { text: "Equipment QA", href: "#solutions" },
        { text: "Student Projects", href: "#contact" },
      ]}
    />
    <FooterLinkColumn
      title="Contact"
      links={[
        { text: "Request Information", href: "#contact" },
        { text: "Email Admissions", href: "mailto:info@rankenbiomedical.example" },
        { text: "Partner With Us", href: "#clients" },
      ]}
    />
    <FooterLinkColumn
      title="Resources"
      links={[
        { text: "Team", href: "#team" },
        { text: "Clients", href: "#clients" },
        { text: "FAQ", href: "#faq" },
        { text: "Research Focus", href: "#solutions" },
        { text: "Career Pathways", href: "#industries" },
      ]}
    />
  </div>
);
