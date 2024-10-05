import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { logoDetails, Logo } from '../constants/data';

const LogoDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const logo = logoDetails.find((logo: Logo) => logo.name === name);

  if (!logo) {
    return null; // Handle case where logo is not found
  }

  const closeModal = () => {
    navigate(-1);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="relative w-3/4 max-w-4xl rounded-lg bg-white p-8 shadow-lg transition-transform transform scale-0 animate-scaleIn">
        <button
          className="absolute right-4 top-4 text-xl text-gray-600"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={logo.logoFormats.img_svg}
              alt={logo.title}
              className="h-auto w-full max-w-md object-contain"
            />
          </div>
          <div className="pl-6">
            <h2 className="mb-4 text-2xl font-bold">{logo.title}</h2>
            <p className="mb-4 text-gray-700">{logo.content}</p>
            <DownloadLinks logoFormats={logo.logoFormats} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for download links
const DownloadLinks: React.FC<{ logoFormats: Logo['logoFormats'] }> = ({
  logoFormats,
}) => (
  <div>
    <p className="mb-2 text-lg font-semibold">Download Links:</p>
    <ul>
      {Object.entries(logoFormats).map(([key, value]) => (
        <li key={key}>
          <a
            href={value}
            className="text-blue-500 hover:underline"
            download
          >
            {key.split('_')[1].toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default LogoDetails;
