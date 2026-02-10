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
        className="absolute top-8 left-8 z-20 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors"
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
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Side - N Icons */}
          <div className="flex md:flex-col gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                style={{
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                }}
              >
                <span
                  className="text-white font-bold text-2xl"
                  style={{
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  N
                </span>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Title */}
            <h1
              className="text-white font-black mb-6"
              style={{
                fontSize: "4rem",
                letterSpacing: "0.1em",
                textShadow: "0 4px 20px rgba(139, 92, 246, 0.4)"
              }}
            >
              EVENTS COLLABED
            </h1>

            {/* Stats and Circle Pattern */}
            <div className="flex items-center gap-8 mb-12">
              {/* 50+ Text */}
              <div
                className="text-white font-black"
                style={{
                  fontSize: "6rem",
                  letterSpacing: "0.05em",
                  textShadow: "0 4px 20px rgba(139, 92, 246, 0.4)"
                }}
              >
                50+
              </div>

              {/* Circle Pattern */}
              <div className="relative" style={{ width: "200px", height: "200px" }}>
                {/* Center circle */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-purple-300"
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
                    className="absolute w-6 h-6 rounded-full border-2"
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
                    className="absolute w-4 h-4 rounded-full border"
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
              className="text-white/70 max-w-2xl"
              style={{
                fontSize: "1.1rem",
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
