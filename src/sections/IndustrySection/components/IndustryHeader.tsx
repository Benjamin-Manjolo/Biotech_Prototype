import { IndustryTabs } from "./IndustryTabs";

type Props = { activeTab: string; onTabChange: (tab: string) => void };

export const IndustryHeader = ({ activeTab, onTabChange }: Props) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-16">
    <div>
      <h2 className="text-xl md:text-4xl font-bold tracking-tight mb-3 md:mb-5">
        Biomedical solution areas we serve
      </h2>
      <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-xl">
        Ranken Bio Medical Engineering helps healthcare providers, labs, and
        innovators deploy, maintain, and improve medical technology for real
        patient-care environments.
      </p>
    </div>
    <IndustryTabs active={activeTab} onChange={onTabChange} />
  </div>
);
