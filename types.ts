
import React from 'react';

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  link?: string;
  linkText?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Facility {
  name: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}
    