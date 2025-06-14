
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout';
import HomePage from './src/pages/HomePage';
import AboutUsPage from './src/pages/AboutUsPage';
import AcademicsPage from './src/pages/AcademicsPage';
import AdmissionsPage from './src/pages/AdmissionsPage';
import ContactUsPage from './src/pages/ContactUsPage';
import NotFoundPage from './src/pages/NotFoundPage';
import MandatoryDisclosurePage from './src/pages/MandatoryDisclosurePage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosurePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
