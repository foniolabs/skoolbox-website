import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Facebook, Heart } from "lucide-react";
import { Star, Sparkle, Squiggle } from "./Doodles";

const columns = [
  {
    title: "Product",
    color: "text-secondary",
    links: [
      { label: "Schools", href: "#pricing" },
      { label: "Teachers", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Company",
    color: "text-accent",
    links: [
      { label: "Blog", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "Contact", href: "mailto:hello@skoolbox.xyz" },
    ],
  },
  {
    title: "Legal",
    color: "text-primary",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
];

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Facebook, label: "Facebook" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-cream-50 text-ink">
      {/* scattered doodles */}
      <Star className="absolute left-[6%] top-14 h-6 w-6 text-sun animate-wobble" />
      <Sparkle className="absolute right-[10%] top-12 h-5 w-5 text-accent animate-float-gentle" />
      <Squiggle className="absolute left-[34%] top-24 hidden h-5 w-24 text-coral md:block" />

      <div className="container-page relative z-10 pb-10 pt-16 md:pt-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_auto]">
          {/* Left: brand + social + link columns */}
          <div>
            <Link href="/" className="flex items-center gap-2 transition hover:opacity-85">
              <Image src="/logo.svg" alt="SkoolBox" width={32} height={32} className="h-8 w-8" />
              <span className="text-[20px] font-black leading-none tracking-[-0.04em] text-ink md:text-[22px]">
                skoolbox
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm font-semibold leading-relaxed text-ink/60">
              The playful, offline-first classroom companion that helps Nigerian
              teachers plan, teach, quiz, and track — all in one app.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-white text-ink shadow-sticker-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <Icon size={17} strokeWidth={2.2} />
                </a>
              ))}
            </div>

            {/* Link columns */}
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-8 sm:gap-12">
              {columns.map((col) => (
                <div key={col.title}>
                  <div className={`text-[12px] font-extrabold uppercase tracking-[0.18em] ${col.color}`}>
                    {col.title}
                  </div>
                  <ul className="mt-5 space-y-3.5">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-sm font-bold text-ink/70 transition hover:text-ink"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: playful illustration */}
          <div className="justify-self-center lg:justify-self-end">
            <Image
              src="/footer-illustration.svg"
              alt="A student happily reading on a stack of books"
              width={1022}
              height={813}
              className="h-[200px] w-auto select-none md:h-[260px] lg:h-[300px]"
              priority={false}
            />
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t-2 border-dashed border-ink/15 pt-7 text-[13px] font-bold text-ink/55 sm:flex-row">
          <span>© {year} SkoolBox. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5">
            Made with <Heart size={14} className="text-coral" fill="currentColor" /> in Jos
          </span>
        </div>
      </div>
    </footer>
  );
}
