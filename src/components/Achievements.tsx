import { Link } from "react-router-dom";

const Achievements = () => {
  return (
   <section
  id="achievements"
  className="w-full py-24 px-6 flex justify-center"
  style={{
    background: `
      radial-gradient(
        circle at top left,
        rgba(0, 0, 0, 0.85),
        transparent 55%
      ),
      radial-gradient(
        circle at bottom right,
        rgba(0, 0, 0, 0.85),
        transparent 55%
      ),
      linear-gradient(
        135deg,
        #4b1f7a 0%,
        #6a2fcf 45%,
        #8b5cf6 100%
      )
    `,
  }}
>

      <div className="max-w-6xl w-full">
        {/* Title */}
        <h2
          className="font-display font-bold text-white mb-16"
          style={{
            fontSize: "64px",
            letterSpacing: "0.18em",
          }}
        >
          ACHIEVEMENTS
        </h2>

        {/* Cards */}
        <div className="flex gap-6 items-stretch">
          {[
            { text: "ENTREPRENEUR", clickable: true },
            { text: "EXPERIENCE", clickable: true },
            { text: "NAME", clickable: false },
            { text: "NAME", clickable: false },
            { text: "NAME", clickable: false },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex-1 rounded-2xl flex items-center justify-center ${
                item.clickable ? 'cursor-pointer hover:bg-gray-800 transition-colors' : ''
              }`}
              style={{
                background: "#000000",
                paddingTop: "72px",
                paddingBottom: "72px",
              }}
              onClick={() => {
                if (item.clickable) {
                  if (item.text === "ENTREPRENEUR") {
                    window.location.href = "/entrepreneur";
                  } else if (item.text === "EXPERIENCE") {
                    window.location.href = "/experience";
                  }
                }
              }}
            >
              <span
                className="font-display uppercase"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "40px",
                  letterSpacing: "0.22em",
                  color: item.clickable ? "#ffffff" : "#cfcfcf",
                  lineHeight: "1",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
