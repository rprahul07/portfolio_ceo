import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["HOME", "ACHIEVEMENTS", "EVENT", "TESTIMONIALS", "MORE"];

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [contactHovered, setContactHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className={`fixed top-6 left-0 right-0 mx-auto z-50 w-[92%] max-w-[1200px] transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}
      >
        <motion.div
          className="relative flex items-center justify-center px-8 py-4 rounded-full border backdrop-blur-xl overflow-hidden gap-8"
          style={{ 
            backgroundColor: scrolled ? "hsl(260 20% 8% / 0.9)" : "hsl(260 20% 5% / 0.6)",
            borderColor: "rgba(139, 92, 246, 0.3)"
          }}
          whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background gradient */}
          <motion.div 
            className="absolute inset-0 opacity-0"
            style={{
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))"
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="relative font-display text-xl font-bold tracking-[0.25em] text-foreground transition-all duration-300 z-10"
            >
              <motion.span 
                className="text-primary inline-block"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
              >
                A
              </motion.span>
              <span className="text-white">UGUSTINE</span>
              {/* Logo glow effect */}
              <motion.div
                className="absolute -inset-2 bg-purple-500 rounded-full blur-xl opacity-0"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Center Menu */}
          <ul className="hidden md:flex items-center gap-8 relative z-10">
            {navItems.map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item === "HOME" ? (
                  <motion.a
                    href="#"
                    className="font-display text-sm font-medium tracking-[0.15em] relative px-2 py-1"
                    style={{
                      color:
                        hoveredItem === item
                          ? "hsl(270 20% 95%)"
                          : "hsl(270 20% 95% / 0.75)",
                    }}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    {/* Animated underline */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredItem === item ? "100%" : "0%" }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    />
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-0"
                      animate={{ opacity: hoveredItem === item ? 0.2 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ) : item === "EVENT" ? (
                  <motion.a
                    href="#event"
                    className="font-display text-sm font-medium tracking-[0.15em] relative px-2 py-1"
                    style={{
                      color:
                        hoveredItem === item
                          ? "hsl(270 20% 95%)"
                          : "hsl(270 20% 95% / 0.75)",
                    }}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    {/* Animated underline */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredItem === item ? "100%" : "0%" }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    />
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-0"
                      animate={{ opacity: hoveredItem === item ? 0.2 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ) : (
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="font-display text-sm font-medium tracking-[0.15em] relative px-2 py-1"
                    style={{
                      color:
                        hoveredItem === item
                          ? "hsl(270 20% 95%)"
                          : "hsl(270 20% 95% / 0.75)",
                    }}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    {/* Animated underline */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredItem === item ? "100%" : "0%" }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    />
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-0"
                      animate={{ opacity: hoveredItem === item ? 0.2 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Contact Button */}
          <motion.div className="relative z-10">
            <motion.a
              href="/#contact"
              className="font-display text-sm font-semibold tracking-[0.15em] px-6 py-2 rounded-full border relative overflow-hidden group"
              style={{
                borderColor: "rgba(139, 92, 246, 0.6)",
                backgroundColor: "transparent",
                color: "hsl(270 20% 95%)",
              }}
              onMouseEnter={() => setContactHovered(true)}
              onMouseLeave={() => setContactHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">CONTACT</span>
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-0"
                animate={{ opacity: contactHovered ? 0.4 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.button
            className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-center gap-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="w-full h-0.5 bg-white rounded-full"
              animate={{ 
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full"
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full"
              animate={{ 
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-0 right-0 mx-auto z-40 w-[92%] max-w-[1200px]"
          >
            <motion.div
              className="backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6"
              style={{ backgroundColor: "hsl(260 20% 8% / 0.95)" }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={
                        item === "HOME" ? "#" :
                        item === "EVENT" ? "#event" : 
                        `#${item.toLowerCase()}`
                      }
                      className="font-display text-sm font-medium tracking-[0.15em] text-white/90 hover:text-white transition-colors duration-300 block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/#contact"
                    className="font-display text-sm font-semibold tracking-[0.15em] text-white px-6 py-2 rounded-full border border-purple-500/60 inline-block mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CONTACT
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
