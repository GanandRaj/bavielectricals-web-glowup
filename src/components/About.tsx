import { Award, Users, Clock, CheckCircle } from 'lucide-react';
const About = () => {
  const features = [{
    icon: Award,
    title: "Licensed Professional",
    description: "Fully licensed and certified electrical contractor"
  }, {
    icon: Users,
    title: "Experienced Team",
    description: "Years of experience in residential and commercial electrical work"
  }, {
    icon: Clock,
    title: "Reliable Service",
    description: "On-time service with quality workmanship guaranteed"
  }, {
    icon: CheckCircle,
    title: "Safety First",
    description: "Committed to the highest safety standards in every project"
  }];
  return <section id="about" className="py-20 relative overflow-hidden"
                   style={{
                     background: 'linear-gradient(135deg, #374151 0%, #4b5563 50%, #6b7280 100%)'
                   }}>
      {/* 3D Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text mb-6"
                style={{
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                  filter: 'drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3))'
                }}>About Amalodhbhavi Electricals</h2>
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
              <p className="text-lg text-gray-300 mb-6">
                With years of experience in the electrical industry, Amalodh Bavi Electricals has been 
                serving the community with professional, reliable, and safe electrical services. We take 
                pride in our workmanship and commitment to customer satisfaction.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Whether you need a simple repair, complete rewiring, or electrical installation for your 
                new construction project, our team has the expertise and dedication to get the job done 
                right the first time.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 perspective-1000">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl text-center shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-blue-500/30"
                   style={{
                     boxShadow: '0 15px 35px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                   }}>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">10+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-4 px-8 rounded-2xl text-center shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-purple-500/30"
                   style={{
                     boxShadow: '0 15px 35px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                   }}>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-white to-purple-200 bg-clip-text">500+</div>
                <div className="text-sm text-purple-100">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-4 px-8 rounded-2xl text-center shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-green-500/30"
                   style={{
                     boxShadow: '0 15px 35px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                   }}>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-white to-green-200 bg-clip-text">100%</div>
                <div className="text-sm text-green-100">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 perspective-1000">
            {features.map((feature, index) => <div key={index} className="group text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
                                                     style={{
                                                       boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.1)',
                                                       transformStyle: 'preserve-3d'
                                                     }}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110"
                     style={{ transformStyle: 'preserve-3d' }}>
                  <feature.icon className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;