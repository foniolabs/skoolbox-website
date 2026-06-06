"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "For schools", href: "#pricing" },
  { label: "For teachers", href: "#features" },
  { label: "About us", href: "#how-it-works" },
  { label: "Contact us", href: "#contact" },
];

function ZigzagUnderline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 6"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-0 right-0 -bottom-2 h-2 w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
    >
      <path
        d="M0 5 L10 1 L20 5 L30 1 L40 5 L50 1 L60 5 L70 1 L80 5"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/80 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(0,0,0,0.15)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-[76px] items-center justify-between md:h-[84px]">
        <Link
          href="/"
          className="flex items-center gap-2 transition hover:opacity-85"
        >
          <Image
            src="/logo.svg"
            alt="SkoolBox"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="text-[22px] font-black leading-none tracking-[-0.04em] text-[#25632d] md:text-[24px]">
            skoolbox
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex lg:gap-14">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[14px] font-semibold hover:text-ink"
            >
              <span className="text-ink/75 transition-colors group-hover:text-ink">
                {l.label}
              </span>
              <span className="text-primary">
                <ZigzagUnderline />
              </span>
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full bg-cream-400/60 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream-400/50 bg-cream-100 md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-semibold text-ink/85"
              >
                {l.label}
              </a>
            ))}
            <a href="#download" className="btn-primary mt-3 w-full">
              Get SkoolBox
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
