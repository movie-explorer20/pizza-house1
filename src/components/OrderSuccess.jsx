
function OrderSuccess({ order, onContinue }) {
  if (!order) {
    return (
      <main className="order-success-page">
        <h2>No order information found.</h2>
        <button className="order-primary-btn" onClick={onContinue}>
          Return to Menu
        </button>
      </main>
    );
  }

  return (
    <main className="order-success-page">
      <div className="success-card">
        <div className="success-check">✓</div>

        <span className="section-label">PIZZA HOUSE ORDER</span>
        <h1>Order <span>Confirmed!</span></h1>

        <p className="success-description">
          Thank you, {order.customer.fullName}.
          Your order has been recorded successfully.
        </p>

        <div className="order-reference">
          <span>ORDER REFERENCE</span>
          <strong>{order.id}</strong>
          <small>{order.date}</small>
        </div>

        <div className="success-details">
          <div>
            <span>Order Status</span>
            <strong className="confirmed-status">{order.status}</strong>
          </div>

          <div>
            <span>Payment Method</span>
            <strong>{order.paymentMethod}</strong>
          </div>

          <div>
            <span>Payment Status</span>
            <strong>{order.paymentStatus}</strong>
          </div>

          <div>
            <span>Customer</span>
            <strong>{order.customer.fullName}</strong>
          </div>

          <div>
            <span>Phone</span>
            <strong>{order.customer.phone}</strong>
          </div>

          <div>
            <span>Delivery City</span>
            <strong>{order.customer.city}</strong>
          </div>

          <div className="success-address">
            <span>Delivery Address</span>
            <strong>{order.customer.address}</strong>
          </div>
        </div>

        <div className="success-items">
          <h3>Ordered Items</h3>

          {order.items.map(item => (
            <div className="success-item" key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <strong>
                Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
              </strong>
            </div>
          ))}
        </div>

        <div className="success-total">
          <span>Total Paid / Payable</span>
          <strong>Rs. {order.total.toLocaleString("en-PK")}</strong>
        </div>

        <p className="success-note">
          This is a demo ordering system. Your order is stored in this browser;
          no restaurant or delivery service has been notified.
        </p>

        <button
          className="order-primary-btn"
          onClick={onContinue}
        >
          Continue Shopping →
        </button>
      </div>
    </main>
  );
}

export default OrderSuccess;
