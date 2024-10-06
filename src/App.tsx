import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogoDetails from './components/LogoDetails';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LogoSearch from './pages/LogoSearch';

const App: React.FC = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} />

        <Route path="/logos/:name" element={<LogoDetails />} /> */}

        <Route path="/" element={<LogoSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
