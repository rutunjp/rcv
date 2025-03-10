"use client";
import { Button } from "@/components/ui/button"; // Shadcn UI
import Link from "next/link";
import React from "react";
import { MasonryVerticalCarousel } from "@/components/ui/masonry-vertical-carousel";

// Define types for stats
type ProjectStat = {
  value: string;
  label: string;
  description?: string;
};

const projectStats: ProjectStat[] = [
  {
    value: "15",
    label: "Community Service",
    description: "",
  },
  { value: "10", label: "International", description: "" },
  {
    value: "12",
    label: "Professional Service",
    description: " ",
  },
  { value: "8", label: "Club Service", description: "" },
  { value: "45", label: "Total Projects", description: "" },
] as const;

// Modified carouselImages array - removed 'as const' for dynamic flexibility
const carouselImages = [
  { src: "/images/projects/hero.jpg", alt: "Rotaract crew in action" },
  { src: "/images/projects/donbosco.jpg", alt: "Community service project" },
  { src: "/images/projects/hero.jpg", alt: "Rotaract crew in action" },
  { src: "/images/projects/donbosco.jpg", alt: "Community service project" },
];

export default function Hero() {
  return (
    <section className="relative pt-20 container mx-auto px-4 sm:px-4">
      {/* Background Pattern with Grain Effect */}

      <div className="flex  sm:px-16 px-4 w-full flex-col justify-between md:flex-row items-start gap-16  py-12">
        <div className="flex flex-col justify-center w-full md:w-[45%] space-y-5 sticky top-24">
          {/* Eyebrow text */}
          <p className="text-[#FF5733] font-semibold tracking-wide uppercase">
            Welcome to Rotaract Vadodara
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Together We <span className="text-[#FF5733]">Serve Better</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Join our community of young leaders making a difference through
            service, friendship, and professional growth.
          </p>

          {/* Updated Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
            {projectStats.map((stat, index) => (
              <div
                key={index}
                className={`${
                  index === projectStats.length - 1
                    ? "col-span-2 md:col-span-3 bg-[#FF5733]/5 p-4 rounded-xl"
                    : ""
                }`}
              >
                <p className="text-2xl font-bold text-[#FF5733]">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="text-xs text-gray-600 mt-1">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <Link href="/join">
              <Button className="bg-[#FF5733] hover:bg-[#FF7849] text-white font-bold text-lg py-6 px-8 rounded-full transition-all duration-300 hover:scale-105">
                Join Us
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="font-bold text-lg py-6 px-8 rounded-full border-2 hover:bg-[#FF5733]/5 transition-all duration-300"
              >
                Our Projects
              </Button>
            </Link>
          </div>
        </div>

        {/* Updated MasonryVerticalCarousel with auto-scroll */}
        <div className="relative w-full md:w-[50%] sm:max-h-[80vh] mt-12 md:mt-0">
          <MasonryVerticalCarousel
            images={carouselImages}
            columns={2}
            className="max-h-[70vh] " // Adjusted height for hero section
            // autoScroll={true}
            // speed={20} // Slower speed for smoother scrolling
          />
        </div>
      </div>
    </section>
  );
}
