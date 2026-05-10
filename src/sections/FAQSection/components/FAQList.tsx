import { FAQItem } from "./FAQItem";

const FAQS = [
  {
    number: "01.",
    question: "What does Ranken Bio Medical Engineering offer?",
    answer:
      "We provide biomedical equipment support, medical device design, diagnostics support, installation, preventive maintenance, repairs, safety checks, and healthcare technology consultation.",
    indentClass: "md:ml-24",
    defaultOpen: true,
  },
  {
    number: "02.",
    question: "Who do you work with?",
    answer:
      "We work with hospitals, clinics, laboratories, innovation hubs, NGOs, public health teams, and organizations that need reliable biomedical technology support.",
    indentClass: "",
    defaultOpen: false,
  },
  {
    number: "03.",
    question: "Can you support equipment lifecycle management?",
    answer:
      "Yes. We help teams plan equipment needs, document assets, install devices, run safety checks, schedule preventive maintenance, troubleshoot faults, and plan replacements.",
    indentClass: "md:ml-24",
    defaultOpen: false,
  },
  {
    number: "04.",
    question: "Do you build custom biomedical solutions?",
    answer:
      "Yes. Our technical team can support concept design, prototyping, sensor integration, basic automation, and testing for practical healthcare challenges.",
    indentClass: "md:ml-12",
    defaultOpen: false,
  },
  {
    number: "05.",
    question: "How can an organization request support?",
    answer:
      "Use the contact section to request a quote, book a consultation, or discuss a partnership for procurement, servicing, training, or custom biomedical technology work.",
    indentClass: "",
    defaultOpen: false,
  },
];

export const FAQList = () => (
  <div className="flex flex-col gap-3">
    {FAQS.map((faq) => (
      <FAQItem key={faq.number} {...faq} />
    ))}
  </div>
);
