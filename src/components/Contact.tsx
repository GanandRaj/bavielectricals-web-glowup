
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Contact = () => {
  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/place/Amalodbhavi+electricals/@16.2562131,80.0135773,20.88z/data=!4m6!3m5!1s0x3a4a81e0d2761cdb:0x2fca70a5109fa58!8m2!3d16.2561751!4d80.0138303!16s%2Fg%2F11hyx7ys__?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your electrical project? Contact us today for a free consultation 
            and quote. We're here to help with all your electrical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 cursor-default">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Call Us</h3>
              <a href="tel:+919989030669" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">
                +91 9989030669
              </a>
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

        <div className="text-center">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 border-red-500/20 inline-block hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105">
            <CardContent className="py-8 px-12">
              <h3 className="text-2xl font-bold mb-3 text-white">Emergency Service Available</h3>
              <p className="text-lg text-red-100 mb-4">Call now for immediate electrical assistance</p>
              <a href="tel:+918106900669" className="text-3xl font-bold text-white hover:text-red-100 transition-colors">
                +91 8106900669
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
