// import { useState, useEffect } from 'react';
// import Henlo from '../../assets/images/Hen.png';
// import Hake from '../../assets/images/Hake.png';
// import Tilapia from '../../assets/images/Tilapia.png';
// import Eggs from '../../assets/images/Eggs.png';

// const Hero = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const HeroImages = [
//     { src: Henlo, alt: 'Hen Image' },
//     { src: Hake, alt: 'Hake fish Image' },
//     { src: Tilapia, alt: 'Tilapia Image' },
//     { src: Eggs, alt: 'Eggs Image' },
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     setTimeout(() => {
//       currentImageIndex === HeroImages.length - 1
//         ? setCurrentImageIndex(0)
//         : setCurrentImageIndex(currentImageIndex + 1);
//     }, 5000);
//   }, [currentImageIndex, HeroImages.length]);

//   return (
//     <div className="min-h-screen w-full pt-5 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-20 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-32 right-16 w-40 h-40 bg-emerald-500 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400 rounded-full blur-2xl"></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute top-1/4 left-2 text-4xl animate-bounce"
//           style={{ animationDelay: '0s', animationDuration: '3s' }}
//         >
//           🐟
//         </div>
//         <div
//           className="absolute top-3/4 right-1/4 text-3xl animate-bounce"
//           style={{ animationDelay: '1s', animationDuration: '4s' }}
//         >
//           🐔
//         </div>
//         <div
//           className="absolute top-1/2 right-1/3 text-2xl animate-bounce"
//           style={{ animationDelay: '2s', animationDuration: '5s' }}
//         >
//           🥚
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-20 relative z-10">
//         <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16 min-h-screen">
//           {/* Content Section */}
//           <div
//             className={`flex-1 max-w-2xl flex flex-col items-center lg:items-start justify-center gap-8 transition-all duration-1000 ${
//               isVisible
//                 ? 'opacity-100 translate-y-0'
//                 : 'opacity-0 translate-y-10'
//             }`}
//           >
//             {/* Badge */}
//             <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200 shadow-sm">
//               <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
//               Fresh • Local • Trusted
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
//               Your{' '}
//               <span className="relative">
//                 <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                   Reliable Source
//                 </span>
//               </span>{' '}
//               for Fresh{' '}
//               <span className="relative inline-block">
//                 Poultry & Fish
//                 <svg
//                   className="absolute -top-8 -right-12 w-16 h-16 text-green-400 opacity-60"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left max-w-xl">
//               At{' '}
//               <span className="font-semibold text-green-700">
//                 Rhemidy Farms
//               </span>
//               , we are a Lagos-based farm dedicated to providing the highest
//               quality poultry and fish. From our commitment to ethical rearing
//               to our meticulous processing, we ensure every product—whether raw
//               or ready to cook—is{' '}
//               <span className="font-semibold text-emerald-700">
//                 fresh, healthy, and delicious
//               </span>
//               .
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//               <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
//                 <span>Shop Fresh Products</span>
//                 <svg
//                   className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </button>

//               <button className="px-8 py-4 bg-white text-green-700 border-2 border-green-200 rounded-full font-semibold hover:bg-green-50 hover:border-green-300 transition-all duration-300 flex items-center justify-center gap-2 group">
//                 <svg
//                   className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-2a4 4 0 118 0v2M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <span>Learn Our Story</span>
//               </button>
//             </div>

//             {/* Trust Statement */}
//             <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100">
//               <p className="text-green-800 font-medium text-center lg:text-left">
//                 🌟 Experience the Rhemidy difference: wholesome food you can
//                 trust.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-green-100 w-full max-w-md">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-green-700">5+</div>
//                 <div className="text-sm text-gray-600">Years Experience</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-green-700">100%</div>
//                 <div className="text-sm text-gray-600">Fresh Guarantee</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-green-700">500+</div>
//                 <div className="text-sm text-gray-600">Happy Customers</div>
//               </div>
//             </div>
//           </div>

//           {/* Logo/Image Section */}
//           <div
//             className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? 'opacity-100 translate-y-0'
//                 : 'opacity-0 translate-y-10'
//             }`}
//           >
//             <div className="relative group">
//               {/* Glow Effect */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

//               {/* Logo Container */}
//               <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
//                 <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
//                   {/* Placeholder for logo - replace with actual logo */}
//                   <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center border-2 border-green-200">
//                     <div className="text-center">
//                       <img
//                         src={HeroImages[currentImageIndex].src}
//                         alt="HeroImages"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Elements */}
//               <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
//               <div
//                 className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full animate-pulse"
//                 style={{ animationDelay: '1s' }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scaleX {
//           0%,
//           100% {
//             transform: scaleX(0);
//           }
//           50% {
//             transform: scaleX(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;

import { useState, useEffect } from 'react';
import Henlo from '../../assets/images/Hen.png';
import Hake from '../../assets/images/Hake.png';
import Tilapia from '../../assets/images/Tilapia.png';
import Eggs from '../../assets/images/Eggs.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const HeroImages = [
    {
      src: Henlo,
      alt: 'Fresh Hen',
      title: 'Premium Poultry',
      color: 'from-orange-400 to-red-400',
    },
    {
      src: Hake,
      alt: 'Fresh Hake',
      title: 'Ocean Fresh Hake',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      src: Tilapia,
      alt: 'Tilapia Fish',
      title: 'Farm Fresh Tilapia',
      color: 'from-teal-400 to-green-400',
    },
    {
      src: Eggs,
      alt: 'Fresh Eggs',
      title: 'Farm Fresh Eggs',
      color: 'from-yellow-400 to-orange-400',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex((prev) =>
          prev === HeroImages.length - 1 ? 0 : prev + 1,
        );
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [HeroImages.length]);

  const currentImage = HeroImages[currentImageIndex];

  return (
    <div className="min-h-screen w-full pt-5 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400 rounded-full blur-2xl"></div>
      </div>

      {/* Dynamic Background Color */}
      <div
        className={`absolute inset-0 opacity-5 bg-gradient-to-br ${currentImage.color} transition-all duration-1000`}
      ></div>

      {/* Floating Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-2 text-4xl animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        >
          🐟
        </div>
        <div
          className="absolute top-3/4 right-1/4 text-3xl animate-bounce"
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        >
          🐔
        </div>
        <div
          className="absolute top-1/2 right-1/3 text-2xl animate-bounce"
          style={{ animationDelay: '2s', animationDuration: '5s' }}
        >
          🥚
        </div>
      </div> */}

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16 min-h-screen">
          {/* Content Section */}
          <div
            className={`flex-1 max-w-2xl flex flex-col items-center lg:items-start justify-center gap-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Fresh • Local • Trusted
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Your{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Reliable Source
                </span>
              </span>{' '}
              for Fresh{' '}
              <span className="relative inline-block">
                Poultry & Fish
                <svg
                  className="absolute -top-8 -right-12 w-16 h-16 text-green-400 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left max-w-xl">
              At{' '}
              <span className="font-semibold text-green-700">
                Rhemidy Farms
              </span>
              , we are a Lagos-based farm dedicated to providing the highest
              quality poultry and fish. From our commitment to ethical rearing
              to our meticulous processing, we ensure every product—whether raw
              or ready to cook—is{' '}
              <span className="font-semibold text-emerald-700">
                fresh, healthy, and delicious
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Shop Fresh Products</span>
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

              <button className="px-8 py-4 bg-white text-green-700 border-2 border-green-200 rounded-full font-semibold hover:bg-green-50 hover:border-green-300 transition-all duration-300 flex items-center justify-center gap-2 group">
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
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16v-2a4 4 0 118 0v2M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Learn Our Story</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-100">
              <p className="text-green-800 font-medium text-center lg:text-left">
                🌟 Experience the Rhemidy difference: wholesome food you can
                trust.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-green-100 w-full max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">100%</div>
                <div className="text-sm text-gray-600">Fresh Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group perspective-1000">
              {/* Dynamic Glow Effect */}
              <div
                className={`absolute -inset-8 bg-gradient-to-r ${currentImage.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-1000 animate-pulse`}
              ></div>

              {/* Main Container with 3D effect */}
              <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-700 transform-gpu perspective-1000 hover:rotateY-5 hover:rotateX-2">
                {/* Image Container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center overflow-hidden rounded-2xl">
                  {/* Background with current image color */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentImage.color} opacity-10 transition-all duration-1000`}
                  ></div>

                  {/* Image with 3D pop-out effect */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img
                      src={currentImage.src}
                      alt={currentImage.alt}
                      className={`
                        max-w-[85%] max-h-[85%] object-contain 
                        transition-all duration-700 ease-out transform-gpu
                        ${
                          !isTransitioning
                            ? 'scale-100 translate-z-8 rotate-0 filter-none'
                            : 'scale-90 translate-z-0 rotate-6 filter blur-sm'
                        }
                        hover:scale-110 hover:translate-z-16 hover:-rotate-3
                        drop-shadow-2xl hover:drop-shadow-3xl
                      `}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: `
                          scale(${!isTransitioning ? '1' : '0.9'}) 
                          translateZ(${!isTransitioning ? '20px' : '0px'}) 
                          rotateY(${!isTransitioning ? '0deg' : '15deg'})
                          rotateX(${!isTransitioning ? '0deg' : '5deg'})
                        `,
                      }}
                    />
                  </div>

                  {/* Floating particles around image */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
                    <div
                      className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-40"
                      style={{ animationDelay: '1s' }}
                    ></div>
                    <div
                      className="absolute top-12 left-8 w-1 h-1 bg-white rounded-full animate-ping opacity-50"
                      style={{ animationDelay: '2s' }}
                    ></div>
                  </div>

                  {/* Product title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform transition-all duration-500 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm font-semibold text-gray-800 text-center">
                        {currentImage.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Progress indicators */}
                <div className="flex justify-center space-x-2 mt-4">
                  {HeroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentImageIndex(index);
                          setIsTransitioning(false);
                        }, 300);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? `bg-gradient-to-r ${currentImage.color} scale-125`
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div
                className={`absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r ${currentImage.color} rounded-full animate-pulse shadow-lg transition-all duration-1000`}
              ></div>
              <div
                className={`absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r ${currentImage.color} rounded-full animate-pulse shadow-lg transition-all duration-1000`}
                style={{ animationDelay: '1s' }}
              ></div>

              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-green-200 animate-spin opacity-20"
                style={{ animationDuration: '20s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-gpu {
          transform-style: preserve-3d;
        }

        .translate-z-8 {
          transform: translateZ(8px);
        }

        .translate-z-16 {
          transform: translateZ(16px);
        }

        .hover\\:rotatey-5:hover {
          transform: rotateY(5deg);
        }

        .hover\\:rotatex-2:hover {
          transform: rotateX(2deg);
        }

        .drop-shadow-3xl {
          filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.25));
        }

        @keyframes scaleX {
          0%,
          100% {
            transform: scaleX(0);
          }
          50% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
