import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { AcademicCapIcon } from '../components/IconComponents';

const admissionSteps = [
  { 
    step: 1, 
    title: "Enquiry & School Visit", 
    description: "Contact our admissions office or visit the school to learn more about our programs and facilities. Our team will be happy to answer your questions." 
  },
  { 
    step: 2, 
    title: "Application Form", 
    description: "Obtain the application form from the school office or download it from our website. Submit the completed form along with the required documents." 
  },
  { 
    step: 3, 
    title: "Interaction/Assessment", 
    description: "Applicants will undergo a friendly interaction (for younger grades) or a simple assessment (for higher grades) to understand their readiness." 
  },
  { 
    step: 4, 
    title: "Admission Offer", 
    description: "Successful candidates will receive an admission offer. Parents are required to complete the admission formalities within the stipulated time." 
  },
  { 
    step: 5, 
    title: "Welcome to SUDHIR MEMORIAL INSTITUTE GOBARDANGA", 
    description: "Once formalities are complete, your child officially becomes a part of our vibrant learning community!" 
  },
];

const requiredDocuments = [
  "Birth Certificate (original and photocopy)",
  "Transfer Certificate (if applicable, from the previous school)",
  "Previous Year's Mark Sheet (if applicable)",
  "Aadhaar Card of the student and parents (photocopy)",
  "Passport-size photographs of the student (4 copies)",
  "Passport-size photographs of parents/guardians (1 copy each)",
  "Caste Certificate (if applicable)",
  "Medical Fitness Certificate",
];

const AdmissionsPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <SectionTitle title="Admissions" subtitle="Join the SUDHIR MEMORIAL INSTITUTE GOBARDANGA Family" />

      <section className="bg-brand-surface p-8 rounded-lg shadow-xl animate-fade-in-up">
        <div className="flex items-center mb-6">
          <AcademicCapIcon className="w-12 h-12 text-brand-secondary mr-4" /> {/* Deeper Orange */}
          <h3 className="text-2xl font-semibold text-brand-secondary font-serif">Admission Process</h3> {/* Deeper Orange */}
        </div>
        <p className="text-brand-text-secondary mb-8 leading-relaxed">
          We welcome aspiring students to join our dynamic learning environment. Our admission process is designed to be transparent and straightforward, ensuring a smooth experience for parents and students.
        </p>
        <div className="space-y-8">
          {admissionSteps.map((item) => (
            <div key={item.step} className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary text-brand-text-on-secondary rounded-full flex items-center justify-center text-xl font-bold mr-6"> {/* Deeper orange bg, white text */}
                {item.step}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-brand-text-primary mb-1">{item.title}</h4>
                <p className="text-brand-text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-surface p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-brand-secondary mb-4 font-serif">Eligibility Criteria</h3> {/* Deeper Orange */}
            <ul className="list-disc list-inside text-brand-text-secondary space-y-2">
              <li>Nursery: Child should be 3+ years as of June 1st of the academic year.</li>
              <li>LKG: Child should be 4+ years as of June 1st of the academic year.</li>
              <li>UKG: Child should be 5+ years as of June 1st of the academic year.</li>
              <li>Grade 1 onwards: Based on the completion of the previous grade and assessment.</li>
              <li>Adherence to all CBSE guidelines.</li>
            </ul>
          </div>
          <div className="bg-brand-surface p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-brand-secondary mb-4 font-serif">Important Dates</h3> {/* Deeper Orange */}
            <ul className="list-disc list-inside text-brand-text-secondary space-y-2">
              <li>Application Forms Available: From November 1st</li>
              <li>Last Date for Submission: January 31st</li>
              <li>Interaction/Assessment Dates: February (specific dates will be communicated)</li>
              <li>Admission Results: March 15th</li>
              <li>New Academic Session Begins: April 1st</li>
            </ul>
            <p className="text-sm text-brand-text-secondary mt-4"><em>Note: Dates are tentative and subject to change. Please check with the admissions office for confirmation.</em></p>
          </div>
        </div>
      </section>

      <section className="bg-brand-background p-8 rounded-lg shadow-inner animate-fade-in-up" style={{ animationDelay: '0.4s' }}> {/* Pale orange-white bg */}
        <h3 className="text-2xl font-semibold text-brand-secondary mb-6 text-center font-serif">Required Documents</h3> {/* Deeper Orange */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {requiredDocuments.map((doc, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> {/* Light Orange checkmark */}
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-brand-text-primary">{doc}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="primary" size="lg" onClick={() => alert('Download functionality to be implemented.')}> {/* Light orange bg */}
            Download Application Form (PDF)
          </Button>
        </div>
      </section>

      <section className="bg-brand-secondary text-brand-text-on-secondary p-8 md:p-12 rounded-lg shadow-xl text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}> {/* Deeper orange bg, white text */}
        <h2 className="text-3xl font-bold mb-4 font-serif">Have Questions?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Our admissions team is here to help. Feel free to reach out for any queries regarding the admission process.
        </p>
        <NavLink to="/contact">
          <Button variant="primary" size="md" className="font-semibold px-8 py-3"> {/* Light orange bg (contrasts with deeper orange section bg), dark grey text */}
            Contact Admissions Office
          </Button>
        </NavLink>
      </section>
    </div>
  );
};

export default AdmissionsPage;