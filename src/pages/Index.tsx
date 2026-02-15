import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import Achievements from "@/components/Achievements";
import EventSection from "@/components/EventSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";

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

        {/* Welcome Text */}
        <div className="absolute left-0 top-0 h-full w-full flex flex-col justify-center items-center z-10 px-4">
          <div className="text-center">
            <h1 className="font-display text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
              <span className="text-white">W</span>
              <span className="text-purple-400">E</span>
              <span className="text-white">L</span>
              <span className="text-purple-400">C</span>
              <span className="text-white">O</span>
              <span className="text-purple-400">M</span>
              <span className="text-white">E</span>
            </h1>
            <h2 className="font-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2">
              TO ALL
            </h2>
            <div className="font-display text-white text-lg sm:text-xl md:text-2xl font-light tracking-widest opacity-80 mt-6">
              <span className="text-purple-300">A</span>UGUSTINE 
              <span className="text-purple-300"> V</span>ADAKUMCHERY
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <Achievements />

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
