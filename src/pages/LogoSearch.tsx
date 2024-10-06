import React, { useState } from 'react';
import { logoDetails } from '../constants/data';
import { Logo } from '../interfaces/types';

const LogoSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // Search term state

  // Function to filter logos based on search term (name or title)
  const filteredLogos = logoDetails.filter(
    (logo: Logo) =>
      logo.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Match against name
      logo.title.toLowerCase().includes(searchTerm.toLowerCase()), // Match against title
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Logo Search</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or title..."
        value={searchTerm} // Bind input to searchTerm state
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
        className="mb-4 w-full rounded-md border border-gray-300 p-2"
      />

      {/* Display filtered logos */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredLogos.length > 0 ? (
          filteredLogos.map((logo: Logo, index) => (
            <div key={index} className="rounded-md border p-4 shadow">
              <img src={logo.img_thumb} alt={logo.name} className="mb-2 h-20" />
              <h2 className="text-xl font-semibold">{logo.title}</h2>
              <p className="mb-2 text-sm text-gray-500">{logo.content}</p>
              <p className="text-sm text-gray-400">Added: {logo.added_date}</p>
            </div>
          ))
        ) : (
          // Show this message if no logos are found
          <p className="text-center text-gray-500">No logos found.</p>
        )}
      </div>
    </div>
  );
};

export default LogoSearch;
