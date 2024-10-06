import React from 'react';
import Search from './Search';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between bg-gray-100 px-4 py-4">
        <h1>Logo</h1>
        <div className="mx-4 flex w-full max-w-md">
          <Search />
        </div>
        <a href="">About</a>
      </nav>
    </>
  );
};

export default Navbar;
