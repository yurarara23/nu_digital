"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type ImageItem = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: ImageItem[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) {
    return null;
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group relative mx-auto w-full max-w-5xl">
      <div className="relative aspect-video overflow-hidden bg-blue-50 shadow-xl shadow-blue-950/10">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={image.src} className="relative h-full w-full shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prevSlide}
          aria-label="前の画像へ"
          className="absolute left-4 top-1/2 z-10 bg-white/90 p-3 text-[var(--brand-blue)] shadow-sm transition hover:bg-white md:opacity-0 md:group-hover:opacity-100"
        >
          <FaChevronLeft aria-hidden size={18} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="次の画像へ"
          className="absolute right-4 top-1/2 z-10 bg-white/90 p-3 text-[var(--brand-blue)] shadow-sm transition hover:bg-white md:opacity-0 md:group-hover:opacity-100"
        >
          <FaChevronRight aria-hidden size={18} />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`画像 ${index + 1} を表示`}
            aria-current={currentIndex === index}
            className={`h-2.5 w-8 rounded-full transition-colors ${
              currentIndex === index
                ? "bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
