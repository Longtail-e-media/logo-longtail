import React from 'react';
import Search from './Search';
import logoLongtail from '../assets/logo.svg';
import { Logo } from '../interfaces/types';
import { Link, NavLink } from 'react-router-dom';

interface NavbarProps {
  setFilteredLogos: React.Dispatch<React.SetStateAction<Logo[]>>;
}

const Navbar: React.FC<NavbarProps> = ({ setFilteredLogos }) => {
  return (
    <nav className="fixed top-0 flex w-full items-center justify-between bg-gray-100 px-5 py-2">
      <h1>
        <Link to="/">
          <img src={logoLongtail} alt="Logo Longtail" className="h-8" />
        </Link>
      </h1>
      <Search setFilteredLogos={setFilteredLogos} />
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${isActive ? 'font-extrabold' : 'font-bold'} text-[#bf1f49]`
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
