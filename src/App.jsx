import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-950 text-white">
      {/* <Navbar /> */}
      <Hero />
      <About />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
