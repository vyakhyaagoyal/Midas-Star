"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = () => {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="main"
      className="hero-dotted min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="text-center max-w-5xl px-6"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold leading-tight text-white"
        >
          Empowering Dubai Real Estate <br />
          with{" "}
          <span className="text-brand">
            Advanced IT Solutions
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 text-gray-300"
        >
          We build powerful websites, CRMs, and API integrations that drive <br />
          growth for Dubai’s leading real estate agencies
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          onClick={handleScroll}
          className="mt-6 bg-brand font-bold text-black px-6 py-2.5 rounded-xl
            hover:opacity-90 transition cursor-pointer"
        >
          Explore our solutions
        </motion.button>
      </motion.div>
    </section>
  );
}
