import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import { company } from "@/constants/company";

export default function Footer() {
  const companyLinks = ["Home", "About", "Services", "Projects", "Blog", "Contact"];

  const services = [
    "Software Development",
    "Cloud Solutions",
    "AI Solutions",
    "Cybersecurity",
    "IT Consulting",
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-blue-700/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {company.name}
            </h2>

            <p className="mt-5 text-slate-400 leading-8 max-w-sm">
              Building modern software, cloud, AI and cybersecurity solutions
              that help businesses grow securely and efficiently.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {[
                { icon: FaLinkedin, href: company.social.linkedin },
                { icon: FaGithub, href: company.social.github },
                { icon: FaFacebook, href: company.social.facebook },
                { icon: FaInstagram, href: company.social.instagram },
              ].map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:border-blue-700 hover:text-white transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-slate-400">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="inline-flex items-center gap-2 hover:text-white transition"
                  >
                    <ArrowRight size={14} />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-blue-400 mt-1" />
                <span>{company.email}</span>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} className="text-blue-400 mt-1" />
                <span>{company.phone}</span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-blue-400 mt-1" />
                <span>{company.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-slate-500 hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}