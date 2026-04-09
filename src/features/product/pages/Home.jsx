import "../styles/Home.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../auth/hook/useAuth.js";
import {useCart} from '../hook/useCart.js'
// ── Icons ────────────────────────────────────────────────────
const BoxIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const TrendIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const StarIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const TagIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);
const BoltIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L4.09 12.97H11L10 22L20.91 11.03H14L13 2Z" />
  </svg>
);
const ShieldIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const CartAddIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────
const categories = [
  { name: "Electronics", count: 17, emoji: "🖥️" },
  { name: "Clothing", count: 2, emoji: "👕" },
  { name: "Furniture", count: 3, emoji: "📦" },
  { name: "Home", count: 14, emoji: "🏠" },
  { name: "Sports", count: 8, emoji: "⚽" },
  { name: "Accessories", count: 6, emoji: "👜" },
];

const topRated = [
  
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 99.99,
    rating: 5,
    reviewCount: 120,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    category: "Electronics",
    price: 299.99,
    rating: 4,
    reviewCount: 85,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
  {
    id: 3,
    name: "Comfortable Cotton T-Shirt",
    category: "Clothing",
    price: 24.99,
    rating: 4,
    reviewCount: 200,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 199.99,
    rating: 5,
    reviewCount: 65,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    category: "Home",
    price: 34.99,
    rating: 4,
    reviewCount: 150,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
  },
];

const newArrivals = [
  {
    id: 10,
    name: "Wireless Gaming Mouse",
    category: "Electronics",
    price: 79.99,
    rating: 4,
    reviewCount: 175,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80",
  },
  {
    id: 11,
    name: "Yoga Mat",
    category: "Sports",
    price: 39.99,
    rating: 5,
    reviewCount: 220,
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&q=80",
  },
  {
    id: 12,
    name: "Leather Wallet",
    category: "Accessories",
    price: 49.99,
    rating: 4,
    reviewCount: 130,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
  },
  {
    id: 13,
    name: "4K Ultra HD Monitor",
    category: "Electronics",
    price: 349.99,
    rating: 5,
    reviewCount: 98,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80",
  },
  {
    id: 14,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 149.99,
    rating: 5,
    reviewCount: 214,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=80",
  },
];

// ── Component ────────────────────────────────────────────────
export default function Home() {
  const navigate = useNavigate();
  const { loggedInUser, registers } = useAuth();

  const {addToCart} = useCart()


  const handleCategoryClick = (categoryName) => {
    navigate(`/home/products?category=${encodeURIComponent(categoryName)}`);
  };




  
  let currentUser = registers.find((user) => {
    return (
      user.email === loggedInUser.email &&
      user.password === loggedInUser.password
    );
  });


  const carthandlerButton =(p)=> {
      addToCart(p)
  }

  return (
    <div className="home">
      <div className="home-container">
        {/* ── Hero ── */}
        <section className="hero-section">
          <div className="hero-left">
            <p className="hero-eyebrow">GOOD MORNING 👋</p>
            <h1 className="hero-heading">
              Welcome back,
              <br />
              <span className="hero-accent">{currentUser.name}!</span>
            </h1>
            <p className="hero-sub">
              Discover today's picks — hand-curated products across
              <br />
              electronics, fashion, and more.
            </p>
            <div className="hero-btns">
              <button
                onClick={() => navigate("/home/products")}
                className="btn-primary"
              >
                Shop Now <ArrowIcon />
              </button>
              <button
                onClick={() => navigate("/home/products")}
                className="btn-outline"
              >
                View All Products
              </button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-stat-card hero-stat-dark">
              <span className="hero-stat-value">20+</span>
              <span className="hero-stat-label">Products Available</span>
            </div>
            <div className="hero-stat-card hero-stat-light">
              <span className="hero-stat-value hero-stat-value-light">
                Free
              </span>
              <span className="hero-stat-label hero-stat-label-light">
                Delivery on ₹999+
              </span>
            </div>
          </div>
        </section>

        {/* ── Stats Row ── */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon stat-icon-green">
              <BoxIcon />
            </div>
            <div className="stat-info">
              <span className="stat-value">0</span>
              <span className="stat-name">Cart Items</span>
              <span className="stat-desc">In your bag</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-blue">
              <TrendIcon />
            </div>
            <div className="stat-info">
              <span className="stat-value">$0.00</span>
              <span className="stat-name">Cart Value</span>
              <span className="stat-desc">Ready to checkout</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-yellow">
              <StarIcon />
            </div>
            <div className="stat-info">
              <span className="stat-value">5</span>
              <span className="stat-name">Top Products</span>
              <span className="stat-desc">Highly rated</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-purple">
              <TagIcon />
            </div>
            <div className="stat-info">
              <span className="stat-value">6</span>
              <span className="stat-name">Categories</span>
              <span className="stat-desc">To explore</span>
            </div>
          </div>
        </div>

        {/* ── Shop by Category ── */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <Link to="/home/products" className="section-link">
              View All <ArrowIcon />
            </Link>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <div
                className="category-card"
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
              >
                <span className="category-emoji">{cat.emoji}</span>
                <span className="category-name">{cat.name}</span>
                <span className="category-count">{cat.count} items</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Product Lists ── */}
        <div className="product-row">
          {/* Top Rated */}
          <div className="product-panel">
            <div className="panel-header">
              <span className="panel-title">
                <span className="panel-star">
                  <StarIcon size={14} />
                </span>
                Top Rated
              </span>
              <Link to="/home/products" className="section-link">
                See all <ArrowIcon />
              </Link>
            </div>
            <div className="product-list">
              {topRated.map((p) => (
                <div className="product-item" key={p.id}>
                  <div
                    className="product-thumb"
                    style={{
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "40px",
                      height: "40px",
                    }}
                    onClick={()=>navigate(`/home/productdetail/${p.id}`)}
                  />

                  <span className="product-price">{p.price}</span>
                  <button className="product-cart-btn" onClick={()=>carthandlerButton(p)}>
                    <CartAddIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* New Arrivals */}
          <div className="product-panel">
            <div className="panel-header">
              <span className="panel-title">
                <span className="panel-star">
                  <BoltIcon />
                </span>
                New Arrivals
              </span>
              <Link to="/home/products" className="section-link">
                See all <ArrowIcon />
              </Link>
            </div>
            <div className="product-list">
              {newArrivals.map((p) => (
                <div className="product-item" key={p.id}>
                  <div
                    className="product-thumb"
                    style={{ backgroundImage: `url(${p.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "40px",
                      height: "40px", }}
                      onClick={()=>navigate(`/home/productdetail/${p.id}`)}
                  />
                  <span className="product-price">{p.price}</span>
                  <button className="product-cart-btn" onClick={()=> carthandlerButton(p)}>
                    <CartAddIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Feature Strip ── */}
        <div className="feature-strip">
          <div className="feature-card">
            <div className="feature-icon feature-icon-accent">
              <BoltIcon />
            </div>
            <div className="feature-text">
              <span className="feature-title">Fast Delivery</span>
              <span className="feature-desc">Same-day on select items</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-blue">
              <ShieldIcon />
            </div>
            <div className="feature-text">
              <span className="feature-title">Secure Payments</span>
              <span className="feature-desc">100% encrypted checkout</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-accent">
              <TagIcon />
            </div>
            <div className="feature-text">
              <span className="feature-title">Best Prices</span>
              <span className="feature-desc">Price-match guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
