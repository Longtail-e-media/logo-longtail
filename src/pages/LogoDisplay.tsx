import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../interfaces/types';

interface LogoDisplayProps {
  logos: Logo[];
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logos }) => {
  if (!logos || logos.length === 0) return <p>No logos found.</p>;

  return (
    <main className="grid grid-cols-6 gap-4">
      {logos.map((logo: Logo, index) => (
        <Link
          to={`/logos/${logo.name}`}
          // key={logo.id}
          key={index}
          className="border p-4 text-center shadow-sm transition-all duration-100 hover:shadow"
        >
          <img
            src={logo.img_thumb}
            alt={logo.title}
            className="aspect-square h-48 w-full bg-transparent object-contain"
            draggable="false"
          />
        </Link>
      ))}
    </main>
  );
};

export default LogoDisplay;
