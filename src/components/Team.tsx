import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image_url: string | null;
  phone: string | null;
  email: string | null;
}

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const ceo = {
    name: "Amalodh Bavi",
    position: "CEO & Master Electrician",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    message: "Hard work and team effort - that's what makes Amalodhbhavi Electricals successful. Our commitment to excellence and dedication to our craft has built the foundation of trust with our clients. Together, we illuminate every project with precision and passion."
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setTeamMembers(data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
      toast.error('Failed to load team members');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Meet Our Expert Team
          </h2>
        </div>

        {/* Director's Message Section */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
              Our Director's Message
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={ceo.image} 
                  alt={ceo.name}
                  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h4 className="text-xl md:text-2xl font-bold text-black mb-2">{ceo.name}</h4>
                <p className="text-lg text-gray-600 mb-4">{ceo.position}</p>
                <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                  "{ceo.message}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-black mb-8">Our Team</h3>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading team members...</p>
            </div>
          ) : teamMembers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No team members available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  {member.image_url ? (
                    <img 
                      src={member.image_url} 
                      alt={member.name}
                      className="w-20 h-20 mx-auto object-cover rounded-full mb-3"
                    />
                  ) : (
                    <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">No photo</span>
                    </div>
                  )}
                  <h4 className="text-sm font-medium text-black mb-1">{member.name}</h4>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          )}
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