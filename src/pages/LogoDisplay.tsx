import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../interfaces/types';

interface LogoDisplayProps {
  logos: Logo[];
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logos }) => {
  const [visibleItems, setVisibleItems] = useState(36);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 24);
  };

  if (!logos || logos.length === 0)
    return (
      <section className="flex h-screen w-full flex-col items-center justify-center gap-8">
        <p className="text-center text-base md:text-4xl">No logos found.</p>
        <Link
          to="/"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#bf1f49] px-6 py-1 text-xs font-bold text-white md:text-base"
        >
          <i className="text-base transition-all duration-300 group-hover:-translate-x-2 md:text-2xl">
            &larr;
          </i>
          Back to Home
        </Link>
      </section>
    );

  return (
    <>
      <main>
        <section className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {logos.slice(0, visibleItems).map((logo: Logo, index) => (
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

        {logos.length > visibleItems && (
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
