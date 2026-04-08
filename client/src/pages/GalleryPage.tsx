import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLocation } from 'wouter';

const galleryPhotos = [
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_7149_ Joel Gueller Photography_6e167e65.jpg',
    alt: 'Interior Ambiance'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6842_ Joel Gueller Photography_21c7b32b.jpg',
    alt: 'Café Interior Ambiance'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6851_ Joel Gueller Photography_90aa189c.jpg',
    alt: 'Coffee & Beverage Detail'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6853_ Joel Gueller Photography_5392f767.jpg',
    alt: 'Food Presentation'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6856_ Joel Gueller Photography_8bb61dd5.jpg',
    alt: 'Café Seating Area'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6865_ Joel Gueller Photography_2ce10d8e.jpg',
    alt: 'Drinks & Beverages'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6883_ Joel Gueller Photography_449b94b6.jpg',
    alt: 'Pastry & Dessert Detail'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6898_ Joel Gueller Photography_63a91c58.jpg',
    alt: 'Café Interior Detail'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6911_ Joel Gueller Photography_b8f9885c.jpg',
    alt: 'Beverage Presentation'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6917_ Joel Gueller Photography_c9a94d5e.jpg',
    alt: 'Food Dish Detail'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6924_ Joel Gueller Photography_d98bcb61.jpg',
    alt: 'Café Atmosphere'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6930_ Joel Gueller Photography_4aadddbb.jpg',
    alt: 'Coffee & Espresso'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6933_ Joel Gueller Photography_46ac6c8b.jpg',
    alt: 'Pastry & Dessert'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6939_ Joel Gueller Photography_bdd1e634.jpg',
    alt: 'Food Dish Presentation'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6944_ Joel Gueller Photography_06ff81d8.jpg',
    alt: 'Beverage & Drink'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_7011_ Joel Gueller Photography_00c4680b.jpg',
    alt: 'Café Counter Area'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_7153_ Joel Gueller Photography_7cc1567a.jpg',
    alt: 'Food Presentation Detail'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_7163_ Joel Gueller Photography_cf16a114.jpg',
    alt: 'Beverage Detail'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_7167_ Joel Gueller Photography_5805c9d4.jpg',
    alt: 'Café Seating Detail'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_7174_ Joel Gueller Photography_fcaa1053.jpg',
    alt: 'Food Dish'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_7195_ Joel Gueller Photography_198a803a.jpg',
    alt: 'Coffee & Beverage'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_7208_ Joel Gueller Photography_fa3837ca.jpg',
    alt: 'Café Ambiance & Lighting'
  }
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [, setLocation] = useLocation();

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryPhotos.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryPhotos.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const scrollToSection = (id: string) => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="w-full min-h-screen bg-background">
      <Navigation />
      
      <main className="container max-w-6xl mx-auto py-16 md:py-24">
        <div className="mb-12">
          <div className="section-label mb-4">Gallery</div>
          <h1 className="text-4xl md:text-5xl leading-tight">
            A glimpse into Isabella Café
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={32} className="text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={32} className="text-white" />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[80vh] flex items-center justify-center">
            <img
              src={galleryPhotos[selectedIndex].url}
              alt={galleryPhotos[selectedIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={32} className="text-white" />
          </button>

          {/* Photo Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-lg text-white text-sm">
            {selectedIndex + 1} / {galleryPhotos.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
