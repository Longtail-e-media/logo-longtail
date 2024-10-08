import React from 'react';

const Loader: React.FC = () => {
  return (
    <>
      <div className="z-50 flex h-screen w-full items-center justify-center">
        <div className="size-32 animate-spin rounded-full border-b-2 border-t-2 border-[#bf1f49]"></div>
      </div>
    </>
  );
};

export default Loader;
