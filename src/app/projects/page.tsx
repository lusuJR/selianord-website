const projects = [
  {
    title: "Cloud Migration Platform",
    description: "Azure cloud infrastructure deployment and modernization.",
    tags: ["Azure", "DevOps", "Cloud"],
  },
  {
    title: "AI Analytics Solution",
    description: "Business intelligence powered by AI and data analytics.",
    tags: ["AI", "Python", "Analytics"],
  },
  {
    title: "Cybersecurity Architecture",
    description: "Secure cloud architecture and digital asset protection.",
    tags: ["Security", "Cloud", "Risk"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
            Case Studies • Solutions • Portfolio
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-950">
            Featured Projects
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Explore digital solutions delivered by Selianord Group, helping
            businesses innovate, automate, and grow.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl p-8 shadow-xl border hover:-translate-y-2 transition duration-300"
            >
              <h2 className="text-2xl font-bold text-slate-950">
                {project.title}
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}