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
  return <section id="about" className="py-20 relative overflow-hidden" style={{
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 30%, #D6A99D 70%, #c8a696 100%)'
  }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-['Comic_Neue']">About Amalodbhavi Electricals</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">With years of experience in the electrical industry, Amalodbhavi Electricals has been serving the community with professional, reliable, and safe electrical services. We take pride in our workmanship and commitment to customer satisfaction.</p>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Whether you need a simple repair, complete rewiring, or electrical installation for your 
              new construction project, our team has the expertise and dedication to get the job done 
              right the first time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-primary text-primary-foreground py-4 px-6 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div className="bg-primary text-primary-foreground py-4 px-6 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold">250+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="bg-primary text-primary-foreground py-4 px-6 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => <div key={index} className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-['Comic_Neue']">
                  {feature.title}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;