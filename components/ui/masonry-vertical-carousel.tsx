"use client";
import { useRef } from "react";
import { Masonry } from "./masonry";
import type { ImageType } from "./masonry";

interface MasonryVerticalCarouselProps {
  images: ImageType[];
  columns?: 1 | 2;
  className?: string;
  onImageClick?: (image: ImageType) => void;
}

export function MasonryVerticalCarousel({
  images,
  columns = 2,
  className = "",
  onImageClick,
}: MasonryVerticalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate images for seamless scrolling
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div
      ref={containerRef}
      className={`relative h-full overflow-hidden ${className}`}
    >
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-8 z-10 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-8 z-10 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes slideUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .slide-container {
          animation: slideUp 30s linear infinite;
        }

        // .slide-container:hover {
        //   animation-play-state: paused;
        // }
      `}</style>
      <div className="slide-container">
        <Masonry
          images={duplicatedImages}
          columns={columns}
          onImageClick={onImageClick}
        />
      </div>
    </div>
  );
}
