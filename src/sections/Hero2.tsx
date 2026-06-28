import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cloud,
  ShieldCheck,
  Brain,
  ServerCog,
  BriefcaseBusiness,
} from "lucide-react";

const heroServices = [
  {
    title: "Software",
    icon: Code2,
    description: "Custom web platforms and business applications.",
  },
  {
    title: "Cloud",
    icon: Cloud,
    description: "Azure and AWS infrastructure, migration and optimization.",
  },
  {
    title: "AI",
    icon: Brain,
    description: "Automation, analytics and intelligent business solutions.",
  },
  {
    title: "Security",
    icon: ShieldCheck,
    description: "Cybersecurity architecture and digital protection.",
  },
  {
    title: "DevOps",
    icon: ServerCog,
    description: "CI/CD pipelines, automation and cloud-native delivery.",
  },
  {
    title: "Consulting",
    icon: BriefcaseBusiness,
    description: "Technology strategy and digital transformation guidance.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-36 pb-24">
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Technology • Cloud • AI • Cybersecurity
          </span>

          <h1 className="mt-7 text-5xl md:text-7xl font-bold tracking-tight text-slate-950 leading-[1.05]">
            Building Digital Solutions for Modern Businesses
          </h1>

          <p className="mt-7 max-w-2xl text-lg md:text-xl text-slate-600 leading-9">
            Selianord Group helps organizations design, build and secure modern
            digital platforms through software development, cloud solutions,
            AI, cybersecurity and strategic IT consulting.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-8 py-4 text-white font-semibold shadow-lg shadow-blue-700/20 hover:bg-blue-800 transition"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 hover:bg-slate-100 transition"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            {["Secure", "Scalable", "Future-ready"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm border border-slate-200"
              >
                <CheckCircle2 className="text-blue-700" size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-[2rem] bg-blue-300/30 blur-3xl" />

          <div className="relative rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              {heroServices.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:shadow-lg transition"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon size={22} />
                    </div>

                    <h3 className="font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm text-blue-300 font-semibold">
                Selianord Digital Hub
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                One partner for software, cloud, data, security and growth.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}