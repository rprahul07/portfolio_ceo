import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    id: 1,
    title: "Founder",
    company: "Lenient Tree",
    description:
      "Lenient Tree is a student-driven Web3 & startup community focused on bridging the gap between education and industry. We enable students to gain real-world exposure through ideathons, hackathons, workshops, portfolio building, and direct collaboration with founders, investors, and ecosystem partners.",
    color: "#a855f7",
    icon: "🌱",
    tagline: "Bridging Education & Industry",
  },
  {
    id: 2,
    title: "School of Defense",
    company: "Cyber Dojo 🛡️💻",
    description:
      "A hands-on learning space to build real cybersecurity skills — from basics to advanced defense.\n\nLearn. Practice. Protect.",
    color: "#10b981",
    icon: "🛡️",
    tagline: "Learn. Practice. Protect.",
  },
  {
    id: 3,
    title: "Sales Manager (Intern)",
    company: "XPayBack",
    description:
      "Worked as an intern supporting R&D activities and market research.\n\nXPayBack is a cashback and rewards platform for online and in-store purchases.",
    color: "#3b82f6",
    icon: "💳",
    tagline: "Fintech & Support R&D",
  },
];

const ExperiencePage = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.001,
  });

  // Smaller gap for tighter wheel
  const gap = 100;

  const rotation = useTransform(
    smoothProgress,
    [0, 1],
    [180, 180 - (experiences.length - 1) * gap]
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-[400vh] bg-[#050505] font-['Rajdhani']"
    >
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <button
          onClick={() => navigate("/")}
          className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-xl hover:bg-white/10 transition-all"
        >
          ←
        </button>

        <span className="text-white font-['Orbitron'] tracking-[0.3em] text-[10px] opacity-40">
          EXPERIENCE ARCHIVE
        </span>
      </nav>

      {/* STICKY AREA */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* LEFT SIDE CONTENT */}
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-6 md:pl-24 relative z-10">
          <div className="relative w-full max-w-xl h-[70vh]">
            {experiences.map((exp, index) => {
              const start = index / experiences.length;
              const end = (index + 1) / experiences.length;

              const opacity = useTransform(
                smoothProgress,
                [start - 0.1, start, end - 0.1, end],
                [0, 1, 1, 0]
              );

              const y = useTransform(
                smoothProgress,
                [start - 0.15, start, end - 0.15, end],
                [80, 0, 0, -80]
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
                      <h2 className="text-white font-['Orbitron'] font-black leading-[1.1] text-3xl md:text-5xl">
                        {exp.title}
                      </h2>
                      <h3 className="text-white font-['Orbitron'] font-bold opacity-70 text-xl md:text-2xl">
                        {exp.company}
                      </h3>
                    </div>

                    <div className="max-w-lg space-y-5">
                      {exp.description.split("\n\n").map((para, i) => (
                        <p
                          key={i}
                          className="text-gray-400 text-base md:text-lg leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-6">
                      <div
                        className="h-0.5 w-12 rounded-full"
                        style={{ background: exp.color }}
                      />
                      <span className="text-[10px] font-bold tracking-widest text-white/30 font-['Orbitron']">
                        0{exp.id}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE — SMALLER WHEEL (Hidden on mobile) */}
        {!isMobile && (
          <div className="absolute right-[-35vw] top-1/2 -translate-y-1/2 w-[75vw] h-[75vw] pointer-events-none">
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
                      width: "38vw",
                      height: "26vw",
                      maxWidth: "650px",
                      maxHeight: "450px",
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(35vw)`,
                    }}
                  >
                    <motion.div
                      style={{
                        rotate: useTransform(rotation, (r) => -r - angle),
                        background: `linear-gradient(135deg, ${exp.color}44, transparent)`,
                        backdropFilter: "blur(30px)",
                      }}
                      className="w-full h-full rounded-[50px] overflow-hidden relative p-[2px]"
                    >
                      <div className="w-full h-full rounded-[48px] bg-[#0a0a0a]/90 border border-white/10 relative overflow-hidden">

                        <div className="absolute inset-0 p-12 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div
                              className="w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl"
                              style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              }}
                            >
                              {exp.icon}
                            </div>

                            <div className="font-['Orbitron'] text-white/10 text-6xl font-black italic">
                              0{exp.id}
                            </div>
                          </div>

                          <h4 className="text-white font-['Orbitron'] text-3xl font-bold">
                            {exp.company}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperiencePage;