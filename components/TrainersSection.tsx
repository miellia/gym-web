"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TRAINERS = [
  {
    name: "Ali",
    role: "Elite Powerlifting",
    desc: "12+ years of high-performance coaching.",
    image: "/images/trainers/1.jpg",
  },
  {
    name: "Bilal",
    role: "Functional Strength",
    desc: "Certified CrossFit L3 specialist.",
    image: "/images/trainers/2.jpg",
  },
  {
    name: "Fahad",
    role: "Body Composition",
    desc: "Specializing in metabolic transformation.",
    image: "/images/trainers/3.jpg",
  },
  {
    name: "Mansoor",
    role: "Mobility & Flow",
    desc: "Expert in athletic recovery and joint health.",
    image: "/images/trainers/4.jpg",
  }
];

export function TrainersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="trainers" className="py-16 lg:py-20 bg-surface relative">
      <div className="max-w-screen-2xl mx-auto px-8 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black font-space-grotesk uppercase tracking-tighter mb-10 text-center"
        >
          Engineered for <span className="text-accent">Performance</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {TRAINERS.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] max-h-[calc(100vh-220px)] card-lift"
            >
              <Image
                src={trainer.image}
                alt={`Coach ${trainer.name}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 smooth-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 p-5 lg:p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-lg lg:text-xl font-black font-space-grotesk uppercase text-white">{trainer.name}</h4>
                <p className="text-primary-fixed font-bold text-xs lg:text-sm mb-2">{trainer.role}</p>
                <p className="text-on-surface-variant text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {trainer.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
