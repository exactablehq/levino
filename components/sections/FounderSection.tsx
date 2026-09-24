export function FounderSection() {
  return (
    <section className="bg-[#26352C] px-6 py-24 text-[#F7F5EF] md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
              alt="Levino Daman property"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -right-5 hidden h-28 w-28 border border-[#B89A6A] md:block" />
        </div>

        {/* Content */}
        <div className="lg:pl-10">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#D8C5A1]">
            Our Story
          </p>

          <h2 className="font-serif-luxury text-4xl leading-tight md:text-5xl lg:text-6xl">
            Built with a love
            <br />
            for Daman.
          </h2>

          <div className="mt-8 h-px w-20 bg-[#B89A6A]" />

          <p className="mt-8 text-base leading-8 text-[#D5D7D0]">
            Levino began with a simple idea — to create a place where people
            could step away from the rush of everyday life and enjoy meaningful
            time together.
          </p>

          <p className="mt-5 text-base leading-8 text-[#D5D7D0]">
            What started as a vision has grown into a hospitality experience
            shaped by warmth, comfort and the natural beauty of Daman.
          </p>

          <div className="mt-10">
            <p className="font-serif-luxury text-2xl text-[#F1EDE2]">
              “Hospitality is about making people feel at home.”
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#B89A6A]">
              The Levino Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
