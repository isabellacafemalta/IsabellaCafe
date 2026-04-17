import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    if (location !== '/') {
      setLocation('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setMobileMenuOpen(false);
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  const navigateToGallery = () => {
    setLocation('/gallery');
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner - Part of Isabella Suites */}
      <div className="w-full bg-background border-b border-border sticky top-0 z-50">
        <div className="container py-2 text-center">
          <a
            href="https://www.isabellasuites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Part of Isabella Suites →
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-background border-b border-border sticky top-8 z-40">
        <div className="container py-2 md:py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/Screenshot_20260402_233734_Google_ed85e0c1.jpg" 
              alt="Isabella Café Logo" 
              className="h-16 md:h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('find-us')}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Find Us
            </button>
            <button
              onClick={navigateToGallery}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Gallery
            </button>
          </div>

          {/* Call Us Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="tel:+35679510059"
              className="cta-button"
            >
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left py-2 font-medium hover:text-accent transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 font-medium hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('find-us')}
                className="text-left py-2 font-medium hover:text-accent transition-colors"
              >
                Find Us
              </button>
              <button
                onClick={navigateToGallery}
                className="text-left py-2 font-medium hover:text-accent transition-colors"
              >
                Gallery
              </button>
              <a
                href="tel:+35679510059"
                className="cta-button text-center mt-2"
              >
                Call Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
