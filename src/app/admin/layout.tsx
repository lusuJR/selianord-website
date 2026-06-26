import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <AdminSidebar />

        <section className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}