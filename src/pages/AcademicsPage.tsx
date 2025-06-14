import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Facility } from '../types';
import { AcademicCapIcon, BeakerIcon, ComputerDesktopIcon, BookOpenIcon, MusicalNoteIcon, PaintBrushIcon, TrophyIcon } from '../components/IconComponents';
import Button from '../components/Button';

const facilities: Facility[] = [
  { name: "Science Labs", description: "State-of-the-art physics, chemistry, and biology labs for hands-on learning.", imageUrl: "https://picsum.photos/seed/sciencelab/600/400", icon: <BeakerIcon className="w-12 h-12 text-brand-primary" /> }, /* Light orange for card icons */
  { name: "Computer Lab", description: "Modern computer lab with high-speed internet and latest software.", imageUrl: "https://picsum.photos/seed/computerlab/600/400", icon: <ComputerDesktopIcon className="w-12 h-12 text-brand-primary" /> },
  { name: "Library", description: "A vast collection of books, journals, and resources to foster reading habits.", imageUrl: "https://picsum.photos/seed/library/600/400", icon: <BookOpenIcon className="w-12 h-12 text-brand-primary" /> },
  { name: "Sports Facilities", description: "Extensive grounds for cricket, football, basketball, and indoor games.", imageUrl: "https://picsum.photos/seed/sports/600/400", icon: <TrophyIcon className="w-12 h-12 text-brand-primary" /> },
  { name: "Art & Music Rooms", description: "Dedicated spaces for students to explore their creativity in arts and music.", imageUrl: "https://picsum.photos/seed/artmusic/600/400", icon: <PaintBrushIcon className="w-12 h-12 text-brand-primary" /> },
  // { name: "Auditorium", description: "A large, well-equipped auditorium for events, performances, and assemblies.", imageUrl: "https://picsum.photos/seed/auditorium/600/400", icon: <MusicalNoteIcon className="w-12 h-12 text-brand-primary" /> },
];

const coCurricularActivities = [
  { name: "Debate Club", description: "Enhancing public speaking and critical thinking skills.", icon: <i className="fas fa-comments text-3xl text-brand-primary"></i> }, {/* Light Orange */},
  { name: "Science Club", description: "Exploring scientific concepts through experiments and projects.", icon: <i className="fas fa-flask text-3xl text-brand-primary"></i> },
  { name: "Eco Club", description: "Promoting environmental awareness and sustainability.", icon: <i className="fas fa-leaf text-3xl text-brand-primary"></i> },
  { name: "Literary Club", description: "Fostering a love for literature through reading and writing.", icon: <i className="fas fa-book-reader text-3xl text-brand-primary"></i> },
  { name: "Robotics Club", description: "Engaging students in STEM with hands-on robotics projects.", icon: <i className="fas fa-robot text-3xl text-brand-primary"></i> },
  { name: "Photography Club", description: "Capturing moments and learning the art of photography.", icon: <i className="fas fa-camera-retro text-3xl text-brand-primary"></i> },
];

const AcademicsPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <SectionTitle title="Academics at SMI Gobardanga" subtitle="Fostering Excellence in Learning" />

      <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <SectionTitle title="Our Facilities" subtitle="State-of-the-art infrastructure to support learning and growth." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              title={facility.name}
              description={facility.description}
              imageUrl={facility.imageUrl}
              icon={facility.icon} /* Icon color is set within facilities data */
            />
          ))}
        </div>
      </section>
      
      <section id="co-curricular" className="bg-brand-surface p-8 md:p-12 rounded-lg shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <SectionTitle title="Co-curricular Activities" subtitle="Beyond the classroom: nurturing talents and interests." />
        <p className="text-brand-text-secondary mb-8 text-center max-w-2xl mx-auto leading-relaxed">
          We believe that education extends beyond textbooks. Our diverse range of co-curricular activities provides students with opportunities to explore their passions, develop new skills, and build confidence.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coCurricularActivities.map((activity, index) => (
            <div key={index} className="flex items-start p-4 bg-brand-background rounded-lg shadow hover:shadow-md transition-shadow duration-300"> {/* Use page bg for contrast */}
              <div className="mr-4">{activity.icon}</div> {/* Icon color set in data */}
              <div>
                <h4 className="text-lg font-semibold text-brand-secondary mb-1">{activity.name}</h4> {/* Deeper orange title */}
                <p className="text-sm text-brand-text-secondary">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-primary text-brand-text-on-primary p-8 md:p-12 rounded-lg shadow-xl text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}> {/* Light orange bg */}
        <h2 className="text-3xl font-bold mb-4 font-serif">Academic Support</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          We offer various academic support programs, including remedial classes, counseling, and career guidance, to ensure every student receives the assistance they need to succeed.
        </p>
        <NavLink to="/contact">
          <Button variant="secondary" size="md" className="font-semibold px-8 py-3"> {/* Deeper orange bg, white text */}
            Inquire Now
          </Button>
        </NavLink>
      </section>
    </div>
  );
};

export default AcademicsPage;
