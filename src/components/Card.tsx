import React from 'react';
import { NavLink } from 'react-router-dom';
import { CardProps } from '../types';
import Button from './Button';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, icon, link, linkText }) => {
  return (
    <div className="bg-brand-surface rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {imageUrl && (
        <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          {icon && <span className="mr-3 text-brand-secondary">{icon}</span>}
          <h3 className="text-2xl font-semibold text-brand-text-primary font-serif">{title}</h3>
        </div>
        <p className="text-brand-text-secondary text-base mb-4 flex-grow">{description}</p>
        {link && linkText && (
          <div className="mt-auto">
            <NavLink to={link}>
              {/*FIX: Added linkText as children to the Button component */}
              <Button variant="primary" size="sm">{linkText}</Button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;