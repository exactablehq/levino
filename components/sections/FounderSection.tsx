export function FounderSection() {
  return (
    <section className="bg-[#FBFBF7] px-6 py-24 text-[#281C13] sm:px-10 md:py-28 lg:px-20">
      <div className="mx-auto max-w-5xl">

        {/* Section Label */}
        <div className="text-center">
          <p
            className="text-[18px] text-[#9B1C24]"
            style={{ fontFamily: "cursive" }}
          >
            Our Story
          </p>

          {/* Main Heading */}
          <h2 className="mt-4 font-serif-luxury text-4xl font-normal leading-[1.08] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-7xl">
            Built with a love
            <br />
            for Daman.
          </h2>

          {/* Decorative Line */}
          <div className="mx-auto mt-8 h-px w-16 bg-[#9B1C24]" />
        </div>

        {/* Story */}
        <div className="mx-auto mt-12 max-w-3xl text-center">

          <p className="text-[15px] font-light leading-8 text-[#281C13]/75 sm:text-base">
            Levino began with a simple idea — to create a place where people
            could step away from the rush of everyday life and enjoy meaningful
            time together.
          </p>

          <p className="mt-6 text-[15px] font-light leading-8 text-[#281C13]/75 sm:text-base">
            What started as a vision has grown into a hospitality experience
            shaped by warmth, comfort and the natural beauty of Daman.
          </p>

          {/* Quote */}
          <div className="mt-12">
            <p
              className="text-2xl leading-relaxed text-[#281C13] sm:text-3xl"
              style={{ fontFamily: "cursive" }}
            >
              “Hospitality is about making people feel at home.”
            </p>

            <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-[#9B1C24]">
              The Levino Team
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}