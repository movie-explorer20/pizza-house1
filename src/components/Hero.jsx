
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-tag">
          <span className="live-dot"></span>
          FRESHLY BAKED. ALWAYS DELICIOUS.
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          GOOD FOOD.
          <br />
          <span>GOOD MOOD.</span>
          <br />
          GREAT PIZZA.
        </motion.h1>

        <p>
          Experience the perfect combination of fresh ingredients,
          incredible flavors and unforgettable bites.
        </p>

        <div className="hero-buttons">
          <a href="#popular" className="primary-btn">
            Explore Menu <ArrowUpRight size={19} />
          </a>
          <a href="#categories" className="secondary-btn">
            <Play size={16} /> Discover Food
          </a>
        </div>

        <div className="hero-stats">
          <div><strong>20+</strong><span>Food Items</span></div>
          <div><strong>100%</strong><span>Fresh Quality</span></div>
          <div><strong>4.9★</strong><span>Food Rating</span></div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow"></div>
        <img
          src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1000"
          alt="Freshly baked pizza"
        />
        <div className="floating-price">
          <span>Starting From</span>
          <strong>Rs. 899</strong>
        </div>
        <div className="hero-stamp">HOT<br />& FRESH</div>
      </div>
    </section>
  );
}

export default Hero;
