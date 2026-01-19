"use client";

import { motion } from "framer-motion";

export default function EmpowerSection() {
  return (
    <section className="relative w-full py-32 px-6 sm:px-10 overflow-visible">
      
      {/* Background blob */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true }}
  className="
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-50 h-50
    brand-blob
    -z-10
  "
/>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl text-center"
      >
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          We empower Dubai’s real estate agencies with digital solutions that
          simplify work, accelerate growth, and deliver a premium experience
          for every client and agent.
        </p>
      </motion.div>
    </section>
  );
}