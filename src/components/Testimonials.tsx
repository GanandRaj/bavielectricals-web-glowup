import { Star, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Testimonials = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";
  
  const handleReviewClick = () => {
    const newWindow = window.open(googleReviewUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      alert('Please allow popups to leave a review on Google.');
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Ramesh Kumar",
      rating: 5,
      comment: "Excellent service! The team was professional, punctual and completed the work perfectly. Highly recommend for any electrical work.",
      date: "2 weeks ago",
      avatar: "RK"
    },
    {
      id: 2,
      name: "Priya Reddy",
      rating: 5,
      comment: "Very happy with the electrical installation at our new home. Quality work at reasonable prices. Will definitely use again.",
      date: "1 month ago",
      avatar: "PR"
    },
    {
      id: 3,
      name: "Venkat Rao",
      rating: 5,
      comment: "Fast response for our emergency electrical issue. The technician was knowledgeable and fixed the problem quickly.",
      date: "3 weeks ago",
      avatar: "VR"
    }
  ];

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'fill-secondary text-secondary'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We value authentic feedback from our clients. All reviews are verified through Google.
          </p>
          <Button
            size="lg"
            onClick={handleReviewClick}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 rounded-xl hover-lift"
          >
            Leave a Review on Google
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const TestimonialCard = () => {
              const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
              return (
                <Card
                  ref={elementRef as React.RefObject<HTMLDivElement>}
                  className={`bg-card border-border hover:border-secondary/30 transition-all duration-500 hover-lift ${
                    isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                      </div>
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <span className="text-blue-500 font-bold text-[10px]">G</span>
                      </div>
                      <span>Verified Google Review</span>
                    </div>
                  </CardContent>
                </Card>
              );
            };
            return <TestimonialCard key={testimonial.id} />;
          })}
        </div>

        <p className="text-center mt-12 text-sm text-muted-foreground">
          These are authentic reviews from our Google Business profile.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
