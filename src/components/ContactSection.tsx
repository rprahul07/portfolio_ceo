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
        `
      }}
    >

      {/* Light sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 60%, rgba(255,255,255,0.08) 75%, transparent 90%)"
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


    {/* Row 1 - 6 diamonds */}
   <div className="flex gap-12">
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
    </div>

    {/* Row 2 - 5 diamonds (staggered) */}
    <div className="flex gap-12 ml-35">
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
    </div>

    {/* Row 3 - 6 diamonds */}
    <div className="flex gap-12">
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
    </div>

    {/* Row 4 - 5 diamonds (staggered) */}
    <div className="flex gap-12">
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
      <Diamond />
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

    </section>
  );
};

const Diamond = () => (
  <div
    className="w-36 h-36 rounded-2xl rotate-45 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer"
    style={{
      background: "linear-gradient(145deg, #8b5cf6, #6d28d9)",
      boxShadow: "inset 0 12px 25px rgba(0,0,0,0.25)"
    }}
  />
);

const ImageDiamond = () => (
  <div
    className="w-24 h-24 rotate-45 overflow-hidden rounded-xl"
    style={{
      backgroundImage: "url('/your-image.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  />
);

export default ContactSection;
