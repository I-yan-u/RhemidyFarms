import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const AutoScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`${
        !isVisible ? 'hidden' : 'fixed'
      } bottom-8 right-8 cursor-pointer p-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 z-50`}
    >
      <span>
        <ArrowUp color="white" size={16} />
      </span>
    </div>
  );
};

export default AutoScrollUp;
