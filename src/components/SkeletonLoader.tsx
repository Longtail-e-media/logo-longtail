import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="flex animate-pulse items-center justify-center border bg-white p-4 text-center shadow-sm md:px-4 md:py-8">
      <div className="aspect-square h-36 bg-gray-200 md:h-48"></div>
    </div>
  );
};

export default SkeletonLoader;
