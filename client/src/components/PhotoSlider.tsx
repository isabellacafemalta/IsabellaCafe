import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const photos = [
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_7149_ Joel Gueller Photography_6e167e65.jpg',
    alt: 'Interior Ambiance'
  },
  {
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663386683224/kQFAwuRRcaJqR5bCtnF7Ps/DSC_6842_ Joel Gueller Photography_21c7b32b.jpg',
    alt: 'Café Interior Ambiance'
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
  },
];

export default function PhotoSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi]);

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mb-8">
        <div className="section-label mb-4">Gallery</div>
        <h2 className="text-4xl md:text-5xl leading-tight">
          A glimpse into Isabella Café
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2 md:px-4"
              >
                <div className="aspect-video md:aspect-square overflow-hidden bg-muted">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-muted rounded-full transition-colors disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-muted rounded-full transition-colors disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
