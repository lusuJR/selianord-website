export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-6xl font-bold text-slate-900">
          Selianord Group
        </h1>

        <p className="mt-6 text-xl text-slate-600">
          Empowering businesses through innovative technology solutions,
          software development, cloud services, consulting and digital transformation.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-4 bg-blue-700 text-white rounded-xl hover:bg-blue-800">
            Our Services
          </button>

          <button className="px-8 py-4 border rounded-xl hover:bg-slate-100">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}