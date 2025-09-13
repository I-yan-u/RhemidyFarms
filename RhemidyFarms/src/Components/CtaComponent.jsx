import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Award } from 'lucide-react';

const CtaComponent = ({ secondaryButtonName, secondaryButtonLink }) => {
  const navigate = useNavigate();

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div>
      {/* Bottom CTA Section */}
      <Motion.div
        className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/5"></div>
        <Motion.div
          className="relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Motion.div
            className="inline-flex items-center px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full mb-6 backdrop-blur-sm"
            variants={fadeIn}
          >
            <Award className="w-4 h-4 mr-2" />
            Experience the Difference
          </Motion.div>
          <Motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={fadeIn}
          >
            Your Reliable source for Fresh Poultry & Fish
          </Motion.h2>
          <Motion.p
            className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg"
            variants={fadeIn}
          >
            We are committed to continuous improvement and innovation in our
            farming practices to ensure that we meet the evolving needs of our
            customers and the environment.
          </Motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Motion.button
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              variants={fadeIn}
              onClick={() => navigate('/products')}
            >
              Start Shopping →
            </Motion.button>
            <Motion.button
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
              variants={fadeIn}
              onClick={() => navigate(secondaryButtonLink)}
            >
              View our {secondaryButtonName}
            </Motion.button>
          </div>
        </Motion.div>

        {/* Decorative elements are now Motion components */}
        <Motion.div
          className="absolute top-8 right-8 w-24 h-24 border-2 border-white/20 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        ></Motion.div>
        <Motion.div
          className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        ></Motion.div>
      </Motion.div>
    </div>
  );
};

export default CtaComponent;
