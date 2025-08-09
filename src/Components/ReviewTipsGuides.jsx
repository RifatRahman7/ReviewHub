import { motion } from 'framer-motion';

const ReviewTipsGuides = () => {
  const tips = [
    {
      title: "How to Write Impactful Reviews",
      description:
        "Be specific, share personal experiences, and highlight both positives and areas for improvement to help others make informed decisions.",
    },
    {
      title: "How Ratings Work",
      description:
        "Our ratings are calculated from genuine user reviews, balancing both quality and quantity to reflect real performance.",
    },
    {
      title: "Industry-Specific Review Tips",
      description:
        "Focus on key factors that matter in your industry—such as delivery speed, customer support, or product durability.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-black via-green-800 to-black text-white">
      <div className="max-w-7xl roboto mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6"
        >
          Review Tips & Guides
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto"
        >
          Master the art of writing reviews that truly help the community and ensure ratings reflect real value.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-green-500 transition"
            >
              <h3 className="text-green-400 text-xl font-semibold mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-300 text-sm">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewTipsGuides;
