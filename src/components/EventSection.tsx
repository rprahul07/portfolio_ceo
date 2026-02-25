import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Assets from EventDignitaries
import photo1 from "@/assets/event-dignitaries/photo_1_2026-02-14_23-27-32.jpg";
import photo2 from "@/assets/event-dignitaries/photo_2_2026-02-14_23-27-32.jpg";
import photo3 from "@/assets/event-dignitaries/photo_3_2026-02-14_23-27-32.jpg";
import photo4 from "@/assets/event-dignitaries/photo_4_2026-02-14_23-27-32.jpg";
import photo5 from "@/assets/event-dignitaries/photo_5_2026-02-14_23-27-32.jpg";
import photo6 from "@/assets/event-dignitaries/photo_6_2026-02-14_23-27-32.jpg";
import photo7 from "@/assets/event-dignitaries/photo_7_2026-02-14_23-27-32.jpg";

const initialCards = [
  {
    id: 1,
    img: photo5,
    role: "HOST",
    event: "ThinkerRoot Ideathon",
    org: "Lenient Tree × ThinkerRoot",
    desc: "Hosted the flagship ThinkerRoot Ideathon — a platform for student innovators to pitch breakthrough ideas powered by Lenient Tree.",
    link: null,
    color: "#ef4444",
    accent: "#f87171",
    glow: "rgba(239,68,68,0.45)",
    icon: "🎙️",
  },
  {
    id: 2,
    img: photo1,
    role: "CHIEF GUEST",
    event: "Invenio 2025",
    org: "IISER Berhampur",
    desc: "Invited as Chief Guest at Invenio 2025 hosted by IISER Berhampur — a premier science & innovation fest.",
    link: "https://www.linkedin.com/posts/augustine-vadakumchery-0250872b7_invenio2025-invenio2025-iiserberhampur-activity-7364982531420590080-vZSl",
    color: "#f59e0b",
    accent: "#fbbf24",
    glow: "rgba(245,158,11,0.45)",
    icon: "⭐",
  },
  {
    id: 3,
    img: photo4,
    role: "ORGANISER",
    event: "Pinnacle Hacks 2025",
    org: "The Incite Crew × Devfolio",
    desc: "Organised Pinnacle Hacks 2025 Edition 1 — a national-level hackathon powered by Devfolio, backed by Lenient Tree.",
    link: "https://www.linkedin.com/posts/augustine-vadakumchery-0250872b7_pinnaclehacks2025-lenienttree-hackathon-activity-7368284326729285632-o50U",
    color: "#8b5cf6",
    accent: "#a78bfa",
    glow: "rgba(139,92,246,0.45)",
    icon: "🏆",
  },
  {
    id: 4,
    img: photo6,
    role: "MARKETING PARTNER",
    event: "Takshak '25",
    org: "MACE",
    desc: "Served as Marketing Partner for Takshak'25 at MACE — driving outreach and partnership growth for the event.",
    link: "https://www.linkedin.com/posts/augustine-vadakumchery-0250872b7_lenienttree-takshak25-mace-activity-7380906787996278785-ivCp",
    color: "#a855f7",
    accent: "#c084fc",
    glow: "rgba(168,85,247,0.45)",
    icon: "📣",
  },
  {
    id: 5,
    img: photo2,
    role: "COMMUNITY PARTNER",
    event: "Tech For Good Hackathon",
    org: "DeepTech Conference × iQue",
    desc: "Community Partner for the Tech For Good Hackathon at DeepTech Conference, Bangalore — themed Public Good with ₹1,0,000 prize.",
    link: "https://www.linkedin.com/posts/augustine-vadakumchery-0250872b7_tech-for-good-hackathon-activity-7402822011158470656-SR2u",
    color: "#6366f1",
    accent: "#818cf8",
    glow: "rgba(99,102,241,0.45)",
    icon: "🤝",
  },
  {
    id: 6,
    img: photo3,
    role: "HOST",
    event: "BNB Hack Kerala",
    org: "BNB Chain × Fluxor",
    desc: "Hosted BNB Hack Kerala — a Web3 hackathon organized by BNB Chain and Fluxor, bringing together blockchain builders.",
    link: "https://www.linkedin.com/posts/augustine-vadakumchery-0250872b7_bnbhackkerala-bnbchain-fluxor-activity-7358111175697453057-zC41",
    color: "#3b82f6",
    accent: "#60a5fa",
    glow: "rgba(59,130,246,0.45)",
    icon: "⛓️",
  },
  {
    id: 7,
    img: photo7,
    role: "HOST",
    event: "EVOKE 2025",
    org: "MACE IoT Club × IEDC",
    desc: "Hosted EVOKE 2025 — the annual innovation & tech fest by MACE IoT Club and IEDC, featuring certificate ceremonies and live demos.",
    link: "https://www.linkedin.com/posts/augustine-vadakumchery-0250872b7_evoke2025-maceiotclub-iedcmace-activity-7362234832627650560-0GC9",
    color: "#10b981",
    accent: "#34d399",
    glow: "rgba(16,185,129,0.45)",
    icon: "🎊",
  },
  {
    id: 8,
    img: null,
    role: "ONLINE PANELIST",
    event: "E-Cell Amrita",
    org: "Lenient Tree × E-Cell VV Chennai",
    desc: "Featured as an online panelist for E-Cell Amrita's entrepreneurship session — representing Lenient Tree on student entrepreneurship.",
    link: "https://www.linkedin.com/posts/ecellavvchennai_ecellamrita-lenienttree-studententrepreneurship-ugcPost-7355837354596618242-mHMD",
    color: "#ec4899",
    accent: "#f472b6",
    glow: "rgba(236,72,153,0.45)",
    icon: "💻",
    gradient: "linear-gradient(135deg, #831843 0%, #9d174d 40%, #be185d 70%, #db2777 100%)",
  },
  {
    id: 9,
    img: null,
    role: "JUDGING PANEL",
    event: "PRAVEGA 2025",
    org: "Business Pitching",
    desc: "Served on the judging panel for PRAVEGA 2025 Business Pitching — evaluating startup pitches and entrepreneurial ventures.",
    link: "https://www.linkedin.com/posts/augustine-vadakumchery-0250872b7_pravega-businesspitching-judgingpanel-activity-7425175532889255936-7Lw7",
    color: "#f97316",
    accent: "#fb923c",
    glow: "rgba(249,115,22,0.45)",
    icon: "⚖️",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #9a3412 40%, #c2410c 70%, #ea580c 100%)",
  },
];

