import { Users, BriefcaseBusiness, ShieldCheck, Globe } from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "10+",
    label: "Solutions Delivered",
  },
  {
    icon: Users,
    value: "100%",
    label: "Customer Focus",
  },
  {
    icon: Globe,
    value: "24/7",
    label: "Support Mindset",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Reliable Solutions",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-600 transition"
              >
                <Icon className="w-10 h-10 text-blue-500 mb-6" />

                <h3 className="text-4xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}