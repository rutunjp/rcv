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
  { name: "Team", href: "/bod", color: "hover:text-[#FF7849]" },
  { name: "Join", href: "/join", color: "hover:text-[#FF7849]" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match this with animation duration
  };

  // Close menu on route change
  useEffect(() => {
    if (isMenuOpen) handleMenuClose();
  }, [pathname]);

  return (
    <nav className="sticky top-0 w-full p-4 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center sm:px-6">
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
              className={`${link.color} transition-colors relative ${
                pathname === link.href
                  ? "text-[#FF5733] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FF5733]"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => (isMenuOpen ? handleMenuClose() : setIsMenuOpen(true))}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {(isMenuOpen || isClosing) && (
          <div
            className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden
              ${
                isClosing
                  ? "animate-out slide-out-to-top duration-300"
                  : "animate-in slide-in-from-top duration-300"
              }`}
          >
            <div className="flex flex-col space-y-4 p-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${link.color} transition-colors ${
                    pathname === link.href ? "text-[#FF5733]" : ""
                  }`}
                  onClick={handleMenuClose}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
