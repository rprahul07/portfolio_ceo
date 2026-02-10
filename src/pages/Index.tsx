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
