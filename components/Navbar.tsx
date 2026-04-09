"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Pricing", id: "pricing" },
  { label: "Trainers", id: "trainers" },
  { label: "Contact", id: "contact" },
];

const NAVBAR_HEIGHT = 72; // px — matches the rendered navbar height

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled || isMenuOpen
            ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="flex justify-between items-center px-8 h-[72px] max-w-screen-2xl mx-auto font-space-grotesk tracking-tighter uppercase relative z-50">
          <div 
            className="text-xl md:text-2xl font-black text-accent tracking-tighter cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            BODY EVOLUTION
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "text-sm font-bold transition-all hover:scale-105",
                  link.id === "home"
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-neutral-400 hover:text-white"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="hidden md:block bg-primary-container text-black px-6 py-2 rounded-2xl font-bold btn-glow-hover transition-all active:scale-95 duration-200 uppercase text-sm"
              onClick={() => scrollToSection("lead-form")}
            >
              Join Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="p-2 text-white md:hidden hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-neutral-950 z-[45] flex flex-col pt-32 px-10 md:hidden shadow-2xl border-l border-white/5"
            >
              <div className="flex flex-col gap-8">
                {NAV_LINKS.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-3xl font-black font-space-grotesk uppercase tracking-tighter text-neutral-400 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4 bg-accent text-black px-8 py-4 rounded-2xl font-black uppercase text-lg text-center shadow-[0_0_30px_rgba(0,255,136,0.3)]"
                  onClick={() => scrollToSection("lead-form")}
                >
                  Join Now
                </motion.button>
              </div>

              <div className="mt-auto pb-12">
                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4">Body Evolution HQ</p>
                <p className="text-neutral-300 text-sm font-medium leading-relaxed">
                  Shop No.10, Al Bari Exclusive Towers,<br />
                  Bahadurabad, Karachi
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
