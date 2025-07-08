const HowItWorks = () => {
  return (
    <section className="w-full py-16 px-4 roboto bg-gradient-to-br from-green-800 via-black to-green-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">How ReviewHub Works</h2>
        <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
          Getting started is simple. Whether you're discovering services or showcasing your own, ReviewHub makes it seamless.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-green-600 transition">
            <div className="text-green-400 text-3xl font-bold mb-2">1</div>
            <h3 className="text-xl font-semibold mb-2">Explore & Discover</h3>
            <p className="text-gray-300 text-sm">
              Browse a wide range of services reviewed by real users. Filter by rating, category, or location.
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-green-600 transition">
            <div className="text-green-400 text-3xl font-bold mb-2">2</div>
            <h3 className="text-xl font-semibold mb-2">Share Your Experience</h3>
            <p className="text-gray-300 text-sm">
              Log in, post your honest review, and help others make smarter service choices.
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-green-600 transition">
            <div className="text-green-400 text-3xl font-bold mb-2">3</div>
            <h3 className="text-xl font-semibold mb-2">Add & Manage Services</h3>
            <p className="text-gray-300 text-sm">
              Offer a service? Add your listing, monitor reviews, and grow your reputation on ReviewHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
