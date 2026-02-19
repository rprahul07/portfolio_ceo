import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Animated counter ──────────────────────────────────────────────────────────
const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 28);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ── 3-D tilt card wrapper ─────────────────────────────────────────────────────
const TiltCard = ({ children, className = "", style = {} }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "800px", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { value: 9, suffix: "+", label: "Events", color: "#a855f7" },
  { value: 3, suffix: "+", label: "Years", color: "#ec4899" },
  { value: 5, suffix: "+", label: "Roles", color: "#6366f1" },
];

const traits = [
  { label: "Strategic", pct: 92, color: "#a855f7" },
  { label: "Creative", pct: 88, color: "#ec4899" },
  { label: "Technical", pct: 78, color: "#6366f1" },
  { label: "Community", pct: 95, color: "#f59e0b" },
];

const cards = [
  {
    key: "experience",
    title: "EXPERIENCE",
    route: "/experience",
    icon: "💼",
    desc: "Multi-domain professional journey spanning Web3, EdTech, community building & event management.",
    accent: "#6366f1",
    bg: "linear-gradient(135deg, #1e1b4b 0%, #2d2b77 60%, #1e1b4b 100%)",
    glow: "rgba(99,102,241,0.35)",
    clickable: true,
  },
  {
    key: "leadership",
    title: "LEADERSHIP",
    icon: "👥",
    desc: "Led cross-functional teams, organised national-level events, mentored emerging builders.",
    accent: "#ec4899",
    bg: "linear-gradient(135deg, #1e1230 0%, #4a1040 60%, #1e1230 100%)",
    glow: "rgba(236,72,153,0.35)",
    clickable: false,
  },
  {
    key: "innovation",
    title: "INNOVATION",
    icon: "💡",
    desc: "Pioneered student-led Web3 & startup ecosystems, turning ideas into real-world impact.",
    accent: "#f59e0b",
    bg: "linear-gradient(135deg, #1c1510 0%, #3d2a0f 60%, #1c1510 100%)",
    glow: "rgba(245,158,11,0.35)",
    clickable: false,
  },
  {
    key: "excellence",
    title: "EXCELLENCE",
    icon: "⭐",
    desc: "Consistent recognition as Chief Guest, Judge & Host across premier tech & innovation events.",
    accent: "#10b981",
    bg: "linear-gradient(135deg, #0d1f17 0%, #0f3327 60%, #0d1f17 100%)",
    glow: "rgba(16,185,129,0.35)",
    clickable: false,
  },
];

