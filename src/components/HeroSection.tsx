import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageUrl, ctaText, ctaLink, primaryColor = 'brand-primary', secondaryColor = 'brand-secondary' }) => {
  return (
    <div
      className={`relative bg-cover bg-center min-h-[70vh] flex items-center justify-center text-brand-surface rounded-lg overflow-hidden shadow-2xl animate-fade-in-up bg-${primaryColor}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-8 max-w-3xl">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight animate-slide-in-left text-${secondaryColor}`} style={{ animationDelay: '0.2s' }}>
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
          {subtitle}
        </p>
        <div className="animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
          <NavLink to={ctaLink}>
            {/*FIX: Added ctaText as children to the Button component */}
            <Button size="lg" variant="secondary">{ctaText}</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
