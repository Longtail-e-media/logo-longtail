const Footer = () => {
  return (
    <>
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

export default Footer;
