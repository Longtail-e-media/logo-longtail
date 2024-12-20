import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from '../assets/error.svg';

interface Error404Props {
  displayText?: string;
}

const Error404: React.FC<Error404Props> = ({ displayText }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <img
        src={error}
        alt="Error 404"
        className="mb-8 w-96 max-w-md select-none md:w-1/2"
        draggable="false"
      />
      {/* <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p> */}
      <button
        type="button"
        onClick={goHome}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-logo px-6 py-2 font-bold text-white"
      >
        {displayText || 'Go Home'}
      </button>
    </div>
  );
};

export default Error404;
