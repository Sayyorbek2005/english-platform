import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Resumes from './components/resumes/Resumes';

import Sidebar from './components/sidebar/Sidebar';

import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react'; // useEffect ham kerak bo'ladi







function App() {


  
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true, // faqat bir marta animatsiya qilinadi
    });
  }, []);


  
  return (
    <div className="App">
    <Sidebar/>
    <Home />
    <About />
    <Resumes />
    <Contact/>
    </div>
  );
}

export default App;
