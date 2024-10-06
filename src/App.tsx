import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogoDetails from './components/LogoDetails';
import Navbar from './components/Navbar';
import LogoDisplay from './pages/LogoDisplay';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LogoDisplay />} />

        <Route path="/logos/:name" element={<LogoDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
