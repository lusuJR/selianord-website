export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">
              Software Development
            </h3>

            <p className="text-slate-600">
              Custom web and mobile solutions tailored to your business.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">
              Cloud Solutions
            </h3>

            <p className="text-slate-600">
              Azure, AWS and scalable cloud infrastructure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">
              IT Consulting
            </h3>

            <p className="text-slate-600">
              Digital transformation and technology advisory services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}