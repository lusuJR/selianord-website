import { getBlogById } from "@/lib/api";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailsPage({ params }: Props) {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  return (
    <main className="min-h-screen bg-slate-50 pt-36 pb-24">
      <article className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="text-blue-700 font-medium">
          ← Back to Blog
        </Link>

        <div className="mt-8 bg-white rounded-3xl shadow-xl p-10">
          <p className="text-sm text-blue-700 font-semibold">
            {new Date(blog.publishedDate).toLocaleDateString()}
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-950 leading-tight">
            {blog.title}
          </h1>

          <p className="mt-6 text-slate-500">
            By {blog.author}
          </p>

          <hr className="my-8" />

          <p className="text-lg leading-9 text-slate-700">
            {blog.content}
          </p>
        </div>
      </article>
    </main>
  );
}