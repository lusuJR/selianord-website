import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-blue-700 font-semibold">About Selianord</span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-950 leading-tight">
            We help businesses grow through smart technology.
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Selianord Group provides innovative technology solutions, cloud
            services, software development, consulting, cybersecurity and
            digital transformation services to help businesses operate better
            and grow confidently.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Business-focused digital solutions",
              "Modern software and cloud technologies",
              "Reliable support and long-term partnership",
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="text-blue-700" size={20} />
                {item}
              </p>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-8 bg-slate-950 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Learn More <ArrowRight size={18} />
          </Link>
        </div>

        <div className="bg-slate-50 border rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-950">
            Our Focus Areas
          </h3>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              "Software Development",
              "Cloud Solutions",
              "IT Consulting",
              "Cybersecurity",
              "AI Solutions",
              "Digital Transformation",
            ].map((item) => (
              <div key={item} className="bg-white border rounded-2xl p-5 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}