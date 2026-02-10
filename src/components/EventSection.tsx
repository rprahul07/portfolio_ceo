import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const initialCards = [
  { id: 1, label: "NAME" },
  { id: 2, label: "NAME" },
  { id: 3, label: "NAME" },
  { id: 4, label: "NAME" },
  { id: 5, label: "NAME" },
];

const slots = [
  { x: -440, scale: 0.85, opacity: 0.3, z: 0 },
  { x: -220, scale: 0.95, opacity: 0.6, z: 1 },
  { x: 0,    scale: 1.05, opacity: 1,   z: 3 }, // front
  { x: 220,  scale: 0.95, opacity: 0.6, z: 1 },
  { x: 440,  scale: 0.85, opacity: 0.3, z: 0 },
];

const Event = () => {
  const [cards, setCards] = useState(initialCards);
  const [blurCardId, setBlurCardId] = useState(null);

  useEffect(() => {
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
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="event"
      className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(0,0,0,0.85), transparent 55%),
          radial-gradient(circle at bottom right, rgba(0,0,0,0.85), transparent 55%),
          linear-gradient(135deg, #4b1f7a 0%, #6a2fcf 45%, #8b5cf6 100%)
        `,
      }}
    >
      <h1
        className="font-display text-white mb-28"
        style={{ fontSize: "56px", letterSpacing: "0.18em" }}
      >
        EVENT DIGNITARY
      </h1>

      <div className="relative w-[1000px] h-[320px] flex items-center justify-center">
        {cards.map((card, index) => {
          const slot = slots[index];
          const isBlurred = blurCardId === card.id;
          const isComingToFront = index === 2 && blurCardId !== null; // Front position and another card is blurred

          return (
            <motion.div
              key={card.id}
              layout
              animate={{
                x: slot.x,
                scale: slot.scale,
                opacity: slot.opacity,

                // 🎯 Smooth keyframed blur - middle card never blurred
                filter: isBlurred && index !== 2
                  ? ["blur(0px)", "blur(24px)", "blur(18px)"]
                  : "blur(0px)",
              }}
              transition={{
                x: { duration: 1, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 1, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 1, ease: [0.4, 0, 0.2, 1] },

                // ✨ smooth blur timing - middle card never blurred
                filter: {
                  duration: isBlurred && index !== 2 ? 0.8 : 0.15,
                  ease: "easeInOut",
                },
              }}
              onAnimationComplete={() => {
                if (blurCardId === card.id) {
                  setBlurCardId(null);
                }
              }}
              className="absolute w-48 h-72 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center"
              style={{ zIndex: slot.z }}
            >
              <span className="font-display text-3xl tracking-[0.2em] text-white/80">
                {card.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Event;
