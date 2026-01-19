"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full fixed top-0 z-50 backdrop-blur-md"
    >
      <nav className="mx-auto flex items-center justify-between px-12 py-2 rounded-xl max-w-8xl">
        
        {/* Left: Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
          className="flex items-center"
        >
          <Image
            src="/midas_star_logo2.png"
            alt="Midas Star Logo"
            width={200}
            height={200}
            className="cursor-pointer"
            onClick={() => scrollTo("main")}
          />
        </motion.div>

        {/* Center: Links */}
        <ul className="hidden md:flex items-center gap-10 text-lg text-gray-300">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Contact", id: "main" },
          ].map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + i * 0.08,
                duration: 0.4,
                ease: "easeOut",
              }}
              onClick={() => scrollTo(item.id)}
              className="relative cursor-pointer
                after:absolute after:-bottom-1 after:left-0 after:h-0.5
                after:w-0 after:bg-brand hover:after:w-full
                after:transition-all"
            >
              {item.label}
            </motion.li>
          ))}
        </ul>

        {/* Right: CTA */}
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollTo("main")}
          className="group inline-flex items-center gap-1.5 bg-brand-secondary cursor-pointer text-black px-6 py-2.5
            rounded-xl font-bold hover:opacity-90 transition"
        >
          Contact Us
        </motion.button>
        
      </nav>
    </motion.header>
  );
}
