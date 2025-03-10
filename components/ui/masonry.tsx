"use client";
import Image from "next/image";
import React from "react";

export interface ImageType {
  src: string;
  alt: string;
}

interface MasonryProps {
  images: ImageType[];
  columns?: 1 | 2;
  className?: string;
  onImageClick?: (image: ImageType) => void;
}

export function Masonry({
  images,
  columns = 2,
  className = "",
  onImageClick,
}: MasonryProps) {
  return (
    <div className={`${className}`}>
      <div className={`columns-${columns} gap-4 space-y-4`}>
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className={`w-full h-auto hover:opacity-90 transition-opacity rounded-xl ${
                  onImageClick ? "cursor-pointer" : ""
                }`}
                onClick={() => onImageClick?.(image)}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 2}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 