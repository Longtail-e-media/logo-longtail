import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Error404 from '../layouts/Error404';
import SkeletonLoader from '../components/SkeletonLoader';

interface LogoDisplayProps {
  isAdmin: boolean;
  logos: Logo[];
}

interface LogoFormats {
  img_svg: string;
  img_png: string;
  img_jpg: string;
  img_pdf: string;
}

interface Logo {
  name: string;
  title: string;
  logoFormats: LogoFormats;
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logos }) => {
  const [visibleItems, setVisibleItems] = useState<number>(36);
  const [loadingLogos, setLoadingLogos] = useState<Record<string, boolean>>({});

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 24);
  };

  const handleImageLoad = (logoName: string) => {
    setLoadingLogos((prevState) => ({
      ...prevState,
      [logoName]: false, // Mark the image as loaded
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
              {loadingLogos[logo.name] !== false && <SkeletonLoader />}
              <Link
                to={`/logo/${logo.name}`}
                className={`flex items-center flex-col justify-center border bg-white p-4 text-center shadow-sm transition-all duration-100 hover:shadow md:px-4 md:py-8 ${
                  loadingLogos[logo.name] === false ? '' : 'hidden'
                }`}
              >
                <img
                  src={
                    logo.logoFormats.img_svg ||
                    logo.logoFormats.img_png ||
                    logo.logoFormats.img_jpg ||
                    logo.logoFormats.img_pdf
                  }
                  alt={logo.title}
                  className="aspect-square size-36 bg-transparent object-contain md:size-48"
                  draggable="false"
                  onLoad={() => handleImageLoad(logo.name)}
                />
                 {/* <span className="mt-2 text-sm text-gray-500">
                  {logo.logoFormats.img_svg
                    ? 'img_svg'
                    : logo.logoFormats.img_png
                    ? 'img_png'
                    : logo.logoFormats.img_jpg
                    ? 'img_jpg'
                    : 'img_pdf'}
                </span> */}
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
