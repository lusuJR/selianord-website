import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          Selianord
        </Link>

        <div className="hidden md:flex gap-8 text-slate-700">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/contact"
          className="hidden md:block bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Get Quote
        </Link>
      </nav>
    </header>
  );
}