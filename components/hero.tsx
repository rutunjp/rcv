import { Button } from "@/components/ui/button"; // Shadcn UI
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define types for stats
type ProjectStat = {
  value: string;
  label: string;
  description?: string;
};

const projectStats: ProjectStat[] = [
  {
    value: "15+",
    label: "Community Service",
    description: "Local impact projects",
  },
  { value: "10+", label: "International", description: "Global initiatives" },
  {
    value: "12+",
    label: "Professional Dev",
    description: "Career growth events",
  },
  { value: "8+", label: "Club Service", description: "Internal activities" },
  { value: "45+", label: "Total Projects", description: "This Rotary year" },
] as const;
const carouselImages = [
  { src: "/images/hero.jpg", alt: "Rotaract crew in action" },
  { src: "/images/projects/donbosco.jpg", alt: "Community service project" },
] as const;
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern with Grain Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white" />
        <div className="absolute inset-0 opacity-30 bg-[url('/images/noise.png')] bg-repeat" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF5733]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#FF7849]/5 rounded-full blur-3xl" />
      </div>

      <div className="flex sm:px-16 sm:container px-4 w-full flex-col justify-between   md:flex-row items-centedr min-h-[90vh] py-20">
        <div className="flex flex-col justify-center w-full md:w-1/2 space-y-6">
          {/* Eyebrow text */}
          <p className="text-[#FF5733] font-semibold tracking-wide uppercase">
            Welcome to Rotaract Vadodara
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Together We <span className="text-[#FF5733]">Serve Better</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-600">
            Join our community of young leaders making a difference through
            service, friendship, and professional growth.
          </p>

          {/* Updated Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-8">
            {projectStats.map((stat, index) => (
              <div
                key={index}
                className={`${
                  index === projectStats.length - 1
                    ? "col-span-2 md:col-span-3 bg-[#FF5733]/5 p-4 rounded-xl"
                    : ""
                }`}
              >
                <p className="text-3xl font-bold text-[#FF5733]">
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

        {/* Image Section with improved carousel */}
        <div className="relative w-full md:w-[70%] mt-12 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-10" />
          <div className="relative rounded-3xl overflow-hidden h-[500px] group">
            {carouselImages.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                className={`
                  absolute inset-0 object-cover w-full h-full rounded-3xl shadow-2xl
                  opacity-0 animate-carousel-fade
                  [animation-delay:${index * 5}s]
                `}
                priority={index === 0}
              />
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {carouselImages.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/50 relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-white origin-left animate-carousel-indicator"
                    style={{ animationDelay: `${index * 5}s` }}
                  />
                </div>
              ))}
            </div>

            {/* Lighter Overlay Pattern */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5733]/5 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
