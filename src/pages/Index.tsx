import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import Achievements from "@/components/Achievements";
import EventDignitaries from "@/components/EventDignitaries";
import EventSection from "@/components/EventSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import selfPic from "@/assets/self pic.png";

const Index = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <HeroVideo />

        {/* Navbar */}
        <Navbar />

        {/* Neon border accent — top edge */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-10" />

        {/* Neon border accent — bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />

        {/* ── Hero content: left text + right photo ── */}
        <div
          className="absolute inset-0 z-10 flex items-center"
          style={{ padding: "0 6vw" }}
        >
          {/* ── LEFT: Text ── */}
          <div className="flex-1 flex flex-col justify-center pr-8">
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 16px",
                borderRadius: "999px",
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.4)",
                marginBottom: "24px",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#a855f7",
                  boxShadow: "0 0 8px #a855f7",
                }}
              />
              <span
                style={{
                  color: "#c084fc",
                  fontSize: "11px",
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                Founder & CEO — Lenient Tree
              </span>
            </motion.div>

            {/* WELCOME */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-display font-bold tracking-wider"
              style={{
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                lineHeight: 1.05,
                marginBottom: "8px",
              }}
            >
              <span className="text-white">W</span>
              <span className="text-purple-400">E</span>
              <span className="text-white">L</span>
              <span className="text-purple-400">C</span>
              <span className="text-white">O</span>
              <span className="text-purple-400">M</span>
              <span className="text-white">E</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="font-display font-bold tracking-wider text-white"
              style={{ fontSize: "clamp(1.8rem, 4vw, 4rem)", lineHeight: 1.1, marginBottom: "20px" }}
            >
              TO ALL
            </motion.h2>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-display font-light tracking-widest"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.6rem)", marginBottom: "40px" }}
            >
              <span className="text-purple-300">A</span>
              <span className="text-white">UGUSTINE </span>
              <span className="text-purple-300">V</span>
              <span className="text-white">ADAKUMCHERY</span>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                height: "2px",
                width: "160px",
                background: "linear-gradient(90deg, #a855f7, #ec4899, transparent)",
                borderRadius: "999px",
                marginBottom: "28px",
                transformOrigin: "left",
              }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "clamp(0.85rem, 1.4vw, 1.05rem)",
                fontFamily: "monospace",
                letterSpacing: "0.06em",
                lineHeight: 1.7,
                maxWidth: "420px",
              }}
            >
              Entrepreneur · Event Organiser · Community builder
              <br />
              bridging innovation & leadership
            </motion.p>
          </div>

          {/* ── RIGHT: Photo with creative frame ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, type: "spring", stiffness: 80 }}
            style={{
              position: "relative",
              flexShrink: 0,
              width: "clamp(260px, 32vw, 480px)",
              height: "clamp(340px, 42vw, 620px)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "-18px",
                borderRadius: "38% 62% 55% 45% / 48% 40% 60% 52%",
                border: "1.5px solid rgba(168,85,247,0.35)",
                pointerEvents: "none",
              }}
            />

            {/* Inner counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "-6px",
                borderRadius: "55% 45% 38% 62% / 52% 60% 40% 48%",
                border: "1px solid rgba(236,72,153,0.25)",
                pointerEvents: "none",
              }}
            />

            {/* Glow blob behind photo */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "55%",
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(139,92,246,0.45) 0%, rgba(236,72,153,0.2) 50%, transparent 75%)",
                filter: "blur(32px)",
                pointerEvents: "none",
              }}
            />

            {/* Neon floor glow line */}
            <motion.div
              animate={{ scaleX: [0.7, 1, 0.7], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "-8px",
                left: "10%",
                right: "10%",
                height: "3px",
                borderRadius: "999px",
                background: "linear-gradient(90deg, transparent, #a855f7, #ec4899, #a855f7, transparent)",
                filter: "blur(4px)",
              }}
            />

            {/* Corner decoration — top right */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "48px",
                height: "48px",
                borderTop: "2px solid rgba(168,85,247,0.7)",
                borderRight: "2px solid rgba(168,85,247,0.7)",
                borderRadius: "0 8px 0 0",
              }}
            />
            {/* Corner decoration — bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "12px",
                width: "48px",
                height: "48px",
                borderBottom: "2px solid rgba(236,72,153,0.7)",
                borderLeft: "2px solid rgba(236,72,153,0.7)",
                borderRadius: "0 0 0 8px",
              }}
            />

            {/* Floating particles around photo */}
            {[
              { top: "10%", left: "-8%", size: 6, color: "#a855f7", delay: 0 },
              { top: "30%", right: "-10%", size: 4, color: "#ec4899", delay: 1.2 },
              { top: "65%", left: "-6%", size: 5, color: "#6366f1", delay: 0.6 },
              { top: "80%", right: "-8%", size: 4, color: "#a855f7", delay: 1.8 },
            ].map((p, i) => (
              <motion.div
                key={i}
                animate={{ y: [-8, 8, -8], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: p.top,
                  left: (p as any).left,
                  right: (p as any).right,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  borderRadius: "50%",
                  background: p.color,
                  boxShadow: `0 0 10px ${p.color}`,
                }}
              />
            ))}

            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
              style={{
                position: "absolute",
                top: "18px",
                left: "-20px",
                padding: "8px 14px",
                borderRadius: "12px",
                background: "rgba(15,12,41,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(168,85,247,0.4)",
                boxShadow: "0 8px 24px rgba(139,92,246,0.25)",
                zIndex: 5,
              }}
            >
              <p style={{ margin: 0, color: "#c084fc", fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", fontWeight: 800 }}>CEO</p>
              <p style={{ margin: 0, color: "#fff", fontSize: "13px", fontWeight: 700 }}>Lenient Tree</p>
            </motion.div>

            {/* The photo itself */}
            <img
              src={selfPic}
              alt="Augustine Vadakumchery"
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "bottom center",
                filter: "drop-shadow(0 20px 60px rgba(139,92,246,0.4)) drop-shadow(0 0 1px rgba(168,85,247,0.2))",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <Achievements />

      {/* ================= EVENT DIGNITARIES GALLERY ================= */}
      <EventDignitaries />

      {/* ================= EVENTS ================= */}
      <EventSection />

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialSection />

      {/* ================= CONTACT ================= */}
      <ContactSection />
    </div>
  );
};

export default Index;
