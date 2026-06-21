import { getProjectById } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  return (
    <main className="bg-slate-50 min-h-screen pt-36 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        <Link
          href="/projects"
          className="text-blue-700 font-medium"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8 bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="relative h-[400px]">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-10">

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
              {project.category}
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-950">
              {project.title}
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              {project.description}
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}