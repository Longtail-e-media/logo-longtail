import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Logo } from '../interfaces/types';
import useFetchLogos from '../hooks/useFetchLogos';

interface LogoDetailsProps {
  isAdmin: boolean;
}

const LogoDetails: React.FC<LogoDetailsProps> = ({isAdmin}) => {

  console.log('isAdmin', isAdmin);
  
  const apiUrl = import.meta.env.VITE_API_URL;

  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  // Fetch logos
  const { data, loading, error } = useFetchLogos(`${apiUrl}getLogo.php`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const logo = data.find((logo: Logo) => logo.name === name);

  if (!logo) {
    return (
      <section className="flex h-screen w-full flex-col items-center justify-center gap-8">
        <p className="text-center text-base md:text-4xl">Logo not found</p>
        <Link
          to="/"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-logo px-6 py-1 text-xs font-bold text-white md:text-base"
        >
          <i className="text-base transition-all duration-300 group-hover:-translate-x-2 md:text-2xl">
            &larr;
          </i>
          Back to Home
        </Link>
      </section>
    );
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
      <div className="relative size-full scale-0 animate-scaleIn rounded-lg shadow-lg transition-all duration-300 ease-linear md:h-[85vh] md:w-4/5">
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
              className="h-auto max-h-[80vh] w-full object-contain"
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
      {Object.entries(logoFormats).map(
        ([key, value]) =>
          value && (
            <li key={key}>
              <Link
                to={`https://longtail.info/logo/dynamic/api/v1/downloadImage.php/?url=${value}`}
                className="rounded-full border border-gray-700/40 bg-white px-6 py-2 font-bold text-gray-700 shadow-md hover:bg-gray-300"
                download
                // target="_blank"
              >
                {key.split('_')[1].toUpperCase()}
              </Link>
            </li>
          ),
      )}
    </ul>
  </div>
);

export default LogoDetails;
