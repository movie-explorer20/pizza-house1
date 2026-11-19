
import { useState } from "react";

function Checkout({
  cart,
  subtotal,
  deliveryFee,
  grandTotal,
  onBack,
  onPlaceOrder
}) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    city: "Bahawalpur",
    address: "",
    instructions: "",
    paymentMethod: "Cash on Delivery"
  });

  const [error, setError] = useState("");

  const updateField = (e) => {
    const { name, value } = e.target;

    setForm(previous => ({
      ...previous,
      [name]: value
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cart.length) {
      setError("Your cart is empty. Please add products first.");
      return;
    }

    const phoneDigits = form.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (form.address.trim().length < 10) {
      setError("Please enter your complete delivery address.");
      return;
    }

    onPlaceOrder({
      ...form,
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      city: form.city.trim(),
      address: form.address.trim(),
      instructions: form.instructions.trim()
    });
  };

  return (
    <main className="checkout-page">
      <div className="shopping-heading">
        <span className="section-label">FINAL STEP</span>
        <h1>Secure <span>Checkout</span></h1>
        <p>Enter your delivery details and confirm your order.</p>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="checkout-section">
            <div className="checkout-section-heading">
              <span>01</span>
              <div>
                <h2>Delivery Information</h2>
                <p>Where should we deliver your food?</p>
              </div>
            </div>

            <div className="checkout-fields">
              <label>
                Full Name *
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  required
                  minLength={3}
                  maxLength={80}
                />
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="03XXXXXXXXX"
                  required
                />
              </label>

              <label>
                City *
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={updateField}
                  placeholder="Your city"
                  required
                  maxLength={60}
                />
              </label>

              <label className="full-field">
                Complete Delivery Address *
                <textarea
                  name="address"
                  value={form.address}
                  onChange={updateField}
                  placeholder="House number, street, area and nearby landmark..."
                  required
                  minLength={10}
                  maxLength={500}
                  rows={4}
                />
              </label>

              <label className="full-field">
                Delivery Instructions (Optional)
                <textarea
                  name="instructions"
                  value={form.instructions}
                  onChange={updateField}
                  placeholder="Any additional delivery instructions..."
                  rows={2}
                  maxLength={300}
                />
              </label>
            </div>
          </div>

          <div className="checkout-section">
            <div className="checkout-section-heading">
              <span>02</span>
              <div>
                <h2>Payment Method</h2>
                <p>Choose how you want to pay.</p>
              </div>
            </div>

            <div className="payment-options">
              <label
                className={`payment-option ${
                  form.paymentMethod === "Cash on Delivery" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={form.paymentMethod === "Cash on Delivery"}
                  onChange={updateField}
                />
                <span className="payment-icon">₨</span>
                <span className="payment-details">
                  <strong>Cash on Delivery</strong>
                  <small>Pay when your order arrives.</small>
                </span>
                <span className="payment-check">✓</span>
              </label>

              <label
                className={`payment-option ${
                  form.paymentMethod === "Online Payment" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Online Payment"
                  checked={form.paymentMethod === "Online Payment"}
                  onChange={updateField}
                />
                <span className="payment-icon">▣</span>
                <span className="payment-details">
                  <strong>Online Payment</strong>
                  <small>Demo selection — payment gateway not connected.</small>
                </span>
                <span className="payment-check">✓</span>
              </label>
            </div>
          </div>

          {error && (
            <div className="checkout-error">
              {error}
            </div>
          )}

          <div className="checkout-actions">
            <button
              type="button"
              className="checkout-back-btn"
              onClick={onBack}
            >
              ← Back to Cart
            </button>

            <button type="submit" className="place-order-btn">
              Confirm Order →
            </button>
          </div>
        </form>

        <aside className="order-summary checkout-summary">
          <span className="section-label">YOUR PURCHASE</span>
          <h2>Order Summary</h2>

          <div className="checkout-mini-items">
            {cart.map(item => (
              <div className="checkout-mini-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>Qty: {item.quantity}</span>
                </div>
                <b>
                  Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
                </b>
              </div>
            ))}
          </div>

          <div className="summary-line">
            <span>Subtotal</span>
            <strong>Rs. {subtotal.toLocaleString("en-PK")}</strong>
          </div>

          <div className="summary-line">
            <span>Delivery</span>
            <strong>Rs. {deliveryFee.toLocaleString("en-PK")}</strong>
          </div>

          <div className="summary-divider" />

          <div className="summary-grand-total">
            <span>Grand Total</span>
            <strong>Rs. {grandTotal.toLocaleString("en-PK")}</strong>
          </div>

          <p className="secure-checkout">
            ✓ Review your details before confirming.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
