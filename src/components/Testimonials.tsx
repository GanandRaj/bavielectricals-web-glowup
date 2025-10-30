import { Star, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Testimonials = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  // Replace this URL with your actual Google Business review URL
  const googleReviewUrl = "https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review";

  const testimonials = [
    {
      id: 1,
      name: "Sample Customer",
      rating: 5,
      comment: "Your Google reviews will appear here. This is a placeholder.",
      date: "Sample Date"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      ref={elementRef}
      className={`py-20 bg-gradient-to-b from-background to-secondary/20 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We value authentic feedback from our clients. All reviews are verified through Google.
          </p>
          <Button
            size="lg"
            onClick={() => window.open(googleReviewUrl, '_blank')}
            className="gap-2"
          >
            Leave a Review on Google
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'animate-fade-in animate-scale-in' : 'opacity-0 scale-95'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.comment}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">G</span>
                  </div>
                  <span>Verified Google Review</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            These are authentic reviews from our Google Business profile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;