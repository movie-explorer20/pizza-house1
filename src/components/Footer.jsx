
function Footer() {
  return (
    <footer className="luxury-footer" id="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <a href="#home" className="brand-logo">
            <span className="brand-icon">P</span>

            <span className="brand-name">
              PIZZA<span>HOUSE</span>
              <small>FRESHNESS IN EVERY BITE</small>
            </span>
          </a>

          <p>
            Crafted with passion, served with love.
            Discover your next favourite bite at Pizza House.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V10H7.2v3h2.8v8h3.5Z" />
              </svg>
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.4L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#popular">Our Menu</a>
          <a href="#deals">Special Deals</a>
        </div>

        <div className="footer-column">
          <h3>Our Menu</h3>
          <a href="#popular">Pizza</a>
          <a href="#popular">Burgers</a>
          <a href="#popular">Shakes</a>
          <a href="#popular">Cold Drinks</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Discover More</h3>
          <p>Fresh ingredients.</p>
          <p>Made to order.</p>
          <p>Memorable flavours.</p>

          <a href="#popular" className="footer-menu-link">
            Explore Menu <span>↗</span>
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Pizza House.
          All rights reserved.
        </p>

        <p className="footer-made">
          Made with <span>♥</span> for food lovers.
        </p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
