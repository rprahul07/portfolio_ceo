import { motion } from "framer-motion";
import { useState } from "react";

// ── Social links data ─────────────────────────────────────────────────────────

// SVG icons (reused across groups)
const LinkedInIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const XIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

// Personal accounts — Augustine Vadakumchery
const personalSocials = [
  {
    name: "LinkedIn",
    handle: "Augustine Vadakumchery",
    url: "https://www.linkedin.com/in/augustine-vadakumchery-0250872b7/",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.55)",
    hoverBg: "linear-gradient(135deg, #004182 0%, #0A66C2 100%)",
    icon: LinkedInIcon,
  },
  {
    name: "X (Twitter)",
    handle: "@Augustine_LT",
    url: "https://x.com/Augustine_LT",
    color: "#ffffff",
    glow: "rgba(255,255,255,0.25)",
    hoverBg: "linear-gradient(135deg, #111 0%, #2a2a2a 100%)",
    icon: XIcon,
  },
];

// Company accounts — Lenient Tree
const companySocials = [
  {
    name: "LinkedIn",
    handle: "Lenient Tree",
    url: "https://www.linkedin.com/company/lenient-tree/",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.55)",
    hoverBg: "linear-gradient(135deg, #004182 0%, #0A66C2 100%)",
    icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    handle: "@lenient_tree",
    url: "https://www.instagram.com/lenient_tree/",
    color: "#E1306C",
    glow: "rgba(225,48,108,0.55)",
    hoverBg: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
    icon: InstagramIcon,
  },
  {
    name: "X (Twitter)",
    handle: "@lenienttree",
    url: "https://x.com/lenienttree",
    color: "#ffffff",
    glow: "rgba(255,255,255,0.3)",
    hoverBg: "linear-gradient(135deg, #111 0%, #333 100%)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

// ── Social Card ───────────────────────────────────────────────────────────────
type SocialItem = (typeof personalSocials)[0];
const SocialCard = ({
  s,
  index,
}: {
  s: SocialItem;
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.12, type: "spring", stiffness: 100 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.04 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
        padding: "36px 28px",
        borderRadius: "24px",
        textDecoration: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        flex: "1 1 200px",
        minWidth: "180px",
        background: hovered ? s.hoverBg : "rgba(255,255,255,0.04)",
        border: hovered
          ? `1px solid ${s.color}88`
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered
          ? `0 0 0 1px ${s.color}44, 0 20px 60px ${s.glow}`
          : "0 4px 20px rgba(0,0,0,0.3)",
        transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Shimmer sweep on hover */}
      <motion.div
        animate={{ x: hovered ? ["−100%", "200%"] : "-100%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Icon ring */}
      <motion.div
        animate={{
          boxShadow: hovered ? `0 0 0 6px ${s.color}22, 0 0 24px ${s.glow}` : "none",
        }}
        transition={{ duration: 0.35 }}
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "18px",
          background: hovered ? `${s.color}22` : "rgba(255,255,255,0.06)",
          border: `1px solid ${s.color}44`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: hovered ? s.color : "rgba(255,255,255,0.7)",
          transition: "all 0.35s ease",
        }}
      >
        {s.icon}
      </motion.div>

      {/* Platform name */}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            color: hovered ? "#fff" : "rgba(255,255,255,0.8)",
            fontWeight: 800,
            fontSize: "16px",
            letterSpacing: "0.08em",
            margin: "0 0 4px",
            transition: "color 0.3s",
          }}
        >
          {s.name}
        </p>
        <p
          style={{
            color: hovered ? s.color : "rgba(255,255,255,0.35)",
            fontSize: "12px",
            fontFamily: "monospace",
            fontWeight: 600,
            letterSpacing: "0.06em",
            margin: 0,
            transition: "color 0.3s",
          }}
        >
          {s.handle}
        </p>
      </div>

      {/* Arrow */}
      <motion.div
        animate={{
          x: hovered ? 0 : -4,
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        style={{
          color: s.color,
          fontSize: "18px",
          fontWeight: 700,
        }}
      >
        ↗
      </motion.div>
    </motion.a>
  );
};

