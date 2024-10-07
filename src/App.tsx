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
import { Logo } from './interfaces/types';
import About from './pages/About';
import Test from './pages/Test';
import useFetchLogos from './hooks/useFetchLogos';

const App: React.FC = () => {
  // Declare useState before any conditional logic
  const [filteredLogos, setFilteredLogos] = useState<Logo[]>([]);

  const { data, loading, error } = useFetchLogos(
    'https://longtail.info/logo/dynamic/api/v1/getLogo.php/',
  );

  // Make sure to update filteredLogos once data is fetched
  React.useEffect(() => {
    if (data.length > 0) {
      setFilteredLogos(data);
    }
  }, [data]);

  // Render loading or error state if applicable
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Router>
      <Navbar setFilteredLogos={setFilteredLogos} />
      <Routes>
        <Route path="/" element={<LogoDisplay logos={filteredLogos} />} />
        <Route path="/test" element={<Test />} />
        <Route path="/logos/:name" element={<LogoDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
