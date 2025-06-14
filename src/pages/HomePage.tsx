import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { BookOpenIcon, LightBulbIcon, UsersIcon, AcademicCapIcon } from '../components/IconComponents';
import Button from '../components/Button';
import Tab from '../components/Tab';

const whyChooseUsData = [
  {
    title: "Experienced Faculty",
    description: "Our dedicated and experienced educators are passionate about teaching and student success.",
    icon: <UsersIcon className="w-10 h-10" />, // Icon color handled by Card component
    link: "/about", 
    linkText: "Meet Our Team"
  },
  {
    title: "Holistic Development",
    description: "We focus on nurturing not just academic skills but also character, creativity, and critical thinking.",
    icon: <LightBulbIcon className="w-10 h-10" />, // Icon color handled by Card component
    link: "/academics", 
    linkText: "Explore Activities"
  },
  {
    title: "Green Campus",
    description: "Our lush green campus encourages students to learn surrounded by nature",
    icon: <BookOpenIcon className="w-10 h-10" />, // Icon color handled by Card component
    link: "/academics",
    linkText: "Learn More"
  },
];

const tabItems = [
  {
    id: 1,
    title: "Smart Classrooms",
    content: "Content for Smart Classrooms",
    image: "src/assets/photos/website/IMG-20200414-WA0016.jpg",
  },
  {
    id: 2,
    title: "Uninterrupted Electricity Power Backup",
    content: "Content for Uninterrupted Electricity Power Backup",
    image: "src/assets/photos/website/IMG-20200414-WA0017.jpg",
  },
  {
    id: 3,
    title: "Huge Playground with extra Activities Place",
    content: "Content for Huge Playground with extra Activities Place",
    image: "src/assets/photos/website/IMG-20200414-WA0018.jpg",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24">
<img
        src="src/assets/photos/main.jpg"
        alt="Main Building"
        className="w-full rounded-lg shadow-2xl animate-fade-in-up max-h-96 object-cover"
        loading="lazy"
      />
      <section className="animate-fade-in-up bg-brand-primary">
        <SectionTitle title="Why Choose Us?"/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {whyChooseUsData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              link={item.link}
              linkText={item.linkText}
            />
          ))}
        </div>
      </section>
      
      <section className="bg-brand-surface p-8 md:p-12 rounded-lg shadow-xl animate-fade-in-up">
        <SectionTitle title="Principal's Message" subtitle="A warm welcome from our leadership." align="left" />
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="https://picsum.photos/seed/principal/300/300" alt="Principal" className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg border-4 border-brand-primary" /> {/* Light orange border */}
          <div className="text-brand-text-primary">
            <h3 className="text-2xl font-semibold text-brand-secondary mb-2 font-serif">Nandita Debnath</h3> {/* Deeper orange name */}
            <p className="text-brand-text-secondary mb-4">
              "At SUDHIR MEMORIAL INSTITUTE GOBARDANGA, we believe in fostering an environment where every student can achieve their full potential. Our commitment is to provide a balanced education that develops academic excellence, strong character, and a lifelong love for learning. We are proud of our dedicated faculty, our engaged students, and our supportive community. Join us as we embark on a journey of discovery and growth."
            </p>
            <p className="text-brand-text-secondary">
              We invite you to explore our website and learn more about the vibrant educational experience we offer.
            </p>
          </div>
        </div>
      </section>


      <section className="animate-fade-in-up">
        <SectionTitle title="Our Facilities" subtitle="Explore our state-of-the-art facilities." />
        <Tab tabs={tabItems} />
      </section>

      <section className="bg-brand-primary text-brand-text-on-primary p-8 md:p-12 rounded-lg shadow-xl text-center animate-fade-in-up">
        <AcademicCapIcon className="w-16 h-16 mx-auto mb-4 text-brand-secondary" />
        <h2 className="text-3xl font-bold mb-4 font-serif">Ready to Join Us?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Explore our admissions process and take the first step towards an enriching educational journey at SUDHIR MEMORIAL INSTITUTE GOBARDANGA.
        </p>
        <NavLink to="/admissions">
          <Button variant="secondary" size="md" className="font-semibold px-8 py-3"> {/* Deeper orange bg, white text */}
            Learn About Admissions
          </Button>
        </NavLink>
      </section>
    </div>
  );
};

export default HomePage;
