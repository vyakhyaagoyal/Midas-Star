"use client"
export default function CTASection() {

    const handleScroll = () => {
    const section = document.getElementById("main");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-6">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_60%)]" />

      {/* Card */}
      <div
        className="
          relative z-10 w-full max-w-5xl
          rounded-[2.5rem]
          border border-white/10
          bg-linear-to-br from-[#0f2f25] via-[#0b1f18] to-[#08140f]
          px-8 py-16 md:px-16 md:py-20
          text-center
          shadow-[0_0_120px_rgba(34,197,94,0.15)]
          backdrop-blur-xl
        "
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-5">
          Let’s Transform Your Real Estate Business
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm md:text-base text-white/70 leading-relaxed mb-10">
          Ready to boost your agency’s growth with digital solutions built for
          Dubai? Get in touch and we’ll show you how Midas Star can help—quickly and
          reliably.
        </p>

        {/* Button */}
        <button
          className="
            inline-flex items-center gap-2
            rounded-lg bg-brand
            px-6 py-3
            text-sm font-medium text-black
            hover:bg-brand/90
            transition-colors
            cursor-pointer
          "
          onClick={handleScroll}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
