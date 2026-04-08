export default function StayWithUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="section-label mb-4">Part of Isabella Suites</div>

            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Staying in Malta? We have suites too.
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-8">
              Isabella Café is located at Isabella Suites — our boutique hotel right here in Gzira. With 17 spacious suites, a fully-equipped fitness centre, sauna, jacuzzi, and ice bath, it's the perfect base for exploring Malta. Guests enjoy breakfast and meals at the café throughout their stay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <a
                href="https://www.isabellasuites.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button text-center"
              >
                Explore Isabella Suites
              </a>

              <a
                href="https://hotels.cloudbeds.com/reservation/zHK7Qc"
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link text-foreground text-sm font-medium"
              >
                Book a Suite
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-square md:aspect-auto md:h-96 overflow-hidden bg-muted">
            <img
              src="https://lirp.cdn-website.com/4affb631/dms3rep/multi/opt/Terraced+Suite+photo+for+website+%281%29-1920w.jpg"
              alt="Isabella Suites Terraced Suite"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
