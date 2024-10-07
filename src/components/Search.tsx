import React, { useState, useEffect } from 'react';
import { logoDetails } from '../constants/data';
import { Logo } from '../interfaces/types';
// import { TbSearch } from 'react-icons/tb';

interface SearchProps {
  setFilteredLogos: React.Dispatch<React.SetStateAction<Logo[]>>;
}

const Search: React.FC<SearchProps> = ({ setFilteredLogos }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const filtered = logoDetails.filter(
      (logo) =>
        logo.name.toLowerCase().includes(query.toLowerCase()) ||
        logo.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredLogos(filtered);
  }, [query, setFilteredLogos]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="relative flex w-full max-w-56 items-center gap-3 border-b-2 border-gray-300 px-2 md:max-w-md">
        {/* <TbSearch className="absolute left-0 top-1/2 transform -translate-y-1/2 text-light text-sm md:text-base" /> */}
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
        <input
          type="text"
          placeholder="Search for logos..."
          value={query}
          onChange={handleSearch}
          className="placeholder-dark w-full bg-transparent py-3 text-base text-black transition duration-200 focus:outline-none md:text-base"
        />
      </div>
    </>
  );
};

export default Search;
