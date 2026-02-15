import { Link } from "react-router-dom";

const EventsCollabedPage = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #4b1f7a 0%, #6a2fcf 45%, #8b5cf6 100%)
          `,
        }}
      />

      {/* Back Button */}
      <Link
        to="/entrepreneur"
        className="absolute top-4 sm:top-8 left-4 sm:left-8 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors"
        style={{
          boxShadow: "0 4px 20px rgba(139, 92, 246, 0.4)"
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </Link>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-8">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Side - Event Dignitaries */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-6 order-2 lg:order-1">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl overflow-hidden flex-shrink-0"
                style={{
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                }}
              >
                <img 
                  src={`/event-dignitaries/photo_${item}_2026-02-14_23-27-32.jpg`}
                  alt={`Event Dignitary ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
            {/* Title */}
            <h1
              className="text-white font-black mb-6"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4rem)", // Responsive from 40px to 64px
                letterSpacing: "0.1em",
                textShadow: "0 4px 20px rgba(139, 92, 246, 0.4)"
              }}
            >
              EVENTS COLLABED
            </h1>

            {/* Stats and Circle Pattern */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 mb-8 lg:mb-12">
              {/* 50+ Text */}
              <div
                className="text-white font-black"
                style={{
                  fontSize: "clamp(3rem, 10vw, 6rem)", // Responsive from 48px to 96px
                  letterSpacing: "0.05em",
                  textShadow: "0 4px 20px rgba(139, 92, 246, 0.4)"
                }}
              >
                50+
              </div>

              {/* Circle Pattern - Hidden on small screens */}
              <div className="hidden sm:block relative" style={{ width: "150px", height: "150px" }}>
                {/* Center circle */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-purple-300"
                  style={{
                    borderColor: "rgba(196, 181, 253, 0.6)"
                  }}
                />
                
                {/* Surrounding circles */}
                {[
                  { top: "10%", left: "50%" },
                  { top: "25%", left: "85%" },
                  { top: "50%", left: "90%" },
                  { top: "75%", left: "85%" },
                  { top: "90%", left: "50%" },
                  { top: "75%", left: "15%" },
                  { top: "50%", left: "10%" },
                  { top: "25%", left: "15%" },
                ].map((position, index) => (
                  <div
                    key={index}
                    className="absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2"
                    style={{
                      ...position,
                      transform: "translate(-50%, -50%)",
                      borderColor: "rgba(196, 181, 253, 0.6)"
                    }}
                  />
                ))}
                
                {/* Additional decorative circles */}
                {[
                  { top: "15%", left: "75%" },
                  { top: "35%", left: "95%" },
                  { top: "65%", left: "95%" },
                  { top: "85%", left: "75%" },
                  { top: "85%", left: "25%" },
                  { top: "65%", left: "5%" },
                  { top: "35%", left: "5%" },
                  { top: "15%", left: "25%" },
                ].map((position, index) => (
                  <div
                    key={`decorative-${index}`}
                    className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full border"
                    style={{
                      ...position,
                      transform: "translate(-50%, -50%)",
                      borderColor: "rgba(196, 181, 253, 0.4)"
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Additional Content */}
            <p
              className="text-white/70 max-w-2xl mx-auto lg:mx-0"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.1rem)", // Responsive from 16px to 18px
                lineHeight: "1.8"
              }}
            >
              Collaborative events bringing together innovative minds, 
              fostering connections, and creating opportunities for growth 
              in the Web3 and startup ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCollabedPage;
