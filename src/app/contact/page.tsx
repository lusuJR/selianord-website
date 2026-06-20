export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <section className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

        <form className="max-w-xl space-y-4">
          <input className="w-full border p-3 rounded-lg" placeholder="Full Name" />
          <input className="w-full border p-3 rounded-lg" placeholder="Email Address" />
          <textarea className="w-full border p-3 rounded-lg" rows={5} placeholder="Message" />

          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}