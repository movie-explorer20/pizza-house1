
function Cart({
  cart,
  setCart,
  subtotal,
  deliveryFee,
  grandTotal,
  onContinue,
  onCheckout
}) {
  const updateQuantity = (id, amount) => {
    setCart(previous =>
      previous
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(previous => previous.filter(item => item.id !== id));
  };

  return (
    <main className="shopping-page">
      <div className="shopping-heading">
        <span className="section-label">YOUR ORDER</span>
        <h1>Shopping <span>Cart</span></h1>
        <p>Review your favourites before checking out.</p>
      </div>

      {cart.length === 0 ? (
        <div className="shopping-empty">
          <div className="empty-cart-icon">▣</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything delicious yet.</p>
          <button className="order-primary-btn" onClick={onContinue}>
            Explore Our Menu →
          </button>
        </div>
      ) : (
        <div className="shopping-layout">
          <section className="shopping-products">
            <div className="shopping-products-heading">
              <h2>Your Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>
              <span>Price</span>
            </div>

            {cart.map(item => (
              <article className="shopping-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="shopping-item-info">
                  <span className="section-label">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <div className="shopping-item-actions">
                    <div className="quantity-controls">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label={`Decrease ${item.name}`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label={`Increase ${item.name}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-cart-item"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <strong className="shopping-item-price">
                  Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
                </strong>
              </article>
            ))}

            <button
              className="continue-shopping"
              onClick={onContinue}
            >
              ← Continue Shopping
            </button>
          </section>

          <aside className="order-summary">
            <span className="section-label">ORDER SUMMARY</span>
            <h2>Order Details</h2>

            <div className="summary-line">
              <span>Subtotal</span>
              <strong>Rs. {subtotal.toLocaleString("en-PK")}</strong>
            </div>

            <div className="summary-line">
              <span>Delivery Fee</span>
              <strong>Rs. {deliveryFee.toLocaleString("en-PK")}</strong>
            </div>

            <div className="summary-divider" />

            <div className="summary-grand-total">
              <span>Total Amount</span>
              <strong>Rs. {grandTotal.toLocaleString("en-PK")}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={onCheckout}
              disabled={!cart.length}
            >
              Proceed to Checkout →
            </button>

            <p className="secure-checkout">
              ✓ Your order details are saved locally
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}

export default Cart;
