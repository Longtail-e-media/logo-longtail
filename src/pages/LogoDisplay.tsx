import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../interfaces/types';

interface LogoDisplayProps {
  logos: Logo[];
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logos }) => {
  if (!logos || logos.length === 0) return <p className='mt-16 text-center text-base md:text-4xl'>No logos found.</p>;

  return (
    <main className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {logos.map((logo: Logo, index) => (
        <Link
          to={`/logo/${logo.name}`}
          // key={logo.id}
          key={index}
          className="border p-4 text-center shadow-sm transition-all duration-100 hover:shadow bg-white flex items-center justify-center"
        >
          <img
            src={logo.img_thumb}
            alt={logo.title}
            className="aspect-square size-36 md:size-48 bg-transparent object-contain"
            draggable="false"
          />
        </Link>
      ))}
    </main>
  );
};

export default LogoDisplay;
