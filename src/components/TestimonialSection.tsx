import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

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
      "The networking opportunities at this conference were unmatched. Met so many brilliant minds!",
    time: "6:30PM · Jul 22, 2024",
    event: "ConnectCon 2024",
  },
  {
    name: "LISA WANG",
    handle: "@LisaWang",
    review:
      "Fantastic panel discussion on the future of tech. Left feeling seriously inspired!",
    time: "3:15PM · Aug 10, 2024",
    event: "FutureTech Forum",
  },
];

// Unique tilt angle per card
const TILT_ANGLES = [-8, 5, -4, 7, -6, 3];

const SECTION_HEIGHT = testimonials.length * 100 + 100; // vh

// ─── Single animated card driven by scroll progress ───────────────────────────
interface CardProps {
  testimonial: (typeof testimonials)[0];
  index: number;
  scrollProgress: number; // 0..1 over the whole section
}

const Card = ({ testimonial, index, scrollProgress }: CardProps) => {
  const total = testimonials.length;

  // This card becomes "active" across its own slice of the scroll range
  const cardStart = index / total;
  const cardLand = cardStart + 0.12;

  // Y: 280 → 0 as the card flies in and lands
  const raw = (scrollProgress - cardStart) / (cardLand - cardStart);
  const clamped = Math.min(1, Math.max(0, raw));
  const eased = 1 - Math.pow(1 - clamped, 3); // ease-out cubic
  const y = (1 - eased) * 260;
  const opacity = Math.min(1, clamped * 3);

  const tilt = TILT_ANGLES[index % TILT_ANGLES.length];

  // Slight positional spread so you can see cards beneath
  const spreadX = (index - total / 2) * 7;
  const spreadY = (index - total / 2) * -5;

  return (
    <div
      style={{
        position: "absolute",
        width: "300px",
        height: "380px",
        top: "50%",
        left: "50%",
        marginLeft: "-150px",
        marginTop: "-190px",
        transform: `translate(${spreadX}px, calc(${spreadY}px + ${y}px)) rotate(${tilt}deg)`,
        opacity,
        zIndex: index + 1,
        transition: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #f0eeff 0%, #e4e0fa 50%, #d9d3f7 100%)",
          boxShadow: `0 ${10 + index * 4}px ${30 + index * 8}px rgba(88,28,220,0.25), 0 2px 8px rgba(0,0,0,0.15)`,
          border: "1.5px solid rgba(139,92,246,0.25)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            borderRadius: "16px 16px 0 0",
            background: "linear-gradient(90deg, #a855f7, #ec4899, #6366f1)",
          }}
        />

        {/* Content */}
        <div
          style={{
            padding: "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #db2777)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 900,
              fontSize: "22px",
              marginTop: "8px",
              flexShrink: 0,
            }}
          >
            {testimonial.name[0]}
          </div>

          {/* Name */}
          <div
            style={{
              fontFamily: "monospace",
              color: "#4c1d95",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontWeight: 900,
            }}
          >
            {testimonial.name}
          </div>

          {/* Handle */}
          <div
            style={{
              fontFamily: "monospace",
              color: "#7c3aed",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {testimonial.handle}
          </div>

          {/* Review */}
          <div
            style={{
              fontFamily: "monospace",
              color: "#1f2937",
              fontSize: "13px",
              fontWeight: 700,
              lineHeight: 1.5,
              padding: "0 4px",
            }}
          >
            "{testimonial.review}"
          </div>

          {/* Event badge + time */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "999px",
                background: "linear-gradient(90deg, rgba(139,92,246,0.15), rgba(236,72,153,0.15))",
                color: "#7c3aed",
                border: "1px solid rgba(139,92,246,0.3)",
              }}
            >
              {testimonial.event}
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "#9ca3af",
                fontFamily: "monospace",
              }}
            >
              {testimonial.time}
            </span>
          </div>
        </div>

        {/* Card number stamp */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "14px",
            fontFamily: "monospace",
            fontSize: "11px",
            fontWeight: 900,
            opacity: 0.18,
            color: "#7c3aed",
          }}
        >
          #{String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const TestimonialSection = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = outerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalHeight = el.offsetHeight - window.innerHeight;

      // How far we've scrolled into this section (0..1)
      const progress = Math.min(1, Math.max(0, -rect.top / totalHeight));
      setScrollProgress(progress);

      // Show fixed overlay while section is in viewport
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      setIsFixed(inView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionHeightVh = testimonials.length * 100 + 100;

  return (
    <>
      {/* ── Tall scroll-anchor block ────────────────────────────────────── */}
      <div
        ref={outerRef}
        id="testimonials"
        style={{
          height: `${sectionHeightVh}vh`,
          position: "relative",
          background:
            "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.3), transparent 50%), radial-gradient(circle at 70% 80%, rgba(236,72,153,0.3), transparent 50%), linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
        }}
      />

      {/* ── Fixed full-screen overlay (shown while section is active) ───── */}
      <AnimatePresence>
        {isFixed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.35), transparent 50%), radial-gradient(circle at 70% 80%, rgba(236,72,153,0.35), transparent 50%), linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
              overflow: "hidden",
            }}
          >
            {/* Floating particles */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#c084fc",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 160 - 80],
                    y: [0, Math.random() * 160 - 80],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                  }}
                />
              ))}
            </div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                color: "#fff",
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 900,
                letterSpacing: "0.4em",
                marginBottom: "12px",
                textAlign: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              TESTIMONIALS
            </motion.h2>

            {/* Scroll hint */}
            <p
              style={{
                color: "#c084fc",
                fontSize: "13px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                marginBottom: "40px",
                position: "relative",
                zIndex: 2,
              }}
            >
              scroll to reveal ↓
            </p>

            {/* Card stack */}
            <div
              style={{
                position: "relative",
                width: "320px",
                height: "420px",
              }}
            >
              {testimonials.map((t, i) => (
                <Card
                  key={i}
                  testimonial={t}
                  index={i}
                  scrollProgress={scrollProgress}
                />
              ))}
            </div>

            {/* Progress dots */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "32px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {testimonials.map((_, i) => {
                const cardProgress =
                  Math.min(1, Math.max(0, (scrollProgress - i / testimonials.length) / 0.12));
                return (
                  <div
                    key={i}
                    style={{
                      width: cardProgress > 0.5 ? "28px" : "8px",
                      height: "8px",
                      borderRadius: "999px",
                      background:
                        cardProgress > 0.5
                          ? "linear-gradient(90deg,#a855f7,#ec4899)"
                          : "rgba(255,255,255,0.25)",
                      transition: "width 0.3s ease, background 0.3s ease",
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TestimonialSection;