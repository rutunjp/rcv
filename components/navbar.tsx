import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logos/rcvLogo.png";
export default function Navbar() {
  return (
    <nav className="sticky sm:px-16 top-0 w-full p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold">
          <div className="w-[80%] sm:w-full  max-w-40   rounded-4xl ">
            <Image
              src={logo} // Upload your phone pic to /public/photos NOW
              alt="Rotaract crew"
              priority
              className="object-contain rounded-4xl w-full h-auto"
            />
          </div>
        </Link>
      </div>
      <div className="space-x-6">
        <Link href="/projects" className="hover:text-[#FF5733]">
          Projects
        </Link>
        <Link href="/about" className="hover:text-[#FF7849]">
          About
        </Link>
        <Link href="/join" className="hover:text-[#FF7849]">
          Join
        </Link>
      </div>
    </nav>
  );
}
