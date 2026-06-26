import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  Newspaper,
  Mail,
  FileText,
  BriefcaseBusiness,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    name: "Services",
    href: "/admin/services",
    icon: BriefcaseBusiness,
  },
  {
    name: "Blogs",
    href: "/admin/blogs",
    icon: Newspaper,
  },
  {
    name: "Contacts",
    href: "/admin/contacts",
    icon: Mail,
  },
  {
    name: "Quotes",
    href: "/admin/quotes",
    icon: FileText,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="min-h-screen w-72 bg-slate-950 text-white p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Selianord CMS</h1>
        <p className="mt-2 text-sm text-slate-400">
          Admin Dashboard
        </p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}