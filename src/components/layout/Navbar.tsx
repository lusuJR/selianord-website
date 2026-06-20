import Link from "next/link";

const navLinks = ["Home", "About", "Services", "Projects", "Blog", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-slate-950">
          Selianord
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="text-slate-700 hover:text-blue-700 transition"
            >
              {link}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
        >
          Get Quote
        </Link>
      </nav>
    </header>
  );
}