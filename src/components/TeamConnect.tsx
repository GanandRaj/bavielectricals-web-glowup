import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const TeamConnect = () => {
  const teamMembers = [
    {
      name: "Gali Anand Raj",
      image: "/lovable-uploads/photo-1581092795360-fd1ca04f0952.jpg",
      whatsapp: "#", // You'll provide the number later
      instagram: "#",
      email: "#"
    },
    {
      name: "Dhanush Sanapala", 
      image: "/lovable-uploads/photo-1581090464777-f3220bbe1b8b.jpg",
      whatsapp: "#", // You'll provide the number later
      instagram: "#",
      email: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Need a professional website for your business? Get in touch with our web development team 
            for custom website solutions, e-commerce platforms, and digital presence optimization. 
            We create modern, responsive websites that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className="h-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                {/* Profile Section */}
                <div className="relative px-8 pb-8">
                  {/* Profile Image */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 group-hover:ring-white/30 transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-20 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1 font-medium">Web Developer</p>
                    <p className="text-gray-500 text-xs mb-6">Full Stack Development</p>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-4">
                      <a 
                        href={member.whatsapp}
                        className="group/icon bg-gradient-to-br from-green-500 to-green-600 w-10 h-10 rounded-full flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/40"
                        title="WhatsApp"
                      >
                        <MessageCircle className="h-5 w-5 text-white group-hover/icon:scale-110 transition-transform duration-200" />
                      </a>

                      <a 
                        href={member.instagram}
                        className="group/icon bg-gradient-to-br from-pink-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/40"
                        title="Instagram"
                      >
                        <Instagram className="h-5 w-5 text-white group-hover/icon:scale-110 transition-transform duration-200" />
                      </a>

                      <a 
                        href={member.email}
                        className="group/icon bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40"
                        title="Email"
                      >
                        <Mail className="h-5 w-5 text-white group-hover/icon:scale-110 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            <span className="text-white font-semibold">Professional Web Development</span> • 
            <span className="text-blue-300 font-medium"> Custom Websites</span> • 
            <span className="text-green-300 font-medium"> E-commerce Solutions</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamConnect;