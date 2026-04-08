import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import page components
import Home from './pages/Home';
import Books from './pages/Books';
import About from './pages/About';
import Programmes from './pages/Programmes';
import Categories from './pages/Categories';
import PGD from './pages/PGD';
import MSC from './pages/MSC';
import PHD from './pages/PHD';
import AI from './pages/AI';
import DataScience from './pages/DataScience';
import Cybersecurity from './pages/Cybersecurity';
import Journal from './pages/Journal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/pgd" element={<PGD />} />
        <Route path="/msc" element={<MSC />} />
        <Route path="/phd" element={<PHD />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </Router>
  );
}

export default App;
