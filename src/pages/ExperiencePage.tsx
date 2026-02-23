import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    id: 1,
    title: "Founder",
    company: "Lenient Tree",
    description: "Lenient Tree is a student-driven Web3 & startup community focused on bridging the gap between education and industry. We enable students to gain real-world exposure through ideathons, hackathons, workshops, portfolio building, and direct collaboration with founders, investors, and ecosystem partners.",
    color: "#a855f7",
    icon: "🌱",
    bgGradient: "linear-gradient(135deg, #2a124f 0%, #4c1d95 100%)",
    tagline: "Bridging Education & Industry"
  },
  {
    id: 2,
    title: "School of Defense",
    company: "Cyber Dojo 🛡️💻",
    description: "A hands-on learning space to build real cybersecurity skills — from basics to advanced defense.\n\nLearn. Practice. Protect.",
    color: "#10b981",
    icon: "🛡️",
    bgGradient: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
    tagline: "Learn. Practice. Protect."
  },
  {
    id: 3,
    title: "Sales Manager (Intern)",
    company: "XPayBack",
    description: "Worked as an intern under Saboth (CMO, XPayBack), supporting R&D activities and market research.\n\nAbout XPayBack:\nXPayBack is a cashback and rewards platform for online and in-store purchases, offering guaranteed cashback through partner merchants along with payment solutions such as a prepaid card and an in-app digital wallet.",
    color: "#3b82f6",
    icon: "💳",
    bgGradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
    tagline: "Fintech & Support R&D"
  }
];

const ExperiencePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.001
  });

  // angular gap: 120 degrees keeps other cards far away
  const gap = 120;

  // We want the current card to be at 9 o'clock (180 degrees) relative to the center off-screen right
  // rotation + current_card_angle = 180
  // Card 0: angle 0 -> rotation start = 180
  // Card 1: angle 120 -> rotation = 60
  // Card 2: angle 240 -> rotation = -60
  const rotation = useTransform(smoothProgress, [0, 1], [180, 180 - (experiences.length - 1) * gap]);

  return (
    <div ref={containerRef} className="relative min-h-[500vh] bg-[#050505] font-['Rajdhani']">
      {/* Navbar Overlay */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <button
          onClick={() => navigate("/")}
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-xl hover:bg-white/10 transition-all"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          <span className="text-white font-['Orbitron'] tracking-[0.3em] text-[10px] opacity-40">EXPERIENCE ARCHIVE</span>
        </div>
      </nav>

      {/* Sticky Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[150px]" />
      </div>

      {/* Sticky Content Area */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Left Side: Content Box */}
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-8 md:pl-24 relative z-10">
          <div className="relative w-full max-w-xl h-[70vh]">
            {experiences.map((exp, index) => {
              const start = index / experiences.length;
              const end = (index + 1) / experiences.length;

              const opacity = useTransform(smoothProgress,
                [start - 0.1, start, end - 0.1, end],
                [0, 1, 1, 0]
              );

              const y = useTransform(smoothProgress,
                [start - 0.15, start, end - 0.15, end],
                [100, 0, 0, -100]
              );

              return (
                <motion.div
                  key={exp.id}
                  style={{ opacity, y }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                      <span className="text-xl">{exp.icon}</span>
                      <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase font-['Orbitron']">
                        {exp.tagline}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-white font-['Orbitron'] font-black leading-[1.1]" style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}>
                        {exp.title}
                      </h2>
                      <h3 className="text-white font-['Orbitron'] font-bold tracking-tight opacity-70" style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}>
                        {exp.company}
                      </h3>
                    </div>

                    <div className="max-w-lg space-y-5">
                      {exp.description.split('\n\n').map((para, i) => (
                        <p key={i} className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                          {para}
                        </p>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-6">
                      <div className="h-0.5 w-12 rounded-full" style={{ background: exp.color }} />
                      <span className="text-[10px] font-bold tracking-widest text-white/30 font-['Orbitron']">0{exp.id}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Straight Card on a Vertical Wheel */}
        <div className="absolute right-[-60vw] top-1/2 -translate-y-1/2 w-[110vw] h-[110vw] pointer-events-none">
          <motion.div
            style={{ rotate: rotation }}
            className="relative w-full h-full rounded-full"
          >
            {experiences.map((exp, index) => {
              const angle = index * gap;
              return (
                <div
                  key={exp.id}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "45vw",
                    height: "32vw",
                    maxWidth: "750px",
                    maxHeight: "550px",
                    // The trick: translateX spreads them along the radius, 
                    // and nested rotate(-rotation - angle) keeps them upright
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(55vw)`,
                  }}
                >
                  <motion.div
                    // Dynamic counter-rotation to keep the card straight
                    style={{ rotate: useTransform(rotation, r => -r - angle) }}
                    className="w-full h-full rounded-[60px] overflow-hidden relative p-[2px]"
                    style={{
                      background: `linear-gradient(135deg, ${exp.color}44, transparent)`,
                      backdropFilter: "blur(40px)",
                      borderRadius: "60px"
                    }}
                  >
                    <div className="w-full h-full rounded-[58px] bg-[#0a0a0a]/90 border border-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-white/[0.02]" />

                      <div className="absolute bottom-[-10%] right-[-5%] opacity-10 select-none pointer-events-none" style={{ color: exp.color }}>
                        <span className="text-[30vw]">{exp.icon}</span>
                      </div>

                      <div className="absolute inset-0 p-16 flex flex-col justify-between z-10">
                        <div className="flex justify-between items-start">
                          <div className="w-24 h-24 rounded-[32px] flex items-center justify-center text-5xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: `0 0 60px ${exp.color}22` }}>
                            {exp.icon}
                          </div>
                          <div className="font-['Orbitron'] text-white/10 text-8xl font-black italic">0{exp.id}</div>
                        </div>

                        <div className="space-y-6">
                          <h4 className="text-white font-['Orbitron'] text-4xl font-bold tracking-tight">
                            {exp.company}
                          </h4>
                          <div className="flex items-center gap-4">
                            <div className="h-1.5 rounded-full" style={{ width: "80px", background: exp.color, boxShadow: `0 0 30px ${exp.color}` }} />
                            <span className="text-[10px] font-bold tracking-[0.5em] text-white/30 font-['Orbitron'] uppercase">EXPERIENCE ARCHIVE</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at top right, ${exp.color}, transparent)` }} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
          {/* Subtle arc visualization */}
          <div className="absolute inset-[-5%] rounded-full border border-white/[0.02] border-dashed" />
        </div>
      </div>

      {/* Journey labels */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 h-1/2 flex flex-col items-center justify-between z-50">
        <span className="text-[8px] font-['Orbitron'] text-white/20 -rotate-90 origin-center">REF.2025</span>
        <div className="w-[1px] h-full bg-white/5 relative">
          <motion.div style={{ scaleY: smoothProgress, transformOrigin: "top" }} className="absolute inset-0 bg-white/30" />
        </div>
        <span className="text-[8px] font-['Orbitron'] text-white/20 -rotate-90 origin-center">JOURNEY</span>
      </div>
    </div>
  );
};

export default ExperiencePage;
