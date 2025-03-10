import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function AIDemystifiedLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen  py-8 bg-[#ff773d]">
      {/* Navbar - removed fixed positioning */}
      <header className="relative  mx-auto  max-w-7xl z-50 bg-[#ff773d]/50 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-0   ">
          <div className="flex sm:gap-6 sm:justify-around bg-white/10 backdrop-blur-sm rounded-full sm:w-fit  justify-between items-center h-20 p-2 px-4">
            <Link href="/" className="relative z-10">
              <Image
                src="/images/logos/rcvLogoWhite.png"
                alt="Rotaract Vadodara"
                width={160}
                height={60}
                className="w-auto h-9 sm:h-12"
              />
            </Link>
            <Link href="https://skitre.ai" className="relative z-10">
              <Image
                src="/images/logos/skitrelogo.png"
                alt="Skitre.ai"
                width={160}
                height={60}
                className="w-auto h-10 sm:h-12"
              />
            </Link>
            <Link href="https://rotaract3060.com/" className="relative z-10">
              <Image
                src="/images/logos/district3060White.png"
                alt="Rotaract 3060"
                width={160}
                height={60}
                className="w-auto h-9 sm:h-12"
              />
            </Link>
            <Link
              href="https://www.instagram.com/drr_rohitajmera/"
              className="relative max-sm:hidden z-10"
            >
              <Image
                src="/images/logos/connectwhite.png"
                alt="Connect"
                width={160}
                height={60}
                className="w-auto h-9 sm:h-12"
              />
            </Link>
            <Link
              href="https://www.rotary.org/en"
              className="relative max-sm:hidden z-10"
            >
              <Image
                src="/images/logos/magicWhite.png"
                alt="Magic"
                width={160}
                height={60}
                className="w-auto h-9 sm:h-12"
              />
            </Link>
            {/* <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSc3enAXs2hqnXZE7ZI7cR9SSYwrm1h_VdN3CqUlcGmq3UDy-Q/viewform"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-sm transition-all"
            >
              Register Now
            </Link> */}
          </div>
        </nav>
      </header>
      {/* Main content */}
      <main>{children}</main>

      <nav className="container sm:hidden mx-auto px-4  sm:px-0">
        <div className="flex sm:gap-6 sm:justify-around bg-white/10 backdrop-blur-sm rounded-full sm:w-fit  justify-around items-center h-16 p-2 px-4">
          <Link
            href="https://www.instagram.com/drr_rohitajmera/"
            className="relative z-10"
          >
            <Image
              src="/images/logos/connectwhite.png"
              alt="Connect"
              width={160}
              height={60}
              className="w-auto h-9 sm:h-12"
            />
          </Link>
          <Link href="https://www.rotary.org/en" className="relative z-10">
            <Image
              src="/images/logos/magicWhite.png"
              alt="Magic"
              width={160}
              height={60}
              className="w-auto h-9 sm:h-12"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
