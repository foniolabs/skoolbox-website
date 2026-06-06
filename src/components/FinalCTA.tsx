"use client";

import { motion } from "framer-motion";
import { Download, ShieldCheck, WifiOff } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="download" className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-20 text-center text-white md:px-16 md:py-28"
        >
          {/* Floating decorative dots */}
          <div className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-primary/60" />
          <div className="absolute left-[25%] top-[65%] h-3 w-3 rounded-full bg-accent/50" />
          <div className="absolute right-[20%] top-[15%] h-2.5 w-2.5 rounded-full bg-teal/50" />
          <div className="absolute right-[12%] top-[70%] h-2 w-2 rounded-full bg-sky/50" />
          <div className="absolute left-[8%] top-[45%] h-1.5 w-1.5 rounded-full bg-white/20" />
          <div className="absolute right-[30%] top-[80%] h-1.5 w-1.5 rounded-full bg-white/15" />

          {/* Sparkle */}
          <div className="absolute left-[30%] top-[25%] text-xl text-accent/60 animate-float-gentle">
            ✦
          </div>
          <div className="absolute right-[25%] top-[30%] text-sm text-primary/50 animate-float-gentle [animation-delay:1s]">
            ✦
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="display mx-auto max-w-3xl text-center text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
              Teaching isn&rsquo;t easy,
              <br />
              <span className="opacity-60 italic font-medium">learning should be.</span>
            </h2>

            {/* 3D Icon */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative my-8 md:my-10 h-32 w-32 md:h-44 md:w-44"
            >
              <img 
                src="/brain/3fae4870-8792-4931-9a0c-7f872ab7f2d7/3d_education_icon_1780748858610.png" 
                alt="3D Education Icon"
                className="h-full w-full object-contain pointer-events-none select-none drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
            </motion.div>

            <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline group border-white/20 bg-white/5 hover:bg-white hover:text-ink transition-all duration-300"
              >
                <Download size={16} />
                Download App
              </motion.a>
            </div>

            <div className="mt-6 flex justify-center gap-5 text-sm font-semibold text-white/50">
              <span className="inline-flex items-center gap-1.5">
                <WifiOff size={14} /> Offline-first
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={14} /> Local data
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
