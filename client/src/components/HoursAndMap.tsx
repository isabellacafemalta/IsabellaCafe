export default function HoursAndMap() {
  const hours = [
    { day: 'Monday', time: '7:00 AM – 8:00 PM' },
    { day: 'Tuesday', time: '7:00 AM – 8:00 PM' },
    { day: 'Wednesday', time: '7:00 AM – 8:00 PM' },
    { day: 'Thursday', time: '7:00 AM – 8:00 PM' },
    { day: 'Friday', time: '7:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '7:30 AM – 7:00 PM' },
    { day: 'Sunday', time: '8:00 AM – 7:00 PM' },
  ];

  return (
    <section id="find-us" className="w-full py-16 md:py-24 bg-background">
      <div className="container">
        <div className="section-label mb-4">Opening Hours</div>

        <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
          Visit us in Gzira
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Hours */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Opening Hours</h3>
            <div className="space-y-3">
              {hours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="font-medium">{item.day}</span>
                  <span className="text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a
                  href="tel:+35679510059"
                  className="text-lg font-semibold hover:text-accent transition-colors"
                >
                  +356 7951 0059
                </a>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Address</p>
                <p className="text-lg font-semibold">
                  Triq Gerry Zammit<br />
                  Għira (Gzira) GZR 1663<br />
                  Malta
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:leonid.avramoski@isabellasuites.com"
                  className="text-lg font-semibold hover:text-accent transition-colors"
                >
                  leonid.avramoski@isabellasuites.com
                </a>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.app.goo.gl/PzAi7MFcgVxtQhYC6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link text-foreground text-sm font-medium"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 md:h-full min-h-96 rounded-sm overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232!2d14.4902225!3d35.9011092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45c4396f625f%3A0x85187ba4b411a1b0!2sIsabella%20Caf%C3%A9!5e0!3m2!1sen!2smt!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Isabella Café Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
