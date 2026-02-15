import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const achievements = [
    { 
      text: "ENTREPRENEUR", 
      clickable: true, 
      route: "/entrepreneur",
      description: "Building innovative solutions",
      icon: "🚀"
    },
    { 
      text: "EXPERIENCE", 
      clickable: true, 
      route: "/experience",
      description: "Professional journey",
      icon: "💼"
    },
    { 
      text: "LEADERSHIP", 
      clickable: false,
      description: "Team management",
      icon: "👥"
    },
    { 
      text: "INNOVATION", 
      clickable: false,
      description: "Creative solutions",
      icon: "💡"
    },
    { 
      text: "EXCELLENCE", 
      clickable: false,
      description: "Quality delivery",
      icon: "⭐"
    }
  ];
  
  return (
   <motion.section
      ref={sectionRef}
      id="achievements"
      className="w-full py-24 px-6 flex justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      style={{
        background: `
          radial-gradient(
            circle at 20% 30%,
            rgba(139, 92, 246, 0.15),
            transparent 50%
          ),
          radial-gradient(
            circle at 80% 70%,
            rgba(236, 72, 153, 0.15),
            transparent 50%
          ),
          linear-gradient(
            135deg,
            #1e1b4b 0%,
            #312e81 45%,
            #4c1d95 100%
          )
        `,
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, -Math.random() * 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-purple-500/20"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              transform: `rotate(${45 * i}deg)`
            }}
            animate={{
              rotate: [45 * i, 45 * i + 180, 45 * i],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Title */}
        <motion.h2
          className="font-display font-bold text-white mb-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "64px",
            letterSpacing: "0.18em",
          }}
        >
          ACHIEVEMENTS
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: isInView ? "200px" : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>

        {/* Cards */}
        <div className="flex gap-6 items-stretch flex-wrap justify-center">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`relative flex-1 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer ${
                  item.clickable ? 'hover:shadow-2xl' : ''
                }`}
                style={{
                  background: "linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(30, 27, 75, 0.8))",
                  paddingTop: "72px",
                  paddingBottom: "72px",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  minWidth: "200px",
                  border: "1px solid rgba(139, 92, 246, 0.3)"
                }}
                whileHover={{
                  background: item.clickable 
                    ? "linear-gradient(145deg, rgba(139, 92, 246, 0.2), rgba(30, 27, 75, 0.8))"
                    : "linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(30, 27, 75, 0.8))",
                  borderColor: item.clickable ? "rgba(139, 92, 246, 0.6)" : "rgba(139, 92, 246, 0.3)"
                }}
                onClick={() => {
                  if (item.clickable) {
                    window.location.href = item.route;
                  }
                }}
              >
                {/* Hover glow effect */}
                {item.clickable && (
                  <motion.div
                    className="absolute inset-0 bg-purple-500 opacity-0"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Icon */}
                <motion.div
                  className="absolute top-4 text-2xl"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Main text */}
                <span
                  className="font-display uppercase relative z-10"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    fontSize: "40px",
                    letterSpacing: "0.22em",
                    color: item.clickable ? "#ffffff" : "#cfcfcf",
                    lineHeight: "1",
                    textShadow: item.clickable ? "0 0 20px rgba(139, 92, 246, 0.5)" : "none"
                  }}
                >
                  {item.text}
                </span>
                
                {/* Description on hover */}
                <motion.div
                  className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/70 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.description}
                </motion.div>
                
                {/* Animated border */}
                {item.clickable && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-purple-400 opacity-0"
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom decorative line */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </motion.section>
  );
};

export default Achievements;
