const CAPABILITIES = [
  { title: "CAD", detail: "device enclosures" },
  { title: "ECG", detail: "biosignal capture" },
  { title: "MRI", detail: "imaging physics" },
  { title: "IoT", detail: "remote monitoring" },
  { title: "QA", detail: "risk controls" },
  { title: "3D", detail: "assistive devices" },
];

export const IntegrationIcons = () => (
  <div className="relative flex items-center justify-center min-h-72 md:h-80 my-4">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl mx-auto">
      {CAPABILITIES.map((item, index) => (
        <div
          key={item.title}
          className={`rounded-[28px] border border-cyan-100 bg-white p-6 shadow-xl shadow-cyan-900/5 transition-transform hover:-translate-y-1 ${
            index % 2 === 0 ? "md:translate-y-6" : ""
          }`}
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-400 text-white text-xl font-black">
            {item.title}
          </div>
          <h3 className="text-gray-900 font-bold text-lg">{item.detail}</h3>
          <p className="mt-2 text-gray-500 text-sm leading-relaxed">
            Applied biomedical engineering practice for lab and clinical contexts.
          </p>
        </div>
      ))}
    </div>
  </div>
);
