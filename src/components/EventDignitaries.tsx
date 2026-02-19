import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

import photo1 from "@/assets/event-dignitaries/photo_1_2026-02-14_23-27-32.jpg";
import photo2 from "@/assets/event-dignitaries/photo_2_2026-02-14_23-27-32.jpg";
import photo3 from "@/assets/event-dignitaries/photo_3_2026-02-14_23-27-32.jpg";
import photo4 from "@/assets/event-dignitaries/photo_4_2026-02-14_23-27-32.jpg";
import photo5 from "@/assets/event-dignitaries/photo_5_2026-02-14_23-27-32.jpg";
import photo6 from "@/assets/event-dignitaries/photo_6_2026-02-14_23-27-32.jpg";
import photo7 from "@/assets/event-dignitaries/photo_7_2026-02-14_23-27-32.jpg";

// ── Event data ────────────────────────────────────────────────────────────────
const events = [
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
        span: "wide-tall", // 2 cols × 2 rows — hero card
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
        span: "normal",
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
        span: "normal",
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
        span: "normal",
    },
    {
        id: 5,
        img: photo2,
        role: "COMMUNITY PARTNER",
        event: "Tech For Good Hackathon",
        org: "DeepTech Conference × iQue",
        desc: "Community Partner for the Tech For Good Hackathon at DeepTech Conference, Bangalore — themed Public Good with ₹1,00,000 prize.",
        link: "https://www.linkedin.com/posts/augustine-vadakumchery-0250872b7_%F0%9D%90%93%F0%9D%90%9E%F0%9D%90%9C%F0%9D%90%A1-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%86%F0%9D%90%8E%F0%9D%90%8E%F0%9D%90%83-%F0%9D%90%87%F0%9D%90%9A%F0%9D%90%9C%F0%9D%90%A4%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%A8-activity-7402822011158470656-SR2u",
        color: "#6366f1",
        accent: "#818cf8",
        glow: "rgba(99,102,241,0.45)",
        icon: "🤝",
        span: "wide", // 2 cols
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
        span: "normal",
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
        span: "normal",
    },
    {
        id: 8,
        img: null, // no photo — gradient card
        role: "ONLINE PANELIST",
        event: "E-Cell Amrita",
        org: "Lenient Tree × E-Cell VV Chennai",
        desc: "Featured as an online panelist for E-Cell Amrita's entrepreneurship session — representing Lenient Tree on student entrepreneurship.",
        link: "https://www.linkedin.com/posts/ecellavvchennai_ecellamrita-lenienttree-studententrepreneurship-ugcPost-7355837354596618242-mHMD",
        color: "#ec4899",
        accent: "#f472b6",
        glow: "rgba(236,72,153,0.45)",
        icon: "💻",
        span: "normal",
        gradient: "linear-gradient(135deg, #831843 0%, #9d174d 40%, #be185d 70%, #db2777 100%)",
    },
    {
        id: 9,
        img: null, // no photo — gradient card
        role: "JUDGING PANEL",
        event: "PRAVEGA 2025",
        org: "Business Pitching",
        desc: "Served on the judging panel for PRAVEGA 2025 Business Pitching — evaluating startup pitches and entrepreneurial ventures.",
        link: "https://www.linkedin.com/posts/augustine-vadakumchery-0250872b7_pravega-businesspitching-judgingpanel-activity-7425175532889255936-7Lw7",
        color: "#f97316",
        accent: "#fb923c",
        glow: "rgba(249,115,22,0.45)",
        icon: "⚖️",
        span: "normal",
        gradient: "linear-gradient(135deg, #7c2d12 0%, #9a3412 40%, #c2410c 70%, #ea580c 100%)",
    },
];

// ── Types ─────────────────────────────────────────────────────────────────────
type EventItem = (typeof events)[0];

