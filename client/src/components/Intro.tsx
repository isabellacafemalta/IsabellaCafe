export default function Intro() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container max-w-3xl mx-auto">
        <div className="section-label mb-4">The Café</div>

        <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
          More than your morning coffee.
        </h2>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90 mb-8">
          <p>
            Located at the entrance of Isabella Suites in the heart of Gzira, Isabella Café is open to everyone — guests and locals alike. Whether you're starting your day with a perfectly pulled espresso, catching up with a friend over lunch, or settling in to work with our free WiFi, you're always welcome here.
          </p>

          <p>
            Our team takes pride in great coffee, fresh food, and genuinely friendly service — the kind that makes you want to come back.
          </p>
        </div>

        <button
          onClick={() => scrollToSection('menu')}
          className="arrow-link text-foreground text-sm font-medium"
        >
          See Our Menu
        </button>
      </div>
    </section>
  );
}
