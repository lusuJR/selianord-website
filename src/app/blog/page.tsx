import { getBlogs } from "@/lib/api";
import Link from "next/link";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <main className="bg-slate-50">
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
            Insights • Technology • Innovation
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-950">
            Blog
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Latest insights on software development, cloud, AI, cybersecurity,
            and digital transformation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition"
            >
              <p className="text-sm text-blue-700 font-medium">
                {new Date(blog.publishedDate).toLocaleDateString()}
              </p>

              <h2 className="mt-4 text-2xl font-bold text-slate-950">
                {blog.title}
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                {blog.content.slice(0, 120)}...
              </p>

              <p className="mt-6 text-sm text-slate-500">
                By {blog.author}
              </p>

              <Link
                href={`/blog/${blog.id}`}
                className="inline-block mt-6 text-blue-700 font-semibold"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}