import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const initialCards = [
  { 
    id: 1, 
    label: "TECH SUMMIT",
    description: "Annual technology conference",
    date: "March 2024",
    attendees: "500+",
    image: "🚀"
  },
  { 
    id: 2, 
    label: "HACKATHON",
    description: "48-hour coding challenge",
    date: "April 2024",
    attendees: "200+",
    image: "💻"
  },
  { 
    id: 3, 
    label: "WORKSHOP",
    description: "Hands-on learning experience",
    date: "May 2024",
    attendees: "100+",
    image: "🛠️"
  },
  { 
    id: 4, 
    label: "NETWORKING",
    description: "Professional connections",
    date: "June 2024",
    attendees: "300+",
    image: "🤝"
  },
  { 
    id: 5, 
    label: "CONFERENCE",
    description: "Industry leaders summit",
    date: "July 2024",
    attendees: "1000+",
    image: "🎯"
  },
];

const slots = [
  { x: -440, scale: 0.85, opacity: 0.3, z: 0 },
  { x: -220, scale: 0.95, opacity: 0.6, z: 1 },
  { x: 0,    scale: 1.05, opacity: 1,   z: 3 }, // front
  { x: 220,  scale: 0.95, opacity: 0.6, z: 1 },
  { x: 440,  scale: 0.85, opacity: 0.3, z: 0 },
];

const Event = () => {
  const [cards, setCards] = useState(initialCards);
  const [blurCardId, setBlurCardId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCards((prev) => {
        const next = [...prev];
        const first = next.shift();

        if (first) {
          setBlurCardId(first.id);
          next.push(first);
        }

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <motion.section
      ref={sectionRef}
      id="event"
      className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      style={{
        background: `
          radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.2), transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.2), transparent 50%),
          linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #4c1d95 100%)
        `,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`bg-particle-${i}`}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 10,
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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`bg-shape-${i}`}
            className="absolute border border-purple-500/10 rounded-lg"
            style={{
              width: `${80 + i * 15}px`,
              height: `${80 + i * 15}px`,
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
              transform: `rotate(${30 * i}deg)`
            }}
            animate={{
              rotate: [30 * i, 30 * i + 360],
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Title */}
      <motion.h1
        className="font-display text-white mb-28 text-center relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ fontSize: "56px", letterSpacing: "0.18em" }}
      >
        EVENT DIGNITARY
        {/* Animated underline */}
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: isInView ? "250px" : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </motion.h1>

      {/* Carousel Container */}
      <div 
        className="relative w-[1200px] h-[400px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence>
          {cards.map((card, index) => {
            const slot = slots[index];
            const isBlurred = blurCardId === card.id;
            const isCenter = index === 2;

            return (
              <motion.div
                key={card.id}
                layout
                initial={{ 
                  x: slot.x, 
                  scale: slot.scale, 
                  opacity: slot.opacity,
                  filter: "blur(0px)"
                }}
                animate={{
                  x: slot.x,
                  scale: slot.scale,
                  opacity: slot.opacity,
                  filter: isBlurred && !isCenter
                    ? ["blur(0px)", "blur(20px)", "blur(15px)"]
                    : "blur(0px)",
                  rotateY: isCenter ? 0 : (index < 2 ? -15 : 15),
                  z: slot.z
                }}
                transition={{
                  x: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
                  scale: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
                  filter: {
                    duration: isBlurred && !isCenter ? 0.8 : 0.15,
                    ease: "easeInOut",
                  },
                  rotateY: { duration: 0.8 }
                }}
                onAnimationComplete={() => {
                  if (blurCardId === card.id) {
                    setBlurCardId(null);
                  }
                }}
                className="absolute w-64 h-80 rounded-3xl overflow-hidden cursor-pointer"
                style={{ 
                  zIndex: slot.z,
                  transformStyle: "preserve-3d"
                }}
                whileHover={{ 
                  scale: isCenter ? 1.08 : slot.scale * 1.05,
                  y: -10
                }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30" />
                
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
                  animate={{ opacity: isCenter ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl text-center mb-4"
                    animate={{ 
                      scale: isCenter ? [1, 1.1, 1] : 1,
                      rotate: isCenter ? [0, 5, -5, 0] : 0
                    }}
                    transition={{
                      duration: 2,
                      repeat: isCenter ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  >
                    {card.image}
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3
                    className="font-display text-2xl font-bold text-center tracking-wider mb-2"
                    animate={{ 
                      scale: isCenter ? 1.1 : 1,
                      textShadow: isCenter ? "0 0 20px rgba(139, 92, 246, 0.8)" : "none"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {card.label}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p
                    className="text-sm text-center text-white/80 mb-4"
                    animate={{ opacity: isCenter ? 1 : 0.7 }}
                    transition={{ duration: 0.5 }}
                  >
                    {card.description}
                  </motion.p>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center text-xs text-white/60">
                    <span>{card.date}</span>
                    <span>{card.attendees}</span>
                  </div>
                </div>
                
                {/* Glow effect for center card */}
                {isCenter && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl shadow-2xl"
                    style={{
                      boxShadow: "0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)",
                        "0 0 60px rgba(139, 92, 246, 0.6), 0 0 120px rgba(139, 92, 246, 0.3)",
                        "0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.2)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Navigation dots */}
      <div className="flex gap-2 mt-8 relative z-10">
        {cards.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-purple-400"
            animate={{
              scale: index === 2 ? 1.5 : 1,
              opacity: index === 2 ? 1 : 0.3
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Event;
