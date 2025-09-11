import { useEffect, useState } from 'react';

const CTA = () => {
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

  return (
    <div className="my-20 px-4 md:px-0" id="cta-section">
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
  );
};

export default CTA;