// Removed static slots definition

const Event = () => {
  const isMobile = useIsMobile();
  const [cards, setCards] = useState(initialCards);
  const [blurCardId, setBlurCardId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Responsive slots
  const slots = isMobile ? [
    { x: -160, scale: 0.6, opacity: 0.2, z: 0 },
    { x: -80, scale: 0.8, opacity: 0.6, z: 1 },
    { x: 0, scale: 1.05, opacity: 1, z: 3 }, // front
    { x: 80, scale: 0.8, opacity: 0.6, z: 1 },
    { x: 160, scale: 0.6, opacity: 0.2, z: 0 },
  ] : [
    { x: -520, scale: 0.8, opacity: 0.3, z: 0 },
    { x: -260, scale: 0.9, opacity: 0.6, z: 1 },
    { x: 0, scale: 1.15, opacity: 1, z: 3 }, // front
    { x: 260, scale: 0.9, opacity: 0.6, z: 1 },
    { x: 520, scale: 0.8, opacity: 0.3, z: 0 },
  ];

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
        className="font-display text-white mb-16 md:mb-28 text-center relative z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", letterSpacing: "0.18em", textTransform: "uppercase" }}
      >
        EVENT DIGNITARY
        {/* Animated underline */}
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: isInView ? "min(250px, 80%)" : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </motion.h1>

      {/* Carousel Container */}
      <div
        className="relative w-full max-w-[1400px] h-[700px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence>
          {cards.map((card, index) => {
            if (index >= slots.length) return null;
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
                className={`absolute ${isMobile ? 'w-56 h-[400px]' : 'w-80 h-[560px]'} rounded-3xl overflow-hidden cursor-pointer`}
                style={{
                  zIndex: slot.z,
                  transformStyle: "preserve-3d"
                }}
                whileHover={{
                  scale: isCenter ? 1.08 : slot.scale * 1.05,
                  y: -10
                }}
                onClick={() => card.link && window.open(card.link, "_blank")}
              >
                {/* Card Background */}
                <div
                  className="absolute inset-0 bg-neutral-900/40 backdrop-blur-xl border border-white/10"
                  style={{
                    background: card.img
                      ? `url(${card.img}) center/cover no-repeat`
                      : card.gradient || 'linear-gradient(135deg, #1e1b4b, #4c1d95)'
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white text-center">
                  {/* Icon & Role Badge */}
                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      className="text-4xl"
                      animate={{
                        scale: isCenter ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isCenter ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    >
                      {card.icon}
                    </motion.div>

                    <span className="px-3 py-1 rounded-full text-[9px] font-black tracking-[0.2em] uppercase border bg-black/40 backdrop-blur-md"
                      style={{
                        color: card.accent,
                        borderColor: `${card.accent}44`
                      }}
                    >
                      {card.role}
                    </span>
                  </div>

                  {/* Text group */}
                  <div className="flex flex-col gap-1">
                    <motion.h3
                      className="font-display text-lg font-black tracking-wider leading-tight"
                      animate={{
                        textShadow: isCenter ? `0 0 20px ${card.glow}` : "none"
                      }}
                    >
                      {card.event}
                    </motion.h3>

                    <p className="text-[10px] uppercase font-mono tracking-widest opacity-70" style={{ color: card.accent }}>
                      {card.org}
                    </p>
                  </div>

                  {/* Desc hint */}
                  <p className="text-[11px] leading-relaxed opacity-80 line-clamp-3">
                    {card.desc}
                  </p>

                  {/* View on LinkedIn hint */}
                  {card.link && (
                    <div className="flex items-center justify-center gap-2 text-[10px] font-bold opacity-60">
                      <span>VIEW ON LINKEDIN</span>
                      <span>↗</span>
                    </div>
                  )}
                </div>

                {/* Glow effect for center card */}
                {isCenter && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      boxShadow: `0 0 40px ${card.glow}, 0 0 80px ${card.glow}`
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 40px ${card.glow}, 0 0 80px ${card.glow}`,
                        `0 0 60px ${card.glow}, 0 0 120px ${card.glow}`,
                        `0 0 40px ${card.glow}, 0 0 80px ${card.glow}`
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
      <div className="flex gap-2 mt-12 relative z-10">
        {initialCards.map((_, index) => {
          // Find which actual card is currently in the center slot (index 2 in cards state)
          const isAtCenter = cards[2]?.id === initialCards[index]?.id;
          return (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full"
              style={{ background: isAtCenter ? 'white' : 'rgba(255,255,255,0.2)' }}
              animate={{
                scale: isAtCenter ? 1.5 : 1,
                opacity: isAtCenter ? 1 : 0.3
              }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </div>
    </motion.section>
  );
};

export default Event;
