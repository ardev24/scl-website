import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { TeamMember } from '../../types';
import { LightBulbIcon, BookOpenIcon, UsersIcon } from '../components/IconComponents';

const teamMembers: TeamMember[] = [
  { name: "Nandita Debnath", role: "Principal", bio: "Mrs Debnath champions innovative teaching and holistic student development.", imageUrl: "https://picsum.photos/seed/principal/300/300" },
  { name: "--", role: "Secretary", bio: "--", imageUrl: "https://picsum.photos/seed/vp_academics/300/300" },
];

const AboutUsPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <SectionTitle title="About SUDHIR MEMORIAL INSTITUTE GOBARDANGA" subtitle="Our Story, Mission, and Values" />

      <section className="animate-fade-in-up">
        <div className="bg-brand-surface p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-brand-secondary mb-4 font-serif">Our History</h3> {/* Deeper orange title */}
          <p className="text-brand-text-secondary mb-4 leading-relaxed">
          Since 2020, SUDHIR MEMORIAL INSTITUTE GOBARDANGA was established with a vision to provide high-quality education accessible to all. Over the years, it has grown into an INSTITUTE, renowned for its academic rigor, innovative teaching methodologies, and commitment to student well-being. Our journey has been marked by continuous improvement and a dedication to nurturing future leaders.
          </p>
          <img src="https://picsum.photos/seed/schoolhistory/800/400" alt="School History" className="rounded-lg shadow-md w-full object-cover h-64 md:h-96" />
        </div>
      </section>

      <section className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="grid md:grid-cols-3 gap-8">
          <Card 
            title="Our Mission" 
            description="To provide a stimulating learning environment with a technological orientation, which maximizes individual potential and ensures that students of all ability levels are well-equipped to meet the challenges of education, work, and life."
            icon={<LightBulbIcon className="w-10 h-10 text-brand-primary" />} /* Light orange icon for cards */
          />
          <Card 
            title="Our Vision" 
            description="To be a center of educational excellence, inspiring students to achieve their fullest potential and become responsible, compassionate global citizens through a balanced and holistic approach to learning."
            icon={<BookOpenIcon className="w-10 h-10 text-brand-primary" />} /* Light orange icon */
          />
          <Card 
            title="Our Core Values" 
            description="Integrity, Respect, Excellence, Collaboration, and Lifelong Learning form the bedrock of our institution, guiding our actions and decisions."
            icon={<UsersIcon className="w-10 h-10 text-brand-primary" />} /* Light orange icon */
          />
        </div>
      </section>
      
      <section id="faculty" className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <SectionTitle title="Meet Our Leadership Team" subtitle="Dedicated professionals guiding our students to success." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-brand-surface p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-brand-primary" /* Light orange border */
              />
              <h4 className="text-xl font-semibold text-brand-secondary mb-1 font-serif">{member.name}</h4> {/* Deeper orange name */}
              <p className="text-brand-primary font-medium mb-2">{member.role}</p> {/* Light orange role */}
              <p className="text-sm text-brand-text-secondary">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-primary text-brand-text-on-primary p-8 md:p-12 rounded-lg shadow-xl text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}> {/* Light orange bg, dark grey text */}
        <h2 className="text-3xl font-bold mb-4 font-serif">Our Campus</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Explore our state-of-the-art facilities designed to provide an optimal learning environment. From modern classrooms to well-equipped labs and sports grounds, our campus is built for growth.
        </p>
        <img src="https://picsum.photos/seed/campusview/1000/500" alt="School Campus" className="rounded-lg shadow-md w-full object-cover h-64 md:h-96 mt-6" />
      </section>
    </div>
  );
};

export default AboutUsPage;
