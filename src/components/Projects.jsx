import ecommerceImg from '../assets/ecommerce.avif';
import hospitalImg from '../assets/hospital.jpg';
import medicalPagerImg from '../assets/medical-pager.webp';

const projects = [
  {
    title: 'Ecommerce Website (Myntra Clone)',
    image: ecommerceImg,
    github: 'https://github.com/aditipanda01/Myntra-ecommerce.git',
    demo: 'http://127.0.0.1:5501/',
  },
  {
    title: 'Hospital Management & Appointment Scheduling',
    image: hospitalImg,
    github: 'https://github.com/aditipanda01/Hospital-management-and-appointments.git',
    demo: 'http://localhost:8501/',
  },
  {
    title: 'Medical Pager',
    image: medicalPagerImg,
    github: 'https://github.com/aditipanda01/Realtime-chat-messaging-App.git',
    demo: 'http://localhost:3000/',
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