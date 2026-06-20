import { Lightbulb, ShieldCheck, Users, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We use modern technologies to create future-ready solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "We focus on secure, stable and dependable delivery.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We design solutions around real business needs.",
  },
  {
    icon: Rocket,
    title: "Growth Driven",
    description: "We help businesses scale through digital transformation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose Selianord?
          </h2>
          <p className="mt-4 text-slate-600">
            We combine innovation, expertise and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-slate-50 border rounded-2xl p-8 hover:shadow-lg transition"
              >
                <Icon className="w-10 h-10 text-blue-700 mb-5" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}