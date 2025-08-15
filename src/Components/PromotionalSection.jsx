import { motion } from 'framer-motion';
import { Link } from 'react-router';

const PromotionalSection = () => {
  const features = [
    {
      title: 'Boost Trust & Visibility',
      description: 'Showcase verified reviews and stand out to customers looking for reliable services.',
    },
    {
      title: 'Smart Analytics',
      description: 'Track ratings, feedback trends, and performance to grow faster with real insights.',
    },
    {
      title: 'Verified Community',
      description: 'A genuine community where real users share honest experiences and recommendations.',
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 roboto dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-4"
          >
            Grow Faster with ReviewHub
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg mb-8 dark:text-gray-300"
          >
            Turn authentic reviews into your competitive edge. Build credibility, reach more customers, and improve continuously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              to="/services"
              className="inline-block bg-white border hover:text-white border-green-600 hover:border-green-400 hover:bg-green-500 transition rounded-full px-6 py-3 text-green-700 font-semibold backdrop-blur-sm dark:bg-gray-900/70 dark:border-green-700 dark:text-white"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-green-600 transition dark:bg-gray-900/70"
            >
              <h3 className="text-green-600 text-xl font-semibold mb-2 dark:text-green-400">{f.title}</h3>
              <p className="text-gray-700 text-sm dark:text-gray-300">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;