import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogoDisplay from './pages/LogoDisplay';
import LogoDetails from './components/LogoDetails';
import { Logo } from './interfaces/types';
import About from './pages/About';
import useFetchLogos from './hooks/useFetchLogos';
import Error404 from './layouts/Error404';
import Login from './pages/Login';
// import Loader from './components/Loader';

const App: React.FC = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [filteredLogos, setFilteredLogos] = useState<Logo[]>([]);

  const [isAdmin, setIsAdmin] = useState(false);

  const { data, loading, error } = useFetchLogos(`${apiUrl}getLogo.php`);

  React.useEffect(() => {
    if (data.length > 0) {
      setFilteredLogos(data);
    }
  }, [data]);

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedIsAdmin === 'true') {
      setIsAdmin(true);
    }
  }, []);

  if (loading) return <>{/* <Loader /> */}</>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Router>
      <Navbar
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        setFilteredLogos={setFilteredLogos}
      />
      <Routes>
        <Route
          path="/"
          element={<LogoDisplay logos={filteredLogos} isAdmin={isAdmin} />}
        />
        <Route path="/logo/:name" element={<LogoDetails isAdmin={isAdmin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Login setIsAdmin={setIsAdmin} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
