import { useState, useEffect } from 'react';

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById('why-us-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const reasons = [
    {
      icon: '🌱',
      title: 'Sustainable Farming',
      description:
        'Our eco-friendly practices ensure healthy soil, clean water, and thriving ecosystems for generations.',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      stats: '100% Organic',
    },
    {
      icon: '🏆',
      title: 'Premium Quality',
      description:
        'Hand-selected products undergo rigorous quality checks, ensuring only the finest reach your table.',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      stats: 'Grade A+',
    },
    {
      icon: '⚡',
      title: 'Farm Fresh Delivery',
      description:
        'From farm to your doorstep in under 24 hours, maintaining peak freshness and nutritional value.',
      gradient: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      stats: '<24 Hours',
    },
    {
      icon: '🇳🇬',
      title: 'Locally Made',
      description:
        'Supporting local economy and communities while providing you with authentic, quality rich produce.',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      stats: '2 Local Farms',
    },
  ];

  return (
    <section
      id="why-us-section"
      className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-16 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-green-400 rounded-full blur-2xl"></div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-12 text-3xl opacity-30 animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        >
          🌾
        </div>
        <div
          className="absolute top-3/4 left-16 text-2xl opacity-30 animate-bounce"
          style={{ animationDelay: '2s', animationDuration: '5s' }}
        >
          🚜
        </div>
        <div
          className="absolute top-1/2 left-1/4 text-xl opacity-30 animate-bounce"
          style={{ animationDelay: '1s', animationDuration: '3s' }}
        >
          🌿
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200 shadow-sm mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Why Choose Rhemidy Farms
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            The{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Rhemidy
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-30"></div>
            </span>{' '}
            Difference
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience agriculture done right. Our commitment to{' '}
            <span className="font-semibold text-green-700">
              excellence, sustainability, and community
            </span>{' '}
            sets us apart in delivering the freshest, highest-quality products.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-green-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:scale-105">
                {/* Dynamic background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 flex items-center justify-center text-4xl bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      {reason.icon}
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${reason.gradient} text-white text-xs font-bold rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    {reason.stats}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {reason.description}
                  </p>

                  {/* Decorative line */}
                  <div
                    className={`mt-6 h-1 bg-gradient-to-r ${reason.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>

                {/* Corner decorations */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-green-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left content */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Experience Fresh?
                </h3>
                <p className="text-gray-600">
                  Join thousands of satisfied customers who trust Rhemidy Farms
                  for their daily fresh needs.
                </p>
              </div>

              {/* Right CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  <span>Start Shopping</span>
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

                <button className="px-8 py-4 bg-white text-green-700 border-2 border-green-200 rounded-full font-semibold hover:bg-green-50 hover:border-green-300 transition-all duration-300 flex items-center gap-2 group">
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>Contact Us</span>
                </button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-green-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">5+</div>
                <div className="text-sm text-gray-600">Years Trusted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">10k+</div>
                <div className="text-sm text-gray-600">Products Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">24/7</div>
                <div className="text-sm text-gray-600">Fresh Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUs;
