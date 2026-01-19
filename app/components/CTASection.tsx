"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  const handleScroll = () => {
    const section = document.getElementById("main");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="
          relative z-10 w-full max-w-6xl
          rounded-[2.5rem]
          border border-white/10
          bg-linear-to-br from-brand/30 via-brand/10 to-brand/5
          px-8 py-16 md:px-16 md:py-20
          text-center
          backdrop-blur-xl
        "
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-5"
        >
          Let’s Transform Your Real Estate Business
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-sm md:text-base text-white/70 leading-relaxed mb-10"
        >
          Ready to boost your agency’s growth with digital solutions built for
          Dubai? Get in touch and we’ll show you how Midas Star can help—quickly
          and reliably.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          onClick={handleScroll}
          className="
            group inline-flex items-center gap-1.5
            rounded-lg bg-brand-secondary
            px-6 py-2.5
            text-sm font-medium text-black
            hover:bg-brand
            transition-colors
            cursor-pointer
          "
        >
          Contact Us
          <ArrowUpRight
            className="
      w-4 h-4
      transition-transform duration-300 ease-out
      group-hover:rotate-45
      group-hover:translate-x-1
    "
          />
        </motion.button>
      </motion.div>
    </section>
  );
}