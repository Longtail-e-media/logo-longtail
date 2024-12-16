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
import useFetchLogos from './hooks/useFetchLogos';
// import Loader from './components/Loader';

const App: React.FC = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [filteredLogos, setFilteredLogos] = useState<Logo[]>([]);

  const { data, loading, error } = useFetchLogos(`${apiUrl}getLogo.php`);

  React.useEffect(() => {
    if (data.length > 0) {
      setFilteredLogos(data);
    }
  }, [data]);

  if (loading) return <>{/* <Loader /> */}</>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Router>
      <Navbar setFilteredLogos={setFilteredLogos} />
      <Routes>
        <Route path="/" element={<LogoDisplay logos={filteredLogos} />} />
        <Route path="/logo/:name" element={<LogoDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
