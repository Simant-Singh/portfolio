import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import About from './pages/About';
// import Contact from './pages/Contact';
import EducationCert from './pages/EducationCert';
import ProjectExp from './pages/Project_exp';
import Skills from './pages/Skills';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" />} />
        <Route
          path="/portfolio"
          element={
            <>
              <Frontpage />
              <About />
              <ProjectExp />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="portfolio/education_and_certifications"
          element={
            <>
              <EducationCert /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="portfolio/tech"
          element={
            <>
              <Skills />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
