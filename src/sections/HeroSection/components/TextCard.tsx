export type TextCardProps = { title: string };

export const TextCard = ({ title }: TextCardProps) => (
  <div className="bg-white rounded-2xl md:rounded-[40px] p-4 md:p-10 h-[90px] md:h-[140px] flex flex-col justify-center">
    <h3 className="text-gray-500 text-xs md:text-xl font-bold leading-snug">
      {title}
    </h3>
  </div>
);
