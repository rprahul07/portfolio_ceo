import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.9]);
  
  return (
    <motion.div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      {/* Video element with parallax effect */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-fill"
        style={{ scale }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </motion.video>

      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(139, 92, 246, 0.1) 40%, rgba(17, 24, 39, 0.8) 100%)",
          opacity
        }}
      />
      
      {/* Dark overlay with animation */}
      <motion.div 
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Animated blur layers */}
      <motion.div 
        className="absolute inset-0 backdrop-blur-[1px]"
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(1px)" }}
        transition={{ duration: 3, delay: 1 }}
      />
      
      {/* Moving light sweep effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%)"
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Secondary light sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(75deg, transparent 30%, rgba(236, 72, 153, 0.05) 40%, transparent 50%)"
        }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Grain/noise texture with animation */}
      <motion.div 
        className="absolute inset-0 grain-overlay opacity-30"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.4) 100%)"
        }}
      />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, ${i === 0 ? 'rgba(139, 92, 246, 0.1)' : i === 1 ? 'rgba(236, 72, 153, 0.08)' : 'rgba(59, 130, 246, 0.06)'} 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default HeroVideo;
