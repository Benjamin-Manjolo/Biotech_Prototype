import { TeamMemberCard } from "./components/TeamMemberCard";

export const TeamSection = () => (
  <section id="team" className="bg-white py-14 md:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-8 md:mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">
          Our Team
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-gray-950">
          Led by biomedical innovators building for real clinical needs
        </h2>
        <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
          Meet the technical leadership bringing together engineering design,
          health technology management, and locally grounded medical device
          innovation.
        </p>
      </div>
      <TeamMemberCard />
    </div>
  </section>
);
