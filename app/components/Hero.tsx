"use client"
export default function Hero() {
    const handleScroll = () => {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="main" className="hero-dotted min-h-screen flex items-center justify-center">
      <div className="text-center max-w-5xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
          Empowering Dubai Real Estate <br />
          with <span className="text-brand">Advanced IT Solutions</span>
        </h1>

        <p className="mt-10 text-gray-300">
          We build powerful websites, CRMs, and API integrations that drive <br/>
          growth for Dubai’s leading real estate agencies
        </p>

        <button className="mt-4 bg-brand font-bold text-black px-6 py-2.5 rounded-xl hover:opacity-90 transition cursor-pointer"
        onClick={handleScroll}>
  Explore our solutions
</button>
      </div>
    </section>
  );
}
