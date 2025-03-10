"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AIDemystified() {
  return (
    <div className="min-h-screen bg-[#FF5733] relative overflow-hidden">
      {/* Wavy Lines Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 400 C 200 500 400 300 600 400 C 800 500 1000 300 1200 400 L 1200 800 L 0 800 L 0 400"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M 0 450 C 200 550 400 350 600 450 C 800 550 1000 350 1200 450 L 1200 800 L 0 800 L 0 450"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M 0 500 C 200 600 400 400 600 500 C 800 600 1000 400 1200 500 L 1200 800 L 0 800 L 0 500"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-0 relative z-10">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-sm rounded-[40px] p-12 mt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white space-y-6">
              {/* <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                THE MAIN TREND OF THE YEAR
              </div> */}

              <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
                AI Demystified
              </h1>

              <h2 className="text-2xl sm:text-3xl font-medium text-white/90">
                Practical AI for Everyone
              </h2>

              <p className="text-lg text-white/80">
                Unlock the power of AI in your daily life! Learn how tools like
                ChatGPT, Gemini, and Grok can boost productivity, simplify
                tasks, and give you an edge in the digital world.🚀
              </p>
              {/* Speakers */}
              <div className="pt-8">
                <h3 className="text-lg font-medium mb-4">Speakers</h3>
                <div className="flex gap-6">
                  <div className="text-center flex flex-col items-center">
                    <Image
                      src="/images/speakers/shubham.jpg"
                      alt="Shubham Gupta"
                      width={80}
                      height={80}
                      className="rounded-full mb-2"
                    />
                    <p className="font-medium">Shubham Gupta</p>
                    <p className="text-sm text-white/60">
                      GenAI Expert @ Skitre.ai
                    </p>
                  </div>
                  <div className="text-center flex flex-col items-center">
                    <Image
                      src="/images/speakers/kp.jpg"
                      alt="Kartik Patel"
                      width={80}
                      height={80}
                      className="rounded-full mb-2"
                    />
                    <p className="font-medium">Kartik Patel</p>
                    <p className="text-sm text-white/60">
                      Product Engineer @ Skitre.ai
                    </p>
                  </div>
                </div>
              </div>
              {/* Event Details Grid */}
              <div className="grid grid-cols-1 gap-6 pt-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-4">
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="text-sm text-white/60">Date</p>
                      <p className="font-medium">12 March 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-4">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="text-sm text-white/60">Time</p>
                      <p className="font-medium">8:30 PM</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-white/60">Venue</p>
                      <p className="font-medium">Online</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-4">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="text-sm text-white/60">Registration</p>
                      <p className="font-medium">Free</p>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* Register Now Button */}
              <div className="pt-6">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3enAXs2hqnXZE7ZI7cR9SSYwrm1h_VdN3CqUlcGmq3UDy-Q/viewform"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-[#FF5733] px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
                >
                  Register Now
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - AI Robot */}
            <div className="relative hidden lg:block">
              <Image
                src="/images/airobot.png"
                alt="AI Assistant"
                width={600}
                height={600}
                className="relative z-10 transform translate-x-12"
              />
            </div>
          </div>

          {/* Partners */}
          {/* <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Image
                src="/images/logos/skitrelogo.png"
                alt="Skitre.ai"
                width={120}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/logos/Rotaract3060.png"
                alt="Rotaract District 3060"
                width={120}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/logos/rcvLogo.png"
                alt="Rotaract Vadodara"
                width={120}
                height={40}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
