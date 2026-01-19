"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FeatureItem = {
  title: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
};

const FEATURES: FeatureItem[] = [
  {
    title: "Modern Real Estate Websites",
    description:
      "Become the top choice for buyers and sellers with a website built for trust and conversion.",
    points: [
      "Mobile-optimized design for every user",
      "Advanced property search, listings, and agent profiles",
      "Built-in lead capture (forms, WhatsApp chat, instant inquiry)",
      "SEO-ready for Dubai property market",
    ],
    image: "/service1.svg",
  },
  {
    title: "Real Estate CRM for Maximum Sales Productivity.",
    description:
      "Control every lead and deal, automate reminders, and empower your team.",
    points: [
      "Custom sales pipelines for Dubai processes",
      "Automatic lead import from all platforms",
      "Collaborative workflows, agent dashboards",
      "Deep client/property profiles, secure doc management",
    ],
    image: "/service2.svg",
    reverse: true,
  },
  {
    title: "Seamless Data. Effortless Growth.",
    description:
      "Connect your site, CRM, and property platforms for real-time efficiency.",
    points: [
      "Live data sync for listings, client info, and documents",
      "Secure API connectors for Dubai portals, government or agency systems",
      "Automated updates—no more manual data entry",
      "Developer-ready documentation and support",
    ],
    image: "/service3.svg",
  },
];

const handleScroll = () => {
  const section = document.getElementById("main");
  section?.scrollIntoView({ behavior: "smooth" });
};

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 sm:px-10 overflow-visible"
    >
    
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-white text-5xl font-semibold mb-24"
      >
        Who We Are
      </motion.h2>

      {/* Content */}
      <div className="space-y-32 max-w-7xl mx-auto">
        {FEATURES.map((item, i) => (
          <motion.div
  key={i}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true }}
  className="
    relative
    grid grid-cols-1 lg:grid-cols-2
    gap-16 items-start
  "
>
<motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.1, ease: "easeOut" }}
  viewport={{ once: true }}
  className={`
  absolute top-1/2
  ${item.reverse ? "left-[70%]" : "right-[55%]"}
  -translate-x-1/2 -translate-y-1/2
  w-50 h-50
  brand-blob
  -z-10
`}
/>

            {/* Text */}
            <motion.div
              initial={{
                opacity: 0,
                x: item.reverse ? 40 : -40,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={item.reverse ? "lg:order-2 mt-5" : "mt-5 ml-7"}
            >
              <h3 className="bg-linear-to-r from-white/90 via-brand to-brand
    bg-clip-text text-transparent
    text-3xl sm:text-4xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 mb-6 max-w-xl text-xl">
                {item.description}
              </p>

              <ul className="space-y-3 mb-8">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-200 text-lg"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <button
                className="group inline-flex items-center gap-1.5 bg-brand-secondary cursor-pointer text-black px-6 py-2.5 rounded-xl font-bold hover:bg-brand transition"
                onClick={handleScroll}
              >
                Learn More
                
              </button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                x: item.reverse ? -40 : 40,
                scale: 0.96,
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={`relative flex justify-center ${
                item.reverse ? "lg:order-1 mr-40" : "ml-40"
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={520}
                  height={360}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
