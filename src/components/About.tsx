import { Award, Users, Clock, CheckCircle, Zap, Shield, Star } from 'lucide-react';
import { memo } from 'react';

const About = memo(() => {
  const features = [
    {
      icon: Award,
      title: "Licensed Professional",
      description: "Fully licensed and certified electrical contractor with proven expertise",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of residential and commercial experience",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time arrival and completion with quality workmanship guarantee",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10"
    },
    {
      icon: CheckCircle,
      title: "Safety First",
      description: "Committed to the highest safety standards in every project we undertake",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10"
    }
  ];

  const achievements = [
    {
      icon: Star,
      number: "20+",
      label: "Years Experience",
      gradient: "from-[#3c2a39] to-purple-600"
    },
    {
      icon: Zap,
      number: "500+",
      label: "Projects Completed",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Customer Satisfaction",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#3c2a39] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Fredoka'] font-bold text-foreground mb-6 tracking-tight">
            About <span className="text-[#3c2a39]">Amalodhbhavi</span> Electricals
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#3c2a39] to-[#3c2a39]/50 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powering your world with professional electrical solutions and unmatched expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                With over two decades of excellence in the electrical industry, <span className="font-semibold text-[#3c2a39]">Amalodhbhavi Electricals</span> has been 
                the trusted partner for professional, reliable, and safe electrical services. We take 
                immense pride in our craftsmanship and unwavering commitment to customer satisfaction.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                From simple repairs to complex installations and complete rewiring projects, our expert team 
                brings the knowledge, dedication, and precision needed to exceed your expectations every time.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="group relative bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6 text-center hover:border-[#3c2a39]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#3c2a39]/20 hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-['Fredoka'] font-bold text-foreground mb-1 group-hover:text-[#3c2a39] transition-colors duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-card/90 backdrop-blur-sm border-2 border-border/50 rounded-xl p-6 text-center hover:border-[#3c2a39]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#3c2a39]/20 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-foreground group-hover:text-[#3c2a39] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-['Fredoka'] font-bold text-foreground mb-3 group-hover:text-[#3c2a39] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#3c2a39] to-transparent transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
export default About;