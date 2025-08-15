import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const posts = [
  {
    _id: '1',
    title: 'How to Write Effective Service Reviews',
    excerpt: `Writing effective service reviews is essential for helping others make informed decisions. Be honest and specific about your experience, highlight both the positives and areas for improvement, and provide actionable feedback. This approach not only benefits other users but also encourages service providers to improve their offerings.`,
    image: 'https://simpletexting.com/wp-content/uploads/2022/06/how-to-generate-good-customer-reviews-7-customer-feedback-examples-and-what-they-can-teach-us.jpg',
  },
  {
    _id: '2',
    title: 'Top 5 Marketing Services in 2025',
    excerpt: `The marketing landscape is constantly evolving. In 2025, the top marketing services will focus on personalized customer engagement, data-driven strategies, and innovative digital campaigns. Discover which services are leading the way and how they can help your business grow and stay ahead of the competition.`,
    image: 'https://www.globalkeyinfosolution.com/uploads/Digital%20Marketing%20Strategies685540a944a37.png',
  },
  {
    _id: '3',
    title: 'Why Transparency Matters in Service Ratings',
    excerpt: `Transparency in service ratings builds trust between customers and providers. When ratings are clear, honest, and based on real user experiences, customers feel confident in their choices. Learn why maintaining transparency is crucial for a healthy service ecosystem and how it benefits everyone involved.`,
    image: 'https://www.bizzbuzz.news/h-upload/2024/09/02/1934596-data-transparency.jpg',
  },
  {
    _id: '4',
    title: 'Using Feedback to Improve Your Service',
    excerpt: `Customer feedback is a powerful tool for growth. By actively listening to reviews and suggestions, service providers can identify strengths and weaknesses, adapt their offerings, and enhance customer satisfaction. Explore practical ways to collect, analyze, and implement feedback effectively.`,
    image: 'https://ccbill.com/wp-content/uploads/customer-feedback.jpg',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-white to-green-100 text-gray-900 roboto dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      <Navbar />

      <section className="w-full py-16 px-4 flex-grow max-w-7xl mx-auto mt-5">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-green-700 dark:text-green-400">
            Latest Blog Posts
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Stay updated with the latest news, tips, and insights from ReviewHub.
          </p>
        </div>

        <div className="flex flex-col space-y-16">
          {posts.map(post => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-1/3 h-48 object-cover rounded-md border border-green-600 dark:border-green-700 flex-shrink-0"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="text-green-700 dark:text-green-400 font-semibold text-2xl mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;