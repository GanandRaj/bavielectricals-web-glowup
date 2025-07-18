
import { Mail, Phone } from 'lucide-react';

const Team = () => {
  const ceo = {
    name: "Amalodh Bavi",
    position: "CEO & Master Electrician",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    message: "Hard work and team effort - that's what makes Amalodhbhavi Electricals successful. Our commitment to excellence and dedication to our craft has built the foundation of trust with our clients. Together, we illuminate every project with precision and passion."
  };

  const employees = [
    { id: 1, name: "Rajesh Kumar", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
    { id: 2, name: "Priya Sharma", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" },
    { id: 3, name: "Vikram Singh", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
    { id: 4, name: "Suresh Reddy", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face" },
    { id: 5, name: "Anjali Devi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" },
    { id: 6, name: "Ravi Krishnan", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face" },
    { id: 7, name: "Meera Nair", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" },
    { id: 8, name: "Kiran Patel", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&h=200&fit=crop&crop=face" },
    { id: 9, name: "Lakshmi Rao", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face" },
    { id: 10, name: "Arjun Gupta", image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=200&h=200&fit=crop&crop=face" },
    { id: 11, name: "Divya Menon", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face" },
    { id: 12, name: "Sanjay Iyer", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face" },
    { id: 13, name: "Kavitha Bhat", image: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=200&h=200&fit=crop&crop=face" },
    { id: 14, name: "Mahesh Joshi", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&h=200&fit=crop&crop=face" },
    { id: 15, name: "Rashmi Pillai", image: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=200&h=200&fit=crop&crop=face" },
    { id: 16, name: "Deepak Verma", image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=200&h=200&fit=crop&crop=face" },
    { id: 17, name: "Sunitha Rajan", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" },
    { id: 18, name: "Ashwin Kumar", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" },
    { id: 19, name: "Gayathri Nair", image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&h=200&fit=crop&crop=face" },
    { id: 20, name: "Ramesh Babu", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" }
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 50%, #d1d5db 100%)'
             }}>
      {/* 3D Background Elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text mb-4"
              style={{
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                filter: 'drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3))'
              }}>
            Meet Our Expert Team
          </h2>
        </div>

        {/* Director's Message Section */}
        <div className="mb-16 perspective-1000">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 transform hover:scale-105 transition-all duration-500"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.2)'
               }}>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text mb-8"
                style={{
                  textShadow: '0 0 30px rgba(34, 197, 94, 0.5)',
                  filter: 'drop-shadow(0 4px 20px rgba(34, 197, 94, 0.3))'
                }}>
              Our Director's Message
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src={ceo.image} 
                    alt={ceo.name}
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    style={{
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)'
                    }}
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{ceo.name}</h4>
                <p className="text-lg text-blue-300 mb-4">{ceo.position}</p>
                <blockquote className="text-gray-300 text-lg leading-relaxed italic backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                  "{ceo.message}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text mb-8"
              style={{
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                filter: 'drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3))'
              }}>Our Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 perspective-1000">
            {employees.map((employee) => (
              <div 
                key={employee.id}
                className="group bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-4 text-center hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-white/20"
                style={{
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
                }}
              >
                <div className="relative">
                  <img 
                    src={employee.image} 
                    alt={employee.name}
                    className="w-20 h-20 mx-auto object-cover rounded-full mb-3 shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent group-hover:from-blue-500/30 transition-all duration-300"></div>
                </div>
                <h4 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors duration-300">{employee.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center perspective-1000">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 px-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl transform hover:scale-105 transition-all duration-500"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(59, 130, 246, 0.2)'
               }}>
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text"
                style={{
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                }}>Join Our Team</h3>
            <p className="text-lg text-gray-300 mb-8 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
              We're always looking for skilled electricians to join our growing team. 
              If you're passionate about electrical work and committed to excellence, we'd love to hear from you.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/25"
              style={{
                boxShadow: '0 15px 35px rgba(59, 130, 246, 0.3)'
              }}
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
