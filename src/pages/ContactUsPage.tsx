import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { ContactInfo } from '../types';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '../components/IconComponents';

const contactInfoData: ContactInfo[] = [
  { icon: <MapPinIcon className="w-8 h-8 text-brand-secondary" />, label: "Address", value: "123 Education Lane, Knowledge City, Learning State, India 400001" }, /* Deeper Orange Icon */
  { icon: <PhoneIcon className="w-8 h-8 text-brand-secondary" />, label: "Phone", value: "+91 12345 67890", href: "tel:+911234567890" },
  { icon: <EnvelopeIcon className="w-8 h-8 text-brand-secondary" />, label: "Email", value: "info@elitecbse.edu", href: "mailto:info@elitecbse.edu" },
];

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission (e.g., API call)
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: ''});
    setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5s
  };

  return (
    <div className="space-y-16">
      <SectionTitle title="Contact Us" subtitle="We'd love to hear from you!" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <section className="bg-brand-surface p-8 rounded-lg shadow-xl animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-brand-secondary mb-6 font-serif">Send us a Message</h3> {/* Deeper Orange Title */}
          {isSubmitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
              Thank you for your message! We will get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-text-primary">Full Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" /* Focus Light Orange */
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-text-primary">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" 
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-brand-text-primary">Subject</label>
              <input 
                type="text" 
                name="subject" 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-text-primary">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
              ></textarea>
            </div>
            <div>
              <Button type="submit" variant="secondary" size="lg" className="w-full"> {/* Deeper Orange BG, White Text */}
                Send Message
              </Button>
            </div>
          </form>
        </section>

        {/* Contact Information */}
        <section className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="bg-brand-surface p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-brand-secondary mb-6 font-serif">Our Contact Details</h3> {/* Deeper Orange */}
            <div className="space-y-6">
              {contactInfoData.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">{info.icon}</div> {/* Icon color set in data */}
                  <div>
                    <h4 className="text-lg font-semibold text-brand-text-primary">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-brand-primary hover:underline break-all">{info.value}</a> /* Light Orange Link */
                    ) : (
                      <p className="text-brand-text-secondary break-all">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-brand-surface p-8 rounded-lg shadow-xl">
             <h3 className="text-2xl font-semibold text-brand-secondary mb-4 font-serif">Find Us On Map</h3> {/* Deeper Orange */}
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/maplocation/600/400`}
                alt="School Location Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;