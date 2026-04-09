"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="pricing" className="py-16 lg:py-20 bg-surface-container-low relative">
      <div className="max-w-screen-2xl mx-auto px-8 w-full">
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-space-grotesk tracking-tighter uppercase leading-none mb-4"
          >
            Choose Your <span className="text-accent">Intensity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant max-w-md text-sm"
          >
            Flexible tiers designed for every stage of your physical evolution.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center max-w-5xl mx-auto"
        >
          {/* Basic */}
          <motion.div variants={cardVariants} className="bg-surface-container-highest p-6 rounded-3xl border border-outline-variant/20 hover-glow transition-all card-lift h-full flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Essential</span>
            <div className="text-4xl font-black font-space-grotesk my-4">5000 Rs<span className="text-base text-on-surface-variant font-inter">/mo</span></div>
            <ul className="space-y-3 mb-6 flex-1">
              <li className="flex items-center gap-2.5 text-on-surface-variant text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> 24/7 Gym Access
              </li>
              <li className="flex items-center gap-2.5 text-on-surface-variant text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> Basic Locker Access
              </li>
              <li className="flex items-center gap-2.5 text-on-surface-variant text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> Free WiFi
              </li>
            </ul>
            <button className="w-full py-3 border border-outline-variant text-white rounded-2xl font-bold text-sm hover:bg-white/5 hover:scale-[1.03] transition-all">Select Plan</button>
          </motion.div>

          {/* Popular */}
          <motion.div variants={cardVariants} className="bg-surface-container-highest p-8 rounded-3xl border-2 border-primary-fixed shadow-[0_0_50px_rgba(0,255,136,0.1)] md:scale-105 relative z-10 card-lift h-full flex flex-col">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-fixed text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Elite Performance</span>
            <div className="text-5xl font-black font-space-grotesk my-4">10000 Rs<span className="text-base text-on-surface-variant font-inter">/mo</span></div>
            <ul className="space-y-3 mb-6 flex-1">
              <li className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> All Essential Features
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> Unlimited Group Classes
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> 1 Personal Training Session
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> Recovery Zone Access
              </li>
            </ul>
            <button className="w-full py-3 bg-primary-container text-black rounded-2xl font-black text-base uppercase btn-glow-hover transition-all">Get Started</button>
          </motion.div>

          {/* Pro */}
          <motion.div variants={cardVariants} className="bg-surface-container-highest p-6 rounded-3xl border border-outline-variant/20 hover-glow transition-all card-lift h-full flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Kinetic Pro</span>
            <div className="text-4xl font-black font-space-grotesk my-4">15000 Rs<span className="text-base text-on-surface-variant font-inter">/mo</span></div>
            <ul className="space-y-3 mb-6 flex-1">
              <li className="flex items-center gap-2.5 text-on-surface-variant text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> All Elite Features
              </li>
              <li className="flex items-center gap-2.5 text-on-surface-variant text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> 4 Training Sessions /mo
              </li>
              <li className="flex items-center gap-2.5 text-on-surface-variant text-sm">
                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10 shrink-0" /> Nutrition Coaching
              </li>
            </ul>
            <button className="w-full py-3 border border-outline-variant text-white rounded-2xl font-bold text-sm hover:bg-white/5 hover:scale-[1.03] transition-all">Select Plan</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
