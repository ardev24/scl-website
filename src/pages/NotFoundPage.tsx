import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <img 
        src="https://picsum.photos/seed/404error/400/300" 
        alt="Page Not Found Illustration" 
        className="w-64 h-auto mb-8 rounded-lg shadow-lg"
      />
      <h1 className="text-6xl font-bold text-brand-secondary mb-4">404</h1> {/* Deeper Orange */}
      <h2 className="text-3xl font-semibold text-brand-text-primary mb-4">Oops! Page Not Found.</h2>
      <p className="text-lg text-brand-text-secondary mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <NavLink to="/">
        <Button variant="primary" size="lg"> {/* Light Orange BG */}
          Go to Homepage
        </Button>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;