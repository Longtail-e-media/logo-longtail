import React, { useState, useEffect } from 'react';
import { logoDetails } from '../constants/data';
import { Logo } from '../interfaces/types';

interface SearchProps {
  setFilteredLogos: React.Dispatch<React.SetStateAction<Logo[]>>;
}

const Search: React.FC<SearchProps> = ({ setFilteredLogos }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const filtered = logoDetails.filter((logo) =>
      logo.name.toLowerCase().includes(query.toLowerCase()) ||
      logo.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLogos(filtered);
  }, [query, setFilteredLogos]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search logos..."
      value={query}
      onChange={handleSearch}
      className="w-full border p-2"
    />
  );
};

export default Search;
