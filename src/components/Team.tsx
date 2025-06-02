
import { Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Amalodh Bavi",
      position: "Master Electrician & Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "15+ Years",
      email: "amalodh@amalodhbavielectricals.com",
      phone: "(123) 456-7890",
      specialization: "Commercial & Residential Electrical Systems"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      position: "Senior Electrician",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "10+ Years",
      email: "rajesh@amalodhbavielectricals.com",
      phone: "(123) 456-7891",
      specialization: "Industrial Electrical & Panel Upgrades"
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "Electrical Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      experience: "8+ Years",
      email: "priya@amalodhbavielectricals.com",
      phone: "(123) 456-7892",
      specialization: "Smart Home Systems & Automation"
    },
    {
      id: 4,
      name: "Vikram Singh",
      position: "Apprentice Electrician",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      experience: "3+ Years",
      email: "vikram@amalodhbavielectricals.com",
      phone: "(123) 456-7893",
      specialization: "Residential Wiring & Maintenance"
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced and certified electricians are dedicated to providing 
            exceptional service and ensuring your electrical needs are met with professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-200 text-sm">{member.position}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                    {member.experience}
                  </div>
                  <p className="text-gray-600 text-sm">{member.specialization}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 text-black mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-black transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 text-black mr-2" />
                    <a href={`tel:${member.phone}`} className="hover:text-black transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-black text-white py-8 px-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-lg text-gray-300 mb-6">
              We're always looking for skilled electricians to join our growing team. 
              If you're passionate about electrical work and committed to excellence, we'd love to hear from you.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us About Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
