import React from 'react';
import { Testimonial } from '../types';
import { QuoteIcon } from './IconComponents';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-brand-surface p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col transform hover:-translate-y-1">
      <QuoteIcon className="w-12 h-12 text-brand-primary mb-4" /> {/* Light Orange */}
      <p className="text-brand-text-secondary italic mb-6 flex-grow">"{testimonial.quote}"</p>
      <div className="flex items-center mt-auto">
        <img 
          src={testimonial.imageUrl} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-brand-primary" /* Light Orange border */
        />
        <div>
          <h4 className="text-lg font-semibold text-brand-secondary font-serif">{/* Deeper Coral Orange for name */}</h4>
          <p className="text-sm text-brand-text-secondary">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;