
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Licensed Professional",
      description: "Fully licensed and certified electrical contractor"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Years of experience in residential and commercial electrical work"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time service with quality workmanship guaranteed"
    },
    {
      icon: CheckCircle,
      title: "Safety First",
      description: "Committed to the highest safety standards in every project"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              About Amalodh Bavi Electricals
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With years of experience in the electrical industry, Amalodh Bavi Electricals has been 
              serving the community with professional, reliable, and safe electrical services. We take 
              pride in our workmanship and commitment to customer satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you need a simple repair, complete rewiring, or electrical installation for your 
              new construction project, our team has the expertise and dedication to get the job done 
              right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-black text-white py-3 px-6 rounded-lg text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-black text-white py-3 px-6 rounded-lg text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="bg-black text-white py-3 px-6 rounded-lg text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <feature.icon className="h-12 w-12 text-black mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
