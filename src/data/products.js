
const products = [
  {
    id: 1,
    name: "Royal Pepperoni",
    category: "Pizza",
    description: "Pepperoni, mozzarella and signature tomato sauce.",
    price: 1599,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700"
  },
  {
    id: 2,
    name: "Classic Margherita",
    category: "Pizza",
    description: "Fresh mozzarella, basil and Italian tomato sauce.",
    price: 1199,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700"
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    description: "Smoky BBQ chicken with melted mozzarella.",
    price: 1799,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"
  },
  {
    id: 4,
    name: "Cheese Lovers",
    category: "Pizza",
    description: "Loaded with four delicious types of cheese.",
    price: 1699,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700"
  },
  {
    id: 5,
    name: "Spicy Fajita",
    category: "Pizza",
    description: "Spicy chicken, capsicum and onions.",
    price: 1599,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700"
  },
  {
    id: 6,
    name: "Crown Crust Pizza",
    category: "Pizza",
    description: "Special stuffed crust with creamy cheese.",
    price: 1999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700"
  },
  {
    id: 7,
    name: "Chicken Tikka Pizza",
    category: "Pizza",
    description: "Pakistani chicken tikka with spicy sauce.",
    price: 1499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=700"
  },
  {
    id: 8,
    name: "Mexican Green Wave",
    category: "Pizza",
    description: "Jalapenos, olives, peppers and special herbs.",
    price: 1699,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=700"
  },
  {
    id: 9,
    name: "Peri Peri Chicken",
    category: "Pizza",
    description: "Peri peri chicken with spicy creamy sauce.",
    price: 1799,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700"
  },
  {
    id: 10,
    name: "Super Supreme",
    category: "Pizza",
    description: "Loaded with chicken, vegetables and cheese.",
    price: 2199,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=700"
  },

  {
    id: 11,
    name: "Double Smash Burger",
    category: "Burgers",
    description: "Double beef patty, cheddar and special sauce.",
    price: 999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"
  },
  {
    id: 12,
    name: "Classic Beef Burger",
    category: "Burgers",
    description: "Juicy beef patty with fresh vegetables.",
    price: 799,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700"
  },
  {
    id: 13,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    description: "Crispy chicken, lettuce and creamy mayo.",
    price: 749,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700"
  },
  {
    id: 14,
    name: "Zinger Supreme",
    category: "Burgers",
    description: "Crunchy chicken with spicy signature sauce.",
    price: 899,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700"
  },
  {
    id: 15,
    name: "BBQ Beef Burger",
    category: "Burgers",
    description: "Grilled beef, BBQ sauce and cheddar cheese.",
    price: 1099,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=700"
  },
  {
    id: 16,
    name: "Cheese Blast Burger",
    category: "Burgers",
    description: "Double cheese with a delicious beef patty.",
    price: 1199,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700"
  },
  {
    id: 17,
    name: "Chicken Club Burger",
    category: "Burgers",
    description: "Chicken fillet with fresh lettuce and sauce.",
    price: 849,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=700"
  },
  {
    id: 18,
    name: "Jalapeno Burger",
    category: "Burgers",
    description: "Spicy jalapenos, cheese and grilled beef.",
    price: 999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=700"
  },
  {
    id: 19,
    name: "Mushroom Swiss Burger",
    category: "Burgers",
    description: "Sauteed mushrooms with Swiss-style cheese.",
    price: 1099,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"
  },
  {
    id: 20,
    name: "Mega Tower Burger",
    category: "Burgers",
    description: "A giant burger with multiple delicious layers.",
    price: 1399,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700"
  },

  {
    id: 21,
    name: "Chocolate Blast",
    category: "Shakes",
    description: "Rich chocolate milkshake with creamy texture.",
    price: 499,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700"
  },
  {
    id: 22,
    name: "Strawberry Shake",
    category: "Shakes",
    description: "Sweet strawberry flavor with chilled milk.",
    price: 449,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=700"
  },
  {
    id: 23,
    name: "Oreo Milkshake",
    category: "Shakes",
    description: "Creamy vanilla shake blended with Oreo.",
    price: 549,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=700"
  },
  {
    id: 24,
    name: "Vanilla Dream",
    category: "Shakes",
    description: "Classic smooth and creamy vanilla shake.",
    price: 399,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=700"
  },
  {
    id: 25,
    name: "Mango Magic",
    category: "Shakes",
    description: "Refreshing mango shake with rich flavor.",
    price: 449,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=700"
  },
  {
    id: 26,
    name: "Caramel Shake",
    category: "Shakes",
    description: "Smooth caramel milkshake with sweet topping.",
    price: 499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=700"
  },
  {
    id: 27,
    name: "Coffee Frappe",
    category: "Shakes",
    description: "Chilled coffee blended with creamy milk.",
    price: 549,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"
  },
  {
    id: 28,
    name: "Banana Shake",
    category: "Shakes",
    description: "Fresh banana blended into a creamy shake.",
    price: 399,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=700"
  },
  {
    id: 29,
    name: "KitKat Shake",
    category: "Shakes",
    description: "Chocolate shake with crunchy chocolate pieces.",
    price: 599,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=700"
  },
  {
    id: 30,
    name: "Blueberry Shake",
    category: "Shakes",
    description: "Sweet blueberry shake with creamy milk.",
    price: 549,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=700"
  },

  {
    id: 31,
    name: "Chilled Cola",
    category: "Drinks",
    description: "Refreshing chilled cola.",
    price: 199,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=700"
  },
  {
    id: 32,
    name: "Fresh Lemonade",
    category: "Drinks",
    description: "Fresh lemon juice with chilled water.",
    price: 249,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700"
  },
  {
    id: 33,
    name: "Orange Fizz",
    category: "Drinks",
    description: "Orange flavored refreshing fizzy drink.",
    price: 199,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700"
  },
  {
    id: 34,
    name: "Mint Margarita",
    category: "Drinks",
    description: "Cool mint and fresh lemon drink.",
    price: 299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700"
  },
  {
    id: 35,
    name: "Peach Iced Tea",
    category: "Drinks",
    description: "Chilled peach tea with refreshing flavor.",
    price: 299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700"
  },
  {
    id: 36,
    name: "Blue Lagoon",
    category: "Drinks",
    description: "Blue citrus flavored refreshing cooler.",
    price: 349,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700"
  },
  {
    id: 37,
    name: "Fresh Lime Soda",
    category: "Drinks",
    description: "Fresh lime with sparkling soda.",
    price: 249,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700"
  },
  {
    id: 38,
    name: "Watermelon Cooler",
    category: "Drinks",
    description: "Refreshing watermelon flavored cooler.",
    price: 299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=700"
  },
  {
    id: 39,
    name: "Strawberry Soda",
    category: "Drinks",
    description: "Sweet strawberry flavored fizzy drink.",
    price: 249,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700"
  },
  {
    id: 40,
    name: "Classic Mineral Water",
    category: "Drinks",
    description: "Chilled refreshing bottled drinking water.",
    price: 100,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=700"
  }
];

export default products;

