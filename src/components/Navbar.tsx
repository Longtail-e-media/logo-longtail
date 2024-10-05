import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between bg-gray-100 px-4 py-4">
        <h1>Logo</h1>
        <div className="mx-4 flex w-full max-w-md">
          <input
            type="text"
            className="w-full rounded-l-md p-2 focus:outline-none"
            placeholder="Search for the Logo"
          />
          <button className="rounded-r-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>
        <a href="">About</a>
      </nav>
    </>
  );
};

export default Navbar;
