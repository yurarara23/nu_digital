"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { heroSlides, homeFeatureTiles } from "@/data/site";

const heroActions = [
  { href: "/news", label: "News" },
  { href: "/blog", label: "Blog" },
  { href: "#join", label: "Join" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden px-5 py-10 md:py-16">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[var(--brand-blue)] shadow-sm ring-1 ring-blue-100">
            Digital Creation Project
          </div>

          <div className="space-y-5">
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[var(--brand-ink)] md:text-7xl">
              Make the
              <span className="block text-[var(--brand-blue)]">Playable Future.</span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              nu_digitalは、ゲーム、VRChat、3D、Web、映像、サウンドを横断して、触って遊べるデジタル創作をつくる団体です。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {heroActions.map((action, actionIndex) => (
              <Link
                key={action.href}
                href={action.href}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-black transition ${
                  actionIndex === 0
                    ? "bg-[var(--brand-blue)] text-white hover:-translate-y-0.5"
                    : "bg-white text-[var(--brand-blue)] ring-1 ring-blue-100 hover:-translate-y-0.5"
                }`}
              >
                {action.label}
                <FaArrowRight aria-hidden size={13} />
              </Link>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {homeFeatureTiles.map((tile) => (
              <div
                key={tile.title}
                className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-blue-100"
              >
                <p className="font-black text-[var(--brand-blue)]">{tile.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-[var(--brand-blue)] shadow-2xl shadow-blue-900/20">
            {heroSlides.map((slide, slideIndex) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slideIndex === 0}
                sizes="(max-width: 1024px) 100vw, 620px"
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  slideIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/92 p-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--brand-blue)]">
                Featured Work
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight text-[var(--brand-ink)]">
                Games, VR worlds, exhibitions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
