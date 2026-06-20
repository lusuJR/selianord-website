import { Code2, Cloud, BriefcaseBusiness, ShieldCheck, Brain, Database } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web applications, business systems and digital platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Azure and AWS cloud infrastructure, migration and optimization.",
  },
  {
    icon: BriefcaseBusiness,
    title: "IT Consulting",
    description: "Technology advisory, digital strategy and business transformation.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Secure systems, risk reduction and digital asset protection.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "AI-powered tools, automation and intelligent business solutions.",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Database design, analytics and data-driven decision support.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-50">
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-blue-700 font-semibold">Our Services</span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-slate-950">
            Technology services for modern businesses.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-8">
            Selianord Group delivers reliable software, cloud, consulting,
            cybersecurity, AI and data solutions designed to support business
            growth and digital transformation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
              >
                <Icon className="w-12 h-12 text-blue-700 mb-6" />

                <h2 className="text-2xl font-bold text-slate-950">
                  {service.title}
                </h2>

                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}