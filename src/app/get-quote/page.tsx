"use client";

import { useState } from "react";
import { BriefcaseBusiness, Mail, Phone } from "lucide-react";
import { form } from "framer-motion/m";

export default function GetQuotePage() {
    const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const quote = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      budgetRange: formData.get("budgetRange"),
      description: formData.get("description"),
    };

    const response = await fetch("http://localhost:5032/api/Quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
    });

    setLoading(false);

if (response.ok) {
  setMessage("Quote request submitted successfully.");
  form.reset();
} else {
  setMessage("Something went wrong. Please try again.");
}
  }
  return (
    <main className="bg-slate-50">
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
            Request • Consultation • Quote
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-950">
            Get a Quote
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Tell us about your project and Selianord Group will help you choose
            the right technology solution.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Project Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="fullName"
                  className="w-full p-4 rounded-xl border"
                  placeholder="Full Name"
                  required
                />

                <input
                  name="email"
                  type="email"
                  className="w-full p-4 rounded-xl border"
                  placeholder="Email Address"
                  required
                />

                <input
                  name="phone"
                  className="w-full p-4 rounded-xl border"
                  placeholder="Phone Number"
                  required
                />

              <select name="service" className="w-full p-4 rounded-xl border" required>
                <option value="">Select Service</option>
                <option>Software Development</option>
                <option>Cloud Solutions</option>
                <option>IT Consulting</option>
                <option>Cybersecurity</option>
                <option>AI Solutions</option>
                <option>Data Solutions</option>
              </select>

              <select name="budgetRange" className="w-full p-4 rounded-xl border" required>
                <option value="">Select Budget Range</option>
                <option>Below R10,000</option>
                <option>R10,000 - R50,000</option>
                <option>R50,000 - R100,000</option>
                <option>Above R100,000</option>
              </select>

              <textarea
                name="description"
                rows={5}
                className="w-full p-4 rounded-xl border"
                placeholder="Describe your project..."
                required
              />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-medium disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Quote Request"}
            </button>
              {message && (
                <p className="text-sm font-medium text-blue-700">
                  {message}
                </p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-950 text-white p-10 rounded-3xl shadow-xl">
              <BriefcaseBusiness className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold">Need a custom solution?</h2>
              <p className="mt-4 text-slate-300 leading-8">
                Selianord Group can help with web applications, cloud migration,
                AI solutions, cybersecurity, DevOps, and digital transformation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg flex gap-4">
              <Mail className="text-blue-700" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-slate-600">info@selianord.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg flex gap-4">
              <Phone className="text-blue-700" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-slate-600">+27 XX XXX XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}