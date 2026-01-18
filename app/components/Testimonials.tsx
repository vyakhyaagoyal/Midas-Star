export default function Testimonials() {
  const testimonials = [
    "Our sales increased by 28% in three months—Homeey’s CRM made the difference.",
    "Our sales increased by 28% in three months—Homeey’s CRM made the difference.",
    "Our sales increased by 28% in three months—Homeey’s CRM made the difference.",
    "Our sales increased by 28% in three months—Homeey’s CRM made the difference.",
  ];

  return (
    <section className="relative py-32 px-6 sm:px-10">
      {/* Background */}
      <div className="absolute inset-0 overflow-visible -z-10 bg-[radial-gradient(ellipse_at_top,rgba(87,204,155,0.1),transparent_60%),linear-gradient(to_bottom,#0a0f0d,#000)]" />

      {/* Heading */}
      <h2 className="text-center text-white text-3xl sm:text-4xl font-semibold mb-20">
        What our clients say
      </h2>

      {/* Cards */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((text, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-10 text-gray-200
                       backdrop-blur-sm shadow-[0_0_0_1px_rgba(87,204,155,0.15)]"
          >
            <p className="text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
