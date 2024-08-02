// import './App.css';
import React from 'react';
import Header from './Components/Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home.js';
import AboutUs from './Pages/AboutUs.js';
import OurServices from './Pages/OurServices.js';
import Employers from './Pages/Employers.js';
import ContactUs from './Pages/ContactUs.js';
import JobSeekers from './Pages/JobSeekers.js';
import JsApp from './Pages/ApplicationForms/JobSeekers.js';
import EmpApp from './Pages/ApplicationForms/employers.js';
import Layout from './Layout.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <Header />
      <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/job-seekers' element={<JobSeekers />}/>
        <Route path='/job-seekers-application' element={<JsApp />}/>
        <Route path='/employers' element={<Employers />}/>
        <Route path='/employers-application' element={<EmpApp />}/>
        <Route path='/our-services' element={<OurServices />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      </Layout>
      <Footer />
    </Router>


  );
}

export default App;
