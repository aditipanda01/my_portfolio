export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-16 bg-white relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-900">Contact Me</h2>
        <div className="flex flex-col items-center gap-8 mt-12">
          <a href="mailto:pandaaditi37@gmail.com" className="flex items-center gap-4 text-lg text-gray-700 hover:text-yellow-600 transition" style={{textDecoration: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>
            <span>pandaaditi37@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/aditi-panda-6987552ab/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg text-gray-700 hover:text-yellow-600 transition" style={{textDecoration: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/></svg>
            <span>aditi-panda-6987552ab</span>
          </a>
        </div>
      </div>
    </section>
  );
}