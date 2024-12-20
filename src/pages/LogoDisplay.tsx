import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../interfaces/types';
import Error404 from '../layouts/Error404';

interface LogoDisplayProps {
  isAdmin: boolean;
  logos: Logo[];
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logos }) => {
  const [visibleItems, setVisibleItems] = useState(36);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 24);
  };

  if (!logos || logos.length === 0)
    return (
     <Error404 displayText="No Logo Found."/>
    );

  return (
    <>
      <main>
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
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
              className="rounded border border-white bg-logo px-4 py-2 font-bold text-white shadow transition-all duration-300 ease-in-out hover:scale-105 hover:bg-logo/80"
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
