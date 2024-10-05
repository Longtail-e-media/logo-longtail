import React from 'react';
import { Link } from 'react-router-dom';
import { logoDetails, Logo } from '../constants/data';

const LogoDisplay: React.FC = () => {
  return (
    <>
      <main className="grid grid-cols-6 gap-4">
        {logoDetails.map((logo: Logo) => (
          <Link
            to={`/logos/${logo.name}`}
            key={logo.id}
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
    </>
  );
};

export default LogoDisplay;
