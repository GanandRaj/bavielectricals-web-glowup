import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useState, useEffect, useRef } from 'react';
const TeamConnect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([false, false]);
  const sectionRef = useRef<HTMLElement>(null);
  const teamMembers = [{
    name: "Gali Anand Raj",
    image: "/lovable-uploads/photo-1581092795360-fd1ca04f0952.jpg",
    whatsapp: "#",
    // You'll provide the number later
    instagram: "#",
    email: "#"
  }, {
    name: "Dhanush Sanapala",
    image: "/lovable-uploads/photo-1581090464777-f3220bbe1b8b.jpg",
    whatsapp: "#",
    // You'll provide the number later
    instagram: "#",
    email: "#"
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };
  return <section ref={sectionRef} className="py-20 bg-gradient-to-br from-black via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Connect With Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Ready to elevate your business with a professional website? We're Anand and Dhanush, passionate web developers specializing in creating stunning, responsive websites for businesses. From concept to launch, we deliver modern web solutions that help your business thrive online.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => <Card key={member.name} className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl transition-all duration-200 ring-2 ring-white/10 bg-gray-800">
                    {!loadedImages[index] && <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gray-600"></div>
                      </div>}
                    <img src={member.image} alt={member.name} className={`w-full h-full object-cover transition-opacity duration-200 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`} onLoad={() => handleImageLoad(index)} loading="lazy" decoding="async" />
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white">
                  {member.name}
                </h3>

                <div className="flex justify-center space-x-6">
                  <a href={member.whatsapp} className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-colors duration-200" title="WhatsApp" aria-label={`Contact ${member.name} on WhatsApp`}>
                    <MessageCircle className="h-6 w-6 text-white" />
                  </a>

                  <a href={member.instagram} className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-colors duration-200" title="Instagram" aria-label={`Follow ${member.name} on Instagram`}>
                    <Instagram className="h-6 w-6 text-white" />
                  </a>

                  <a href={member.email} className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-colors duration-200" title="Email" aria-label={`Email ${member.name}`}>
                    <Mail className="h-6 w-6 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            <span className="text-white font-semibold">Professional Web Development</span> • 
            <span className="text-blue-300 font-medium"> Custom Business Websites</span> • 
            <span className="text-green-300 font-medium"> Modern & Responsive Design</span>
          </p>
        </div>
      </div>
    </section>;
};
export default TeamConnect;