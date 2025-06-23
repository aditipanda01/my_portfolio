export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">© 2025 Aditi Panda. All rights reserved.</div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/aditi-panda-6987552ab/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">LinkedIn</a>
          <a href="https://github.com/aditipanda01" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}