"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = ["Home", "About", "Services", "Projects", "Blog", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
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
          href="/get-quote"
          className="hidden md:inline-flex bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
        >
          Get Quote
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-950"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-slate-700 font-medium hover:text-blue-700"
              >
                {link}
              </Link>
            ))}

            <Link
              href="/get-quote"
              onClick={() => setOpen(false)}
              className="bg-blue-700 text-white text-center px-6 py-3 rounded-xl hover:bg-blue-800 transition"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}