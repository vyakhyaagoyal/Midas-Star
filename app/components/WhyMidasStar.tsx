import { MapPin, Timer, User, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Dubai Market Specialists",
    description:
      "We design every solution around Dubai’s unique real estate workflows—delivering digital platforms that anticipate your market’s needs while meeting the highest international standards.",
    icon: MapPin,
    span: "col-span-2",
  },
  {
    title: "Rapid, Proven Launch Process",
    description:
      "With a clear, battle-tested delivery process, we bring your property websites and tools to market quickly—ensuring quality without delay or guesswork, so you're never behind your competition.",
    icon: Timer,
    span: "col-span-2",
  },
  {
    title: "Reliable Support, Clear Pricing",
    description:
      "Always-on support and honest, transparent pricing—no surprises.",
    icon: User,
  },
  {
    title: "Built to Scale with You",
    description: "Platforms that grow effortlessly as your agency expands.",
    icon: BarChart3,
  },
  {
    title: "Unmatched Security & Compliance",
    description: "Industry-standard security, built for Dubai regulations.",
    icon: ShieldCheck,
  },
];

const topFeatures = features.slice(0, 2);
const bottomFeatures = features.slice(2);

export default function WhyHomeey() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      {/* Heading */}
      <h2 className="text-center text-4xl font-semibold mb-14">
        Why Midas Star?
      </h2>

      {/* Grid */}
<div className="mx-auto max-w-6xl space-y-6">
  
  {/* Top row */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {topFeatures.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="col-span-2 relative rounded-2xl border border-white/10
          bg-gradient-to-br from-[#0f3b2e]/80 to-[#0b1f18]/80
          p-6 backdrop-blur-xl"
        >
          <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center
            bg-green-500/10 text-green-400">
            <Icon size={22} />
          </div>

          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            {item.description}
          </p>
        </div>
      );
    })}
  </div>

  {/* Bottom row – FULL WIDTH */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {bottomFeatures.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="relative rounded-2xl border border-white/10
          bg-gradient-to-br from-[#0f3b2e]/80 to-[#0b1f18]/80
          p-6 backdrop-blur-xl"
        >
          <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center
            bg-green-500/10 text-green-400">
            <Icon size={22} />
          </div>

          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            {item.description}
          </p>
        </div>
      );
    })}
  </div>

</div>

    </section>
  );
}
