import { motion } from 'framer-motion';
import { HiOutlineColorSwatch, HiOutlineLightningBolt } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-white py-20 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Your Personal AI Fashion Stylist
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover your perfect style with AI-powered color analysis and personalized fashion recommendations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
            <a href="#how-it-works" className="btn-secondary">
              Learn More
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <HiOutlineColorSwatch className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Color Theory Analysis</h3>
              </div>
              <p className="text-gray-600">
                Advanced color season analysis based on your unique features, providing perfectly matched color combinations
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <HiOutlineLightningBolt className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">AI-Powered Styling</h3>
              </div>
              <p className="text-gray-600">
                Personalized outfit recommendations tailored to your body type, features, and style preferences
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 