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
// import Footer from './layouts/Footer';
// import Loader from './components/Loader';

const App: React.FC = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [filteredLogos, setFilteredLogos] = useState<Logo[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');

  const { data, loading, error } = useFetchLogos(`${apiUrl}getLogo.php`);

  React.useEffect(() => {
    if (data.length > 0) {
      setFilteredLogos(data);
    }
  }, [data]);

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    const storedUsername = localStorage.getItem('username');
    if (storedIsAdmin === 'true' && storedUsername) {
      setIsAdmin(true);
      setUsername(storedUsername);
    }
  }, []);

  if (loading) return null;
  if (error) {
    console.error(error);
    return null;
  }

  return (
    <Router basename="/logo/">
      <Navbar
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        setFilteredLogos={setFilteredLogos}
        username={username}
      />
      <Routes>
        <Route
          path="/"
          element={<LogoDisplay logos={filteredLogos} isAdmin={isAdmin} />}
        />
        <Route path="/logo/:name" element={<LogoDetails isAdmin={isAdmin} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admin"
          element={<Login setIsAdmin={setIsAdmin} setUsername={setUsername} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default App;
