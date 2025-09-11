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
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
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
