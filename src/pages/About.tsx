import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main className="container max-w-4xl text-center">
      <div className="space-y-8">
        <h1 className="mb-4 text-4xl font-bold text-logo">
          Get to know us
        </h1>
        <p className="text-pretty text-gray-800">
          Apex of any branding begins with logo and Longtail logo pioneers in
          designing the meaningful, beautiful as well as truthful symbols for
          all subjects and businesses.
        </p>
        <p className="text-pretty text-gray-800">
          Welcome to logo.longtail.info where you can explore logos in best
          quality available. You can freely use these logos as per brand
          guidelines of respective owner. Your suggestions are highly
          appreciated.
        </p>
      </div>

      <div className="mt-16">
        <Link
          to="/"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-logo px-6 py-1 font-bold text-white"
        >
          <i className="text-2xl transition-all duration-300 group-hover:-translate-x-2">
            &larr;
          </i>
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default About;
