const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-black"
    fill="black"
    viewBox="0 0 24 24"
    stroke="white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    />
  </svg>
);

const Skill = ({ name, level }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1">
      <CheckmarkIcon />
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-bold">{name}</h4>
      <p className="text-gray-500">{level}</p>
    </div>
  </div>
);

const softwareSkills = [
  { name: 'HTML and CSS', level: 'Experienced' },
  { name: 'JavaScript', level: 'Experienced' },
  { name: 'ReactJS', level: 'Experienced' },
  { name: 'Tailwind CSS and Vite', level: 'Experienced' },
  { name: 'React Native, Flutter', level: 'Intermediate' },
];

const backendSkills = [
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'ExpressJS', level: 'Intermediate' },
    { name: 'API Integration', level: 'Intermediate' },
    { name: 'Flask, Streamlit', level: 'Intermediate' },
    { name: 'Python', level: 'Experienced' },
    { name: 'C, C++', level: 'Experienced' },
    { name: 'SQL', level: 'Experienced' },
    { name: 'DSA and CP', level: 'Intermediate' },
];

const mlSkills = [
  { name: 'Python', level: 'Experienced' },
  { name: 'Scikit-Learn', level: 'Intermediate' },
  { name: 'OpenCV and TensorFlow', level: 'Intermediate' },
  { name: 'Deep Learning and NLP', level: 'Intermediate' },
  { name: 'Computer Vision', level: 'Intermediate' },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="text-center">
        <p className="text-gray-600">Explore My</p>
        <h2 className="text-5xl font-bold mb-12">Experience</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="border border-gray-300 rounded-3xl p-8 w-full lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-center mb-8">Software Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {softwareSkills.map((skill) => (
              <Skill key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        <div className="border border-gray-300 rounded-3xl p-8 w-full lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-center mb-8">Backend & Programming</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {backendSkills.map((skill) => (
              <Skill key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        <div className="border border-gray-300 rounded-3xl p-8 w-full lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-center mb-8">Machine Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {mlSkills.map((skill) => (
              <Skill key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 