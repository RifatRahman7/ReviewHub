import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-black via-green-800 to-black text-white dark:from-gray-900 dark:via-gray-900 dark:to-black dark:text-white">
      <div className="max-w-7xl roboto mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6 dark:text-white"
        >
          Why Choose ReviewHub?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto dark:text-gray-300"
        >
          At ReviewHub, we prioritize trust, transparency, and real feedback to help users and service providers grow together.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Verified Reviews",
              description: "All reviews are user-authenticated to ensure genuine experiences are shared.",
            },
            {
              title: "Transparent Ratings",
              description: "We maintain rating transparency with real-time updates and visible metrics.",
            },
            {
              title: "Growth Insights",
              description: "Service owners can view performance analytics and feedback trends to improve offerings.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-green-500 transition dark:bg-gray-900/70"
            >
              <h3 className="text-green-400 text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;