"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logos/rcvLogo.png";

// Define the navigation links array
const navigationLinks = [
  { name: "Projects", href: "/projects", color: "hover:text-[#FF5733]" },
  { name: "About", href: "/about", color: "hover:text-[#FF7849]" },
  {
    name: "Join",
    href: "https://docs.google.com/forms/d/1gGlc8G34cG9VjHGluUZiGP_24ZMToeV5aK8zJ8Jjh2o/viewform?edit_requested=true&pli=1",
    color: "hover:text-[#FF7849]",
  },
] as const;

// Add this after the navigation links array
const specialEvents = [
  {
    name: "AI Demystified",
    href: "/ai-demystified",
    isSpecial: true,
  },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  // Close menu on route change
  useEffect(() => {
    if (isMenuOpen) handleMenuClose();
  }, [pathname]);

  return (
    <header className="sticky top-0 bg-white z-40 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <div className="w-[80%] sm:w-full max-w-40">
                <Image
                  src={logo}
                  alt="Rotaract crew"
                  priority
                  className="object-contain w-full h-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${link.color} transition-colors relative group overflow-hidden`}
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="absolute top-full left-0 inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  {link.name}
                </span>
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF5733] transform origin-left transition-transform duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* In the navbar JSX, add this before the Join button */}
          <div className="hidden md:flex items-center gap-4">
            {specialEvents.map((event) => (
              <Link
                key={event.name}
                href={event.href}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  ${
                    pathname === event.href
                      ? "bg-[#FF5733] text-white"
                      : "bg-[#FF5733]/10 text-[#FF5733] hover:bg-[#FF5733]/20"
                  }
                  transition-all duration-200
                `}
              >
                {event.name}
                <span className="ml-1 inline-block animate-pulse">🔥</span>
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/1gGlc8G34cG9VjHGluUZiGP_24ZMToeV5aK8zJ8Jjh2o/viewform?edit_requested=true&pli=1"
              className="bg-[#FF5733] text-white px-6 py-2 rounded-full hover:bg-[#FF7849] transition-all"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors relative z-50"
            onClick={() =>
              isMenuOpen ? handleMenuClose() : setIsMenuOpen(true)
            }
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ease-out ${
                  isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ease-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {(isMenuOpen || isClosing) && (
        <div
          className={`fixed inset-0 md:hidden z-40
            ${
              isClosing
                ? "animate-out slide-out-to-top duration-300"
                : "animate-in slide-in-from-top duration-300"
            }`}
        >
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100" />

          {/* Menu Content */}
          <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative overflow-hidden py-4 px-8 text-4xl font-bold
                  ${pathname === link.href ? "text-[#FF5733]" : "text-black"}
                  transform transition-all duration-500 hover:scale-110
                  ${isClosing ? "animate-out fade-out" : "animate-in fade-in"}
                  delay-[${index * 100}ms]`}
                onClick={handleMenuClose}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className={`absolute inset-0 bg-[#FF5733]/10 transform origin-left
                  transition-transform duration-300 ease-out
                  ${pathname === link.href ? "scale-x-100" : "scale-x-0"}
                  hover:scale-x-100`}
                />
              </Link>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 text-sm text-gray-500">
            {["Instagram", "Twitter", "LinkedIn"].map((social, index) => (
              <span
                key={social}
                className={`transform transition-all duration-500 hover:text-[#FF5733]
                  ${isClosing ? "animate-out fade-out" : "animate-in fade-in"}
                  delay-[${(navigationLinks.length + index) * 100}ms]`}
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
