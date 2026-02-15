import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "MANIK SHEORAN",
    handle: "@ManikSheoran",
    review:
      "Wrapping up #HackNITR with a smile! Grateful to NITR for hosting us and a big shoutout to MLH mentor @Frenzyritz13 for her invaluable guidance and those awesome stickers!",
    time: "7:33AM · Mar 4, 2024",
    event: "HackNITR 5.0",
  },
  {
    name: "SARAH CHEN",
    handle: "@SarahChen",
    review:
      "Amazing experience at the tech summit! Learned so much about AI and machine learning. Can't wait for next year!",
    time: "2:15PM · Apr 12, 2024",
    event: "TechSummit 2024",
  },
  {
    name: "ALEX KUMAR",
    handle: "@AlexKumar",
    review:
      "Best hackathon ever! The organization was top-notch and mentors were incredibly helpful.",
    time: "11:45AM · May 8, 2024",
    event: "CodeFest 2024",
  },
  {
    name: "EMILY RODRIGUEZ",
    handle: "@EmilyRodriguez",
    review:
      "Incredible workshop on web development! The hands-on approach made complex concepts so easy.",
    time: "4:20PM · Jun 15, 2024",
    event: "WebDev Workshop",
  },
  {
    name: "JAMES PARK",
    handle: "@JamesPark",
    review:
      "The networking opportunities at this conference were unmatched.",
    time: "6:30PM · Jul 22, 2024",
    event: "ConnectCon 2024",
  },
  {
    name: "LISA WANG",
    handle: "@LisaWang",
    review:
      "Fantastic panel discussion on the future of tech.",
    time: "3:15PM · Aug 10, 2024",
    event: "FutureTech Forum",
  },
];

const TestimonialSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Auto-advance cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.3), transparent 50%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.3), transparent 50%), linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.4em] mb-12 sm:mb-16 font-black px-4"
      >
        TESTIMONIALS
      </motion.h1>

      {/* Cards Stack */}
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-[350px] sm:h-[400px] flex items-center justify-center px-4">
        {testimonials.map((testimonial, index) => {
          const isActive = index === currentCardIndex;
          const isVisible = index <= currentCardIndex;
          
          return (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0,
                rotate: -6,
                scale: 0.8,
                x: 100
              }}
              animate={{ 
                opacity: isVisible ? 1 : 0,
                rotate: isVisible ? -6 + (index * 3) : -6,
                scale: isActive ? 1 : (1 - (currentCardIndex - index) * 0.1),
                x: isVisible ? index * 15 : 100,
                y: isVisible ? index * -20 : 0,
                zIndex: isActive ? 10 : index
              }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="absolute"
              style={{
                width: '280px',
                height: '320px',
                left: '50%',
                top: '50%',
                marginLeft: '-140px',
                marginTop: '-160px',
              }}
            >
              <TestimonialCard 
                name={testimonial.name}
                review={testimonial.review}
                index={index}
                rotation={0}
                isCenter={isActive}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentCardIndex(index)}
            className="h-2 rounded-full bg-white cursor-pointer"
            animate={{
              width: index === currentCardIndex ? 32 : 8,
              opacity: index === currentCardIndex ? 1 : 0.3,
              backgroundColor: index === currentCardIndex ? "#a855f7" : "#ffffff"
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;