import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../interfaces/types';
import { logoDetails } from '../constants/data';

interface LogoDisplayProps {
  logos: Logo[];
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logos }) => {
  const [visibleItems, setVisibleItems] = useState(36);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 24);
  };

  if (!logos || logos.length === 0) return <p>loading...</p>;

  return (
    <>
      <main>
        <section className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {logoDetails.slice(0, visibleItems).map((logo: Logo, index) => (
            <Link
              to={`/logo/${logo.name}`}
              key={index}
              className="flex items-center justify-center border bg-white p-4 text-center shadow-sm transition-all duration-100 hover:shadow md:px-4 md:py-8"
            >
              <img
                src={logo.logoFormats.img_svg}
                alt={logo.title}
                className="aspect-square size-36 bg-transparent object-contain md:size-48"
                draggable="false"
              />
            </Link>
          ))}
        </section>

        {logoDetails.length > visibleItems && (
          <div className="mt-14 flex items-center justify-center">
            <button
              onClick={handleLoadMore}
              className="bg-logo hover:bg-logo/80 rounded border border-white px-4 py-2 font-bold text-white shadow transition-all duration-300 ease-in-out hover:scale-105"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default LogoDisplay;
