"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Download, Sparkles } from "lucide-react";
import TutorDemo from "./TutorDemo";
import { WINDOWS_DOWNLOAD_URL, WINDOWS_SIZE } from "@/lib/download";
import { Star, Squiggle, Dots, Arrow, Sparkle } from "./Doodles";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yScene = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-secondary-50">
      {/* scattered doodles */}
      <Star className="absolute left-[6%] top-[22%] h-7 w-7 text-sun animate-float-slow" />
      <Dots className="absolute right-[4%] top-[14%] h-16 w-16 text-secondary/30" />
      <Squiggle className="absolute bottom-[14%] left-[12%] hidden h-6 w-28 text-coral md:block" />
      <Star className="absolute bottom-[12%] left-[45%] hidden h-5 w-5 text-accent animate-wobble md:block" />

      <div className="container-page flex min-h-screen items-center pb-24 pt-32 md:min-h-[720px] md:pb-20 md:pt-16 lg:min-h-[820px]">
        <div className="grid w-full items-center gap-6 md:grid-cols-12 md:gap-2">
          <motion.div
            style={{ y: yText }}
            className="z-10 text-left md:col-span-5 lg:col-span-5"
          >
            {/* Entrance animations are CSS (not Framer) so the hero is visible
                as soon as the HTML + CSS arrive, without waiting for JS to
                hydrate — matters on slow mobile connections. */}
            <span className="eyebrow animate-fade-up">
              <Sparkles size={13} strokeWidth={2.6} />
              Built for Nigerian classrooms
            </span>

            <h1
              className="display mt-5 animate-fade-up text-[46px] leading-[1.0] tracking-tight [animation-delay:50ms] sm:text-[60px] md:text-[58px] lg:text-[74px]"
            >
              Teaching that
              <br />
              feels like{" "}
              <span className="marker text-primary">
                <span>magic</span>
              </span>
            </h1>

            <p className="mt-5 max-w-[400px] animate-fade-up text-[17px] font-semibold leading-relaxed text-ink/70 [animation-delay:140ms] md:text-[18px]">
              Plan lessons, teach with an AI tutor, quiz your class, and track
              every student — all in one playful app that works even offline.
            </p>

            <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:220ms]">
              <a href={WINDOWS_DOWNLOAD_URL} className="btn-primary">
                <Download size={16} strokeWidth={2.6} />
                Download for Windows
              </a>
              <a href="#features" className="btn-outline">
                See how it works
              </a>
            </div>
            <p className="mt-3 animate-fade-up text-[13px] font-bold text-ink/60 [animation-delay:260ms]">
              Free download for Windows 10/11 PCs · {WINDOWS_SIZE}
            </p>

            <div className="relative mt-6 inline-flex animate-fade-up items-center gap-2 text-sm font-bold text-ink/60 [animation-delay:400ms]">
              <Arrow className="h-8 w-8 -scale-x-100 text-accent" />
              No internet? No problem — works fully offline.
            </div>
          </motion.div>

          <motion.div
            style={{ y: yScene }}
            className="relative mt-6 md:col-span-7 md:mt-0 lg:col-span-7"
          >
            {/* Inner wrapper owns the fade so its final transform doesn't
                override the parallax `y` on the motion.div. */}
            <div className="relative flex animate-fade-up justify-center [animation-delay:100ms] md:justify-end">
              <Sparkle className="absolute -left-2 -top-6 h-8 w-8 text-sun animate-float-gentle md:left-6" />
              <Star className="absolute -bottom-5 right-6 h-7 w-7 text-accent animate-wobble" />
              <TutorDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
