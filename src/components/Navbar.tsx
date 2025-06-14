import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkItem } from '../../types';
import { MenuIcon, XIcon, SchoolIcon } from './IconComponents';
import schoologo from '../assets/photos/school_logo.png' ;


const navLinks: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="flex items-center text-brand-text-on-primary hover:text-brand-secondary transition-colors duration-300"
            >
              <img
                src={schoologo}
                alt="School Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 mr-2"
              />
              <span className="font-bold text-lg sm:text-xl lg:text-2xl font-serif truncate">
                {/* For smaller screens */}
                <span className="md:hidden">SMI-GBG</span>
                {/* For medium and larger screens */}
                <span className="hidden md:inline">
                  SUDHIR MEMORIAL INSTITUTE GOBARDANGA
                </span>
              </span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "bg-brand-secondary text-brand-text-on-secondary"
                        : "text-brand-text-on-primary hover:bg-black hover:bg-opacity-10 hover:text-brand-secondary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-secondary inline-flex items-center justify-center p-2 rounded-md text-brand-text-on-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-brand-surface"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <MenuIcon className="block h-6 w-6" />
              ) : (
                <XIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-brand-secondary text-brand-text-on-secondary"
                      : "text-brand-text-on-primary hover:bg-black hover:bg-opacity-10 hover:text-brand-secondary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
