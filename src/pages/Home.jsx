import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import OrderSuccess from "../components/OrderSuccess";

function Home() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("pizza_house_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [page, setPage] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [lastOrder, setLastOrder] = useState(() => {
    try {
      const saved = localStorage.getItem("pizza_house_last_order");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("pizza_house_cart", JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = cart.length > 0 ? 150 : 0;
  const grandTotal = subtotal + deliveryFee;

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHome = () => {
    setActiveCategory("All");
    setSearchQuery("");
    navigate("home");
  };

  const selectCategory = (category) => {
    setActiveCategory(category);
    setPage("home");

    window.setTimeout(() => {
      document.getElementById("popular")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  const handlePlaceOrder = (customer) => {
    if (!cart.length) return;

    const order = {
      id: `PH-${Date.now().toString().slice(-8)}`,
      items: cart.map((item) => ({ ...item })),
      customer,
      subtotal,
      deliveryFee,
      total: grandTotal,
      paymentMethod: customer.paymentMethod,
      paymentStatus:
        customer.paymentMethod === "Cash on Delivery"
          ? "Pay on delivery"
          : "Payment pending",
      status: "Order Confirmed",
      date: new Date().toLocaleString("en-PK")
    };

    localStorage.setItem(
      "pizza_house_last_order",
      JSON.stringify(order)
    );

    setLastOrder(order);
    setCart([]);
    navigate("success");
  };

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => navigate("cart")}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateHome={navigateHome}
        onCategorySelect={selectCategory}
        activeCategory={activeCategory}
      />

      {page === "home" && (
        <>
          <main>
            <Hero />
            <Category />

            <Products
              cart={cart}
              setCart={setCart}
              searchQuery={searchQuery}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              onOpenCart={() => navigate("cart")}
            />
          </main>

          <Footer />
        </>
      )}

      {page === "cart" && (
        <Cart
          cart={cart}
          setCart={setCart}
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          grandTotal={grandTotal}
          onContinue={() => navigate("home")}
          onCheckout={() => navigate("checkout")}
        />
      )}

      {page === "checkout" && (
        <Checkout
          cart={cart}
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          grandTotal={grandTotal}
          onBack={() => navigate("cart")}
          onPlaceOrder={handlePlaceOrder}
        />
      )}

      {page === "success" && (
        <OrderSuccess
          order={lastOrder}
          onContinue={navigateHome}
        />
      )}
    </>
  );
}

export default Home;