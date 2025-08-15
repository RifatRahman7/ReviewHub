import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Explore & Discover",
      description: "Browse a wide range of services reviewed by real users. Filter by rating, category, or location.",
    },
    {
      number: "2",
      title: "Share Your Experience",
      description: "Log in, post your honest review, and help others make smarter service choices.",
    },
    {
      number: "3",
      title: "Add & Manage Services",
      description: "Offer a service? Add your listing, monitor reviews, and grow your reputation on ReviewHub.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 roboto bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6 dark:text-white"
        >
          How ReviewHub Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-xl mb-12 max-w-2xl mx-auto dark:text-gray-300"
        >
          Getting started is simple. Whether you're discovering services or showcasing your own, ReviewHub makes it seamless.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-green-600 transition dark:bg-gray-900/70"
            >
              <div className="text-green-600 text-3xl font-bold mb-2 dark:text-green-400">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-700 text-sm dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;