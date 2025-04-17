const Footer = () => {
  return (
    <footer className={`bg-slate-50 pt-14`}>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-8 w-full px-4 font-medium md:w-1/3">
            <img
              src="/images/logo.png"
              alt="Buahkita Logo"
              className="max-w-40 -ml-2"
            />
            <h3 className="mt-2 mb-1 text-xl font-semibold text-dark">
              Contact Us
            </h3>
            <p>buahkita@gmail.com</p>
            <p>Malang, Indonesia</p>
          </div>
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-dark">
              Help Links
            </h3>
            <ul className="text-dark">
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Order Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-dark">
              Useful Links
            </h3>
            <ul className="text-dark">
              <li>
                <a
                  href="#home"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
