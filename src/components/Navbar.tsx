import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from './Search';
import logoLongtail from '../assets/logo.svg';
import { Logo } from '../interfaces/types';

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
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const handleLogout = () => setIsAdmin(false);
  const toggleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gray-100 px-5 py-4 md:flex md:flex-row md:items-center md:gap-4 md:py-2">
        <div className="flex w-full justify-between md:w-auto md:flex-1">
          <h1 className="hidden items-center justify-start gap-4 md:flex">
            <Link to="/">
              <img src={logoLongtail} alt="Logo Longtail" className="h-8" />
            </Link>
          </h1>
          <div className="flex w-full items-center gap-4 md:hidden">
            <Search setFilteredLogos={setFilteredLogos} />
            <button className="text-gray-800" onClick={toggleSidenav}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden w-full md:flex md:flex-1 md:justify-center">
          <Search setFilteredLogos={setFilteredLogos} />
        </div>
        <ul className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-4">
          {isAdmin ? (
            <>
              <span className="font-bold capitalize text-logo">
                Hello Admin!
              </span>
              <button
                onClick={handleLogout}
                className="rounded-full bg-logo px-4 py-1 text-sm font-bold text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <li>
              <Link
                to="/admin"
                className="hidden rounded-full bg-logo px-6 py-2 text-white"
              >
                Login
              </Link>
            </li>
          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? 'font-extrabold' : 'font-bold'} text-lg text-logo`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      {isSidenavOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="fixed left-0 top-0 h-full w-4/5 max-w-xs bg-gray-100 p-4">
            <div className="mb-6 flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <img
                  src={logoLongtail}
                  alt="Logo Longtail"
                  className="size-8 object-contain"
                />
              </Link>
              <button onClick={toggleSidenav}>
                <svg
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <hr className="border-dark/20" />
            <ul>
              {isAdmin ? (
                <>
                  <li className="mb-12 mt-5 flex items-center justify-between gap-4">
                    <span className="font-bold capitalize text-logo">
                      Hello Admin!
                    </span>
                    <button
                      onClick={handleLogout}
                      className="rounded-full bg-logo px-4 py-1 text-sm font-bold text-white"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/admin"
                    className="hidden rounded-full bg-logo px-6 py-2 text-white"
                  >
                    Login
                  </Link>
                </li>
              )}

              <li className="my-4">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? 'font-extrabold' : 'font-bold'} text-logo`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
