import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Financial Services Client",
      role: "Cloud Migration Project",
      text: "Selianord delivered our Azure migration successfully with excellent support and professionalism.",
    },
    {
      name: "Retail Business",
      role: "Software Development",
      text: "Their team built a scalable web platform that transformed our customer experience.",
    },
    {
      name: "Technology Company",
      role: "Cybersecurity Consulting",
      text: "Reliable, knowledgeable, and committed to delivering secure solutions.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold">
            Testimonials
          </span>

          <h2 className="mt-3 text-5xl font-bold text-slate-950">
            What our clients say
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Trusted by businesses seeking reliable technology and digital
            transformation solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <Quote className="text-blue-700 mb-6" size={40} />

              <p className="text-slate-600 leading-8 italic">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p className="text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}