// ── Main component ────────────────────────────────────────────────────────────
const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      id="achievements"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      style={{
        width: "100%",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 15% 40%, rgba(139,92,246,0.18), transparent 50%), radial-gradient(circle at 85% 60%, rgba(236,72,153,0.15), transparent 50%), linear-gradient(160deg, #0f0c29 0%, #1e1b4b 40%, #302b63 70%, #24243e 100%)",
      }}
    >
      {/* Floating geometric decorations */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360, opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 25 + i * 8, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            width: `${120 + i * 70}px`,
            height: `${120 + i * 70}px`,
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: i % 2 === 0 ? "30% 70% 60% 40%" : "50%",
            top: `${10 + i * 18}%`,
            left: i < 2 ? `${-2 + i * 5}%` : undefined,
            right: i >= 2 ? `${-2 + (i - 2) * 5}%` : undefined,
            pointerEvents: "none",
          }}
        />
      ))}

      <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Heading ── */}
        <div style={{ marginBottom: "64px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "5px 18px", borderRadius: "999px",
              background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)",
              marginBottom: "16px",
            }}
          >
            <span style={{ color: "#c084fc", fontSize: "11px", fontWeight: 800, letterSpacing: "0.22em", fontFamily: "monospace", textTransform: "uppercase" }}>
              ✦ What I Bring
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            style={{
              color: "#fff", fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              fontWeight: 900, letterSpacing: "0.16em", textTransform: "uppercase",
              margin: 0,
            }}
          >
            ACHIEVE
            <span style={{ background: "linear-gradient(90deg,#a855f7,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              MENTS
            </span>
          </motion.h2>
        </div>

        {/* ── BENTO GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridTemplateRows: "auto auto", gap: "16px" }}>

          {/* ━━ CARD 1: Entrepreneur — big hero card ━━ */}
          <TiltCard style={{ gridColumn: "span 2", gridRow: "span 2" }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              style={{
                height: "100%", minHeight: "420px",
                borderRadius: "24px", overflow: "hidden", position: "relative",
                background: "linear-gradient(145deg, #1a0533 0%, #3b0764 40%, #1a0533 100%)",
                border: "1px solid rgba(168,85,247,0.3)",
                boxShadow: "0 20px 60px rgba(139,92,246,0.25)",
                cursor: "pointer",
              }}
            >
              {/* Animated background mesh */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute", inset: "-40%",
                  background: "conic-gradient(from 0deg, transparent, rgba(168,85,247,0.08), transparent, rgba(236,72,153,0.06), transparent)",
                  borderRadius: "50%",
                }}
              />

              {/* Big number accent */}
              <div style={{
                position: "absolute", bottom: "-20px", right: "-10px",
                fontSize: "180px", fontWeight: 900, lineHeight: 1,
                color: "rgba(168,85,247,0.06)", fontFamily: "monospace",
                userSelect: "none", letterSpacing: "-0.05em",
              }}>01</div>

              <div style={{ position: "relative", zIndex: 2, padding: "40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {/* Top */}
                <div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "6px 14px", borderRadius: "999px",
                    background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)",
                    marginBottom: "28px",
                  }}>
                    <span style={{ fontSize: "14px" }}>🚀</span>
                    <span style={{ color: "#c084fc", fontSize: "10px", fontWeight: 900, letterSpacing: "0.2em", fontFamily: "monospace", textTransform: "uppercase" }}>ENTREPRENEUR</span>
                  </div>

                  <h3 style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, letterSpacing: "0.05em", lineHeight: 1.15, margin: "0 0 16px" }}>
                    Founder &<br />
                    <span style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      CEO
                    </span>{" "}
                    <span style={{ color: "rgba(255,255,255,0.85)" }}>of</span>
                  </h3>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <div style={{
                      padding: "8px 16px", borderRadius: "12px",
                      background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.35)",
                    }}>
                      <span style={{ color: "#e9d5ff", fontWeight: 800, fontSize: "18px", letterSpacing: "0.06em" }}>LENIENT TREE</span>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 12px #22c55e" }}
                    />
                    <span style={{ color: "#4ade80", fontSize: "11px", fontFamily: "monospace", fontWeight: 700 }}>ACTIVE</span>
                  </div>

                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.75, maxWidth: "380px" }}>
                    Student-led Web3 community bridging education & industry through events, innovation, and skill-building. Building the next wave of student entrepreneurs.
                  </p>
                </div>

                {/* Bottom stats */}
                <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                  {stats.map((s, i) => (
                    <div key={i}>
                      <div style={{ color: s.color, fontSize: "2rem", fontWeight: 900, lineHeight: 1 }}>
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2px" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <Link
                  to="/entrepreneur"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    padding: "12px 22px", borderRadius: "12px", textDecoration: "none",
                    background: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(236,72,153,0.15))",
                    border: "1px solid rgba(168,85,247,0.4)",
                    color: "#e9d5ff", fontWeight: 700, fontSize: "13px",
                    marginTop: "24px", width: "fit-content",
                    letterSpacing: "0.06em",
                  }}
                >
                  Explore Journey ↗
                </Link>
              </div>
            </motion.div>
          </TiltCard>

          {/* ━━ Skills / Traits card ━━ */}
          <TiltCard style={{ gridColumn: "span 2" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                borderRadius: "24px", padding: "32px",
                background: "linear-gradient(135deg, #0d1117 0%, #161b27 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 20px" }}>Core Strengths</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {traits.map((t, i) => (
                  <motion.div
                    key={t.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.05em" }}>{t.label}</span>
                      <span style={{ color: t.color, fontSize: "12px", fontFamily: "monospace", fontWeight: 700 }}>{t.pct}%</span>
                    </div>
                    <div style={{ height: "5px", borderRadius: "999px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${t.pct}%` : 0 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                        style={{ height: "100%", borderRadius: "999px", background: `linear-gradient(90deg, ${t.color}, ${t.color}99)` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TiltCard>

          {/* ━━ Bottom 4 cards ━━ */}
          {cards.map((card, i) => (
            <TiltCard key={card.key}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                onClick={() => card.clickable && card.route && (window.location.href = card.route)}
                style={{
                  borderRadius: "20px", padding: "28px 24px",
                  background: card.bg,
                  border: `1px solid ${card.accent}33`,
                  boxShadow: `0 12px 40px ${card.glow}`,
                  cursor: card.clickable ? "pointer" : "default",
                  position: "relative", overflow: "hidden",
                  height: "100%", minHeight: "180px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                }}
                whileHover={{
                  boxShadow: `0 20px 60px ${card.glow.replace("0.35", "0.55")}`,
                }}
              >
                {/* Big number watermark */}
                <div style={{
                  position: "absolute", bottom: "-12px", right: "10px",
                  fontSize: "90px", fontWeight: 900, lineHeight: 1, fontFamily: "monospace",
                  color: `${card.accent}0d`, userSelect: "none",
                }}>
                  0{i + 2}
                </div>

                {/* Glow blob */}
                <div style={{
                  position: "absolute", top: 0, right: "-20px",
                  width: "100px", height: "100px", borderRadius: "50%",
                  background: `radial-gradient(circle, ${card.accent}20, transparent 70%)`,
                  pointerEvents: "none",
                }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: "28px", marginBottom: "12px" }}>{card.icon}</div>
                  <h4 style={{
                    color: "#fff", fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
                    fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase",
                    margin: "0 0 10px",
                  }}>
                    {card.title}
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div style={{
                  height: "2px", borderRadius: "999px", marginTop: "16px",
                  background: `linear-gradient(90deg, ${card.accent}, ${card.accent}44, transparent)`,
                }} />

                {card.clickable && (
                  <div style={{ color: card.accent, fontSize: "18px", position: "absolute", bottom: "20px", right: "20px", opacity: 0.7 }}>↗</div>
                )}
              </motion.div>
            </TiltCard>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
