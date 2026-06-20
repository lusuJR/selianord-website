const technologies = ["Microsoft Azure", "AWS", "DevOps", "AI Solutions", "Cloud Security"];

export default function TechnologiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Trusted Technologies
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-6 py-3 rounded-full border bg-slate-50 text-slate-700 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}