const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-black flex-shrink-0"
    fill="black"
    viewBox="0 0 24 24"
    stroke="white"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    />
  </svg>
);

const skillGroups = [
  {
    title: "Programming & Scripting",
    items: ["C", "C++", "Python", "SQL"],
  },
  {
    title: "Frontend Technologies",
    items: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    title: "Backend Technologies",
    items: ["Node.js", "Express.js", "MongoDB", "API Integration"],
  },
  {
    title: "Data & ML",
    items: ["MySQL", "Pandas", "NumPy", "TensorFlow", "Scikit-learn"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Streamlit"],
  },
  {
    title: "Systems & Networking",
    items: ["Windows", "Basic networking"],
  },
  {
    title: "Soft Skills",
    items: [
      "Clear communication",
      "Task ownership",
      "Collaboration in team-based projects",
    ],
  },
];

const SkillGroup = ({ title, items }) => (
  <div className="border border-gray-300 rounded-3xl p-5 sm:p-6 lg:p-8 h-full">
    <h3 className="text-lg sm:text-xl font-semibold mb-5 text-center sm:text-left">
      {title}
    </h3>
    <ul className="list-none p-0 m-0 flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5">
            <CheckmarkIcon />
          </span>
          <span className="text-sm sm:text-base text-gray-700 break-words min-w-0">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section id="skills" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-gray-600">Explore My</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Skills</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
