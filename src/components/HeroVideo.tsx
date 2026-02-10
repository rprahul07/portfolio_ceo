const HeroVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Video element - portrait video displayed as landscape fullscreen */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover scale-[1.15]"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Subtle blur layer */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Grain/noise texture */}
      <div className="absolute inset-0 grain-overlay" />
    </div>
  );
};

export default HeroVideo;
