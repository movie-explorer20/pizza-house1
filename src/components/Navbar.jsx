
import { useState } from "react";
import {
  Pizza,
  House,
  UtensilsCrossed,
  Drumstick,
  Milk,
  Coffee,
  MapPin,
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";

function Navbar({
  cartCount = 0,
  onCartClick,
  searchQuery = "",
  onSearchChange,
  onNavigateHome,
  onCategorySelect,
  activeCategory = "All"
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const categories = [
    { name: "Pizza", icon: Pizza },
    { name: "Burgers", icon: Drumstick },
    { name: "Shakes", icon: Milk },
    { name: "Drinks", icon: Coffee }
  ];

  const closeMobile = () => setMobileOpen(false);

  const navigateHome = () => {
    closeMobile();
    onNavigateHome?.();
  };

  const selectCategory = (category) => {
    closeMobile();
    onCategorySelect?.(category);
  };

  const handleContact = () => {
    closeMobile();
    onNavigateHome?.();
    document.getElementById("footer")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <header className="site-header premium-header">
        <div className="navbar-topline">
          <span>CRAFTED WITH PASSION. SERVED WITH LOVE.</span>
          <span className="topline-location">
            <MapPin size={13} />
            Bahawalpur, Pakistan
          </span>
        </div>

        <div className="navbar-main">
          <a
            href="#home"
            className="brand-logo"
            onClick={navigateHome}
          >
            <span className="brand-icon">
              <Pizza size={27} strokeWidth={1.8} />
            </span>

            <span className="brand-name">
              PIZZA<span>HOUSE</span>
              <small>FRESHNESS IN EVERY BITE</small>
            </span>
          </a>

          <nav className={`nav-links ${mobileOpen ? "active" : ""}`}>
            <a
              href="#home"
              className="nav-home"
              onClick={navigateHome}
            >
              <House size={15} />
              Home
            </a>

            <div className="nav-category-label">
              <span>Explore Menu</span>
              <ChevronDown size={13} />
            </div>

            {categories.map(({ name, icon: Icon }) => (
              <a
                href="#popular"
                key={name}
                className={`nav-category ${
                  activeCategory === name ? "active" : ""
                }`}
                onClick={() => selectCategory(name)}
              >
                <Icon size={15} />
                {name}
              </a>
            ))}

            <a
              href="#footer"
              className="nav-contact"
              onClick={handleContact}
            >
              Contact
              <ArrowUpRight size={14} />
            </a>
          </nav>

          <div className="navbar-right">
            <div className="navbar-search">
              <Search size={17} />
              <input
                type="search"
                placeholder="Search delicious food..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                aria-label="Search food products"
              />
              <kbd>/</kbd>
            </div>

            <button
              className="account-btn"
              onClick={() => {
                closeMobile();
                setAccountOpen(true);
              }}
              aria-label="Open account"
            >
              <UserRound size={19} />
            </button>

            <button
              className="navbar-cart"
              onClick={() => {
                closeMobile();
                onCartClick?.();
              }}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingBag size={19} />
              <span className="cart-label">Cart</span>
              <span className="cart-count">{cartCount}</span>
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-search">
            <Search size={17} />
            <input
              type="search"
              placeholder="Find your favourite food..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              aria-label="Search food products"
            />
          </div>
        )}
      </header>

      {accountOpen && (
        <div
          className="account-overlay"
          onClick={() => setAccountOpen(false)}
        >
          <div
            className="account-panel premium-account-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="account-close"
              onClick={() => setAccountOpen(false)}
              aria-label="Close account panel"
            >
              <X size={20} />
            </button>

            <div className="account-icon">
              <UserRound size={29} />
            </div>

            <span className="section-label">PIZZA HOUSE ACCOUNT</span>

            <h2>Good Food. Great Moments.</h2>

            <p>
              Your Pizza House account experience is coming soon.
              Until then, explore our menu and order as a guest.
            </p>

            <button
              className="account-continue"
              onClick={() => setAccountOpen(false)}
            >
              Continue Exploring
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
