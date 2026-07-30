"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** ms between each child */
  stagger?: number;
  /** initial vertical offset in px */
  y?: number;
  /** ms before the first child animates */
  delay?: number;
  /** how much of the element must be visible to trigger (0-1) */
  threshold?: number;
  as?: "div" | "ul" | "section";
};

/**
 * Scroll-triggered staggered reveal powered by Anime.js.
 * Animates its DIRECT children up + in with an expressive easeOutExpo curve.
 * Children start hidden via the `.anime-reveal` CSS rule so there's no flash.
 */
export default function Reveal({
  children,
  className = "",
  stagger = 90,
  y = 28,
  delay = 0,
  threshold = 0.2,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Cast to a generic element type so the polymorphic `ref` isn't type-checked
  // against the intersection of div/ul/section ref types (which conflict).
  const Tag = as as React.ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = Array.from(el.children) as HTMLElement[];
    if (!targets.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      anime.set(targets, { opacity: 1, translateY: 0 });
      return;
    }

    anime.set(targets, { opacity: 0, translateY: y });

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          anime({
            targets,
            opacity: [0, 1],
            translateY: [y, 0],
            easing: "easeOutExpo",
            duration: 950,
            delay: anime.stagger(stagger, { start: delay }),
          });
          obs.disconnect();
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger, y, delay, threshold]);

  return (
    <Tag ref={ref} className={`anime-reveal ${className}`}>
      {children}
    </Tag>
  );
}
