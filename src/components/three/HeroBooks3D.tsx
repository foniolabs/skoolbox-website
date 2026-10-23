"use client";

import { useEffect, useRef, useState } from "react";

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

/**
 * Only spend the bytes and GPU on 3D where it won't hurt: wide screens
 * (it sits beside the tutor card), no reduced-motion or Data Saver, a fast
 * connection, a reasonably capable device, and working WebGL. Everyone
 * else keeps the page exactly as it is without it.
 */
export function canRun3D(): boolean {
  if (typeof window === "undefined") return false;
  if (!window.matchMedia("(min-width: 1280px)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  const nav = navigator as Navigator & { connection?: NetworkInfo; deviceMemory?: number };
  if (nav.connection?.saveData) return false;
  if (["slow-2g", "2g", "3g"].includes(nav.connection?.effectiveType ?? "")) return false;
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return false;
  if (nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency < 4) return false;

  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function HeroBooks3D({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canRun3D()) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    // Wait until the page has loaded and the browser is idle, so the 3D
    // never competes with the hero's first paint.
    const start = () => {
      import("./booksScene").then(({ mountBooks }) => {
        if (cancelled) return;
        cleanup = mountBooks(el, () => setVisible(true));
      });
    };
    const idle = (cb: () => void) => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(cb, { timeout: 2500 });
      } else {
        setTimeout(cb, 1200); // Safari has no requestIdleCallback
      }
    };
    const onLoad = () => idle(start);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`${className ?? ""} transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
    />
  );
}
