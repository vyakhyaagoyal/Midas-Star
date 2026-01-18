"use client";
import Image from "next/image";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-xl">
      <nav className="mx-auto flex items-center justify-between px-12 py-2 rounded-xl max-w-8xl">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/midas_star_logo2.png"
            alt="Midas Star Logo"
            width={200}
            height={200}
            className="cursor-pointer"
            onClick={() => scrollTo("main")}
          />
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex items-center gap-10 text-md text-gray-300">
          <li
            className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-[2px]
            after:w-0 after:bg-brand hover:after:w-full after:transition-all"
            onClick={() => scrollTo("about")}
          >
            About
          </li>

          <li
            className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-[2px]
            after:w-0 after:bg-brand hover:after:w-full after:transition-all"
            onClick={() => scrollTo("services")}
          >
            Services
          </li>

          <li
            className="relative cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-[2px]
            after:w-0 after:bg-brand hover:after:w-full after:transition-all"
            onClick={() => scrollTo("main")}
          >
            Contact
          </li>
        </ul>

        {/* Right: CTA */}
        <button
          className="bg-brand cursor-pointer text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition"
          onClick={() => scrollTo("main")}
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
}