import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <main className="container mx-auto px-4">
        <div className="mt-6 space-y-8">
          <h1 className="text-pretty text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-snug md:leading-snug text-logo">
            Apex of any branding begins with logo and pioneers in designing the
            meaningful, beautiful as well as truthful symbols for all subjects
            and businesses.
          </h1>
          <p className="max-w-xl text-pretty text-gray-800">
            Welcome to <strong>logo.longtail.info</strong> where you can explore
            logos in best quality available. You can freely use these logos as
            per brand guidelines of respective owner. Your suggestions are
            highly appreciated.
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-logo px-4 py-1 sm:px-6 font-bold text-white"
          >
            <i className="text-xl sm:text-2xl transition-all duration-300 group-hover:-translate-x-2">
              &larr;
            </i>
            Discover Logos
          </Link>
        </div>
      </main>
      <div className="bg-logo py-8 sm:py-12 mt-8">
        <div className="container mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Looking for a new logo design or want to join our creative team?
          </h3>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Reach out to us! For any inquiries, you can email us at{' '}
            <a
              href="mailto:info@longtail.info"
              className="bg-white px-1 text-logo underline hover:no-underline"
            >
              info@longtail.info
            </a>{' '}
            or call us directly at{' '}
            <a
              href="tel:+977-9801092983"
              className="bg-white px-1 text-logo underline hover:no-underline"
            >
              +977-9801092983
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
