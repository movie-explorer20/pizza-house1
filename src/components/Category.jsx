
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Pizza",
    count: "08 Items",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
  },
  {
    name: "Burgers",
    count: "06 Items",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
  },
  {
    name: "Shakes",
    count: "05 Items",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600"
  },
  {
    name: "Drinks",
    count: "06 Items",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600"
  }
];

function Category() {
  return (
    <section className="category-section" id="categories">
      <div className="section-heading">
        <div>
          <span className="section-label">WHAT WE SERVE</span>
          <h2>Explore Our <span>Menu</span></h2>
        </div>
        <p>Something delicious for every craving.</p>
      </div>

      <div className="category-grid">
        {categories.map((item) => (
          <a href="#popular" className="category-card" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div className="category-overlay">
              <div>
                <h3>{item.name}</h3>
                <span>{item.count}</span>
              </div>
              <span className="category-arrow">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Category;

