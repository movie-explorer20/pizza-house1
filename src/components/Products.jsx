import { useMemo } from "react";
import products from "../data/products";

function Products({
  cart,
  setCart,
  searchQuery = "",
  activeCategory = "All",
  onCategoryChange,
  onOpenCart
}) {
  const categories = ["All", "Pizza", "Burgers", "Shakes", "Drinks"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" ||
        product.category.toLowerCase() === activeCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();

      const searchMatch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  const addToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id);

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });

    onOpenCart?.();
  };

  return (
    <section className="products-section" id="popular">
      <div className="section-heading">
        <div>
          <span className="section-label">OUR SPECIAL MENU</span>
          <h2>
            {activeCategory === "All"
              ? "Customer Favorites"
              : `${activeCategory} Menu`}
          </h2>
        </div>

        <p>Handpicked flavours made to satisfy your cravings.</p>
      </div>

      <div className="product-toolbar">
        <div className="product-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => onCategoryChange?.(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <span className="results-count">
          {filteredProducts.length} products
        </span>
      </div>

      {searchQuery.trim() && (
        <div className="search-results-label">
          Results for "{searchQuery}"
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);

            return (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  <span className="product-category">
                    {product.category}
                  </span>

                  <span className="product-rating">
                    ★ {product.rating}
                  </span>
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="product-bottom">
                    <strong>
                      Rs. {product.price.toLocaleString("en-PK")}
                    </strong>

                    <button
                      className="add-product-btn"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.name} to cart and open cart`}
                    >
                      {cartItem ? `+ ${cartItem.quantity}` : "+"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="no-products">
          <h3>No food items found</h3>
          <p>
            Try another product name or select a different category.
          </p>

          <button
            onClick={() => onCategoryChange?.("All")}
            className="reset-filter-btn"
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;