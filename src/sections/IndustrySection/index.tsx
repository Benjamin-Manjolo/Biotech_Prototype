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
    id: "Clinical Devices",
    imageAlt: "Clinical biomedical engineering equipment",
    imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Modern_3T_MRI.JPG",
    category: "Clinical Devices",
    title: "Clinical Devices",
    description: "Supply, install, and maintain patient-facing equipment with attention to safety, usability, calibration, and reliability.",
    buttonText: "Explore Devices",
  },
  {
    id: "Medical Imaging",
    imageAlt: "MRI machine with patient and technician",
    imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/MRI_machine_with_patient_(23423505123).jpg",
    category: "Medical Imaging",
    title: "Medical Imaging",
    description: "Support MRI, ultrasound, X-ray, and image-guided care teams with equipment planning, checks, and technical coordination.",
    buttonText: "Explore Imaging",
  },
  {
    id: "Biomaterials",
    imageAlt: "Biomedical implant and prosthesis materials",
    imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Prosthesis_002.jpg",
    category: "Biomaterials",
    title: "Biomaterials",
    description: "Advise on materials, device concepts, prosthetics, durability, and biological-response considerations for healthcare projects.",
    buttonText: "Explore Materials",
  },
  {
    id: "Rehab Tech",
    imageAlt: "Historic prosthesis representing rehabilitation engineering",
    imageSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Verduyn_Prosthesis.jpg",
    category: "Rehab Tech",
    title: "Rehabilitation Technology",
    description: "Develop and source assistive tools, prosthetic concepts, and accessible systems that improve mobility and independence.",
    buttonText: "Explore Rehab",
  },
];

export const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState("Clinical Devices");

  return (
    <section id="industries" className="bg-gray-50 overflow-hidden pt-4 md:pt-8 pb-16 md:pb-24">
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
