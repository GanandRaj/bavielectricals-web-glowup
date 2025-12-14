import { Phone, Mail, MapPin, Clock, Send, User, Mail as MailIcon, Building, MessageSquare } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  project: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      project: '',
      message: '',
    },
  });

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/place/Amalodbhavi+electricals/@16.2562131,80.0135773,20.88z/data=!4m6!3m5!1s0x3a4a81e0d2761cdb:0x2fca70a5109fa58!8m2!3d16.2561751!4d80.0138303!16s%2Fg%2F11hyx7ys__?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          project: data.project,
          message: data.message,
        },
      });

      if (error) throw error;
      if (responseData?.error) throw new Error(responseData.error);

      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });

      form.reset();
    } catch (error) {
      console.error('Email sending error:', error);
      toast({
        title: 'Failed to Send Message',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectOptions = [
    { value: 'residential-apartments', label: 'Residential Apartments' },
    { value: 'individual-house', label: 'Individual House' },
    { value: 'hospital', label: 'Hospital' },
    { value: 'school', label: 'School' },
    { value: 'commercial-building', label: 'Commercial Building' },
    { value: 'industrial-facility', label: 'Industrial Facility' },
    { value: 'shopping-mall', label: 'Shopping Mall' },
    { value: 'office-complex', label: 'Office Complex' },
    { value: 'hotel-resort', label: 'Hotel/Resort' },
    { value: 'warehouse', label: 'Warehouse' },
    { value: 'other', label: 'Other' },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: (
        <div className="space-y-1">
          <a href="tel:+919989030669" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium">
            +91 9989030669
          </a>
          <a href="tel:+918106900669" className="block text-sm text-red-300 hover:text-red-200 transition-colors">
            Emergency: +91 8106900669
          </a>
        </div>
      ),
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: (
        <a href="mailto:amalodhbhavielectricals@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium break-all text-sm">
          amalodhbhavielectricals@gmail.com
        </a>
      ),
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: MapPin,
      title: "Location",
      content: (
        <button onClick={handleLocationClick} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium text-left">
          Serving Your Local Area
        </button>
      ),
      gradient: "from-violet-500 to-purple-600",
      clickable: true,
    },
    {
      icon: Clock,
      title: "Hours",
      content: <span className="text-primary-foreground/80 font-medium">Mon-Sat: 8AM-6PM</span>,
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary via-primary/95 to-primary">
      <div className="container-wide">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Ready to start your electrical project? Contact us today for a free consultation 
            and quote. We're here to help with all your electrical needs.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {contactInfo.map((item, index) => (
            <Card 
              key={item.title}
              className={`glass-dark border-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-500 hover-lift ${
                item.clickable ? 'cursor-pointer' : ''
              }`}
              onClick={item.clickable ? handleLocationClick : undefined}
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-primary-foreground mb-2">{item.title}</h3>
                {item.content}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="glass-dark border-primary-foreground/10 max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-10 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Need Assistance with Your New Project?
              </h3>
              <p className="text-primary-foreground/70">
                Fill in the details and we'll contact you to discuss your requirements.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/40 focus:bg-primary-foreground/15"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground flex items-center gap-2">
                          <MailIcon className="h-4 w-4" />
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email address"
                            type="email"
                            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/40 focus:bg-primary-foreground/15"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Project Type
                      </FormLabel>
                      <Select 
                        onValueChange={(value) => {
                          if (field.value === value) {
                            field.onChange('');
                          } else {
                            field.onChange(value);
                          }
                        }} 
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground focus:border-primary-foreground/40 focus:bg-primary-foreground/15">
                            <SelectValue placeholder="Select your project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-primary border-primary-foreground/20 z-[60]">
                          {projectOptions.map((option) => (
                            <SelectItem 
                              key={option.value} 
                              value={option.value}
                              className="text-primary-foreground hover:bg-primary-foreground/10 focus:bg-primary-foreground/10"
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Message (Include Phone Number)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project requirements and include your phone number..."
                          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/40 focus:bg-primary-foreground/15 min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-10 py-6 text-lg rounded-xl hover-lift"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-secondary-foreground mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
