import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex-shrink-0 w-[380px] h-[280px] bg-gray-100 rounded-2xl shadow-lg p-4 cursor-grab active:cursor-grabbing"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-800 rounded-full border-2 border-purple-400" />
        <div>
          <div className="font-bold text-sm uppercase tracking-wider">
            {testimonial.name}
          </div>
          <div className="text-xs text-gray-500">
            {testimonial.handle}
          </div>
        </div>
      </div>

      {/* Review */}
      <p className="text-sm text-gray-800 leading-relaxed mb-3">
        {testimonial.review}
      </p>

      {/* Footer */}
      <div className="text-xs text-gray-500 border-t pt-2">
        <div>{testimonial.time}</div>
        <div className="text-purple-600 font-bold uppercase tracking-wider">
          {testimonial.event}
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationFrameRef = useRef<number>();

  // Handle drag start (mousedown/touchstart)
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    const pageX = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    setStartX(pageX);
    setScrollLeft(containerRef.current.scrollLeft);
    
    // Cancel any ongoing animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  // Handle drag move (mousemove/touchmove)
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    
    const currentX = 'touches' in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    const walk = (currentX - startX) * 1.5; // Adjust scroll speed multiplier
    
    // Use requestAnimationFrame for smooth scrolling
    animationFrameRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft = scrollLeft - walk;
      }
    });
  };

  // Handle drag end (mouseup/mouseleave/touchend)
  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Cancel animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #4b1f7a 0%, #6a2fcf 45%, #8b5cf6 100%)",
      }}
    >
      {/* Heading */}
      <h1 className="text-white text-7xl tracking-[0.4em] mb-16 font-black">
        TESTIMONIALS
      </h1>

      {/* Horizontal scrollable container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl overflow-x-hidden scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbar: 'none' as any
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex gap-6 px-8 py-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;