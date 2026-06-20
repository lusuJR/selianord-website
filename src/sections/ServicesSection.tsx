import { Code2, Cloud, BriefcaseBusiness } from "lucide-react";
export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <Code2 className="w-12 h-12 text-blue-700 mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Software Development
          </h3>
          <p className="text-slate-600">
            Custom web and mobile applications tailored to your business.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <Cloud className="w-12 h-12 text-blue-700 mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Cloud Solutions
          </h3>
          <p className="text-slate-600">
            Azure, AWS and scalable infrastructure solutions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <BriefcaseBusiness className="w-12 h-12 text-blue-700 mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            IT Consulting
          </h3>
          <p className="text-slate-600">
            Strategic technology and digital transformation consulting.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}