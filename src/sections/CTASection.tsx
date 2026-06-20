import Link from "next/dist/client/link";

export default function CTASection() {
  return (
    <section className="bg-blue-700 text-white py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Transform Your Business?
        </h2>

         <Link
          href="/get-quote"
          className="inline-block mt-8 px-8 py-4 bg-white text-blue-700 rounded-xl font-medium hover:bg-slate-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}