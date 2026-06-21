import { Code2, Cloud, BriefcaseBusiness, Shield, Brain } from "lucide-react";
import { getServices } from "@/lib/api";

const services = await getServices();

export default function ServicesSection() {

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code2 className="w-12 h-12 text-blue-700 mb-4" />,
    Cloud: <Cloud className="w-12 h-12 text-blue-700 mb-4" />,
    Briefcase: <BriefcaseBusiness className="w-12 h-12 text-blue-700 mb-4" />,
    Shield: <Shield className="w-12 h-12 text-blue-700 mb-4" />,
    Brain: <Brain className="w-12 h-12 text-blue-700 mb-4" />
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              {iconMap[service.icon]}

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}