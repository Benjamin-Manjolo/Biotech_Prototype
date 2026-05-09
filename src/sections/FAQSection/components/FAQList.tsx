import { FAQItem } from "./FAQItem";

const FAQS = [
  {
    number: "01.",
    question: "What is PayChangu?",
    answer:
      "PayChangu is a modern payment gateway that simplifies and secures transactions. It lets businesses accept payments via Airtel Money, TNM Mpamba, and more.",
    indentClass: "md:ml-24",
    defaultOpen: true,
  },
  {
    number: "02.",
    question: "What payment options are available?",
    answer:
      "PayChangu supports Airtel Money, TNM Mpamba, Visa, and Mastercard payments. Businesses can also accept payments through payment links, POS terminals, and more.",
    indentClass: "",
    defaultOpen: false,
  },
  {
    number: "03.",
    question: "How does PayChangu handle card issuing?",
    answer:
      "PayChangu provides both virtual and physical cards for businesses and individuals. You can issue cards directly from your dashboard and manage spending limits.",
    indentClass: "md:ml-24",
    defaultOpen: false,
  },
  {
    number: "04.",
    question: "Can I integrate PayChangu with my website?",
    answer:
      "Yes! PayChangu offers SDKs for JavaScript, Python, PHP, and plugins for WooCommerce, Shopify, and WordPress, making integration straightforward regardless of your platform.",
    indentClass: "md:ml-12",
    defaultOpen: false,
  },
  {
    number: "05.",
    question: "How can I manage multiple businesses with PayChangu?",
    answer:
      "Your PayChangu dashboard allows you to manage multiple business profiles from a single account, with separate analytics, payouts, and settings per business.",
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
