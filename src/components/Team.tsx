import React from "react";
import { motion } from "framer-motion";

type Member = {
  id: string;
  name: string;
  image: string;
  angle: number;
  delay: number;
};

const leftMembers: Member[] = [
  { id: "l1", name: "Rajesh Kumar", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", angle: -144, delay: 0.0 },
  { id: "l2", name: "Priya Sharma", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face", angle: -108, delay: 0.05 },
  { id: "l3", name: "Vikram Singh", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face", angle: -72, delay: 0.1 },
  { id: "l4", name: "Suresh Reddy", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face", angle: -36, delay: 0.15 },
  { id: "l5", name: "Amit Verma", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face", angle: 0, delay: 0.2 },
  { id: "l6", name: "Neha Kapoor", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face", angle: 36, delay: 0.25 },
  { id: "l7", name: "Arjun Malhotra", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face", angle: 72, delay: 0.3 },
  { id: "l8", name: "Kavita Rao", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face", angle: 108, delay: 0.35 },
  { id: "l9", name: "Rahul Desai", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face", angle: 144, delay: 0.4 },
  { id: "l10", name: "Sanjana Iyer", image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop&crop=face", angle: 180, delay: 0.45 },
];

const rightMembers: Member[] = [
  { id: "r1", name: "Anjali Devi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", angle: -180, delay: 0.0 },
  { id: "r2", name: "Ravi Krishnan", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face", angle: -144, delay: 0.05 },
  { id: "r3", name: "Meera Nair", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face", angle: -108, delay: 0.1 },
  { id: "r4", name: "Kiran Patel", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&h=200&fit=crop&crop=face", angle: -72, delay: 0.15 },
  { id: "r5", name: "Deepak Gupta", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=face", angle: -36, delay: 0.2 },
  { id: "r6", name: "Pooja Menon", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face", angle: 0, delay: 0.25 },
  { id: "r7", name: "Aditya Chopra", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face", angle: 36, delay: 0.3 },
  { id: "r8", name: "Shreya Bansal", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face", angle: 72, delay: 0.35 },
  { id: "r9", name: "Nikhil Joshi", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop&crop=face", angle: 108, delay: 0.4 },
  { id: "r10", name: "Divya Pillai", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=face", angle: 144, delay: 0.45 },
];

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="relative flex items-center justify-center bg-gradient-to-b from-background to-muted/20 py-24 px-4 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT SIDE - Semicircle from top to bottom (clockwise) */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <div className="relative w-[280px] h-[600px]">
            {leftMembers.map((member, index) => {
              // Calculate position along semicircle (left side, top to bottom)
              const angle = (index / (leftMembers.length - 1)) * 180; // 0 to 180 degrees
              const radius = 280;
              const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
              const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
              
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: member.delay, duration: 0.6, ease: "easeOut" }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="group relative w-20 h-24 rounded-2xl overflow-hidden shadow-xl bg-card/60 backdrop-blur-lg border border-border/60 team-orbit-left">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Name on hover */}
                    <div className="pointer-events-none absolute inset-x-1 bottom-1 rounded-md bg-white text-black text-[10px] font-semibold text-center px-1 py-0.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      {member.name}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CENTER CONTENT */}
        <motion.div
          className="flex-1 max-w-md bg-card/70 backdrop-blur-xl rounded-[32px] shadow-[0_20px_45px_rgba(15,23,42,0.12)] px-8 py-10 text-center border border-border/80"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 text-primary-foreground shadow-md">
            <span className="text-2xl">👥</span>
          </div>

          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-3">
            Our crew
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Our beloved team
          </h2>

          <p className="text-sm md:text-base text-muted-foreground mb-8">
            The people behind every successful project at Bavielectricals.
            Passionate builders, problem solvers and day-to-day heroes.
          </p>

          <button className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition">
            Meet the team
          </button>
        </motion.div>

        {/* RIGHT SIDE - Semicircle from top to bottom (anticlockwise) */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <div className="relative w-[280px] h-[600px]">
            {rightMembers.map((member, index) => {
              // Calculate position along semicircle (right side, top to bottom)
              const angle = (index / (rightMembers.length - 1)) * 180; // 0 to 180 degrees
              const radius = 280;
              const x = Math.cos((90 - angle) * Math.PI / 180) * radius;
              const y = Math.sin((90 - angle) * Math.PI / 180) * radius;
              
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: member.delay, duration: 0.6, ease: "easeOut" }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="group relative w-20 h-24 rounded-2xl overflow-hidden shadow-xl bg-card/60 backdrop-blur-lg border border-border/60 team-orbit-right">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Name on hover */}
                    <div className="pointer-events-none absolute inset-x-1 bottom-1 rounded-md bg-white text-black text-[10px] font-semibold text-center px-1 py-0.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                      {member.name}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Simple Grid */}
        <div className="sm:hidden grid grid-cols-2 gap-4 max-w-sm">
          {[...leftMembers, ...rightMembers].map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="group relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-xl bg-card/60 backdrop-blur-lg border border-border/60"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              {/* Name on hover */}
              <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-lg bg-white text-black text-xs font-semibold text-center px-2 py-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                {member.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
