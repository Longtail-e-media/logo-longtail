import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <main className="container mx-auto px-4">
        <div className="mt-6 space-y-8">
          <h1 className="text-pretty text-3xl font-bold leading-snug text-logo sm:text-4xl sm:leading-snug md:text-5xl md:leading-snug">
            The apex of any branding begins with a logo, and pioneers have
            designed meaningful, beautiful, and truthful symbols for all
            subjects and businesses.
          </h1>
          <p className="max-w-xl text-pretty text-gray-800">
            Welcome to <strong>logo.longtail.info</strong>, where you can
            explore logos of the best quality available. Each logo embodies
            creativity, professionalism, and a unique artistic vision. The
            design of the logo will leave a memorable impression, showcasing the
            respective brand's essence.
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-logo px-4 py-1 font-bold text-white sm:px-6"
          >
            <i className="text-xl transition-all duration-300 group-hover:-translate-x-2 sm:text-2xl">
              &larr;
            </i>
            Discover Logos
          </Link>
        </div>
      </main>

      <div className="bg-logo py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            Looking for a new logo design?
          </h3>
          <p className="mt-4 text-base text-white/90 sm:text-lg">
            Reach out to us! For inquiries, you can email us at{' '}
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
