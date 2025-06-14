import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  const alignmentClass = `text-${align}`;
  return (
    <div className={`mb-12 ${alignmentClass} animate-fade-in-up`}>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-2 font-serif">{/* Deeper Coral Orange */}</h2>
      {subtitle && <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto (if center) md:max-w-none (if left/right)">{subtitle}</p>}
      <div className={`mt-3 w-24 h-1 ${align === 'center' ? 'mx-auto' : (align === 'right' ? 'ml-auto' : '')} bg-brand-primary rounded`}></div> {/* Light Orange */}
    </div>
  );
};

export default SectionTitle;