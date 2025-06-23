export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-16 bg-gray-50 relative">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">What I Offer</h2>
        <p className="text-gray-600 text-lg">
          I provide a range of design services to help your brand and product shine.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">UI/UX Design</h3>
            <p className="text-gray-700">Wireframing, prototyping, and user testing to create seamless user journeys.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">Graphic Design</h3>
            <p className="text-gray-700">Logos, social media creatives, marketing materials and more.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-yellow-500 mb-2">Photo Retouch</h3>
            <p className="text-gray-700">Professional editing and retouching services for portraits and products.</p>
          </div>
        </div>
      </div>
    </section>
  );
}