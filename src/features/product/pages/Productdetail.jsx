<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useCart } from "../hook/useCart";
import ProductCard from "../components/ProductCard";
import "../styles/Productdetail.scss";
import { Link, useNavigate, useParams } from "react-router";
=======
import { useState,useEffect } from "react";
import { useCart } from "../hook/useCart";
import ProductCard from "../components/ProductCard";
import "../styles/Productdetail.scss";
import { useNavigate, Link,useParams } from "react-router";
>>>>>>> c149305db4d605e5b4e66dc007e3ec0f94e9c75c
// ── Icons ──────────────────────────────────────────────────
const StarIcon = ({ filled }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const CartIcon = () => (
  <svg
    width="17"
    height="17"
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
const HeartIcon = () => (
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
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const DeliveryIcon = () => (
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
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 5v3h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const ShieldIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l2.5 2.5" />
  </svg>
);
const ReturnIcon = () => (
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
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-3" />
  </svg>
);
const BackIcon = () => (
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
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);
const NextArrow = () => (
  <svg
    width="15"
    height="15"
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


const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 99.99,
    rating: 5,
    reviewCount: 120,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    category: "Electronics",
    price: 299.99,
    rating: 4,
    reviewCount: 85,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    description:
      "Advanced smartwatch with health tracking, GPS, and a stunning always-on display.",
  },
  {
    id: 3,
    name: "Comfortable Cotton T-Shirt",
    category: "Clothing",
    price: 24.99,
    rating: 4,
    reviewCount: 200,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    description:
      "Premium 100% organic cotton tee. Breathable, durable, and available in 12 colors.",
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 199.99,
    rating: 5,
    reviewCount: 65,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    description:
      "Fully adjustable ergonomic chair designed for long work sessions. Lumbar support included.",
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    category: "Home",
    price: 34.99,
    rating: 4,
    reviewCount: 150,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    description:
      "Double-wall insulated bottle keeps drinks cold 24h or hot 12h.",
  },
  {
    id: 6,
    name: "Professional Camera Lens",
    category: "Electronics",
    price: 599.99,
    rating: 5,
    reviewCount: 42,
    image:
      "https://images.unsplash.com/photo-1567450116989-c2d6b49bb0a3?w=600&q=80",
    description:
      "50mm f/1.4 prime lens for stunning portraits and low-light photography.",
  },
  {
    id: 7,
    name: "Running Shoes",
    category: "Clothing",
    price: 129.99,
    rating: 4,
    reviewCount: 310,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    description:
      "Lightweight responsive running shoes with energy-return foam midsole.",
  },
  {
    id: 8,
    name: "Modern Coffee Table",
    category: "Furniture",
    price: 149.99,
    rating: 4,
    reviewCount: 88,
    image:
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80",
    description:
      "Minimalist coffee table with solid oak top and powder-coated steel legs.",
  },
  {
    id: 9,
    name: "Aromatherapy Essential Oil Diffuser",
    category: "Home",
    price: 49.99,
    rating: 4,
    reviewCount: 95,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
    description:
      "Ultrasonic diffuser with 7-color LED and whisper-quiet operation.",
  },
  {
    id: 10,
    name: "Wireless Gaming Mouse",
    category: "Electronics",
    price: 79.99,
    rating: 4,
    reviewCount: 175,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80",
    description: "High-precision wireless gaming mouse with 25,600 DPI sensor.",
  },
  {
    id: 11,
    name: "Yoga Mat",
    category: "Sports",
    price: 39.99,
    rating: 5,
    reviewCount: 220,
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80",
    description:
      "6mm thick non-slip yoga mat with alignment lines and carry strap.",
  },
  {
    id: 12,
    name: "Leather Wallet",
    category: "Accessories",
    price: 49.99,
    rating: 4,
    reviewCount: 130,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    description:
      "Slim full-grain leather bifold wallet with RFID blocking technology.",
  },
  {
    id: 13,
    name: "4K Ultra HD Monitor",
    category: "Electronics",
    price: 349.99,
    rating: 5,
    reviewCount: 98,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
    description:
      "27-inch 4K IPS monitor with HDR400, 144Hz refresh rate, and USB-C.",
  },
  {
    id: 14,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 149.99,
    rating: 5,
    reviewCount: 214,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80",
    description:
      "TKL mechanical keyboard with Cherry MX switches and per-key RGB.",
  },
  {
    id: 15,
    name: "Portable Power Bank",
    category: "Electronics",
    price: 49.99,
    rating: 4,
    reviewCount: 302,
    image:
      "https://images.unsplash.com/photo-1609592806596-b6d02c5f5f21?w=600&q=80",
    description:
      "20,000mAh power bank with 65W PD fast charging and dual USB-A ports.",
  },
];

<<<<<<< HEAD
export default function ProductDetail({onBack, onNext }) {
 const { id } = useParams();
=======
export default function ProductDetail({ onBack, onNext }) {
const { id } = useParams();
>>>>>>> c149305db4d605e5b4e66dc007e3ec0f94e9c75c
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [wished, setWished] = useState(false);
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  // Update product whenever id changes
  useEffect(() => {
    const found =
      ALL_PRODUCTS.find((p) => String(p.id) === String(id)) || null;
    setProduct(found);
<<<<<<< HEAD
=======

    if (found) {
      const rel = ALL_PRODUCTS.filter(
        (p) => p.category === found.category && String(p.id) !== String(found.id)
      ).slice(0, 5);
      setRelated(rel);
    } else {
      setRelated([]);
    }
  }, [id]);

  if (!product) {
    return <p>Product not found.</p>;
  }
>>>>>>> c149305db4d605e5b4e66dc007e3ec0f94e9c75c

    if (found) {
      const rel = ALL_PRODUCTS.filter(
        (p) => p.category === found.category && String(p.id) !== String(found.id)
      ).slice(0, 5);
      setRelated(rel);
    } else {
      setRelated([]);
    }
  }, [id]);

  if (!product) {
    return <p>Product not found.</p>;
  }
 

  return (
    <div className="pd-page">
      <div className="pd-container">
        {/* Breadcrumb */}
        <nav className="pd-breadcrumb">
          <button
            className="pd-back-btn"
            onClick={() => navigate("/home/products")}
          >
            <BackIcon /> Products
          </button>
          <span className="pd-bread-sep">/</span>
          <span className="pd-bread-item">{product.category}</span>
          <span className="pd-bread-sep">/</span>
          <span className="pd-bread-item pd-bread-current">
            {product.name.length > 22
              ? product.name.slice(0, 22) + "…"
              : product.name}
          </span>
        </nav>

        {/* Main Detail */}
        <div className="pd-main">
          {/* Image */}
          <div className="pd-image-wrap">
            <img src={product.image} alt={product.name} className="pd-image" />
          </div>

          {/* Info */}
          <div className="pd-info">
            <span className="pd-category-badge">{product.category}</span>

            <h1 className="pd-name">{product.name}</h1>

            {/* Rating */}
            <div className="pd-rating">
              <div className="pd-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={
                      i <= Math.round(product.rating)
                        ? "pd-star-on"
                        : "pd-star-off"
                    }
                  >
                    <StarIcon filled={i <= Math.round(product.rating)} />
                  </span>
                ))}
              </div>
              <span className="pd-rating-num">{product.rating.toFixed(1)}</span>
              <span className="pd-rating-count">
                ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="pd-divider" />

            <p className="pd-price">${product.price.toFixed(2)}</p>

            <div className="pd-divider" />

            <p className="pd-desc">{product.description}</p>

            {/* CTA */}
            <div className="pd-cta">
              <button onClick={() => addToCart(product)} className="pd-add-btn">
                <CartIcon /> Add to Cart
              </button>
              <button
                className={`pd-wish-btn ${wished ? "pd-wish-btn-active" : ""}`}
                onClick={() => setWished((v) => !v)}
                aria-label="Wishlist"
              >
                <HeartIcon />
              </button>
            </div>

            {/* Trust badges */}
            <div className="pd-badges">
              <div className="pd-badge-card">
                <DeliveryIcon />
                <div>
                  <p className="pd-badge-title">Free Delivery</p>
                  <p className="pd-badge-sub">On orders $50+</p>
                </div>
              </div>
              <div className="pd-badge-card">
                <ShieldIcon />
                <div>
                  <p className="pd-badge-title">Secure Pay</p>
                  <p className="pd-badge-sub">256-bit SSL</p>
                </div>
              </div>
              <div className="pd-badge-card">
                <ReturnIcon />
                <div>
                  <p className="pd-badge-title">Easy Returns</p>
                  <p className="pd-badge-sub">30-day policy</p>
                </div>
              </div>
            </div>

            {/* Next button */}
            <button className="pd-next-btn" onClick={onNext}>
              Next <NextArrow />
            </button>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="pd-related">
            <h2 className="pd-related-title">Related Products</h2>
             <div className="pd-related-grid">
              {related.map((p) => (
               
                  <ProductCard key={p.id} product={p} />
<<<<<<< HEAD
             
              
=======
            
>>>>>>> c149305db4d605e5b4e66dc007e3ec0f94e9c75c
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
