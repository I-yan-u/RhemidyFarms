import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import {
  ShoppingCart,
  Star,
  CheckCircle,
  Flame,
  Fish,
  Bird,
} from 'lucide-react';

const ProductsPage = () => {
  const [activeSection, setActiveSection] = useState('poultry');

  const poultryProducts = [
    {
      id: 1,
      name: 'Broilers Chick',
      price: '₦500',
      unit: 'per chick',
      image: '/images/BroilerChick.webp',
      description:
        'Healthy day-old broiler chicks, vaccinated and ready for raising.',
      features: ['Vaccinated', 'Healthy Stock', 'Fast Growing'],
    },
    {
      id: 2,
      name: 'Layers Chick',
      price: '₦600',
      unit: 'per chick',
      image: '/images/LayersChick.webp',
      description: 'Premium layer chicks with excellent egg-laying potential.',
      features: ['High Yield', 'Disease Resistant', 'Quality Breed'],
    },
    {
      id: 3,
      name: 'Broilers Adult',
      price: '₦3,500',
      unit: 'per bird',
      image: '/images/Broiler.webp',
      description:
        'Mature broilers, ready for processing. Raised with care and quality feed.',
      features: ['Premium Quality', 'Antibiotic Free', 'Fresh'],
    },
    {
      id: 4,
      name: 'Layers Adult',
      price: '₦4,000',
      unit: 'per bird',
      image: '/images/Layers.webp',
      description:
        'Productive laying hens, perfect for continuous egg production.',
      features: ['High Production', 'Healthy', 'Well Fed'],
    },
    {
      id: 5,
      name: 'Crates of Eggs',
      price: '₦5,500',
      unit: 'per crate (30 eggs)',
      image: '/images/Crates.webp',
      description:
        'Fresh farm eggs, collected daily from our free-range layers.',
      features: ['Farm Fresh', 'Free Range', 'Daily Collection'],
    },
  ];

  const fishProducts = [
    {
      id: 6,
      name: 'CatFish',
      price: '₦1,800',
      unit: 'per kg',
      image: '/images/FishFarm.webp',
      description: 'Fresh African catfish, raised in clean pond environments.',
      features: ['Pond Raised', 'Fresh Daily', 'Clean Water'],
    },
    {
      id: 7,
      name: 'Tilapia',
      price: '₦2,000',
      unit: 'per kg',
      image: '/images/TilapiaFull.webp',
      description:
        'Premium tilapia fish, known for their mild flavor and nutritional value.',
      features: ['Premium Quality', 'Mild Flavor', 'Nutritious'],
    },
    {
      id: 8,
      name: 'Hake (Panla)',
      price: '₦1,500',
      unit: 'per kg',
      image: '/images/HakeFull.webp',
      description:
        'Fresh Hake fish, popular for its tender meat and versatility.',
      features: ['Tender Meat', 'Versatile', 'Popular Choice'],
    },
    {
      id: 9,
      name: 'Herring (Sawa)',
      price: '₦1,200',
      unit: 'per kg',
      image: '/images/HerringFull.webp',
      description:
        'Fresh Herring fish, rich in omega-3 fatty acids and protein.',
      features: ['Omega-3 Rich', 'High Protein', 'Healthy Choice'],
    },
  ];

  const grillProducts = [
    {
      id: 10,
      name: 'Grilled Fish',
      price: '₦2,500',
      unit: 'per portion',
      image: '/images/GrilledFish.webp',
      description:
        'Expertly grilled fish with traditional Nigerian spices and seasonings.',
      features: ['Traditional Spices', 'Expert Preparation', 'Ready to Eat'],
    },
    {
      id: 11,
      name: 'Grilled Chicken',
      price: '₦3,000',
      unit: 'per portion',
      image: '/images/GrilledChicken.webp',
      description:
        'Perfectly grilled chicken, marinated and cooked to perfection.',
      features: ['Marinated', 'Perfectly Cooked', 'Delicious'],
    },
  ];

  const sections = [
    { id: 'poultry', name: 'Poultry', icon: Bird, products: poultryProducts },
    { id: 'fish', name: 'Fish', icon: Fish, products: fishProducts },
    { id: 'grills', name: 'Grills', icon: Flame, products: grillProducts },
  ];

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

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-teal-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-emerald-200  flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">
              {product.price}
            </div>
            <div className="text-sm text-gray-500">{product.unit}</div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full"
            >
              <CheckCircle className="w-3 h-3 mr-1" />
              {feature}
            </span>
          ))}
        </div>

        <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[50vh] overflow-hidden relative">
          <Motion.img
            src="/images/ProductsHeroBanner.webp"
            alt="Fish Pond"
            className="w-full h-full object-cover rounded-b-3xl"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 rounded-b-3xl backdrop-blur-sm bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 pt-8">
            <Motion.div
              className="inline-flex items-center px-4 py-2 bg-emerald-500/90 text-white text-sm font-medium rounded-full my-3 backdrop-blur-sm"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Fresh • Local • Trusted
            </Motion.div>
            <Motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our <span className="text-emerald-300">Products</span>
            </Motion.h1>
            <Motion.p
              className="text-xl text-emerald-100 max-w-2xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From farm to table - discover our premium selection of fresh
              poultry, fish, and grilled specialties
            </Motion.p>
          </div>
        </div>
      </div>

      <Motion.div
        className="container mx-auto px-4 py-16"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Section Navigation */}
        <Motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={scaleIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {sections.map((section) => (
            <Motion.button
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 shadow-md'
              }`}
            >
              <section.icon className="w-5 h-5 mr-2" />
              {section.name}
            </Motion.button>
          ))}
        </Motion.div>

        {/* Products Grid */}
        {sections.map((section) => (
          <div
            key={section.id}
            className={activeSection === section.id ? 'block' : 'hidden'}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {section.name}{' '}
                <span className="text-emerald-600">Collection</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {section.id === 'poultry' &&
                  'Premium poultry products raised with care and sustainable practices'}
                {section.id === 'fish' &&
                  'Fresh fish from our carefully maintained ponds and trusted sources'}
                {section.id === 'grills' &&
                  'Expertly prepared grilled specialties, ready to enjoy'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need Custom Orders?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer custom orders for bulk purchases, special events, or
            specific requirements. Contact us to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg">
              📞 Contact Us
            </button>
            <button className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-colors">
              💬 WhatsApp Order
            </button>
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default ProductsPage;
