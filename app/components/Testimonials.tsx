"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, earum. Repellat nesciunt ut laboriosam a, architecto e. Dolores quam nulla aliquam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, earum. Repellat nesciunt ut laboriosam a, architecto eaDolores quam nulla aliquam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, earum. Repellat nesciunt ut laboriosam a, architecto eaquDolores quam nulla aliquam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, earum. Repellat nesciunt ut laboriosam a, architecto ro. Dolores quam nulla aliquam.",
  ];

  return (
    <section className="relative py-32 px-6 sm:px-10 overflow-visible">
      
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_center,rgba(87,204,155,0.1),transparent_60%)]"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-white text-3xl sm:text-4xl font-semibold mb-20"
      >
        What our clients say
      </motion.h2>

      {/* Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {testimonials.map((text, index) => (
          <motion.div
  key={index}
  variants={{
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }}
  whileHover={{ y: -8 }}
  transition={{ type: "tween", duration: 0.25 }}
  className="relative group rounded-2xl border border-white/10 bg-white/3
    px-8 py-10 text-gray-200 backdrop-blur-sm
    shadow-[0_0_0_1px_rgba(87,204,155,0.15)]
    cursor-default"
>
  <p className="text-sm leading-relaxed">{text}</p>

  {/* Quote icon */}
  <Image
    src="/testimonials_1.svg"
    width={40}
    height={40}
    alt="quote icon"
    className="
      absolute top-4 right-4
      opacity-50
      group-hover:opacity-100
      transition-opacity duration-300
    "
  />
</motion.div>

        ))}
      </motion.div>
    </section>
  );
}
