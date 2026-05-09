import { IntegrationsHeader } from "./components/IntegrationsHeader";
import { IntegrationIcons } from "./components/IntegrationIcons";

export const IntegrationsSection = () => (
  <section className="bg-white overflow-hidden pb-12 md:pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <IntegrationsHeader />
      <IntegrationIcons />
    </div>
  </section>
);
