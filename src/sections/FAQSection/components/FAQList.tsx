import { FAQItem } from "./FAQItem";

const FAQS = [
  {
    number: "01.",
    question: "What is biomedical engineering?",
    answer:
      "Biomedical engineering applies engineering design, electronics, mechanics, computing, and biology to solve health and medical problems.",
    indentClass: "md:ml-24",
    defaultOpen: true,
  },
  {
    number: "02.",
    question: "What will students learn at Ranken Bio Medical Engineering?",
    answer:
      "Students explore medical instrumentation, biosensors, imaging systems, biomaterials, rehabilitation technology, safety testing, and clinical equipment workflows.",
    indentClass: "",
    defaultOpen: false,
  },
  {
    number: "03.",
    question: "How are the images and projects connected to biomedical engineering?",
    answer:
      "The site highlights real biomedical contexts: laboratories, MRI systems, implant materials, and prosthetic technology to align visuals with the program focus.",
    indentClass: "md:ml-24",
    defaultOpen: false,
  },
  {
    number: "04.",
    question: "What careers can this pathway support?",
    answer:
      "Biomedical engineering can support roles in clinical engineering, medical device design, health technology service, diagnostics, rehabilitation technology, and research labs.",
    indentClass: "md:ml-12",
    defaultOpen: false,
  },
  {
    number: "05.",
    question: "Can organizations collaborate with students?",
    answer:
      "Yes. Hospitals, labs, startups, and device teams can connect with student projects around prototyping, equipment evaluation, documentation, and applied healthcare challenges.",
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
