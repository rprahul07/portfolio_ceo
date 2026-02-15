import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects from concept to deployment.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed responsive websites and interactive user interfaces for various clients.",
      technologies: ["JavaScript", "HTML/CSS", "React", "SASS"]
    },
    {
      title: "Junior Developer",
      company: "Web Solutions Inc",
      period: "2017 - 2018",
      description: "Assisted in development and maintenance of web applications.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
    }
  ];

  return (
    <section
      className="min-h-screen w-full px-4 sm:px-6 py-12 sm:py-24 flex justify-center"
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
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1
            className="font-display font-bold text-white mb-4"
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)", // Responsive from 32px to 64px
              letterSpacing: "0.18em",
            }}
          >
            EXPERIENCE
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            My professional journey through software development and technology innovation
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Line - Hidden on mobile */}
              {index < experiences.length - 1 && (
                <div
                  className="hidden sm:block absolute left-8 top-24 w-0.5 h-full"
                  style={{
                    background: "linear-gradient(to bottom, #8b5cf6, transparent)",
                  }}
                />
              )}

              <div className="flex gap-4 sm:gap-8">
                {/* Timeline Dot */}
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #6a2fcf, #8b5cf6)",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                  }}
                >
                  <span className="text-white font-bold text-sm sm:text-lg">
                    {index + 1}
                  </span>
                </div>

                {/* Experience Card */}
                <div
                  className="flex-1 bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-500 border-opacity-20"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 text-base sm:text-lg font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(139, 92, 246, 0.2)",
                          color: "#a78bfa",
                          border: "1px solid rgba(139, 92, 246, 0.3)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            to="/#achievements"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            style={{
              background: "linear-gradient(135deg, #6a2fcf, #8b5cf6)",
              color: "white",
              boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
            }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Achievements
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePage;
