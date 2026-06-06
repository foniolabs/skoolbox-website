"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";

type Item = {
  name: string;
  role: string;
  quote: string;
  date: string;
  initials: string;
  color: string;
};

const items: Item[] = [
  {
    name: "Mrs. Adunni Olalere",
    role: "Biology teacher · Greenwood College",
    quote:
      "SkoolBox is the first tool that actually works in our school. Even when our router is down, my SS3 students still get tutored.",
    date: "March 18, 2026",
    initials: "AO",
    color: "bg-primary",
  },
  {
    name: "Mr. Ibrahim Chukwu",
    role: "Principal · FGC Abuja",
    quote:
      "We deployed SkoolBox across 12 classrooms last term. Teachers love the lesson planner, and our quiz scores went up almost 30%.",
    date: "February 4, 2026",
    initials: "IC",
    color: "bg-accent",
  },
  {
    name: "Fatima Kareem",
    role: "SS2 student · Loyola Jesuit",
    quote:
      "The AI tutor explains physics in ways my textbook can't. I can study at night, no data needed.",
    date: "January 22, 2026",
    initials: "FK",
    color: "bg-teal",
  },
  {
    name: "Mrs. Chioma Eze",
    role: "Mathematics teacher · Corona Schools",
    quote:
      "Lesson planning used to eat my Sundays. With SkoolBox, I plan a whole week in 20 minutes.",
    date: "December 9, 2025",
    initials: "CE",
    color: "bg-sky",
  },
];

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.clientWidth * 0.72 + 24;
      const idx = Math.round(el.scrollLeft / cardW);
      setActive(Math.min(items.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(idx: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const cardW = el.clientWidth * 0.72 + 24;
    el.scrollTo({ left: idx * cardW, behavior: "smooth" });
  }

  return (
    <section className="section overflow-hidden bg-cream-100">
      <div className="container-page">
        {/* Heading row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Teachers&rsquo; voice</p>
            <h2 className="display mt-5 text-4xl md:text-6xl lg:text-[4.2rem]">
              Stories from our
              <br />
              <span className="text-primary">classroom community</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div className="mt-14">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-[7.5%] pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0.6, scale: 0.96 }}
              animate={{
                opacity: i === active ? 1 : 0.5,
                scale: i === active ? 1 : 0.96,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid w-[72%] max-w-3xl shrink-0 snap-center gap-6 rounded-[24px] bg-cream-50 p-8 shadow-card md:grid-cols-[1fr_auto] md:p-10"
            >
              <div>
                {/* Name and role */}
                <div className="text-lg font-black text-ink">{t.name}</div>
                <div className="mt-0.5 text-sm text-ink/55">{t.role}</div>

                {/* Stars and date row */}
                <div className="mt-5 flex items-center gap-4">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-ink/40">
                    {t.date}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-5 max-w-xl text-base font-medium leading-relaxed text-ink/70 md:text-lg">
                  {t.quote}
                </blockquote>
              </div>

              {/* Avatar circle */}
              <div className="flex items-start justify-center md:items-center">
                <div
                  className={`grid h-24 w-24 shrink-0 place-items-center rounded-full ${t.color} text-2xl font-black tracking-tight text-white md:h-32 md:w-32 md:text-3xl`}
                >
                  {t.initials}
                </div>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Nav buttons */}
        <div className="container-page mt-2 flex items-center gap-3">
          <button
            aria-label="Previous testimonial"
            onClick={() => scrollTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => scrollTo(Math.min(items.length - 1, active + 1))}
            disabled={active === items.length - 1}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
