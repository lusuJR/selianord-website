import { Globe, Database, Brain, ShieldCheck } from "lucide-react";

const solutions = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Modern, scalable web platforms tailored to your business.",
  },
  {
    icon: Database,
    title: "Cloud & Data",
    description:
      "Secure cloud infrastructure and database solutions.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Intelligent solutions powered by artificial intelligence.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Protecting your digital assets with secure architectures.",
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Solutions
          </h2>

          <p className="mt-4 text-slate-600">
            Delivering innovative and future-ready technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <Icon className="w-12 h-12 text-blue-700 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {solution.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}