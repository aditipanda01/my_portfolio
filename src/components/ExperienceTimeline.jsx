// Scroll-driven version — locomotive moves automatically as user scrolls
import { useState, useEffect, useRef } from "react";

const experiences = [
  {
    id: 0,
    tag: "Research",
    tagColors: "bg-blue-50 text-blue-700 border border-blue-200",
    title: "Research Intern — GPGPUs",
    org: "IIT Bhubaneswar",
    supervisor: "Under Dr. Devashree Tripathy",
    period: "Winter 2024",
    bullets: [
      "Explored parallel computing concepts and GPU architectures.",
      "Worked on performance benchmarking and optimization of GPGPU workloads.",
    ],
    chips: ["CUDA", "Parallel Computing", "GPU Architecture"],
  },
  {
    id: 1,
    tag: "Industry",
    tagColors: "bg-green-50 text-green-700 border border-green-200",
    title: "Summer Intern — Web Development",
    org: "Tata Steel Limited, Kalinganagar",
    supervisor: "TATA PRASHIKSHAN Internship Program",
    period: "Summer 2025",
    bullets: [
      "Improved internal web applications by enhancing UI components and implementing feature updates.",
      "Used frontend and full-stack technologies to increase usability and performance.",
    ],
    chips: ["React", "Full Stack", "UI/UX", "Web Apps"],
  },
  {
    id: 2,
    tag: "Research · AI",
    tagColors: "bg-purple-50 text-purple-700 border border-purple-200",
    title: "Research Intern — Multimodal XAI",
    org: "IIT (ISM) Dhanbad",
    supervisor: "Under Dr. A. C. S. Rao",
    period: "Winter 2025",
    bullets: [
      "Developed a multimodal XAI pipeline integrating clinical and ECG-derived features, improving diagnostic interpretability by 30%+ on 1000+ samples.",
      "Evaluated explanation robustness using Insertion–Deletion Curves, Shadow Plots, and Infidelity metrics, ensuring reliable model predictions under noise.",
    ],
    chips: ["Python", "XAI", "ECG Analysis", "Deep Learning", "NLP"],
  },
];

export default function ExperienceTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [dotPositions, setDotPositions] = useState([]);
  const [trackHeight, setTrackHeight] = useState(0);
  const cardRefs = useRef([]);
  const trackRef = useRef(null);

  useEffect(() => {
    const calculatePositions = () => {
      if (!trackRef.current) return;
      const trackRect = trackRef.current.getBoundingClientRect();
      const positions = cardRefs.current.map((ref) => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        return rect.top - trackRect.top + 22;
      });
      setDotPositions(positions);
      setTrackHeight(trackRef.current.offsetHeight);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  const activeDotY = dotPositions[activeIdx] ?? 0;
  const railFillPct =
    trackHeight > 0
      ? Math.min(((activeDotY + 20) / trackHeight) * 100, 95)
      : 0;
  const locoY = activeDotY - 14;

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
            Explore My
          </p>
          <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
        </div>

        {/* Track + Cards */}
        <div className="relative pl-16" ref={trackRef}>
          {/* Vertical Rail */}
          <div className="absolute left-7 top-0 bottom-0 w-1 rounded-full bg-gray-100">
            {/* Amber fill */}
            <div
              className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 transition-all duration-700 ease-in-out"
              style={{ height: `${railFillPct}%` }}
            />

            {/* Rail sleepers */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute -left-1.5 w-4 h-px bg-gray-200"
                style={{ top: `${i * 32 + 12}px` }}
              />
            ))}
          </div>

          {/* Locomotive emoji */}
          <div
            className="absolute left-4 z-10 text-xl select-none transition-all duration-700 ease-in-out"
            style={{ top: `${locoY}px` }}
          >
            🚂
          </div>

          {/* Experience Cards */}
          {experiences.map((exp, i) => (
            <div key={exp.id} className="relative mb-10">
              {/* Station dot */}
              {dotPositions[i] !== undefined && (
                <div
                  className="absolute z-20 transition-all duration-500"
                  style={{
                    left: "-2.15rem",
                    top: "1.35rem",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                      i <= activeIdx
                        ? "border-yellow-500 bg-yellow-100 scale-100 shadow-sm shadow-yellow-200"
                        : "border-gray-300 bg-white scale-75 opacity-50"
                    }`}
                  />
                </div>
              )}

              {/* Card */}
              <div
                ref={(el) => (cardRefs.current[i] = el)}
                onClick={() => setActiveIdx(i)}
                className={`relative cursor-pointer rounded-2xl border p-6 transition-all duration-500 ${
                  i === activeIdx
                    ? "border-gray-200 shadow-md bg-white opacity-100 translate-x-0"
                    : "border-gray-100 bg-gray-50 opacity-50 translate-x-1"
                }`}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-yellow-400 transition-opacity duration-500 ${
                    i === activeIdx ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Tag + Period row */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${exp.tagColors}`}
                  >
                    {exp.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {exp.title}
                </h3>

                {/* Org + Supervisor */}
                <p className="text-sm text-gray-600 mb-0.5">{exp.org}</p>
                <p className="text-xs text-gray-400 mb-4">{exp.supervisor}</p>

                {/* Divider */}
                <hr className="border-gray-100 mb-4" />

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 items-start">
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                  {exp.chips.map((chip) => (
                    <span
                      key={chip}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}