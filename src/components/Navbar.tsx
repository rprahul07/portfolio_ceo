import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = ["ACHIEVEMENTS", "EVENT", "TESTIMONIALS", "MORE"];

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [contactHovered, setContactHovered] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1200px]">
      <div
        className="relative flex items-center justify-between px-8 py-4 rounded-full border border-glass-border backdrop-blur-xl neon-glow animate-pulse-glow"
        style={{ backgroundColor: "hsl(260 20% 5% / 0.6)" }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-[0.25em] text-foreground transition-all duration-300"
        >
          <span className="text-primary">A</span>UGUSTINE
        </Link>

        {/* Center Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              {item === "EVENT" ? (
                <a
                  href="#event"
                  className="font-display text-sm font-medium tracking-[0.15em] transition-all duration-300 relative"
                  style={{
                    color:
                      hoveredItem === item
                        ? "hsl(270 20% 95%)"
                        : "hsl(270 20% 95% / 0.75)",
                    textShadow:
                      hoveredItem === item
                        ? "0 0 10px hsl(263 70% 66% / 0.6), 0 0 30px hsl(263 70% 66% / 0.3)"
                        : "none",
                  }}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300"
                    style={{
                      width: hoveredItem === item ? "100%" : "0%",
                    }}
                  />
                </a>
              ) : (
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-display text-sm font-medium tracking-[0.15em] transition-all duration-300 relative"
                  style={{
                    color:
                      hoveredItem === item
                        ? "hsl(270 20% 95%)"
                        : "hsl(270 20% 95% / 0.75)",
                    textShadow:
                      hoveredItem === item
                        ? "0 0 10px hsl(263 70% 66% / 0.6), 0 0 30px hsl(263 70% 66% / 0.3)"
                        : "none",
                  }}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300"
                    style={{
                      width: hoveredItem === item ? "100%" : "0%",
                    }}
                  />
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="/#contact"
          className="font-display text-sm font-semibold tracking-[0.15em] px-6 py-2 rounded-full border transition-all duration-300"
          style={{
            borderColor: contactHovered
              ? "hsl(263 70% 66%)"
              : "hsl(263 70% 66% / 0.5)",
            backgroundColor: "transparent",
            color: "hsl(270 20% 95%)",
            textShadow: contactHovered
              ? "0 0 15px hsl(263 70% 66% / 0.8), 0 0 40px hsl(263 70% 66% / 0.4)"
              : "none",
            boxShadow: contactHovered
              ? "0 0 8px hsl(263 70% 66% / 0.5), 0 0 25px hsl(263 70% 66% / 0.25), 0 0 50px hsl(263 70% 66% / 0.1), inset 0 0 8px hsl(263 70% 66% / 0.1)"
              : "0 0 5px hsl(263 70% 66% / 0.3), 0 0 15px hsl(263 70% 66% / 0.15)",
          }}
          onMouseEnter={() => setContactHovered(true)}
          onMouseLeave={() => setContactHovered(false)}
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
