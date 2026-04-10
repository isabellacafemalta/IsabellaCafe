import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Location */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Location</h4>
            <p className="text-sm leading-relaxed">
              Triq Gerry Zammit<br />
              Gzira GZR 1663<br />
              Malta
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>
                <a
                  href="tel:+35679510059"
                  className="hover:opacity-80 transition-opacity"
                >
                  +356 7951 0059
                </a>
              </p>
              <p>
                <a
                  href="mailto:leonid.avramoski@isabellasuites.com"
                  className="hover:opacity-80 transition-opacity"
                >
                  leonid.avramoski@<br />isabellasuites.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Hours</h4>
            <div className="space-y-1 text-sm">
              <p>Mon–Thu: 7am–8pm</p>
              <p>Fri: 7am–8pm</p>
              <p>Sat: 7:30am–7pm</p>
              <p>Sun: 8am–7pm</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/isabellacafemalta?igsh=MTFzODZkdGJ6c3VoYg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1F71K1M8LN/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container py-6 text-center text-sm">
          <p>
            © 2025 Isabella Café · Part of{' '}
            <a
              href="https://www.isabellasuites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              Isabella Suites
            </a>
            · isabellasuites.com
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/35679510059"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-2xl shadow-2xl hover:shadow-2xl hover:scale-125 transition-all duration-300 flex items-center justify-center overflow-hidden"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/pngtree-whatsapp-icon-png-image_6315990_4b941ed7.png"
          alt="WhatsApp"
          className="w-full h-full object-cover"
        />
      </a>
    </footer>
  );
}
