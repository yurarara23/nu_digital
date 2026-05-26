"use client";

import { useState } from "react";
import Image from "next/image";

type ImageItem = {
  src: string;
  alt: string;
};

type Props = {
  images: ImageItem[];
};

export default function ImageCarousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 前へ
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // 次へ
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 指定スライドへ移動
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // 画像がない場合
  if (!images?.length) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto group mb-12">
      {/* カルーセル */}
      <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl bg-slate-100">
        {/* スライド */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-full shrink-0">
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

        {/* 左ボタン */}
        <button
          onClick={prevSlide}
          aria-label="前の画像"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                     p-2 rounded-full bg-black/40 text-white
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-300 hover:bg-black/60"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* 右ボタン */}
        <button
          onClick={nextSlide}
          aria-label="次の画像"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                     p-2 rounded-full bg-black/40 text-white
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-300 hover:bg-black/60"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* ドット */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`画像 ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
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
