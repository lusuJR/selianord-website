"use client";

import CountUp from "react-countup";
import { BriefcaseBusiness, Users, Globe, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    end: 20,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    end: 100,
    suffix: "%",
    label: "Client Focus",
  },
  {
    icon: Globe,
    end: 24,
    suffix: "/7",
    label: "Support Mindset",
  },
  {
    icon: ShieldCheck,
    end: 99,
    suffix: ".9%",
    label: "Reliable Solutions",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-600 transition"
            >
              <Icon className="w-10 h-10 text-blue-500 mb-6" />

              <h3 className="text-5xl font-bold text-white">
                <CountUp end={stat.end} duration={2} />
                {stat.suffix}
              </h3>

              <p className="mt-3 text-slate-400">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}