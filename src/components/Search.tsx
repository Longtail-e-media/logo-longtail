import React, { useState, useEffect } from 'react';
import { Logo } from '../interfaces/types';
import useFetchLogos from '../hooks/useFetchLogos';
// import Loader from './Loader';

interface SearchProps {
  setFilteredLogos: React.Dispatch<React.SetStateAction<Logo[]>>;
}

const Search: React.FC<SearchProps> = ({ setFilteredLogos }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  // Declare state before any return or condition
  const [query, setQuery] = useState('');

  // Fetch logos
  const { data, loading, error } = useFetchLogos(`${apiUrl}getLogo.php`);

  // UseEffect to filter logos based on query
  useEffect(() => {
    if (data && query) {
      const filtered = data.filter(
        (logo: Logo) =>
          logo.name.toLowerCase().includes(query.toLowerCase()) ||
          logo.title.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredLogos(filtered);
    } else {
      setFilteredLogos(data); // If no query, show all logos
    }
  }, [query, data, setFilteredLogos]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  if (loading) return <>{/* <Loader /> */}</>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="relative flex w-full items-center gap-3 border-b-2 border-gray-300 bg-white px-2 md:max-w-lg">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-xl"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <input
        type="text"
        placeholder="Search for logos ..."
        value={query}
        onChange={handleSearch}
        className="w-full bg-transparent py-3 text-base text-black placeholder-dark transition duration-200 focus:outline-none md:text-base"
      />
    </div>
  );
};

export default Search;
