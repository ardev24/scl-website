import React from 'react';
import { NavLink } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, SchoolIcon } from './IconComponents';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-brand-text-on-primary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* School Info */}
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center mb-4">
              <img src="/src/assets/photos/website/school logo.png" alt="School Logo" className="h-10 w-10 mr-2" />
              <span className="text-2xl font-bold text-brand-text-on-primary font-serif">SUDHIR MEMORIAL INSTITUTE GOBARDANGA</span>
            </NavLink>
            <p className="text-sm text-brand-text-on-primary opacity-90">
              Nurturing young minds for a brighter future. Committed to excellence in education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-brand-text-on-primary mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="hover:text-brand-surface transition-colors duration-300">About Us</NavLink></li>
              <li><NavLink to="/academics" className="hover:text-brand-surface transition-colors duration-300">Academics</NavLink></li>
              <li><NavLink to="/admissions" className="hover:text-brand-surface transition-colors duration-300">Admissions</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-surface transition-colors duration-300">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold text-brand-text-on-primary mb-4">Contact Us</h5>
            <address className="not-italic text-sm space-y-2">
              <p>Jamdani, Gobardanga, West Bengal 743247</p>
              <p>Email: <a href="mailto:smi.gobardanga@gmail.com" className="hover:text-brand-surface transition-colors duration-300">smi.gobardanga@gmail.com</a></p>
              <p>Phone: <a href="tel:+9007032285" className="hover:text-brand-surface transition-colors duration-300">9007032285</a></p>
            </address>
          </div>
          
          {/* Social Media */}
          <div>
            <h5 className="text-lg font-semibold text-brand-text-on-primary mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-text-on-primary opacity-75 hover:text-brand-surface transition-colors duration-300"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-brand-text-on-primary opacity-75 hover:text-brand-surface transition-colors duration-300"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-brand-text-on-primary opacity-75 hover:text-brand-surface transition-colors duration-300"><InstagramIcon className="h-6 w-6" /></a>
            </div>
          </div>

        </div>
        <div className="mt-10 pt-8 border-t border-brand-text-on-primary border-opacity-25 text-center text-sm text-brand-text-on-primary opacity-75">
          <p>&copy; {currentYear} SUDHIR MEMORIAL INSTITUTE GOBARDANGA. All rights reserved.</p>
          <p>Designed with <span className="text-brand-secondary">&hearts;</span> for educational excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
