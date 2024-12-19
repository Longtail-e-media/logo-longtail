import React from 'react';
import Search from './Search';
import logoLongtail from '../assets/logo.svg';
import { Logo } from '../interfaces/types';
import { Link, NavLink } from 'react-router-dom';

interface NavbarProps {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredLogos: React.Dispatch<React.SetStateAction<Logo[]>>;
}
const Navbar: React.FC<NavbarProps> = ({
  isAdmin,
  setIsAdmin,
  setFilteredLogos,
}) => {
  const handleLogout = () => setIsAdmin(false);

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-gray-100 px-5 py-2">
      <h1 className="w-32">
        <Link to="/">
          <img src={logoLongtail} alt="Logo Longtail" className="h-8" />
        </Link>
      </h1>
      <Search setFilteredLogos={setFilteredLogos} />
      <ul className="flex items-center gap-6">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? 'font-extrabold' : 'font-bold'} text-logo`
            }
          >
            About
          </NavLink>
        </li>
        {isAdmin ? (
          <>
            <span className="font-bold text-logo">Hello Admin</span>
            <button
              onClick={handleLogout}
              className="text-sm font-bold text-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <li>
            <Link
              to="/admin"
              className={`rounded-full bg-logo px-6 py-2 text-white`}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
