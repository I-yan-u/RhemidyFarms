import {
  CheckCircle,
  Leaf,
  Fish,
  Users,
  Award,
  Flame,
  Truck,
} from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import CtaComponent from '../CtaComponent';

const AboutUs = () => {
  const FishPondImage = '/about/FishPond.webp';

  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'Eco-friendly farming with organic methods',
    },
    {
      icon: Fish,
      title: 'Fresh Quality',
      description: 'Daily fresh poultry and fish products',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Supporting local families for about 5 years',
    },
    {
      icon: Award,
      title: 'Premium Standards',
      description: 'Highest quality standards in everything we do',
    },
    {
      icon: Flame,
      title: 'Grilled & Smoked',
      description: 'Ready-to-eat options for your convenience',
    },
    {
      icon: Truck,
      title: 'Delivery Services',
      description: 'Fast and reliable delivery to your doorstep',
    },
  ];

  const values = [
    'Antibiotic Free',
    'Free Range',
    'Ethical Raised',
    'Fresh Daily',
    'Locally Sourced',
    'Sustainably Farmed',
  ];

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[50vh] overflow-hidden relative">
          <Motion.img
            src={FishPondImage}
            alt="Fish Pond"
            className="w-full h-full object-cover rounded-b-3xl"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 rounded-b-3xl bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <Motion.div
              className="inline-flex items-center px-4 py-2 bg-emerald-500/90 text-white text-sm font-medium rounded-full my-3 backdrop-blur-sm"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Leaf className="w-4 h-4 mr-2" />
              Our Story
            </Motion.div>
            <Motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About <span className="text-emerald-300">Us</span>
            </Motion.h1>
            <Motion.p
              className="text-xl text-emerald-100 max-w-2xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Farming excellence in your community
            </Motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <Motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Motion.div variants={fadeIn}>
              <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-4">
                <CheckCircle className="w-4 h-4 mr-2" />
                Established 2020
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your <span className="text-emerald-600">Reliable Source</span>
                <br />
                for Fresh Poultry & Fish
              </h2>
            </Motion.div>

            <Motion.div
              className="space-y-6 text-gray-700 leading-relaxed"
              variants={fadeIn}
            >
              <p className="text-lg">
                <span className="font-semibold text-emerald-600">
                  Rhemidy Farms
                </span>{' '}
                is a family-owned agricultural business dedicated to sustainable
                farming practices and high-quality produce. We have been serving
                our community with
                <span className="font-medium">
                  {' '}
                  fresh, healthy, and delicious
                </span>{' '}
                products for over five years.
              </p>

              <p>
                Our mission is to provide healthy and nutritious food while
                promoting environmental stewardship. We believe in the
                importance of supporting local agriculture and fostering a
                connection between consumers and the source of their food.
              </p>

              <p>
                At Rhemidy Farms, we utilize eco-friendly farming techniques,
                including organic nutrition, natural breeding, and integrated
                pest management. Our fish ponds are designed to promote
                biodiversity and water conservation.
              </p>
            </Motion.div>

            <Motion.div
              className="flex flex-wrap gap-3 pt-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <Motion.span
                  key={index}
                  className="inline-flex items-center px-3 py-2 bg-white border-2 border-emerald-200 text-emerald-700 text-sm font-medium rounded-full hover:bg-emerald-50 transition-colors"
                  variants={fadeIn}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  {value}
                </Motion.span>
              ))}
            </Motion.div>
          </Motion.div>

          {/* Features Grid */}
          <Motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <Motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={scaleIn}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>

        <CtaComponent
          secondaryButtonName={'Services'}
          secondaryButtonLink={'/services'}
        />
      </div>
    </section>
  );
};

export default AboutUs;
