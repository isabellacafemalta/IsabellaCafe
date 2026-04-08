import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    text: "I love the place and the barista is very professional. I recommend it — the area is perfect for meeting with your friends or studying too. Amazing coffee and food.",
    author: "Google Review"
  },
  {
    text: "This café is close to my home. I visit quite often and enjoy spending time here. The staff are very friendly and the atmosphere is great. Great space to work as well. Special mention to Raj — great service.",
    author: "Google Review"
  },
  {
    text: "The staff are very friendly and helpful. They provide excellent service and make customers feel very welcome. Highly recommended!",
    author: "Google Review"
  },
  {
    text: "Exquisite service, food, tea, WiFi, plugs — the full works. Only reason I wouldn't tell people about this place is because I don't want it to get too busy!",
    author: "Google Review"
  },
  {
    text: "Great place, quiet location and friendly atmosphere.",
    author: "Google Review"
  }
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container max-w-3xl mx-auto">
        <div className="section-label mb-4">What People Say</div>

        <h2 className="text-4xl md:text-5xl mb-12 leading-tight">
          ⭐ 5.0 on Google Reviews
        </h2>

        {/* Review Carousel */}
        <div className="relative">
          <div className="bg-background p-8 md:p-12 rounded-sm border border-border min-h-64 flex flex-col justify-between">
            <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
              "{reviews[currentReview].text}"
            </blockquote>
            <p className="text-sm font-semibold text-muted-foreground">
              — {reviews[currentReview].author}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevReview}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentReview ? 'bg-foreground w-8' : 'bg-border'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Rating Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Based on 16 verified reviews on Google Maps</p>
        </div>
      </div>
    </section>
  );
}
