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
            Connect With Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our electrical experts for any technical consultations, 
            project discussions, or specialized electrical solutions. We're here to help 
            bring your vision to life with professional expertise and reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300 ring-4 ring-white/10 group-hover:ring-white/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {member.name}
                </h3>

                <div className="flex justify-center space-x-6">
                  <a 
                    href={member.whatsapp}
                    className="group/icon bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/40"
                    title="WhatsApp"
                  >
                    <MessageCircle className="h-6 w-6 text-white group-hover/icon:scale-110 transition-transform duration-200" />
                  </a>

                  <a 
                    href={member.instagram}
                    className="group/icon bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/40"
                    title="Instagram"
                  >
                    <Instagram className="h-6 w-6 text-white group-hover/icon:scale-110 transition-transform duration-200" />
                  </a>

                  <a 
                    href={member.email}
                    className="group/icon bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40"
                    title="Email"
                  >
                    <Mail className="h-6 w-6 text-white group-hover/icon:scale-110 transition-transform duration-200" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            <span className="text-white font-semibold">Professional Electrical Services</span> • 
            <span className="text-blue-300 font-medium"> Technical Consultations</span> • 
            <span className="text-green-300 font-medium"> Project Planning</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamConnect;