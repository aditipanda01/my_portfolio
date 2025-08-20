import ecommerceImg from '../assets/ecommerce.avif';
import hospitalImg from '../assets/hospital.jpg';
import aiimg from '../assets/ats.avif';

const projects = [
  {
    title: 'Ecommerce Website (Myntra Clone)',
    image: ecommerceImg,
    github: 'https://github.com/aditipanda01/Myntra-ecommerce.git',
    demo: 'https://aditipanda01.github.io/Myntra/',
  },
  {
    title: 'Sketch To Style',
    image: hospitalImg,
    github: 'https://github.com/aditipanda01/runway.git',
    demo: 'https://runway-beryl.vercel.app/',
  },
  {
    title: 'AI Resume Analyzer',
    image: aiimg,
    github: 'https://github.com/aditipanda01/ai-resume-analyzer.git',
    demo: 'https://ai-resume-analyzer-pi-liard.vercel.app/',
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-white">
    <div className="text-center mb-12">
      <p className="text-gray-600">Browse My Recent</p>
      <h2 className="text-5xl font-bold">Projects</h2>
    </div>
    <div className="flex flex-wrap justify-center gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-white border border-gray-300 rounded-3xl p-8 w-full max-w-sm flex flex-col items-center shadow-md">
          <img src={project.image} alt={project.title} className="rounded-2xl mb-6 w-full h-64 object-cover" />
          <h3 className="text-2xl font-bold text-center mb-4">{project.title}</h3>
          <div className="flex gap-4 mt-auto">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="border border-gray-400 rounded-full px-6 py-2 text-lg font-medium hover:bg-gray-100 transition">Github</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="border border-gray-400 rounded-full px-6 py-2 text-lg font-medium hover:bg-gray-100 transition">Live Demo</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 