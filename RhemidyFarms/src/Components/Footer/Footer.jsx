import { useNavigate } from 'react-router-dom';
import RhemidyLogo from '/RhemidyFarmsLogo.webp';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapIcon,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const navlinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact/#' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/rhemidyfarms/',
      icon: <Instagram size={20} />,
    },
    {
      name: 'Twitter',
      href: 'https://www.x.com/RhemidyFarms/',
      icon: <Twitter size={20} />,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/rhemidy.farm',
      icon: <Facebook size={20} />,
    },
    { name: 'LinkedIn', href: '#', icon: <Linkedin size={20} /> },
  ];

  return (
    <footer className="bg-emerald-900 text-white py-12 px-6 sm:px-12 rounded-tr-3xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
        {/* Logo & Brand Info */}
        <div className="flex flex-col items-start gap-4 col-span-1 md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={RhemidyLogo}
              alt="Rhemidy Farms Logo"
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-white">Rhemidy Farms</span>
          </div>
          <p className="text-gray-300 text-sm mt-2 max-w-xs">
            A Lagos/Ogun-based farm committed to delivering the highest quality
            poultry and fish, from our farms to your table.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-emerald-300">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {navlinks.map((link) => (
              <li key={link.name}>
                <a
                  onClick={() => navigate(link.href)}
                  className="text-gray-300 hover:text-emerald-300 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-emerald-300">
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+2348056021086"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-300 transition-colors duration-200 text-sm"
              >
                <Phone size={16} /> <span>+234 805 602 1086</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@rhemidyfarms.com"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-300 transition-colors duration-200 text-sm"
              >
                <Mail size={16} /> <span>info@rhemidyfarms.com</span>
              </a>
            </li>
            <li className="text-gray-300 text-sm">
              <MapPin size={16} />
              <span>2, Church Street, Ajegunle bus stop, Lagos, Nigeria</span>
            </li>
            <li className="text-gray-300 text-sm">
              <MapIcon size={16} />
              <span>Plot 5/7, Osolo Road, Ilogbo, Ogun state, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold mb-4 text-emerald-300">
            Follow Us
          </h4>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-gray-300 hover:text-emerald-300 transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto text-center mt-6">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Rhemidy Farms. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
