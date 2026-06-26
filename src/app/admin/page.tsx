import {
  FolderKanban,
  BriefcaseBusiness,
  Newspaper,
  Mail,
  FileText,
} from "lucide-react";

const stats = [
  {
    title: "Projects",
    value: 3,
    icon: FolderKanban,
  },
  {
    title: "Services",
    value: 5,
    icon: BriefcaseBusiness,
  },
  {
    title: "Blogs",
    value: 4,
    icon: Newspaper,
  },
  {
    title: "Contacts",
    value: 3,
    icon: Mail,
  },
  {
    title: "Quotes",
    value: 4,
    icon: FileText,
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-950">
          Admin Dashboard
        </h1>
        <p className="mt-2 text-slate-600">
          Manage Selianord website content, messages, and quote requests.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-2xl shadow-sm border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-slate-950">
                    {stat.value}
                  </h2>
                </div>

                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}