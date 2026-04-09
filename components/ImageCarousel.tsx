"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CAROUSEL_IMAGES = [
  "/images/carousel/gym-collage.png",
  "/images/carousel/gym-pullup.png",
  "/images/carousel/gym-pushup.png",
];

export function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false }
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full relative z-10 px-4 md:px-0">
      <div className="relative max-w-7xl mx-auto overflow-hidden group/carousel border border-accent rounded-3xl w-full bg-black/50">
        <div className="overflow-hidden w-full h-[200px] md:h-[280px]" ref={emblaRef}>
          <div className="flex w-full h-full">
            {CAROUSEL_IMAGES.map((src, index) => (
              <div
                className="flex-[0_0_100%] min-w-0 relative w-full h-full"
                key={index}
              >
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500"></div>
                <Image
                  src={src}
                  alt={`Gym intensity collection ${index + 1}`}
                  fill
                  className="object-cover smooth-zoom duration-1000"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-accent hover:text-black hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-accent hover:text-black hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
          {CAROUSEL_IMAGES.map((_, index) => (
             <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "bg-accent w-8"
                  : "bg-white/40 hover:bg-white/80"
              )}
             />
          ))}
        </div>
      </div>
    </div>
  );
}
