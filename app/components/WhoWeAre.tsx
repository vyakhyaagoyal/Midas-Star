import Image from "next/image";

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
    image: "/sample_image.jpg",
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
    image: "/sample_image.jpg",
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
    image: "/sample_image.jpg",
  },
];

export default function WhoWeAre() {
  return (
    <section className="relative py-32 px-6 sm:px-10 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(87,204,155,0.12),transparent_60%),linear-gradient(to_bottom,#0a0f0d,#000)]" />

      {/* Heading */}
      <h2 className="text-center text-white text-5xl font-semibold mb-24">
        Who We Are
      </h2>

      {/* Content */}
      <div className="space-y-32 max-w-7xl mx-auto">
        {FEATURES.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              item.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className={item.reverse ? "lg:order-2" : ""}>
              <h3 className="text-brand text-3xl sm:text-4xl font-semibold mb-4">
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

              <button className="bg-brand text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
                Learn More
              </button>
            </div>

            {/* Image */}
            <div
              className={`relative flex justify-center ${
                item.reverse ? "lg:order-1" : ""
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
