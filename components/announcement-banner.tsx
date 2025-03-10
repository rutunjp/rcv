"use client";
import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#FF5733] relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-white">
          <div className="flex-1" /> {/* Spacer */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>🎉</span>
            <Link 
              href="/ai-demystified"
              className="hover:underline"
            >
              Join us for AI Demystified Workshop on March 12th!
            </Link>
            <span>🎉</span>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 