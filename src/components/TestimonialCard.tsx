import { motion } from "framer-motion";
import { useState } from "react";

interface TestimonialCardProps {
  name: string;
  review: string;
  index: number;
  rotation: number;
  isCenter?: boolean;
}

const TestimonialCard = ({ name, review, index, rotation, isCenter = false }: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: isCenter ? 1.1 : 1.05,
        y: -10,
        boxShadow: isCenter ? "0 30px 60px rgba(139, 92, 246, 0.4)" : "0 25px 50px rgba(139, 92, 246, 0.3)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden"
      style={{
        width: isCenter ? "320px" : "280px",
        height: isCenter ? "380px" : "340px",
        background: "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)",
        transform: `perspective(1000px) rotate(${rotation}deg)`,
        zIndex: isCenter ? 20 : 10
      }}
    >
      {/* Animated gradient border */}
      <motion.div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between items-center text-center">
        {/* Black Circle Avatar */}
        <div
          className="w-20 h-20 rounded-full bg-black shadow-xl"
          style={{ marginTop: isCenter ? "1rem" : "0.5rem" }}
        />

        {/* NAME Text */}
        <div
          className="font-mono text-black text-lg uppercase tracking-wider font-bold"
          style={{
            fontSize: isCenter ? "18px" : "14px"
          }}
        >
          {name}
        </div>

        {/* REVIEW Text */}
        <div
          className="font-mono text-gray-800 font-black text-center"
          style={{
            fontSize: isCenter ? "16px" : "14px",
            fontWeight: "700",
            lineHeight: "1.4"
          }}
        >
          {review}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
