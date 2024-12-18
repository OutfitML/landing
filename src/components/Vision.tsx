import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineGlobe, HiOutlineChip } from 'react-icons/hi';

const visionPoints = [
  {
    icon: HiOutlineLightBulb,
    title: 'Democratizing Fashion',
    description: 'Making professional styling accessible to everyone through AI technology',
  },
  {
    icon: HiOutlineChip,
    title: 'AI Innovation',
    description: 'Combining advanced AI with established color theory for precise recommendations',
  },
  {
    icon: HiOutlineGlobe,
    title: 'Personal Expression',
    description: 'Helping individuals express their unique style with confidence',
  },
];

const Vision = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-subtitle">
          We're revolutionizing personal styling by combining AI technology with traditional color theory
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <point.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">{point.title}</h3>
              </div>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            OutfitAI is leading the future of personalized fashion, where technology meets style to create a uniquely tailored experience for every individual.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision; 