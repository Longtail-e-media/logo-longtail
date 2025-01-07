import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Logo } from '../interfaces/types';
import useFetchLogos from '../hooks/useFetchLogos';
import Error404 from '../layouts/Error404';

interface LogoDetailsProps {
  isAdmin: boolean;
}

const LogoDetails: React.FC<LogoDetailsProps> = ({ isAdmin }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  // Fetch logos
  const { data, loading, error } = useFetchLogos(`${apiUrl}getLogo.php`);

  if (loading) return null;
  if (error) {
    console.error(error);
    return null;
  }

  const logo = data.find((logo: Logo) => logo.name === name);

  if (!logo) {
    return <Error404 displayText="Logo not Found." />;
  }

  const closeModal = () => navigate(-1);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) closeModal();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={handleOverlayClick}
    >
      <div className="relative size-full scale-0 animate-scaleIn rounded-lg shadow-lg transition-all duration-300 ease-linear md:h-screen md:w-full">
        <button
          className="absolute right-6 top-3 text-5xl text-gray-800"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="grid h-full grid-cols-1 gap-0 md:grid-cols-3">
          <div className="flex items-center justify-center bg-white px-12 md:col-span-2">
            {/* <img
              src={logo.img_thumb}
              // src={logo.logoFormats.img_svg}
              alt={logo.title}
              className="h-auto max-h-[80vh] w-full object-contain"
            /> */}
            <img
              // src={isAdmin ? logo.logoFormats.img_svg : logo.img_thumb}
              src={
                logo.logoFormats.img_svg ||
                logo.logoFormats.img_png ||
                logo.logoFormats.img_jpg ||
                logo.logoFormats.img_pdf
              }
              alt={logo.title}
              className="h-auto max-h-[80vh] w-full object-contain"
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
          </div>
          <div className="col-span-1 bg-gray-100 p-8 pt-14">
            {/* {isAdmin && (
              <p className="-mt-6 mb-8 w-max rounded-full border border-green-600 bg-green-200 px-4 py-2 text-sm font-bold text-green-800">
                Admin
              </p>
            )} */}
            <h2 className="mb-4 text-2xl font-bold">{logo.title}</h2>
            <p className="max-h-48 overflow-y-auto text-pretty text-justify text-gray-700 md:max-h-80">
              {logo.content}
            </p>
            <hr className="my-6 border-gray-400" />
            <DownloadLinks logoFormats={logo.logoFormats} isAdmin={isAdmin} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for download links
const DownloadLinks: React.FC<{
  logoFormats: Logo['logoFormats'];
  isAdmin: boolean;
}> = ({ logoFormats, isAdmin }) => (
  <div>
    <p className="mb-6 text-lg font-semibold">Download Links:</p>
    <ul className="flex items-center gap-4">
      {Object.entries(logoFormats).map(([key, value]) => {
        if (!value) return null;
        if (!isAdmin && (key === 'img_svg' || key === 'img_pdf')) return null; // Hide 'img_svg' and 'img_pdf' if not admin

        return (
          <li key={key}>
            <Link
              to={`https://longtail.info/logo/api/v1/downloadImage.php/?url=${value}`}
              className="rounded-full border border-gray-700/40 bg-white px-6 py-2 font-bold text-gray-700 shadow-md hover:bg-gray-300"
              download
              target="_blank"
            >
              {key.split('_')[1].toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default LogoDetails;
