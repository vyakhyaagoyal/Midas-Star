import Image from "next/image";


export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-xl">
      <nav className="mx-auto flex items-center justify-between px-12 py-2 rounded-xl max-w-8xl">

        {/* Left: Logo */}
        <div className="flex items-center">
          <Image src='/midas_star_logo2.png' alt='Midas Star Logo' width={200} height={200}/>
        </div>

        {/* Center: Links */}
        <ul className="hidden md:flex items-center gap-10 text-md text-gray-300">
          <li className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand hover:after:w-full after:transition-all">
  About
</li>

          <li className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand hover:after:w-full after:transition-all">Services</li>
          <li className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand hover:after:w-full after:transition-all">Contact</li>
        </ul>

        {/* Right: CTA */}
        <button className="bg-brand text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition">
          Contact Us
        </button>
      </nav>
    </header>
  );
}