// ── Lightbox ──────────────────────────────────────────────────────────────────
const Lightbox = ({
    item,
    onClose,
}: {
    item: EventItem;
    onClose: () => void;
}) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
        }}
    >
        <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            style={{
                display: "flex",
                gap: "0",
                borderRadius: "24px",
                overflow: "hidden",
                maxWidth: "900px",
                width: "100%",
                maxHeight: "90vh",
                boxShadow: `0 0 0 1px rgba(255,255,255,0.1), 0 40px 120px ${item.glow}`,
            }}
        >
            {/* ── Left: poster image ── */}
            <div
                style={{
                    flex: item.img ? "0 0 55%" : "0 0 0%",
                    display: item.img ? "block" : "none",
                    position: "relative",
                    overflow: "hidden",
                    maxHeight: "90vh",
                }}
            >
                {item.img && (
                    <img
                        src={item.img}
                        alt={item.event}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                )}
                {/* gradient overlay on photo */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to right, transparent 60%, rgba(15,12,41,0.9) 100%)",
                    }}
                />
            </div>

            {/* ── Right: details panel ── */}
            <div
                style={{
                    flex: 1,
                    background:
                        "linear-gradient(160deg, #0f0c29 0%, #1e1b4b 50%, #24243e 100%)",
                    padding: "40px 36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "24px",
                    overflowY: "auto",
                }}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    style={{
                        alignSelf: "flex-end",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#fff",
                        borderRadius: "50%",
                        width: "36px",
                        height: "36px",
                        cursor: "pointer",
                        fontSize: "18px",
                        lineHeight: "1",
                        flexShrink: 0,
                    }}
                >
                    ✕
                </button>

                <div style={{ flex: 1 }}>
                    {/* Role pill */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "6px 16px",
                            borderRadius: "999px",
                            background: `${item.color}22`,
                            border: `1px solid ${item.accent}55`,
                            marginBottom: "20px",
                        }}
                    >
                        <span style={{ fontSize: "16px" }}>{item.icon}</span>
                        <span
                            style={{
                                color: item.accent,
                                fontSize: "11px",
                                fontWeight: 900,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                            }}
                        >
                            {item.role}
                        </span>
                    </div>

                    {/* Event name */}
                    <h3
                        style={{
                            color: "#fff",
                            fontSize: "clamp(1.4rem, 3vw, 2rem)",
                            fontWeight: 900,
                            letterSpacing: "0.05em",
                            margin: "0 0 8px",
                            lineHeight: 1.2,
                        }}
                    >
                        {item.event}
                    </h3>

                    {/* Org */}
                    <p
                        style={{
                            color: item.accent,
                            fontSize: "14px",
                            fontWeight: 600,
                            fontFamily: "monospace",
                            margin: "0 0 24px",
                            letterSpacing: "0.08em",
                        }}
                    >
                        {item.org}
                    </p>

                    {/* Divider */}
                    <div
                        style={{
                            height: "1px",
                            background: `linear-gradient(90deg, ${item.color}, transparent)`,
                            marginBottom: "24px",
                        }}
                    />

                    {/* Description */}
                    <p
                        style={{
                            color: "rgba(255,255,255,0.75)",
                            fontSize: "15px",
                            lineHeight: 1.7,
                            margin: 0,
                        }}
                    >
                        {item.desc}
                    </p>
                </div>

                {/* LinkedIn link */}
                {item.link && (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "14px 20px",
                            borderRadius: "12px",
                            background: `linear-gradient(135deg, ${item.color}33, ${item.accent}22)`,
                            border: `1px solid ${item.accent}44`,
                            color: "#fff",
                            textDecoration: "none",
                            fontWeight: 700,
                            fontSize: "14px",
                            letterSpacing: "0.04em",
                            transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${item.color}55, ${item.accent}33)`;
                            (e.currentTarget as HTMLElement).style.borderColor = `${item.accent}88`;
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${item.color}33, ${item.accent}22)`;
                            (e.currentTarget as HTMLElement).style.borderColor = `${item.accent}44`;
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill={item.accent}>
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        View Post on LinkedIn
                        <span style={{ marginLeft: "auto", opacity: 0.6 }}>↗</span>
                    </a>
                )}
            </div>
        </motion.div>
    </motion.div>
);

