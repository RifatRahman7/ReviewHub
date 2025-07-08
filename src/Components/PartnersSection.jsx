const partners = [
  {
    name: "ServiceScout",
    logo: "https://i.ibb.co/4wGBCcSY/Service-Scout.png",
    description: "Helps us verify service listings and ensures authentic provider profiles.",
  },
  {
    name: "TrustWave",
    logo: "https://i.ibb.co/v45j0mMR/trustwave.png",
    description: "Provides security auditing for safe data interactions within ReviewHub.",
  },
  {
    name: "CloudConnect",
    logo: "https://i.ibb.co/ZPVNF2G/cloud-connect.jpg",
    description: "Supports our real-time data sync and uptime monitoring infrastructure.",
  },
];

const PartnersSection = () => {
  return (
    <section className="w-full py-12 px-4 bg-gradient-to-br from-green-800 via-black to-green-800 text-white roboto backdrop-blur-md">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Meet Our Partners</h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Our trusted partners help us keep ReviewHub secure, reliable, and accurate for all users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-green-600 transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-40 w-40 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">{partner.name}</h3>
              <p className="text-gray-300 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
