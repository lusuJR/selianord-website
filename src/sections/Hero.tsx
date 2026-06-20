import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            Technology • Cloud • Software • Consulting
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-950 leading-tight">
            Building Digital Solutions for Modern Businesses
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
            Selianord Group helps businesses grow through software development,
            cloud solutions, IT consulting, cybersecurity, and digital
            transformation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-7 py-4 rounded-xl hover:bg-blue-800 transition"
            >
              Explore Services <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center border border-slate-300 px-7 py-4 rounded-xl hover:bg-slate-100 transition"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-slate-600">
            <p className="flex gap-2 items-center">
              <CheckCircle2 className="text-blue-700" size={18} />
              Secure
            </p>
            <p className="flex gap-2 items-center">
              <CheckCircle2 className="text-blue-700" size={18} />
              Scalable
            </p>
            <p className="flex gap-2 items-center">
              <CheckCircle2 className="text-blue-700" size={18} />
              Future-ready
            </p>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-blue-200 blur-3xl opacity-40 rounded-full" />

          <div className="relative bg-white rounded-3xl shadow-2xl border p-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                "Web Apps",
                "Cloud",
                "AI",
                "Cybersecurity",
                "DevOps",
                "Consulting",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 border p-5 font-semibold text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 bg-slate-950 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold">Selianord Digital Hub</h3>
              <p className="mt-2 text-slate-300">
                One partner for software, cloud, data, security and digital
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}