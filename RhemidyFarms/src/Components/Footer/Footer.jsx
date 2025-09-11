import React from 'react';
import RhemidyLogo from '../../assets/svg/RhemidyFarmsLogo.svg';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
} from 'lucide-react';

const Footer = () => {
  const navlinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <Facebook size={20} /> },
    { name: 'Instagram', href: '#', icon: <Instagram size={20} /> },
    { name: 'Twitter', href: '#', icon: <Twitter size={20} /> },
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
            A Lagos-based farm committed to delivering the highest quality
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
                  href={link.href}
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
                href="tel:+2348000000000"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-300 transition-colors duration-200 text-sm"
              >
                <Phone size={16} /> <span>+234 800 000 0000</span>
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
              123 Farm Road, Lagos, Nigeria
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
