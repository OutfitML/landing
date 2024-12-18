import { motion } from 'framer-motion';
import { HiOutlineCamera, HiOutlineColorSwatch, HiOutlineLightningBolt, HiOutlineSparkles } from 'react-icons/hi';

const steps = [
  {
    icon: HiOutlineCamera,
    title: 'Upload Your Photo',
    description: 'Take or upload a photo for our AI to analyze your unique features',
  },
  {
    icon: HiOutlineColorSwatch,
    title: 'Color Analysis',
    description: 'Our AI determines your season type based on your skin tone, eyes, and hair color',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Get Recommendations',
    description: 'Receive personalized color schemes and combinations that complement your features',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Style Matching',
    description: 'Get outfit suggestions tailored to your body type and personal style',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Our advanced AI technology combines color theory with personal analysis to create your perfect style guide
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-8 h-0.5 bg-gray-300"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 