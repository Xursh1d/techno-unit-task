import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
