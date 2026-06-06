import Image from "next/image";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Schools", href: "#pricing" },
      { label: "Teachers", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "#" },
      { label: "Contact Us", href: "mailto:hello@skoolbox.xyz" },
      { label: "About Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms and Conditions", href: "#" },
      { label: "Privacy policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream-100">
      <div className="container-page py-16 md:py-20">
        {/* Social icons — right aligned */}
        <div className="flex justify-end gap-3">
          <a
            href="#"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-primary hover:text-primary"
          >
            <Instagram size={16} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-primary hover:text-primary"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-primary hover:text-primary"
          >
            <Facebook size={16} />
          </a>
        </div>

        {/* Description */}
        <div className="mt-10 max-w-3xl">
          <p className="text-sm leading-relaxed text-ink/60 md:text-[15px]">
            SkoolBox is a specialist education technology partner to schools,
            colleges &amp; learning institutions, building products &amp;
            services exclusively for the education sector.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/60 md:text-[15px]">
            It is a friendly app for teachers and schools that helps simplify
            lesson planning, quizzing, and AI tutoring, with offline-first
            support. On the other side, it helps institutions with enabling
            end-to-end digitization and improving learning outcomes.
          </p>
        </div>

        {/* Link columns */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 md:max-w-2xl">
          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] font-black uppercase tracking-[0.25em] text-primary">
                {c.title}
              </div>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-base font-semibold text-ink transition hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-ink/10 pt-6 text-xs text-ink/50 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} SkoolBox. All rights reserved.
          </span>
          <span>skoolbox.xyz</span>
        </div>
      </div>
    </footer>
  );
}
