"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {

  const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
  e.preventDefault();

  setLoading(true);
  setMessage("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const contact = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const response = await fetch("http://localhost:5032/api/Contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });

  setLoading(false);

  if (response.ok) {
    setMessage("Message sent successfully.");
    form.reset();
  } else {
    setMessage("Something went wrong. Please try again.");
  }
}

  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
            Contact • Support • Consultation
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-950">
            Get In Touch
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            We'd love to hear about your project and discuss how Selianord Group
            can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-medium transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {message && (
                <p className="text-sm font-medium text-blue-700">
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-700" />
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-slate-600">
                    selianordev@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4">
                <Phone className="text-blue-700" />
                <div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-slate-600">
                    +27 61 581 7580
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-700" />
                <div>
                  <h3 className="font-bold text-xl">Location</h3>
                  <p className="text-slate-600">
                    Pretoria, South Africa
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-slate-950 text-white p-10 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold">
                Let's Build Something Amazing
              </h2>

              <p className="mt-4 text-slate-300 leading-8">
                From cloud solutions and software development to AI and cybersecurity,
                Selianord Group is ready to help your business transform digitally.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}