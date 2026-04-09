"use client";

import { MapPin, Mail, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";

const GOOGLE_MAPS_QUERY = encodeURIComponent(
  "Shop No.10, Al Bari Exclusive Towers, Bahadurabad Bahadur Yar Jang CHS, Karachi, 74400"
);
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${GOOGLE_MAPS_QUERY}`;
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${GOOGLE_MAPS_QUERY}&output=embed`;

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-14 lg:py-16 bg-surface-container-low relative">
      <div className="max-w-screen-2xl mx-auto px-8 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black font-space-grotesk uppercase tracking-tighter">
            The <span className="text-accent">Hub</span>
          </h2>
          <p className="text-on-surface-variant mt-3 font-bold tracking-widest uppercase text-xs">
            Our Performance Headquarters
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-5xl">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-outline-variant/20 text-accent transition-all group-hover:bg-accent group-hover:text-black shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="pt-0.5">
                <p className="text-on-surface-variant font-bold uppercase tracking-widest text-[10px] mb-1">
                  Address
                </p>
                <p className="text-sm font-space-grotesk font-bold leading-snug">
                  Shop No.10, Al Bari Exclusive Towers,
                  <br />
                  Bahadurabad Bahadur Yar Jang CHS,
                  <br />
                  Karachi, 74400
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-outline-variant/20 text-accent transition-all group-hover:bg-accent group-hover:text-black shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="pt-0.5">
                <p className="text-on-surface-variant font-bold uppercase tracking-widest text-[10px] mb-1">
                  Phone
                </p>
                <a
                  href="tel:03066667817"
                  className="text-base font-space-grotesk font-bold hover:text-accent transition-colors"
                >
                  0306 6667817
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-outline-variant/20 text-accent transition-all group-hover:bg-accent group-hover:text-black shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="pt-0.5">
                <p className="text-on-surface-variant font-bold uppercase tracking-widest text-[10px] mb-1">
                  Email
                </p>
                <a
                  href="mailto:support@bodyevolution.com"
                  className="text-base font-space-grotesk font-bold hover:text-accent transition-colors"
                >
                  support@bodyevolution.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center border border-outline-variant/20 text-accent transition-all group-hover:bg-accent group-hover:text-black shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="pt-0.5">
                <p className="text-on-surface-variant font-bold uppercase tracking-widest text-[10px] mb-1">
                  Hours
                </p>
                <p className="text-base font-space-grotesk font-bold">
                  Mon - Fri: 05:00 - 00:00
                  <br />
                  Sat - Sun: 07:00 - 22:00
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden border-2 border-outline-variant/10 min-h-[300px] max-h-[calc(100vh-250px)] relative"
          >
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 z-20 bg-accent text-black text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider hover:scale-105 transition-transform shadow-lg"
            >
              Open in Maps
            </a>
            <iframe
              src={GOOGLE_MAPS_EMBED}
              className="w-full h-full absolute inset-0 border-0 grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Body Evolution Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