// ── Individual Card ───────────────────────────────────────────────────────────
const EventCard = ({
    item,
    index,
    isInView,
    onClick,
}: {
    item: EventItem;
    index: number;
    isInView: boolean;
    onClick: () => void;
}) => {
    const [hovered, setHovered] = useState(false);
    const isWideTall = item.span === "wide-tall";
    const isWide = item.span === "wide";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.94 }
            }
            transition={{ duration: 0.55, delay: index * 0.08, type: "spring", stiffness: 100 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onClick={onClick}
            style={{
                gridColumn: isWideTall || isWide ? "span 2" : "span 1",
                gridRow: isWideTall ? "span 2" : "span 1",
                position: "relative",
                borderRadius: "18px",
                overflow: "hidden",
                cursor: "pointer",
                minHeight: isWideTall ? "500px" : "240px",
                boxShadow: hovered
                    ? `0 0 0 2px ${item.accent}, 0 24px 64px ${item.glow}`
                    : "0 8px 32px rgba(0,0,0,0.45)",
                transition: "box-shadow 0.4s ease",
            }}
        >
            {/* Background — photo or gradient */}
            {item.img ? (
                <motion.img
                    src={item.img}
                    alt={`${item.role} — ${item.event}`}
                    animate={{ scale: hovered ? 1.1 : 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        position: "absolute",
                        inset: 0,
                    }}
                />
            ) : (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: item.gradient,
                    }}
                />
            )}

            {/* Dark overlay */}
            <motion.div
                animate={{ opacity: hovered ? 0.85 : 0.6 }}
                transition={{ duration: 0.35 }}
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
                }}
            />

            {/* Glowing top border */}
            <motion.div
                animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, transparent, ${item.color}, ${item.accent}, ${item.color}, transparent)`,
                    transformOrigin: "center",
                }}
            />

            {/* Role + icon badge — top left */}
            <div
                style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${item.accent}55`,
                }}
            >
                <span style={{ fontSize: "12px" }}>{item.icon}</span>
                <span
                    style={{
                        color: item.accent,
                        fontSize: "9px",
                        fontWeight: 900,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                    }}
                >
                    {item.role}
                </span>
            </div>

            {/* LinkedIn badge — top right, visible on hover */}
            {item.link && (
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
                    transition={{ duration: 0.25 }}
                    style={{
                        position: "absolute",
                        top: "14px",
                        right: "14px",
                        width: "34px",
                        height: "34px",
                        borderRadius: "10px",
                        background: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={item.accent}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </motion.div>
            )}

            {/* Bottom info */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px 18px 16px",
                }}
            >
                {/* Org */}
                <motion.p
                    animate={{ opacity: hovered ? 0.85 : 0.55, y: hovered ? 0 : 3 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        color: item.accent,
                        fontSize: "11px",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        margin: "0 0 4px",
                    }}
                >
                    {item.org}
                </motion.p>

                {/* Event name */}
                <p
                    style={{
                        color: "#fff",
                        fontSize: isWideTall ? "20px" : "15px",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        margin: "0 0 10px",
                        textShadow: "0 2px 10px rgba(0,0,0,0.7)",
                        lineHeight: 1.2,
                    }}
                >
                    {item.event}
                </p>

                {/* Animated expand hint */}
                <motion.div
                    animate={{
                        opacity: hovered ? 1 : 0,
                        y: hovered ? 0 : 6,
                    }}
                    transition={{ duration: 0.28 }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "12px",
                        fontFamily: "monospace",
                    }}
                >
                    <span
                        style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            border: "1px solid rgba(255,255,255,0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "10px",
                        }}
                    >
                        ↗
                    </span>
                    Click to view details
                </motion.div>
            </div>

            {/* Gradient sweep on hover */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at 50% 100%, ${item.color}18 0%, transparent 70%)`,
                    pointerEvents: "none",
                }}
            />
        </motion.div>
    );
};

// ── Main Section ──────────────────────────────────────────────────────────────
const EventDignitaries = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.05 });
    const [active, setActive] = useState<EventItem | null>(null);

    return (
        <>
            {/* ── Lightbox ── */}
            <AnimatePresence>
                {active && (
                    <Lightbox item={active} onClose={() => setActive(null)} />
                )}
            </AnimatePresence>

            <motion.section
                ref={ref}
                id="event-dignitaries"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    width: "100%",
                    padding: "100px 32px",
                    position: "relative",
                    overflow: "hidden",
                    background:
                        "radial-gradient(ellipse at 90% 0%, rgba(139,92,246,0.2), transparent 55%), radial-gradient(ellipse at 5% 90%, rgba(236,72,153,0.18), transparent 55%), linear-gradient(170deg, #0a0814 0%, #1e1b4b 35%, #302b63 65%, #1a1040 100%)",
                }}
            >
                {/* Decorative rings */}
                {[260, 420, 580].map((size, i) => (
                    <motion.div
                        key={i}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 35 + i * 12, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: "absolute",
                            width: `${size}px`,
                            height: `${size}px`,
                            border: "1px solid rgba(139,92,246,0.07)",
                            borderRadius: "50%",
                            top: i === 0 ? "-80px" : i === 1 ? "30%" : "60%",
                            right: i === 0 ? "-80px" : i === 1 ? "-120px" : "5%",
                            pointerEvents: "none",
                        }}
                    />
                ))}

                <div
                    style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}
                >
                    {/* ── Heading ── */}
                    <div style={{ textAlign: "center", marginBottom: "72px" }}>
                        <motion.div
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -16 }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            style={{
                                display: "inline-block",
                                padding: "5px 18px",
                                borderRadius: "999px",
                                background: "rgba(139,92,246,0.12)",
                                border: "1px solid rgba(139,92,246,0.3)",
                                marginBottom: "18px",
                            }}
                        >
                            <span
                                style={{
                                    color: "#c084fc",
                                    fontSize: "11px",
                                    fontWeight: 800,
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    fontFamily: "monospace",
                                }}
                            >
                                ✦ Roles & Recognitions
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -24 }}
                            transition={{ duration: 0.65, delay: 0.18 }}
                            style={{
                                color: "#fff",
                                fontSize: "clamp(2rem, 5vw, 4rem)",
                                fontWeight: 900,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                margin: "0 0 14px",
                            }}
                        >
                            As A{" "}
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #f97316 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Dignitary
                            </span>
                        </motion.h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isInView ? 1 : 0 }}
                            transition={{ duration: 0.9, delay: 0.35 }}
                            style={{
                                height: "3px",
                                width: "100px",
                                margin: "0 auto 16px",
                                background: "linear-gradient(90deg, #a855f7, #ec4899)",
                                borderRadius: "999px",
                            }}
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 0.55 : 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            style={{ color: "#fff", fontSize: "15px", margin: 0 }}
                        >
                            Guest · Host · Organiser · Panelist — click any card to explore
                        </motion.p>
                    </div>

                    {/* ── Bento Grid ── */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gridAutoRows: "250px",
                            gap: "14px",
                        }}
                    >
                        {events.map((item, i) => (
                            <EventCard
                                key={item.id}
                                item={item}
                                index={i}
                                isInView={isInView}
                                onClick={() => setActive(item)}
                            />
                        ))}
                    </div>

                    {/* ── Stats bar ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 24 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "48px",
                            flexWrap: "wrap",
                            marginTop: "64px",
                            padding: "32px 40px",
                            borderRadius: "20px",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.07)",
                        }}
                    >
                        {[
                            { num: "9+", label: "Events", color: "#a855f7" },
                            { num: "4", label: "Roles", color: "#ec4899" },
                            { num: "∞", label: "Impact", color: "#f97316" },
                        ].map((s, i) => (
                            <div key={i} style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        fontSize: "clamp(2rem, 5vw, 3rem)",
                                        fontWeight: 900,
                                        color: s.color,
                                        lineHeight: 1,
                                    }}
                                >
                                    {s.num}
                                </div>
                                <div
                                    style={{
                                        color: "rgba(255,255,255,0.45)",
                                        fontSize: "12px",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        fontFamily: "monospace",
                                        marginTop: "6px",
                                    }}
                                >
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default EventDignitaries;
