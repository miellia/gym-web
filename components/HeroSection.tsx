"use client";

import { motion } from "framer-motion";
import { ImageCarousel } from "@/components/ImageCarousel";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col overflow-hidden bg-black text-center"
    >
      {/* Full Bleed Video Background */}
      <div className="video-container absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-strong-man-training-with-dumbbells-in-the-gym-4835-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay absolute inset-0"></div>
      </div>

      {/* Content — vertically centered in remaining space above carousel */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-20 px-8 pt-20">
        <motion.h1
          className="text-4xl md:text-6xl font-black font-space-grotesk leading-[1] tracking-tighter uppercase mb-4 text-white max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TRANSFORM YOUR BODY <br /> BUILD YOUR{" "}
          <span className="text-primary-fixed drop-shadow-[0_0_30px_rgba(0,255,136,0.6)]">
            STRENGTH
          </span>
        </motion.h1>

        <motion.p
          className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          No commitment • Cancel anytime. Start your journey with the elite 1%
          of strength athletes.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            className="bg-accent text-black px-8 py-3.5 rounded-2xl font-black text-base uppercase btn-glow-hover transition-all"
            onClick={() => {
              const el = document.getElementById("pricing");
              if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
            }}
          >
            Get Free Trial
          </button>
          <button
            className="bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-2xl font-black text-base uppercase hover:bg-white/20 transition-all hover:scale-[1.03]"
            onClick={() => {
              const el = document.getElementById("pricing");
              if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
            }}
          >
            View Plans
          </button>
        </motion.div>
      </div>

      {/* Carousel pinned to the bottom of the hero viewport */}
      <div className="relative z-10 shrink-0 pb-6">
        <ImageCarousel />
      </div>
    </section>
  );
}
