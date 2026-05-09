import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FAQItemProps = {
  number: string;
  question: string;
  answer: string;
  indentClass?: string;
  defaultOpen?: boolean;
};

export const FAQItem = ({
  number,
  question,
  answer,
  indentClass = "",
  defaultOpen = false,
}: FAQItemProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-200 ${indentClass}`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between text-left px-4 md:px-5 py-3 md:py-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start gap-2 md:gap-3 flex-1">
          <span className="text-sm md:text-base font-bold text-gray-900 shrink-0">
            {number}
          </span>
          <span className="text-sm md:text-base font-bold text-gray-900">
            {question}
          </span>
        </div>
        <div
          className={`shrink-0 ml-3 flex items-center justify-center h-7 w-7 md:h-8 md:w-8 rounded-lg border-2 transition-colors ${
            open
              ? "border-sky-500 bg-sky-50"
              : "border-gray-200 hover:border-gray-400"
          }`}
        >
          {open ? (
            <Minus size={14} className="text-sky-500" />
          ) : (
            <Plus size={14} className="text-gray-400" />
          )}
        </div>
      </button>
      {open && answer && (
        <div className="px-4 md:px-5 pb-5 pt-0 animate-fade-in-up">
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed ml-6 md:ml-8 border-t border-gray-50 pt-3">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};
