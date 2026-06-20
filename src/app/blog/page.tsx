const posts = [
  {
    title: "Why Cloud Solutions Matter for Modern Businesses",
    description:
      "Cloud platforms help businesses become more scalable, secure, and cost-effective.",
    category: "Cloud",
  },
  {
    title: "How AI Can Improve Business Operations",
    description:
      "AI can automate tasks, improve decision-making, and unlock new business value.",
    category: "AI",
  },
  {
    title: "Cybersecurity Basics Every Business Should Know",
    description:
      "Protecting data, users, and systems is essential for every modern business.",
    category: "Security",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-slate-50">
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
            Insights • Articles • Technology
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-950">
            Selianord Blog
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Explore insights on cloud computing, software development,
            cybersecurity, AI, and digital transformation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                {post.category}
              </span>

              <h2 className="mt-6 text-2xl font-bold text-slate-950">
                {post.title}
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                {post.description}
              </p>

              <button className="mt-6 text-blue-700 font-semibold">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}