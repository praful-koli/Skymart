import "../styles/Home.scss";

// ── Icons ────────────────────────────────────────────────────
const BoxIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const TrendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const StarIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const TagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);
const BoltIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L4.09 12.97H11L10 22L20.91 11.03H14L13 2Z"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const CartAddIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

// ── Data ─────────────────────────────────────────────────────
const categories = [
  { name: "Electronics", count: 17, emoji: "🖥️" },
  { name: "Clothing",    count: 2,  emoji: "👕" },
  { name: "Furniture",   count: 3,  emoji: "📦" },
  { name: "Home",        count: 14, emoji: "🏠" },
  { name: "Sports",      count: 8,  emoji: "⚽" },
  { name: "Accessories", count: 6,  emoji: "👜" },
];

const topRated = [
  { id: 1, price: "$599.99", color: "#8b4513" },
  { id: 2, price: "$199.99", color: "#2c3e50" },
  { id: 3, price: "$349.99", color: "#1a1a1a" },
  { id: 4, price: "$49.99",  color: "#111111" },
  { id: 5, price: "$149.99", color: "#888888" },
];

const newArrivals = [
  { id: 1, price: "$99.99",  color: "#c8a96e" },
  { id: 2, price: "$299.99", color: "#b0b0b0" },
  { id: 3, price: "$34.99",  color: "#e8e8e8" },
  { id: 4, price: "$199.99", color: "#6b7c8a" },
  { id: 5, price: "$34.99",  color: "#4a7c59" },
];

// ── Component ────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="home">
      <div className="home-container">

        {/* ── Hero ── */}
        <section className="hero-section">
          <div className="hero-left">
            <p className="hero-eyebrow">GOOD MORNING 👋</p>
            <h1 className="hero-heading">
              Welcome back,<br />
              <span className="hero-accent">Praful!</span>
            </h1>
            <p className="hero-sub">
              Discover today's picks — hand-curated products across<br />
              electronics, fashion, and more.
            </p>
            <div className="hero-btns">
              <button className="btn-primary">Shop Now <ArrowIcon /></button>
              <button className="btn-outline">View All Products</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-stat-card hero-stat-dark">
              <span className="hero-stat-value">20+</span>
              <span className="hero-stat-label">Products Available</span>
            </div>
            <div className="hero-stat-card hero-stat-light">
              <span className="hero-stat-value hero-stat-value-light">Free</span>
              <span className="hero-stat-label hero-stat-label-light">Delivery on ₹999+</span>
            </div>
          </div>
        </section>

        {/* ── Stats Row ── */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon stat-icon-green"><BoxIcon /></div>
            <div className="stat-info">
              <span className="stat-value">0</span>
              <span className="stat-name">Cart Items</span>
              <span className="stat-desc">In your bag</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-blue"><TrendIcon /></div>
            <div className="stat-info">
              <span className="stat-value">$0.00</span>
              <span className="stat-name">Cart Value</span>
              <span className="stat-desc">Ready to checkout</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-yellow"><StarIcon /></div>
            <div className="stat-info">
              <span className="stat-value">5</span>
              <span className="stat-name">Top Products</span>
              <span className="stat-desc">Highly rated</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stat-icon-purple"><TagIcon /></div>
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
            <a href="#" className="section-link">View All <ArrowIcon /></a>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <div className="category-card" key={cat.name}>
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
                <span className="panel-star"><StarIcon size={14} /></span>
                Top Rated
              </span>
              <a href="#" className="section-link">See all <ArrowIcon /></a>
            </div>
            <div className="product-list">
              {topRated.map((p) => (
                <div className="product-item" key={p.id}>
                  <div className="product-thumb" style={{ background: p.color }} />
                  <span className="product-price">{p.price}</span>
                  <button className="product-cart-btn"><CartAddIcon /></button>
                </div>
              ))}
            </div>
          </div>

          {/* New Arrivals */}
          <div className="product-panel">
            <div className="panel-header">
              <span className="panel-title">
                <span className="panel-star"><BoltIcon /></span>
                New Arrivals
              </span>
              <a href="#" className="section-link">See all <ArrowIcon /></a>
            </div>
            <div className="product-list">
              {newArrivals.map((p) => (
                <div className="product-item" key={p.id}>
                  <div className="product-thumb" style={{ background: p.color }} />
                  <span className="product-price">{p.price}</span>
                  <button className="product-cart-btn"><CartAddIcon /></button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Feature Strip ── */}
        <div className="feature-strip">
          <div className="feature-card">
            <div className="feature-icon feature-icon-accent"><BoltIcon /></div>
            <div className="feature-text">
              <span className="feature-title">Fast Delivery</span>
              <span className="feature-desc">Same-day on select items</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-blue"><ShieldIcon /></div>
            <div className="feature-text">
              <span className="feature-title">Secure Payments</span>
              <span className="feature-desc">100% encrypted checkout</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-icon feature-icon-accent"><TagIcon /></div>
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