"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Arthur Morgan",
    role: "Elite Member",
    highlight: "doubled in 4 months",
    text: "The atmosphere here is unmatched. It's not just a gym; it's a high-performance lab. My strength has {highlight}.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXMGDeiNrpeC-umodwQ2K2cVphTZr-NP6aZ3clhfkPpgZ1K4m0e5A6hg8RFZVYBPC2aVjY69pE5k3I53aqubVabPCt--d6ki5HY1J8p-oCuI4DLBI3PdQYoX2Xgs1pohtaB06ZkMnegDCd9YLYUEec5JnaLtgVdV4a0VEbGLFjvk7imX8dRi-B_79aJi1rhD81EGNWKgILI_QmgPhzfmh04JIwvOwlHx1m_j-WXdHERamrAwxPqmFRvj8Qqe9POS_1UeC56ZNSJg"
  },
  {
    name: "Isabella Swan",
    role: "Pro Athlete",
    highlight: "lost 20kg",
    text: "The coaches are true professionals. They understand the science of movement. I've {highlight} and gained total body control.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPEO1tv_WQlttYNjZzbtDfGkr03earLPuACV7bVq541JdmeAeGyAgZLtAK8swblnuEodlg1qr37MS925c9HTV0vngdIB5CI_sfB9SLgOYmSf5ZN_YlQvYCFC4h4J76q-8TT3daQuMZneM0IzAhGumuPQK6Hfz-LI7YVp1Jbn9gPwZrg_gQl_i5t20UtPHGMqJ2f7-YVY8ZPFZ_pr4ZRMqSwEROmIiE9tx-CXPWV3_XixMH3HTXz3cMrySofbFPy0Ck-qjTNlALDQ"
  },
  {
    name: "Marcus Fenix",
    role: "Performance Member",
    highlight: "game changers",
    text: "Best recovery facilities I've ever used. The contrast baths and infrared sauna are {highlight} for my training cycle.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMv2-L7s3cxfnOpPV7iz0p3n1sPylHWooMPPnHZpC7ZNcMoWpLjVViSQ_FlG_9aClB3nFLEIe7bPSjH_z2nLVTV-yaMZo--pyv2VI0lJ4B2aCE4o2G2JqI6bf1MHHtO33stW1UX33xTSaJpFjDjmEuwQtm1F9hHIySyzIItdrEE42qDzAwG1acY_9qsCAKhoqT-05sGMUbRx16jKw-EQc1y-EG72wo25zy-1L3wtocVPjkwCVIHwRdAT2n37T-Q5n5hV14C3O3EA"
  }
];

// Duplicate the array so the marquee loops seamlessly
const MARQUEE_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  const parts = testimonial.text.split("{highlight}");

  return (
    <div className="min-w-[85vw] md:min-w-[450px] max-w-[500px] h-auto flex flex-col justify-between bg-surface-container-highest p-8 md:p-10 rounded-3xl border border-outline-variant/20 card-lift hover-glow transition-all shrink-0">
      <div>
        <div className="flex gap-1 text-accent mb-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="fill-accent w-5 h-5 text-accent" />
          ))}
        </div>
        <p className="text-lg md:text-xl italic text-white/90 leading-relaxed font-medium">
          &ldquo;{parts[0]}
          <span className="text-accent font-black not-italic border-b-2 border-accent/30 pb-0.5">
            {testimonial.highlight}
          </span>
          {parts[1]}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <div className="w-12 h-12 bg-accent rounded-full overflow-hidden border-2 border-accent/20 relative shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div>
          <p className="font-black font-space-grotesk uppercase text-base">{testimonial.name}</p>
          <p className="text-[10px] text-on-surface-variant font-bold tracking-widest uppercase mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-14 lg:py-16 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-screen-2xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <Quote className="w-14 h-14 text-accent opacity-20 fill-accent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black font-space-grotesk uppercase tracking-tighter mb-10 text-center"
        >
          The <span className="text-accent">Voice</span> of Body Evolution
        </motion.h2>
      </div>

      {/* Marquee container — pauses on hover */}
      <div className="group/marquee relative">
        {/* Left/right fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-surface-container-low to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-surface-container-low to-transparent pointer-events-none" />

        <div className="flex gap-6 animate-marquee group-hover/marquee:[animation-play-state:paused] py-4">
          {MARQUEE_ITEMS.map((testimonial, i) => (
            <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
