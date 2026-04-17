export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/Screenshot_20260403_131744_Maps_5b9f9170.jpg"
        alt="Isabella Café Signature Drinks"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white flex flex-col items-center justify-center gap-6 md:gap-8">
        <div className="text-xs md:text-sm font-semibold tracking-widest uppercase">
          Gzira, Malta
        </div>

        <h1 className="text-5xl md:text-7xl leading-tight" style={{ fontFamily: '"Keira Serif", serif', fontWeight: '700', letterSpacing: '0.08em', fontSize: 'clamp(3rem, 10vw, 8rem)', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
          Isabella Café
        </h1>

        <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-light">
          From the first espresso to the last aperitivo — savour every moment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-4">
          <button
            onClick={() => scrollToSection('menu')}
            className="px-8 py-3 bg-white text-black font-semibold uppercase tracking-wide text-sm transition-all duration-300 hover:opacity-90 active:scale-95"
          >
            See Our Menu
          </button>

          <button
            onClick={() => scrollToSection('find-us')}
            className="arrow-link text-white text-sm font-medium"
          >
            Find Us
          </button>
        </div>
      </div>
    </section>
  );
}
