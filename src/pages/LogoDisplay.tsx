import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../interfaces/types';
import Error404 from '../layouts/Error404';
import SkeletonLoader from '../components/SkeletonLoader';

interface LogoDisplayProps {
  isAdmin: boolean;
  logos: Logo[];
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logos }) => {
  const [visibleItems, setVisibleItems] = useState(36);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Initialize loading states for logos that don't exist in the current state
    const newLoadingStates: Record<string, boolean> = {};
    logos.forEach((logo) => {
      if (!loadingStates.hasOwnProperty(logo.name)) {
        newLoadingStates[logo.name] = true;
      }
    });
    if (Object.keys(newLoadingStates).length > 0) {
      setLoadingStates((prevStates) => ({ ...prevStates, ...newLoadingStates }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logos]);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 24);
  };

  const handleImageLoad = (logoName: string) => {
    setLoadingStates((prevStates) => ({
      ...prevStates,
      [logoName]: false,
    }));
  };

  if (!logos || logos.length === 0) {
    return <Error404 displayText="No Logo Found." />;
  }

  return (
    <>
      <main>
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
          {logos.slice(0, visibleItems).map((logo: Logo) => (
            <div key={logo.name} className="relative">
              {loadingStates[logo.name] && <SkeletonLoader />}
              <Link
                to={`/logo/${logo.name}`}
                className={`flex items-center justify-center border bg-white p-4 text-center shadow-sm transition-all duration-100 hover:shadow md:px-4 md:py-8 ${
                  loadingStates[logo.name] ? 'hidden' : 'block'
                }`}
              >
                <img
                  src={logo.logoFormats.img_svg}
                  alt={logo.title}
                  className="aspect-square size-36 bg-transparent object-contain md:size-48"
                  draggable="false"
                  onLoad={() => handleImageLoad(logo.name)} // Mark logo as loaded
                  onError={() => handleImageLoad(logo.name)} // Handle error state
                />
              </Link>
            </div>
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
