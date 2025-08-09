import { motion } from 'framer-motion';

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
    <section className="w-full py-12 px-4 bg-gradient-to-br from-green-800 via-black to-green-800 text-white roboto backdrop-blur-md dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6 dark:text-white"
        >
          Meet Our Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto dark:text-gray-300"
        >
          Our trusted partners help us keep ReviewHub secure, reliable, and accurate for all users.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-green-600 transition duration-300 dark:bg-gray-900/70"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-40 w-40 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-400">{partner.name}</h3>
              <p className="text-gray-300 text-sm dark:text-gray-300">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;