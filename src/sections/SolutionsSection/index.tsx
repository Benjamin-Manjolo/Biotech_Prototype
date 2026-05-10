import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedSolutionCard } from "./components/FeaturedSolutionCard";

export const SolutionsSection = () => (
  <section id="solutions" className="bg-gray-100 py-12 md:py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="flex flex-col">
          <SectionHeading />
          <FeaturedSolutionCard />
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative bg-[rgb(36,52,63)] rounded-3xl h-[380px] p-7 flex flex-col overflow-hidden">
            <div className="flex items-center gap-3 backdrop-blur-sm bg-sky-500/90 rounded-full pl-2 pr-10 py-1 self-start">
              <div className="flex items-center justify-center h-8 w-8 bg-cyan-700 rounded-full shrink-0 text-white text-xs font-bold">
                AI
              </div>
              <h3 className="text-white text-lg font-semibold whitespace-nowrap">
                Diagnostics & Data
              </h3>
            </div>
            <p className="text-white text-lg leading-relaxed mb-4">
              Deploy dashboards and workflows that turn biosignals, lab results, and imaging data into actionable clinical insight.
            </p>
            <div className="flex-1 flex items-end relative">
              <img
                alt="Biomedical data visualization and MRI scan"
                src="https://commons.wikimedia.org/wiki/Special:FilePath/MRI_Scan_(30842540675).jpg"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-emerald-500 rounded-3xl h-48 p-7 flex flex-col justify-start overflow-hidden">
            <div className="flex items-center gap-3 backdrop-blur-sm bg-white/90 rounded-full pl-2 pr-10 py-1 self-start">
              <div className="flex items-center justify-center h-8 w-8 bg-emerald-600 rounded-full shrink-0 text-white text-xs font-bold">
                QA
              </div>
              <h3 className="text-gray-700 text-lg font-semibold whitespace-nowrap">
                Safety & Compliance
              </h3>
            </div>
            <p className="text-white text-lg leading-relaxed mt-4">
              Keep equipment safer with calibration, risk management, human factors review, and device lifecycle documentation.
            </p>
          </div>
        </div>

        <div
          className="relative bg-cover bg-no-repeat rounded-3xl h-[460px] md:h-auto p-7 flex flex-col overflow-hidden"
          style={{
            backgroundImage:
              "url('https://commons.wikimedia.org/wiki/Special:FilePath/Biomedical_Engineering_Laboratory.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/45 rounded-3xl" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex items-center gap-3 backdrop-blur-sm bg-white/90 rounded-full pl-2 pr-10 py-1 self-start">
              <div className="flex items-center justify-center h-8 w-8 bg-cyan-700 rounded-full shrink-0 text-white text-xs font-bold">
                LAB
              </div>
              <h3 className="text-gray-900 text-lg font-semibold whitespace-nowrap">
                Technical Service Lab
              </h3>
            </div>
            <p className="text-white text-xl font-medium leading-relaxed mt-auto mb-4">
              Access circuit testing, sensor integration, biomaterials evaluation, and clinical troubleshooting as a practical service workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
