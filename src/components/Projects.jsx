import ecommerceImg from '../assets/job.avif';
import hospitalImg from '../assets/hospital.jpg';

import clockImg from '../assets/clock.jpg';

const projects = [
  {
    title: 'Job Recommendation System',
    image: ecommerceImg,
    github: 'https://github.com/aditipanda01/Job-Recommendation-System.git',
    demo: 'https://job-recommendation-system-agmrgakjt24ymw3xs54s5l.streamlit.app/',
  },
  {
    title: 'Sketch To Style',
    image: hospitalImg,
    github: 'https://github.com/aditipanda01/Style.git',
    demo: 'https://style-ten-ecru.vercel.app/',
  },
  {
    title: 'ProMinder',
    image: clockImg,
    github: 'https://github.com/aditipanda01/Cloksy.git',
    demo: 'https://cloksy-ochre.vercel.app/',
  },
];

const Projects = () => (
  <section id="projects" className="py-14 sm:py-20 px-4 bg-white">
    <div className="text-center mb-12">
      <p className="text-gray-600">Browse My Recent</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Projects</h2>
    </div>
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-white border border-gray-300 rounded-3xl p-5 sm:p-8 w-full max-w-sm flex flex-col items-center shadow-md">
          <img src={project.image} alt={project.title} className="rounded-2xl mb-6 w-full h-48 sm:h-64 object-cover" />
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 break-words">{project.title}</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-auto">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="border border-gray-400 rounded-full px-5 sm:px-6 py-2 text-base sm:text-lg font-medium hover:bg-gray-100 transition whitespace-nowrap">Github</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="border border-gray-400 rounded-full px-5 sm:px-6 py-2 text-base sm:text-lg font-medium hover:bg-gray-100 transition whitespace-nowrap">Live Demo</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 