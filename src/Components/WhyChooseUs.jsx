const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-black via-green-800 to-black text-white">
      <div className="max-w-7xl roboto mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Why Choose ReviewHub?</h2>
        <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
          At ReviewHub, we prioritize trust, transparency, and real feedback to help users and service providers grow together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-green-500 transition">
            <h3 className="text-green-400 text-xl font-semibold mb-2">Verified Reviews</h3>
            <p className="text-gray-300 text-sm">
              All reviews are user-authenticated to ensure genuine experiences are shared.
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-green-500 transition">
            <h3 className="text-green-400 text-xl font-semibold mb-2">Transparent Ratings</h3>
            <p className="text-gray-300 text-sm">
              We maintain rating transparency with real-time updates and visible metrics.
            </p>
          </div>
          <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-green-500 transition">
            <h3 className="text-green-400 text-xl font-semibold mb-2">Growth Insights</h3>
            <p className="text-gray-300 text-sm">
              Service owners can view performance analytics and feedback trends to improve offerings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
