"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Dubai Market Specialists",
    description:
      "We design every solution around Dubai’s unique real estate workflows—delivering digital platforms that anticipate your market’s needs while meeting the highest international standards.",
    icon: "/location.svg",
    span: "col-span-2",
  },
  {
    title: "Rapid, Proven Launch Process",
    description:
      "With a clear, battle-tested delivery process, we bring your property websites and tools to market quickly—ensuring quality without delay or guesswork, so you're never behind your competition.",
    icon: "/time.svg",
    span: "col-span-2",
  },
  {
    title: "Reliable Support, Clear Pricing",
    description:
      "Always-on support and honest, transparent pricing—no surprises.",
    icon: "/contact.svg",
  },
  {
    title: "Built to Scale with You",
    description: "Platforms that grow effortlessly as your agency expands.",
    icon: "/bar.svg",
  },
  {
    title: "Unmatched Security & Compliance",
    description: "Industry-standard security, built for Dubai regulations.",
    icon: "/shield.svg",
  },
];

const topFeatures = features.slice(0, 2);
const bottomFeatures = features.slice(2);

export default function WhyHomeey() {
  return (
    <section
      id="services"
      className="min-h-screen bg-black text-white px-6 py-20 relative overflow-visible"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl font-semibold mb-14"
      >
        Why Midas Star?
      </motion.h2>

      {/* Grid */}
      <div className="mx-auto max-w-6xl space-y-6">

        {/* Top row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {topFeatures.map((item, index) => (
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
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="col-span-2 relative rounded-2xl border border-white/10
                bg-linear-to-br from-brand/30 via-brand/10 to-brand/5
                p-6 backdrop-blur-xl"
            >
              
<div className="flex relative items-start justify-start">
            <Image src={item.icon} alt={item.title} width={160} height={160} />
          </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {bottomFeatures.map((item, index) => (
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
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative rounded-2xl border border-white/10
                bg-linear-to-br from-brand/30 via-brand/10 to-brand/5
                p-6 backdrop-blur-xl"
            >
              
<div className="flex relative items-start justify-start">
            <Image src={item.icon} alt={item.title} width={160} height={160} />
          </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

