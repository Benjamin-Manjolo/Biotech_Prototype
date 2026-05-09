import { useState } from "react";
import { IndustryHeader } from "./components/IndustryHeader";
import { IndustryCard } from "./components/IndustryCard";

type Industry = {
  id: string;
  imageAlt: string;
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  buttonText: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "Health & Beauty",
    imageAlt: "Health & Beauty",
    imageSrc: "https://c.animaapp.com/moys5pp3xEfm8f/assets/Lauryn_image-DjFvcMs3.jpg",
    category: "Health & Beauty",
    title: "Health & Beauty",
    description: "Book appointments and accept payments easily.",
    buttonText: "Explore Salons",
  },
  {
    id: "Food & Beverage",
    imageAlt: "Food & Beverage",
    imageSrc: "https://c.animaapp.com/moys5pp3xEfm8f/assets/amal_10-BsrxJged.jpg",
    category: "Food & Beverage",
    title: "Food & Beverage",
    description: "Sell at your counter or get paid at the table.",
    buttonText: "Explore Restaurants",
  },
  {
    id: "Gaming",
    imageAlt: "Gaming",
    imageSrc: "https://c.animaapp.com/moys5pp3xEfm8f/assets/IMG_5272-79Bh4y_5.jpeg",
    category: "Gaming",
    title: "Gaming",
    description: "Collection & disbursement for Gaming businesses.",
    buttonText: "Explore Gaming",
  },
  {
    id: "Services",
    imageAlt: "Services",
    imageSrc: "https://c.animaapp.com/moys5pp3xEfm8f/assets/pic-CKUQhNUb.png",
    category: "Services",
    title: "Services",
    description: "Invoice clients and get paid for your work.",
    buttonText: "Explore Services",
  },
];

export const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState("Health & Beauty");

  return (
    <section className="bg-gray-50 overflow-hidden pt-4 md:pt-8 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IndustryHeader activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex gap-3 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:overflow-visible md:snap-none">
          {INDUSTRIES.map((industry) => (
            <IndustryCard
              key={industry.id}
              {...industry}
              featured={industry.id === activeTab}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
