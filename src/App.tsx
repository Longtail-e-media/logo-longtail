import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import LogoDisplay from './pages/LogoDisplay';
import LogoDetails from './components/LogoDetails';
import { logoDetails } from './constants/data';
import { Logo } from './interfaces/types';
import About from './pages/About';

const App: React.FC = () => {
  const [filteredLogos, setFilteredLogos] = useState<Logo[]>(logoDetails);

  return (
    <Router>
      <Navbar setFilteredLogos={setFilteredLogos} />
      <Routes>
        <Route path="/" element={<LogoDisplay logos={filteredLogos} />} />
        <Route path="/logos/:name" element={<LogoDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
