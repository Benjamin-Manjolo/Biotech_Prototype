import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedSolutionCard } from "./components/FeaturedSolutionCard";

export const SolutionsSection = () => (
  <section className="bg-gray-100 py-12 md:py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Column 1: Heading + Card Machine */}
        <div className="flex flex-col">
          <SectionHeading />
          <FeaturedSolutionCard />
        </div>

        {/* Column 2: Dashboard + Pricing */}
        <div className="flex flex-col gap-5">
          {/* Combined data Sales */}
          <div className="relative bg-[rgb(66,65,65)] rounded-3xl h-[380px] p-7 flex flex-col overflow-hidden">
            <div className="flex items-center gap-3 backdrop-blur-sm bg-sky-500/90 rounded-full pl-2 pr-10 py-1 self-start">
              <div className="flex items-center justify-center h-8 w-8 bg-cyan-700 rounded-full shrink-0">
                <img
                  src="https://c.animaapp.com/moys5pp3xEfm8f/assets/icon-5.svg"
                  alt="icon"
                  className="h-4 w-4"
                />
              </div>
              <h3 className="text-white text-lg font-semibold whitespace-nowrap">
                Combined data Sales
              </h3>
            </div>
            <p className="text-white text-lg leading-relaxed mb-4">
              Monitor every channel&#39;s performance from a single dashboard
            </p>
            <div className="flex-1 flex items-end relative">
              <img
                alt="Dashboard mockup"
                src="https://c.animaapp.com/moys5pp3xEfm8f/assets/Mocku_(3)-DLO02xzv.png"
                className="w-full object-cover rounded-lg scale-150 origin-bottom-right"
              />
            </div>
          </div>

          {/* Lowest Pricing */}
          <div className="bg-gray-400 rounded-3xl h-48 p-7 flex flex-col justify-start overflow-hidden">
            <div className="flex items-center gap-3 backdrop-blur-sm bg-white/90 rounded-full pl-2 pr-10 py-1 self-start">
              <div className="flex items-center justify-center h-8 w-8 bg-gray-400 rounded-full shrink-0">
                <img
                  src="https://c.animaapp.com/moys5pp3xEfm8f/assets/icon-6.svg"
                  alt="icon"
                  className="h-4 w-4"
                />
              </div>
              <h3 className="text-gray-700 text-lg font-semibold whitespace-nowrap">
                Lowest Pricing
              </h3>
            </div>
            <p className="text-white text-lg leading-relaxed">
              Get free automatic payouts and low transaction fees
            </p>
          </div>
        </div>

        {/* Column 3: E-commerce with background image */}
        <div
          className="relative bg-cover bg-no-repeat rounded-3xl h-[460px] md:h-auto p-7 flex flex-col overflow-hidden"
          style={{
            backgroundImage: "url('https://paychangu.com/assets/8-yHBJ0SU1.jpg')",
            backgroundPosition: "85% center",
            backgroundSize: "170%",
          }}
        >
          <div className="absolute inset-0 bg-black/20 rounded-3xl" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex items-center gap-3 backdrop-blur-sm bg-white/90 rounded-full pl-2 pr-10 py-1 self-start">
              <div className="flex items-center justify-center h-8 w-8 bg-gray-400 rounded-full shrink-0">
                <img
                  src="https://c.animaapp.com/moys5pp3xEfm8f/assets/icon-6.svg"
                  alt="icon"
                  className="h-4 w-4"
                />
              </div>
              <h3 className="text-gray-900 text-lg font-semibold whitespace-nowrap">
                E-commerce
              </h3>
            </div>
            <p className="text-white text-xl font-medium leading-relaxed mt-auto mb-4">
              Convert browsers into buyers, effortlessly
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
