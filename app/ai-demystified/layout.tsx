import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function AIDemystifiedLayout({ children }: LayoutProps) {
  return (
    <>
      {/* Minimal Transparent Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="relative z-10">
              <Image
                src="/images/logos/rcvLogoWhite.png"
                alt="Rotaract Vadodara"
                width={160}
                height={60}
                className="w-auto h-12"
              />
            </Link>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSc3enAXs2hqnXZE7ZI7cR9SSYwrm1h_VdN3CqUlcGmq3UDy-Q/viewform"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-sm transition-all"
            >
              Register Now
            </Link>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}
