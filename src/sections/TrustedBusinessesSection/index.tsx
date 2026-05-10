import { LogoMarquee } from "./components/LogoMarquee";

export const TrustedBusinessesSection = () => (
  <section id="clients" className="bg-white py-8 md:py-14 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
            Trusted by / Our Clients
          </span>
          <h2 className="mt-2 text-2xl md:text-4xl font-black text-gray-950">
            Collaborating with Malawi-based institutions and innovators
          </h2>
        </div>
        <p className="text-zinc-500 text-sm md:text-base max-w-xl">
          Our client and partner network includes regulators, public health institutions,
          innovation hubs, and creative technology teams across Malawi.
        </p>
      </div>
      <LogoMarquee />
    </div>
  </section>
);
