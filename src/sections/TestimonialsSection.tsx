import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Professional delivery with clear communication and attention to detail.",
    author: "Client Success",
  },
  {
    quote:
      "Modern technology solutions aligned with business goals and growth.",
    author: "Digital Transformation",
  },
  {
    quote:
      "Long-term support and continuous improvement throughout the project lifecycle.",
    author: "Technology Partnership",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            What Clients Can Expect
          </h2>

          <p className="mt-4 text-slate-600">
            Reliable, scalable and professional digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <Quote className="w-10 h-10 text-blue-700 mb-6" />

              <p className="text-slate-600 leading-8 italic">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-slate-900">{item.author}</h4>
                <p className="text-sm text-slate-500">
                  Selianord Group Commitment
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}