import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const achievements = [
  { text: "ENTREPRENEUR", clickable: true, route: "/entrepreneur", icon: "🚀" },
  { text: "EXPERIENCE", clickable: true, route: "/experience", icon: "💼" },
  { text: "EVENT DIGNITARY", clickable: true, route: "/#event", icon: "👥" },
];

// ── Single card ───────────────────────────────────────────────────────────────
const AchievementCard = ({
  item,
  index,
  isInView,
}: {
  item: (typeof achievements)[0];
  index: number;
  isInView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleHoverStart = () => {
    setHovered(true);
    videoRef.current?.play();
  };
  const handleHoverEnd = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.6, delay: 0.1 * index, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10, scale: 1.04 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={() => { if (item.clickable && item.route) window.location.href = item.route; }}
      style={{
        position: "relative",
        width: "220px",
        height: "600px",
        flexShrink: 0,
        borderRadius: "22px",
        overflow: "hidden",
        cursor: item.clickable ? "pointer" : "default",
        border: hovered
          ? "1px solid rgba(168,85,247,0.7)"
          : "1px solid rgba(139,92,246,0.3)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(168,85,247,0.3), 0 20px 50px rgba(139,92,246,0.4)"
          : "0 8px 24px rgba(0,0,0,0.4)",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {/* ── Video background (plays on hover) ── */}
      <video
        ref={videoRef}
        src="/videos/hero-bg.mp4"
        loop
        muted
        playsInline
        preload="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: hovered ? 0.55 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* ── Static dark background (shown when not hovering) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(145deg, rgba(0,0,0,0.82), rgba(30,27,75,0.82))",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* ── Dark overlay on top of video ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* ── Neon top bar that sweeps in on hover ── */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #a855f7, #ec4899, #6366f1)",
          transformOrigin: "left",
        }}
      />

      {/* ── Icon ── */}
      <motion.div
        animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
        style={{
          position: "absolute",
          top: "24px",
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: "28px",
          zIndex: 2,
        }}
      >
        {item.icon}
      </motion.div>

      {/* ── Vertical text ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "42px",
            fontWeight: 900,
            letterSpacing: "0.22em",
            color: hovered ? "#ffffff" : item.clickable ? "#ffffff" : "#cfcfcf",
            textShadow: hovered
              ? "0 0 30px rgba(168,85,247,0.9), 0 0 60px rgba(236,72,153,0.5)"
              : item.clickable
                ? "0 0 20px rgba(139,92,246,0.5)"
                : "none",
            fontFamily: "monospace",
            transition: "color 0.3s, text-shadow 0.3s",
            userSelect: "none",
          }}
        >
          {item.text}
        </span>
      </div>

      {/* ── "Click to explore" hint (only on clickable, on hover) ── */}
      {item.clickable && (
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "absolute",
            bottom: "16px",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 3,
            fontSize: "10px",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "monospace",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Explore ↗
        </motion.div>
      )}
    </motion.div>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
const Achievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
          radial-gradient(circle at 20% 30%, rgba(139,92,246,0.15), transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(236,72,153,0.15), transparent 50%),
          linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #4c1d95 100%)
        `,
      }}
    >
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, -Math.random() * 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
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
          style={{ fontSize: "64px", letterSpacing: "0.18em" }}
        >
          ACHIEVEMENTS
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            animate={{ width: isInView ? "200px" : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>

        {/* Cards — all same size, evenly spaced */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {achievements.map((item, index) => (
            <AchievementCard
              key={index}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom line */}
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
