"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/site";

const heroActions = [
  { href: "#about", label: "About Us" },
  { href: "#join", label: "Join Us" },
  { href: "/blog", label: "Blog" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {heroSlides.map((slide, slideIndex) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={slideIndex === 0}
          sizes="100vw"
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
            slideIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

      <div className="absolute inset-0 z-30 flex items-center px-6 md:px-8">
        <div className="max-w-2xl space-y-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
            Digital Creation Project
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Creating immersive
            <br />
            <span className="text-cyan-400">digital creations</span>
          </h1>

          <div className="flex flex-wrap gap-4">
            {heroActions.map((action) =>
              action.href.startsWith("/") ? (
                <Link
                  key={action.href}
                  href={action.href}
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-white transition hover:bg-white/10"
                >
                  {action.label}
                </Link>
              ) : (
                <a
                  key={action.href}
                  href={action.href}
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-white transition hover:bg-white/10"
                >
                  {action.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
