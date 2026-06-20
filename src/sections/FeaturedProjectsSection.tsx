import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Cloud Migration Platform",
    description:
      "Azure cloud deployment and business modernization.",
    image: "/projects/cloud.png",
    tags: ["Azure", "DevOps", "Cloud"],
  },
  {
    title: "AI Analytics Solution",
    description:
      "AI-powered reporting and intelligent decision support.",
    image: "/projects/ai.png",
    tags: ["AI", "Python", "Data"],
  },
  {
    title: "Cybersecurity Architecture",
    description:
      "Secure systems and protection for digital assets.",
    image: "/projects/security.png",
    tags: ["Security", "Cloud", "Risk"],
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-blue-700 font-semibold">
              Featured Projects
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-950">
              Solutions built for real business impact.
            </h2>
          </div>

          <Link
            href="/projects"
            className="flex items-center gap-2 text-blue-700 font-semibold"
          >
            View all projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl bg-white border shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-8 flex items-center gap-2 text-blue-700 font-semibold">
                  View Case Study
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}