import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105";
  
  let variantStyles = '';
  switch (variant) {
    case 'primary': // Light Orange BG, Dark Grey Text
      variantStyles = 'bg-brand-primary text-brand-text-on-primary hover:bg-opacity-90 focus:ring-brand-primary';
      break;
    case 'secondary': // Deeper Coral Orange BG, White Text
      variantStyles = 'bg-brand-secondary text-brand-text-on-secondary hover:bg-opacity-90 focus:ring-brand-secondary';
      break;
    case 'accent': // Amber/Goldish Orange BG, Dark Grey Text
      variantStyles = 'bg-brand-accent text-brand-text-primary hover:bg-opacity-90 focus:ring-brand-accent';
      break;
    case 'outline': // Light Orange Border and Text, hover Light Orange BG and Dark Grey Text
      variantStyles = 'bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-text-on-primary focus:ring-brand-primary';
      break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-4 py-2 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-6 py-3 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-8 py-4 text-lg';
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;