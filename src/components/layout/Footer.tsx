import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { company } from "@/constants/company";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t-4 border-blue-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {company.name}
            </h2>

            <p className="mt-5 text-slate-400 leading-7 max-w-xs text-base">
              Building modern software, cloud, AI and cybersecurity solutions
              for growing businesses.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-slate-400 hover:text-blue-400 transition" />
              </a>

              <a href={company.social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl text-slate-400 hover:text-blue-400 transition" />
              </a>

              <a href={company.social.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl text-slate-400 hover:text-blue-400 transition" />
              </a>

              <a href={company.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl text-slate-400 hover:text-blue-400 transition" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-slate-400 text-sm">
              {["Home", "About", "Services", "Projects", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="hover:text-blue-400 transition"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Software Development</li>
              <li>Cloud Solutions</li>
              <li>AI Solutions</li>
              <li>Cybersecurity</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-blue-400" />
                <span>{company.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-blue-400" />
                <span>{company.phone}</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-blue-400" />
                <span>{company.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-500 hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="text-slate-500 hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}