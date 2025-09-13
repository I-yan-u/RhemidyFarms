import { motion as Motion } from 'framer-motion';

// Using placeholder images - replace with your actual imports
import PoultryImage from '/images/Poultry.webp';
import FishFarm from '/images/FishFarm.webp';
import GrilledFish from '/images/GrilledFish.webp';
import DeliveryVan from '/images/DeliveryVan.webp';

import CtaComponent from '../CtaComponent';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceComponent = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden py-20 px-5 md:px-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-40 h-40 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-16 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-green-400 rounded-full blur-2xl"></div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/6 left-12 text-3xl opacity-20 animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        >
          🐔
        </div>
        <div
          className="absolute top-2/3 right-16 text-2xl opacity-20 animate-bounce"
          style={{ animationDelay: '2s', animationDuration: '5s' }}
        >
          🐟
        </div>
        <div
          className="absolute bottom-1/4 left-1/4 text-xl opacity-20 animate-bounce"
          style={{ animationDelay: '1s', animationDuration: '3s' }}
        >
          🔥
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200 shadow-sm my-3">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Our Expertise
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            What{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                We Do
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-30"></div>
            </span>
          </h3>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From sustainable farming to expertly prepared meals, discover how we
            bring{' '}
            <span className="font-semibold text-green-700">
              farm-fresh quality
            </span>{' '}
            to every aspect of our agricultural journey.
          </p>
        </Motion.div>

        {/* Poultry Section */}
        <Motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500">
                <img
                  src={PoultryImage}
                  loading="lazy"
                  alt="Poultry Farming"
                  className="w-full md:w-[500px] h-auto md:h-[400px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  🐔 Fresh Poultry
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
                <div
                  className="absolute -top-2 left-4 w-4 h-4 bg-red-400 rounded-full animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Section badge */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full mb-4">
                SUSTAINABLE
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Sustainable{' '}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Poultry
                </span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Rhemidy Farms, we specialize in sustainable poultry farming,
                providing fresh, high-quality chicken products to our community.
                Our commitment to ethical farming practices ensures that our
                poultry is raised in a healthy environment, free from
                antibiotics and hormones.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Antibiotic Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Free Range</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Ethical Raised</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Fresh Daily</span>
                </div>
              </div>
            </div>
          </Motion.div>
        </Motion.div>

        {/* Fish Farming Section */}
        <Motion.div
          className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-20 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500">
                <img
                  src={FishFarm}
                  loading="lazy"
                  alt="Fish Farming"
                  className="w-full md:w-[500px] h-auto md:h-[400px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  🐟 Fresh Fish
                </div>

                {/* Water ripple effect */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-center space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                <div
                  className="absolute -top-2 right-4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"
                  style={{ animationDelay: '1.5s' }}
                ></div>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Section badge */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full mb-4">
                ECO-FRIENDLY
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Eco-Friendly{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Fish Farming
                </span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                In addition to poultry, we are also dedicated to fish farming,
                cultivating a variety of fish species in eco-friendly ponds. Our
                fish farming practices focus on maintaining water quality and
                promoting natural growth, resulting in fresh and nutritious fish
                products for our customers.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Clean Water</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Natural Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Multiple Species
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Nutritious</span>
                </div>
              </div>
            </div>
          </Motion.div>
        </Motion.div>

        {/* Grill Section */}
        <Motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500">
                <img
                  src={GrilledFish}
                  loading="lazy"
                  alt="Grilled Fish"
                  className="w-full md:w-[500px] h-auto md:h-[400px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  🔥 Expert Grill
                </div>

                {/* Steam effect */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex justify-center space-x-1">
                    <div className="w-1 h-4 bg-white/60 rounded-full animate-pulse"></div>
                    <div
                      className="w-1 h-6 bg-white/40 rounded-full animate-pulse"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="w-1 h-4 bg-white/60 rounded-full animate-pulse"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                <div
                  className="absolute -top-2 left-4 w-4 h-4 bg-red-400 rounded-full animate-pulse"
                  style={{ animationDelay: '2s' }}
                ></div>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Section badge */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-red-500 text-white text-xs font-bold rounded-full mb-4">
                SIGNATURE GRILLING
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Expertly grill your{' '}
                <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
                  fish/chicken to perfection
                </span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Rhemidy Farms, we take pride in offering expertly grilled
                fish and chicken, seasoned to perfection with our signature
                blend of spices. Whether you're hosting a family gathering or
                enjoying a quiet meal, our grilling process ensures a smoky,
                flavorful experience that highlights the natural taste of our
                fresh, sustainably farmed produce. Enjoy a healthy, delicious
                option that brings out the best in every bite.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Signature Spices
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Expert Technique
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Smoky Flavor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Perfect Seasoning
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => (
                  window.open(
                    'https://wa.me/2348056021086?text=Hello%2C%20I%20would%20like%20to%20order%20grilled%20items%20from%20Rhemidy%20Farms.',
                    '_blank',
                  ),
                  window.focus()
                )}
                className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <span>Order Grilled Items</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </Motion.div>
        </Motion.div>

        {/* Delivery Section */}
        <Motion.div
          className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-20 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500">
                <img
                  src={DeliveryVan}
                  loading="lazy"
                  alt="Fish Farming"
                  className="w-full md:w-[500px] h-auto md:h-[400px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  ⚡ Fast Delivery
                </div>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Section badge */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full mb-4">
                FAST DELIVERY
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Fast{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Door Delivery
                </span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Enjoy the convenience of our fast door delivery service,
                bringing fresh poultry and fish products straight to your
                doorstep. We prioritize quick and reliable delivery to ensure
                that your order arrives in perfect condition, ready to be
                enjoyed. Experience the ease of having high-quality, sustainably
                farmed food delivered right to you.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Trusted Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Eco friendly vehicles
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Package safety</span>
                </div>
              </div>
            </div>
          </Motion.div>
        </Motion.div>

        <CtaComponent
          secondaryButtonName={'Story'}
          secondaryButtonLink={'/about'}
        />
      </div>
    </div>
  );
};

export default ServiceComponent;
