import { useState, useEffect } from 'react';
import { CheckCheck, Star } from 'lucide-react';
import TestimonyBlue from '/TestimonyBlue.webp';
import TestimonyPink from '/TestimonyPink.webp';
import TestimonyPurple from '/TestimonyPurple.webp';
import TestimonyOrange from '/TestimonyOrange.webp';
import TestimonyGreen from '/TestimonyGreen.webp';

const Testimonies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Adebayo Oluwaseun',
      role: 'Restaurant Owner',
      location: 'Lagos, Nigeria',
      avatar: TestimonyBlue,
      rating: 5,
      text: "Rhemidy Farms has been our trusted partner for over 2 years. Their fresh fish and poultry are consistently of the highest quality. Our customers always compliment the taste and freshness of our dishes, and it's all thanks to Rhemidy's exceptional products.",
      gradient: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      id: 2,
      name: 'Mrs. Funmi Adesanya',
      role: 'Home Chef & Mother',
      location: 'Ibadan, Nigeria',
      avatar: TestimonyPink,
      rating: 5,
      text: "As a mother of four, I need to ensure my family gets the best nutrition. Rhemidy Farms delivers exactly that - fresh, healthy, and delicious products right to my doorstep. The grilled fish is my children's favorite!",
      gradient: 'from-pink-400 to-rose-400',
      bgGradient: 'from-pink-50 to-rose-50',
    },
    {
      id: 3,
      name: 'Chef Ibrahim Olaitan',
      role: 'Executive Chef',
      location: 'Abeokuta, Nigeria',
      avatar: TestimonyGreen,
      rating: 5,
      text: "The quality and consistency of Rhemidy's products have elevated our menu significantly. Their sustainable farming practices align perfectly with our restaurant's values. Simply outstanding!",
      gradient: 'from-green-400 to-emerald-400',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      id: 4,
      name: 'Blessing Adetutu',
      role: 'Caterer',
      location: 'Abeokuta, Nigeria',
      avatar: TestimonyPurple,
      rating: 5,
      text: 'Rhemidy Farms has transformed my catering business. Their reliable delivery and premium quality products have helped me build a loyal customer base. I recommend them to all my colleagues in the industry.',
      gradient: 'from-purple-400 to-indigo-400',
      bgGradient: 'from-purple-50 to-indigo-50',
    },
    {
      id: 5,
      name: 'Mr. Emeka Okafor',
      role: 'Food Enthusiast',
      location: 'Lagos, Nigeria',
      avatar: TestimonyOrange,
      rating: 5,
      text: "I've been ordering from Rhemidy for my family gatherings, and they never disappoint. The freshness and flavor of their products are unmatched. Their customer service is also top-notch!",
      gradient: 'from-orange-400 to-yellow-400',
      bgGradient: 'from-orange-50 to-yellow-50',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById('testimonies-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section
      id="testimonies-section"
      className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-24 w-36 h-36 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-28 h-28 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-green-400 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/6 right-16 text-3xl opacity-20 animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        >
          💬
        </div>
        <div
          className="absolute bottom-1/4 left-12 text-2xl opacity-20 animate-bounce"
          style={{ animationDelay: '2s', animationDuration: '5s' }}
        >
          ⭐
        </div>
        <div
          className="absolute top-1/2 right-1/4 text-xl opacity-20 animate-bounce"
          style={{ animationDelay: '1s', animationDuration: '3s' }}
        >
          👥
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200 shadow-sm mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Customer Stories
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            What Our{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Customers
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full opacity-30"></div>
            </span>{' '}
            Say
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from real customers who have
            experienced{' '}
            <span className="font-semibold text-green-700">
              the Rhemidy difference
            </span>{' '}
            in their homes, restaurants, and businesses.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div
          className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            {/* Dynamic Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.bgGradient} opacity-30 rounded-3xl transition-all duration-1000`}
            ></div>

            {/* Glow Effect */}
            <div
              className={`absolute -inset-4 bg-gradient-to-r ${currentTestimonial.gradient} opacity-20 blur-2xl rounded-3xl transition-all duration-1000`}
            ></div>

            {/* Main Card */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-100 p-8 md:p-12">
              {/* Quote Icon */}
              <div
                className={`absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full flex items-center justify-center shadow-lg transition-all duration-500`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Customer Info */}
                <div className="text-center md:text-left">
                  <div className="relative mb-4">
                    {/* Avatar with glow */}
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${currentTestimonial.gradient} opacity-30 rounded-full blur-lg transition-all duration-500`}
                    ></div>
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      loading="lazy"
                      className="relative w-20 h-20 rounded-full mx-auto md:mx-0 object-cover border-4 border-white shadow-lg transition-transform duration-500 hover:scale-110"
                    />

                    {/* Verified badge */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-green-600 font-medium mb-1">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {currentTestimonial.location}
                  </p>

                  {/* Star Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="md:col-span-2">
                  <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium italic">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Testimonial metrics */}
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-green-700">
                        <Star size={30} />
                      </div>
                      <div className="text-xs text-gray-500">5 Star Rating</div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-green-700">
                        <CheckCheck size={30} />
                      </div>
                      <div className="text-xs text-gray-500">
                        Verified Review
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div
          className={`flex justify-center items-center gap-4 mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Previous Button */}
          <button
            onClick={() =>
              setActiveTestimonial(
                activeTestimonial === 0
                  ? testimonials.length - 1
                  : activeTestimonial - 1,
              )
            }
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-green-100 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? `bg-gradient-to-r ${currentTestimonial.gradient} scale-125 shadow-lg`
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() =>
              setActiveTestimonial(
                activeTestimonial === testimonials.length - 1
                  ? 0
                  : activeTestimonial + 1,
              )
            }
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-green-100 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
