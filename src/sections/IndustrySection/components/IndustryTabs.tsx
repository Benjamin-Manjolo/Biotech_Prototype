const TABS = ["Health & Beauty", "Food & Beverage", "Gaming", "Services"];

type Props = { active: string; onChange: (tab: string) => void };

export const IndustryTabs = ({ active, onChange }: Props) => (
  <div className="flex items-center bg-gray-200/40 border border-gray-100 rounded-full p-1 md:p-1.5 overflow-x-auto gap">
    {TABS.map((tab) => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className={`text-[10px] md:text-[13px] font-bold whitespace-nowrap rounded-full px-3 md:px-5 py-1.5 md:py-2 transition-colors ${
          active === tab
            ? "bg-white shadow text-gray-900"
            : "text-gray-400 hover:text-gray-600 bg-transparent"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);
