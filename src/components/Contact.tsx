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
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  project: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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

      if (error) {
        throw error;
      }

      if (responseData?.error) {
        throw new Error(responseData.error);
      }

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

  return (
    <section 
      id="contact" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "text-center mb-16 opacity-0",
          isVisible && 'animate-fade-down'
        )}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your electrical project? Contact us today for a free consultation 
            and quote. We're here to help with all your electrical needs.
          </p>
        </div>

        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 opacity-0",
          isVisible && 'animate-fade-up stagger-1'
        )}>
          <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-default">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Call Us</h3>
              <div className="space-y-2">
                <a href="tel:+919989030669" className="block text-gray-300 hover:text-white transition-colors text-lg font-medium">
                  +91 9989030669
                </a>
                <a href="tel:+918106900669" className="block text-red-300 hover:text-red-100 transition-colors text-sm font-medium">
                  Emergency: +91 8106900669
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 cursor-default">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Email Us</h3>
              <a href="mailto:amalodhbhavielectricals@gmail.com" className="text-gray-300 hover:text-white transition-colors text-lg font-medium break-all">
                amalodhbhavielectricals@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card 
            className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
            onClick={handleLocationClick}
          >
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Location</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors text-lg font-medium">
                Serving Your Local Area
              </p>
            </CardContent>
          </Card>

          <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 cursor-default">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Hours</h3>
              <p className="text-gray-300 text-lg font-medium">
                Mon-Sat: 8AM-6PM
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className={cn(
          "mb-16 opacity-0",
          isVisible && 'animate-blur-in stagger-3'
        )}>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Need Assistance with Your New Project?
                </h3>
                <p className="text-gray-300 text-lg">
                  Fill in the necessary details and we will contact you to discuss your electrical project requirements.
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
                          <FormLabel className="text-white flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white flex items-center gap-2">
                            <MailIcon className="h-4 w-4" />
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email address"
                              type="email"
                              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="project"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          Project Type
                        </FormLabel>
                        <Select 
                          onValueChange={(value) => {
                            // Allow deselection by clicking the same option
                            if (field.value === value) {
                              field.onChange('');
                            } else {
                              field.onChange(value);
                            }
                          }} 
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-white/40 focus:bg-white/15">
                              <SelectValue placeholder="Select your project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-800 border-white/20 z-[60]">
                            {projectOptions.map((option) => (
                              <SelectItem 
                                key={option.value} 
                                value={option.value}
                                className="text-white hover:bg-white/10 focus:bg-white/10"
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          Message (Include Phone Number)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project requirements and include your phone number..."
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15 min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
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

      </div>
    </section>
  );
};

export default Contact;
