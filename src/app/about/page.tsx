import { CheckCircle2, Target, Eye, Gem } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="pt-36 pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-blue-700 font-semibold">About Selianord</span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-slate-950">
            Technology solutions built for growth.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-8">
            Selianord Group is a technology-driven company focused on software
            development, cloud solutions, IT consulting, cybersecurity, AI
            solutions and digital transformation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-950">
              Who We Are
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              We help businesses use technology to improve operations, increase
              efficiency and build secure digital platforms. Our approach is
              practical, modern and focused on long-term business value.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Software development and web applications",
                "Cloud services and infrastructure",
                "Cybersecurity and digital protection",
                "Technology consulting and transformation",
              ].map((item) => (
                <p key={item} className="flex gap-3 items-center text-slate-700">
                  <CheckCircle2 className="text-blue-700" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 text-white rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold">Our Commitment</h3>
            <p className="mt-5 text-slate-300 leading-8">
              We are committed to delivering reliable, scalable and future-ready
              technology solutions that support business growth and digital
              innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Mission",
              text: "To deliver innovative technology solutions that help businesses grow.",
            },
            {
              icon: Eye,
              title: "Vision",
              text: "To become a trusted technology partner for digital transformation.",
            },
            {
              icon: Gem,
              title: "Values",
              text: "Innovation, reliability, professionalism and customer focus.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="bg-white p-8 rounded-3xl shadow-md">
                <Icon className="w-12 h-12 text-blue-700 mb-6" />
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-slate-600 leading-7">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}