// ── Main Contact Section ──────────────────────────────────────────────────────
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(0,0,0,0.6), transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(0,0,0,0.6), transparent 60%),
          linear-gradient(135deg, #5b2ca0 0%, #7c3aed 50%, #6d28d9 100%)
        `,
      }}
    >
      {/* Light sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 60%, rgba(255,255,255,0.08) 75%, transparent 90%)",
        }}
      />

      {/* Heading */}
      <h1
        className="absolute top-16 left-16 z-20 text-white font-black tracking-[0.4em]"
        style={{ fontSize: "5.5rem" }}
      >
        CONTACT
      </h1>

      {/* Diamond Grid */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 opacity-60 pointer-events-auto">
        <div className="flex flex-col space-y-[-20px]">
          {/* Row 1 */}
          <div className="flex gap-12">
            <Diamond /><Diamond /><Diamond /><Diamond /><Diamond /><Diamond />
          </div>
          {/* Row 2 */}
          <div className="flex gap-12 ml-35">
            <Diamond /><Diamond /><Diamond /><Diamond /><Diamond />
          </div>
          {/* Row 3 */}
          <div className="flex gap-12">
            <Diamond /><Diamond /><Diamond /><Diamond /><Diamond /><Diamond />
          </div>
          {/* Row 4 */}
          <div className="flex gap-12">
            <Diamond /><Diamond /><Diamond /><Diamond /><Diamond />
          </div>
        </div>
      </div>

      {/* Bottom Image Diamonds */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-12">
        <ImageDiamond />
        <ImageDiamond />
        <ImageDiamond />
        <ImageDiamond />
      </div>

      {/* ── Social Links overlay at bottom ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30"
        style={{
          padding: "0 32px 48px",
          background:
            "linear-gradient(to top, rgba(45,18,120,0.98) 0%, rgba(45,18,120,0.85) 60%, transparent 100%)",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: "32px" }}
        >
          {/* Glowing line */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), rgba(168,85,247,0.6), rgba(255,255,255,0.25), transparent)",
              marginBottom: "28px",
            }}
          />
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "5px 20px",
              borderRadius: "999px",
              background: "rgba(168,85,247,0.15)",
              border: "1px solid rgba(168,85,247,0.3)",
            }}
          >
            <span
              style={{
                color: "#c084fc",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.22em",
                fontFamily: "monospace",
                textTransform: "uppercase",
              }}
            >
              ✦ Connect
            </span>
          </div>
        </motion.div>

        {/* ── Personal accounts ── */}
        <div style={{ maxWidth: "900px", margin: "0 auto 28px" }}>
          <p style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "10px",
            fontFamily: "monospace",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "12px",
            paddingLeft: "4px",
          }}>
            — Augustine Vadakumchery
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            {personalSocials.map((s, i) => (
              <SocialCard key={`personal-${s.name}`} s={s} index={i} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          maxWidth: "900px",
          margin: "0 auto 24px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }} />

        {/* ── Company accounts ── */}
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "10px",
            fontFamily: "monospace",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "12px",
            paddingLeft: "4px",
          }}>
            — Lenient Tree
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            {companySocials.map((s, i) => (
              <SocialCard key={`company-${s.name}`} s={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Supporting components ─────────────────────────────────────────────────────
const Diamond = () => (
  <div
    className="w-36 h-36 rounded-2xl rotate-45 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer"
    style={{
      background: "linear-gradient(145deg, #8b5cf6, #6d28d9)",
      boxShadow: "inset 0 12px 25px rgba(0,0,0,0.25)",
    }}
  />
);

const ImageDiamond = () => (
  <div
    className="w-24 h-24 rotate-45 overflow-hidden rounded-xl"
    style={{
      backgroundImage: "url('/your-image.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
);

export default ContactSection;
