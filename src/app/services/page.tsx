export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 bg-slate-50">
      <section className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-slate-900 mb-10">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {["Software Development", "Cloud Solutions", "IT Consulting"].map(
            (service) => (
              <div key={service} className="bg-white p-8 rounded-2xl shadow">
                <h2 className="text-2xl font-bold mb-4">{service}</h2>
                <p className="text-slate-600">
                  Professional technology solutions tailored to business needs.
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}