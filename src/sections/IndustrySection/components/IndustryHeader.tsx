import { IndustryTabs } from "./IndustryTabs";

type Props = { activeTab: string; onTabChange: (tab: string) => void };

export const IndustryHeader = ({ activeTab, onTabChange }: Props) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-16">
    <div>
      <h2 className="text-xl md:text-4xl font-bold tracking-tight mb-3 md:mb-5">
        Explore biomedical engineering specializations
      </h2>
      <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-xl">
        Ranken Bio Medical Engineering prepares students to understand how medical technology is designed, tested, maintained, and improved for patients and clinicians.
      </p>
    </div>
    <IndustryTabs active={activeTab} onChange={onTabChange} />
  </div>
);
