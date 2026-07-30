"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

type SplitTextProps = {
  /** Use "\n" to force a line break. */
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** ms between each word */
  stagger?: number;
  /** initial vertical offset in px */
  y?: number;
  delay?: number;
  /** "mount" animates immediately (above the fold), "view" waits for scroll-in */
  trigger?: "mount" | "view";
};

/**
 * Kinetic per-word headline reveal powered by Anime.js — words rise, fade, and
 * settle on a spring-like curve for an "expensive" editorial feel.
 */
export default function SplitText({
  text,
  className = "",
  as: Tag = "span",
  stagger = 34,
  y = 44,
  delay = 0,
  trigger = "view",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const units = el.querySelectorAll<HTMLElement>("[data-word]");
    if (!units.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      anime.set(units, { opacity: 1, translateY: 0, rotateZ: 0 });
      return;
    }

    anime.set(units, { opacity: 0, translateY: y, rotateZ: 6 });

    const run = () =>
      anime({
        targets: units,
        opacity: [0, 1],
        translateY: [y, 0],
        rotateZ: [6, 0],
        easing: "spring(1, 80, 12, 0)",
        delay: anime.stagger(stagger, { start: delay }),
      });

    if (trigger === "mount") {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          run();
          obs.disconnect();
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, stagger, y, delay, trigger]);

  const lines = text.split("\n");

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {lines.map((line, li) => (
        <span key={li} className="inline">
          {line.split(" ").map((word, wi) => (
            <span key={wi}>
              <span
                data-word
                className="inline-block will-change-transform"
                style={{ transformOrigin: "0 100%" }}
              >
                {word}
              </span>
              {" "}
            </span>
          ))}
          {li < lines.length - 1 && <br />}
        </span>
      ))}
    </Tag>
  );
}
