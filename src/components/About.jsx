// About.jsx
import aboutImage from '../assets/jpmc.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
          <div className="md:w-1/3">
            <img src={aboutImage} alt="Aditi Panda" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-2/3 space-y-4">
            <p className="text-xl italic text-gray-600 text-center md:text-left">"Code is how I bring imagination to life and purpose to reality."</p>
            <p className="text-gray-700">
              Hi, I'm Aditi Panda — a passionate Full Stack Developer and Machine Learning enthusiast who loves building purposeful digital experiences. I find joy in creativity, problem-solving, and continuous learning.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔥 Driven by Creativity & Passion</h3>
            <p className="text-gray-700">
              I've always been excited by creative things. My curiosity and love for learning push me to give my best to every new project. Whether it's writing clean code or crafting user interfaces, I enjoy bringing my vision to life in ways that serve a meaningful purpose.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">💻 Hackathons & Life-Changing Moments</h3>
            <p className="text-gray-700">
              One of the most exciting parts of my journey has been participating in hackathons. My recent favorite experience was a 24-hour live hackathon at J.P. Morgan Chase, Mumbai, which was truly life-changing. It showed me how real-world impact begins with a single line of code.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🎤 From Introvert to Speaker</h3>
            <p className="text-gray-700">
              I'm also passionate about speaking and representation. The journey from being an introvert to confidently expressing myself in front of an audience has been incredible. I love sharing ideas, leading conversations, and using my voice to inspire — all while continuing to solve problems with my full stack skills and growing ML knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}