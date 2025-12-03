import { Mail, Phone } from 'lucide-react';
import ceoImage from '@/assets/ceo-master-electrician.jpg';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Team = () => {
  const { elementRef: ceoRef, isVisible: ceoVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation({ threshold: 0.1 });

  const ceo = {
    name: "Gali Bosu Babu",
    position: "CEO & Master Electrician",
    image: ceoImage,
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
    <section id="team" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Director's Message Section */}
        <div className="mb-16">
          <div 
            ref={ceoRef as React.RefObject<HTMLDivElement>}
            className={`relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ${
              ceoVisible ? 'animate-fade-in animate-scale-in opacity-100' : 'opacity-0'
            }`}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full"></div>
            
            <div className="relative p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-block">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
                    Our Director's Message
                  </h3>
                  <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"></div>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Image with decorative frame */}
                <div className="flex-shrink-0 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-teal-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-slate-400 to-teal-400 rounded-2xl"></div>
                    <img 
                      src={ceo.image} 
                      alt={ceo.name}
                      className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl border-4 border-white shadow-xl"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{ceo.name}</h4>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <div className="h-px w-8 bg-gradient-to-r from-transparent to-teal-500"></div>
                      <p className="text-lg md:text-xl font-semibold text-teal-600">{ceo.position}</p>
                      <div className="h-px w-8 bg-gradient-to-l from-transparent to-teal-500"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <svg className="absolute -top-2 -left-2 w-8 h-8 text-teal-200 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-0.5 3.6-1.3L11 23h4v-5l-1.6-1.1C13.8 16.3 14 15.7 14 15c0-2.2-1.8-4-4-4zm10 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-0.5 3.6-1.3L21 23h4v-5l-1.6-1.1c0.4-0.6 0.6-1.2 0.6-1.9 0-2.2-1.8-4-4-4z" />
                    </svg>
                    <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed pl-6 pr-6 italic relative">
                      <span className="relative z-10">"{ceo.message}"</span>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Grid */}
        <div 
          ref={teamRef as React.RefObject<HTMLDivElement>}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-black mb-8">Our Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {employees.map((employee, index) => (
              <div 
                key={employee.id}
                className={`group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  teamVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={employee.image} 
                    alt={employee.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-sm font-medium text-black">{employee.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="mt-12">
          <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Image Section */}
              <div className="lg:w-1/2 p-8 flex justify-center">
                <img 
                  src="/lovable-uploads/0bee0c4f-19fc-479c-8517-0376bc75f623.png"
                  alt="Join our team illustration"
                  className="max-w-full max-h-64 object-contain"
                />
              </div>
              
              {/* Content Section */}
              <div className="lg:w-1/2 p-8 text-center">
                <h3 className="text-4xl font-bold mb-6">Join Our Team</h3>
                <p className="text-xl mb-8 leading-relaxed">
                  We're always looking for skilled electricians to join our growing team. 
                  If you're passionate about electrical work and committed to excellence, we'd love to hear from you.
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black font-bold py-3 px-6 rounded transition-colors duration-300 hover:bg-gray-200"
                >
                  Contact Us About Careers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
