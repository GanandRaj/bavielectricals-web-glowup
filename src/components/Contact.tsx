
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your electrical project? Contact us today for a free consultation 
            and quote. We're here to help with all your electrical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <Phone className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <a href="tel:+1234567890" className="text-blue-100 hover:text-white transition-colors">
              (123) 456-7890
            </a>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <Mail className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <a href="mailto:contact@amalodhbavielectricals.com" className="text-blue-100 hover:text-white transition-colors">
              contact@amalodhbavielectricals.com
            </a>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-blue-100">
              Serving Your Local Area
            </p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Hours</h3>
            <p className="text-blue-100">
              Mon-Fri: 8AM-6PM<br />
              24/7 Emergency Service
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-yellow-500 text-blue-900 py-6 px-8 rounded-lg inline-block">
            <h3 className="text-2xl font-bold mb-2">Emergency Service Available</h3>
            <p className="text-lg">Call now for immediate electrical assistance</p>
            <a href="tel:+1234567890" className="text-2xl font-bold block mt-2">
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
