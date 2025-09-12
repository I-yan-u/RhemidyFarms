import '../../index.css';
import rhemidyLogo from '/RhemidyFarmsLogo.webp';
import Button from '../button/Button';
import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [nameColor, setNameColor] = useState('text-green-700');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Update active link based on current path
    const path = location.pathname;
    setNameColor('text-green-700');
    if (path === '/') {
      setActiveLink('Home');
    } else if (path === '/about') {
      setNameColor('text-white');
      setActiveLink('About');
    } else if (path === '/products') {
      setActiveLink('Products');
    } else if (path === '/services') {
      setActiveLink('Services');
    } else {
      setActiveLink('');
    }
  }, [location]);

  const navlinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = isScrolled
    ? 'sticky top-0 bg-white/50 shadow-sm backdrop-blur-md transition-all duration-300'
    : 'absolute top-0 w-full bg-transparent transition-all duration-300';

  return (
    <nav className={`z-50 ${navbarClasses}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-8">
        {/* Logo and Company Name */}
        <a href="/" className="flex items-center gap-2">
          <img
            src={rhemidyLogo}
            className="h-10 w-10 sm:h-12 sm:w-12"
            alt="Rhemidy Farms Logo"
          />
          <h1 className={`${nameColor} text-xl font-bold md:text-2xl`}>
            Rhemidy Farms
          </h1>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center lg:flex">
          <span className="flex items-center rounded-full drop-shadow-2xl bg-white/90 px-3 py-2">
            {navlinks.map((link) => (
              <a
                key={link.name}
                onClick={() => navigate(link.href)}
                className={`mx-4 text-sm font-medium ${
                  activeLink === link.name ? 'text-green-500' : 'text-gray-500'
                } transition-colors cursor-pointer hover:text-green-700 md:text-base`}
              >
                {link.name}
              </a>
            ))}
          </span>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <Button
            content="Contact Us"
            link={'/contact'}
            otherClass={'text-md font-light'}
            icon={<Phone size={16} />}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle mobile menu">
            {isMenuOpen ? (
              <X size={28} className="text-gray-700" />
            ) : (
              <Menu size={28} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (Dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/50 backdrop-blur-md shadow-lg lg:hidden">
          <div className="flex flex-col items-center py-4">
            {navlinks.map((link) => (
              <a
                key={link.name}
                onClick={() => {
                  navigate(link.href);
                  toggleMenu;
                }}
                className="w-full py-3 pr-10 text-right text-xl font-medium text-gray-700 cursor-pointer transition-colors hover:bg-gray-100 hover:text-green-700"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4">
              <Button
                content="Contact Us"
                link={'/contact'}
                otherClass={'text-lg font-light w-full'}
                icon={<Phone size={16} />}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
