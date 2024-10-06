import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogoDisplay from './pages/LogoDisplay';
import LogoDetails from './components/LogoDetails';
import { logoDetails } from './constants/data';
import { Logo } from './interfaces/types';

const App: React.FC = () => {
  const [filteredLogos, setFilteredLogos] = useState<Logo[]>(logoDetails);

  return (
    <Router>
      <Navbar setFilteredLogos={setFilteredLogos} />
      <Routes>
        <Route path="/" element={<LogoDisplay logos={filteredLogos} />} />
        <Route path="/logos/:name" element={<LogoDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
