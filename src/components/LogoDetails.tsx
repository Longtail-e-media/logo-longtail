import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { logoDetails } from '../constants/data';
import { Logo } from '../interfaces/types';

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={handleOverlayClick}
    >
      <div className="animate-scaleIn relative size-full scale-0 rounded-lg shadow-lg transition-all duration-300 ease-linear md:size-4/5">
        <button
          className="absolute right-4 top-3 text-4xl text-gray-800"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="grid h-full grid-cols-1 gap-0 md:grid-cols-3">
          <div className="flex items-center justify-center bg-white px-12 md:col-span-2">
            <img
              src={logo.logoFormats.img_svg}
              alt={logo.title}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="col-span-1 bg-gray-100 p-8 pt-14">
            <h2 className="mb-4 text-2xl font-bold">{logo.title}</h2>
            <p className="max-h-48 overflow-y-auto text-pretty text-justify text-gray-700 md:max-h-80">
              {logo.content}
            </p>
            <hr className="my-6 border-gray-400" />
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
    <p className="mb-6 text-lg font-semibold">Download Links:</p>
    <ul className="flex items-center gap-4">
      {Object.entries(logoFormats).map(([key, value]) => (
        <li key={key}>
          <a
            href={value}
            className="rounded-full border border-gray-700/40 bg-white px-6 py-2 font-bold text-gray-700 shadow-md hover:bg-gray-300"
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
