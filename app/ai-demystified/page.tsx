"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AIDemystified() {
  useEffect(() => {
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    // First burst from bottom
    confetti({
      angle: 270, // Point upward
      spread: randomInRange(45, 80),
      particleCount: randomInRange(40, 60),
      origin: { x: 0.3, y: 0.15 }, // Start from bottom
      gravity: -0.8, // Negative gravity to go up
      scalar: 0.8,
      colors: ["#FF5733", "#FF8C69", "#FFB6C1", "#ffffff"],
      startVelocity: 50, // Higher velocity to shoot up
    });

    // Second burst from bottom after a small delay
    setTimeout(() => {
      confetti({
        angle: 270, // Point upward
        spread: randomInRange(45, 80),
        particleCount: randomInRange(40, 60),
        origin: { x: 0.7, y: 0.85 }, // Start from bottom
        gravity: -0.8, // Negative gravity to go up
        scalar: 0.8,
        colors: ["#FF5733", "#FF8C69", "#FFB6C1", "#ffffff"],
        startVelocity: 50, // Higher velocity to shoot up
      });
    }, 150);

    return () => {
      confetti.reset();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[] relative overflow-hidden">
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
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-sm rounded-[40px] sm:p-12 p-8 mt-8">
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
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc3enAXs2hqnXZE7ZI7cR9SSYwrm1h_VdN3CqUlcGmq3UDy-Q/viewform?usp=dialog"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white  max-sm:w-fit hover:bg-white/90 text-[#FF5733] px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
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
                {/* <Link
                  href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_Njg3OWQ0ZWMtNWU5MS00MWY1LWE1MjMtZmMyMzg3YjNkMjg0%40thread.v2/0?context=%7b%22Tid%22%3a%2207bb513c-5224-4c65-b58f-e837e9676727%22%2c%22Oid%22%3a%221f7e5eb1-c199-4307-bdab-5251228227fb%22%7d"
                  target="_blank"
                  onClick={(e) => e.preventDefault()}
                  className="max-sm:w-fit inline-flex items-center gap-2 bg-gray-400 cursor-not-allowed opacity-75 text-white px-8 py-4 rounded-full font-bold text-lg transition-all relative group"
                >
                  Join Meeting
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Meeting starts on 8.30PM March 12th
                  </span>
                </Link> */}

                <Link
                  href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_Njg3OWQ0ZWMtNWU5MS00MWY1LWE1MjMtZmMyMzg3YjNkMjg0%40thread.v2/0?context=%7b%22Tid%22%3a%2207bb513c-5224-4c65-b58f-e837e9676727%22%2c%22Oid%22%3a%221f7e5eb1-c199-4307-bdab-5251228227fb%22%7d"
                  target="_blank"
                  className="max-sm:w-fit  inline-flex items-center gap-2 bg-[#FF5733] hover:bg-[#FF7849] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
                >
                  Join Meeting
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - AI Robot */}
            <div className="relative hidden lg:block">
              {/* Add glow effect behind the robot */}
              {/* <div
                className="absolute inset-0 blur-[100px] opacity-30 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full"
                style={{
                  transform: "scale(1.2) translateX(15%) translateY(-10%)",
                  width: "140%",
                  height: "140%",
                }}
              /> */}

              {/* Robot image with enhanced styling */}
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/airobot.png"
                  alt="AI Assistant"
                  width={1200}
                  height={1200}
                  className="relative z-10 transform translate-x-2 hover:translate-y-[-10px] transition-all duration-500 drop-shadow-2xl float"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.3))",
                  }}
                />

                {/* Subtle floating animation */}
                <style jsx global>{`
                  @keyframes float {
                    0% {
                      transform: translateY(0px) translateX(48px);
                    }
                    50% {
                      transform: translateY(-20px) translateX(48px);
                    }
                    100% {
                      transform: translateY(0px) translateX(48px);
                    }
                  }

                  .float {
                    animation: float 6s ease-in-out infinite;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
