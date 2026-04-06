import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Products.scss";

// ── Icons ─────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ChevronIcon = () => (
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
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ── Dummy Data ────────────────────────────────────────────────
const PRODUCTS = [
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
  {
    id: 6,
    name: "Professional Camera Lens",
    category: "Electronics",
    price: 599.99,
    rating: 5,
    reviewCount: 42,
    image:
      "https://images.unsplash.com/photo-1567450116989-c2d6b49bb0a3?w=400&q=80",
  },
  {
    id: 7,
    name: "Running Shoes",
    category: "Clothing",
    price: 129.99,
    rating: 4,
    reviewCount: 310,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    id: 8,
    name: "Modern Coffee Table",
    category: "Furniture",
    price: 149.99,
    rating: 4,
    reviewCount: 88,
    image:
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=400&q=80",
  },
  {
    id: 9,
    name: "Aromatherapy Essential Oil Diffuser",
    category: "Home",
    price: 49.99,
    rating: 4,
    reviewCount: 95,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=80",
  },
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
  {
    id: 15,
    name: "Portable Power Bank",
    category: "Electronics",
    price: 49.99,
    rating: 4,
    reviewCount: 302,
    image:
      "https://images.unsplash.com/photo-1609592806596-b6d02c5f5f21?w=400&q=80",
  },
  {
    id: 16,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 89.99,
    rating: 4,
    reviewCount: 287,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
  },
  {
    id: 17,
    name: "Smart Home Hub",
    category: "Electronics",
    price: 129.99,
    rating: 4,
    reviewCount: 143,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    id: 18,
    name: "Fitness Tracker",
    category: "Electronics",
    price: 79.99,
    rating: 4,
    reviewCount: 265,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80",
  },
  {
    id: 19,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 69.99,
    rating: 4,
    reviewCount: 189,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
  },
  {
    id: 20,
    name: "Gaming Headset",
    category: "Electronics",
    price: 119.99,
    rating: 4,
    reviewCount: 156,
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&q=80",
  },
  {
    id: 21,
    name: "Digital Camera",
    category: "Electronics",
    price: 449.99,
    rating: 4,
    reviewCount: 77,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
  },
  {
    id: 22,
    name: "Tablet Stand",
    category: "Accessories",
    price: 29.99,
    rating: 4,
    reviewCount: 112,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80",
  },
  {
    id: 23,
    name: "Desk Lamp",
    category: "Home",
    price: 39.99,
    rating: 4,
    reviewCount: 165,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
  },
  {
    id: 24,
    name: "Backpack",
    category: "Accessories",
    price: 59.99,
    rating: 4,
    reviewCount: 231,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
  },
  {
    id: 25,
    name: "Coffee Maker",
    category: "Home",
    price: 89.99,
    rating: 5,
    reviewCount: 198,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  },
  {
    id: 26,
    name: "Dumbbells Set",
    category: "Sports",
    price: 79.99,
    rating: 5,
    reviewCount: 145,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
  },
  {
    id: 27,
    name: "Sunglasses",
    category: "Accessories",
    price: 49.99,
    rating: 4,
    reviewCount: 88,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
  },
  {
    id: 28,
    name: "Bookshelf",
    category: "Furniture",
    price: 129.99,
    rating: 4,
    reviewCount: 67,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 29,
    name: "Wireless Charger",
    category: "Electronics",
    price: 34.99,
    rating: 4,
    reviewCount: 203,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80",
  },
  {
    id: 30,
    name: "Throw Blanket",
    category: "Home",
    price: 34.99,
    rating: 4,
    reviewCount: 176,
    image:
      "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=400&q=80",
  },
  {
    id: 31,
    name: "Resistance Bands Set",
    category: "Sports",
    price: 19.99,
    rating: 4,
    reviewCount: 290,
    image:
      "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=400&q=80",
  },
  {
    id: 32,
    name: "Wall Clock",
    category: "Home",
    price: 39.99,
    rating: 4,
    reviewCount: 134,
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80",
  },
  {
    id: 33,
    name: "Phone Case",
    category: "Accessories",
    price: 14.99,
    rating: 3,
    reviewCount: 420,
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?w=400&q=80",
  },
  {
    id: 34,
    name: "Floor Lamp",
    category: "Home",
    price: 79.99,
    rating: 4,
    reviewCount: 92,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
  },
  {
    id: 35,
    name: "Protein Powder",
    category: "Sports",
    price: 49.99,
    rating: 4,
    reviewCount: 315,
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80",
  },
  {
    id: 36,
    name: "Desk Organizer",
    category: "Home",
    price: 24.99,
    rating: 4,
    reviewCount: 178,
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
  },
  {
    id: 37,
    name: "Wireless Router",
    category: "Electronics",
    price: 99.99,
    rating: 4,
    reviewCount: 143,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
  },
  {
    id: 38,
    name: "Pillow Set",
    category: "Home",
    price: 39.99,
    rating: 4,
    reviewCount: 201,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
  },
  {
    id: 39,
    name: "Tennis Racket",
    category: "Sports",
    price: 89.99,
    rating: 4,
    reviewCount: 76,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80",
  },
  {
    id: 40,
    name: "Candles Set",
    category: "Home",
    price: 19.99,
    rating: 4,
    reviewCount: 267,
    image:
      "https://images.unsplash.com/photo-1602178648714-6a1bfe02bc7e?w=400&q=80",
  },
  {
    id: 41,
    name: "External Hard Drive",
    category: "Electronics",
    price: 79.99,
    rating: 4,
    reviewCount: 188,
    image:
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&q=80",
  },
  {
    id: 42,
    name: "Yoga Blocks",
    category: "Sports",
    price: 24.99,
    rating: 5,
    reviewCount: 132,
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80",
  },
  {
    id: 43,
    name: "Picture Frame",
    category: "Home",
    price: 24.99,
    rating: 4,
    reviewCount: 94,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&q=80",
  },
  {
    id: 44,
    name: "Bike Helmet",
    category: "Sports",
    price: 49.99,
    rating: 4,
    reviewCount: 108,
    image:
      "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=400&q=80",
  },
  {
    id: 45,
    name: "Air Purifier",
    category: "Home",
    price: 149.99,
    rating: 5,
    reviewCount: 156,
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80",
  },
  {
    id: 46,
    name: "Webcam",
    category: "Electronics",
    price: 59.99,
    rating: 4,
    reviewCount: 212,
    image:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&q=80",
  },
  {
    id: 47,
    name: "Piano Pad",
    category: "Electronics",
    price: 79.99,
    rating: 4,
    reviewCount: 89,
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80",
  },
  {
    id: 48,
    name: "Swim Goggles",
    category: "Sports",
    price: 14.99,
    rating: 4,
    reviewCount: 167,
    image:
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&q=80",
  },
  {
    id: 49,
    name: "Notebook Set",
    category: "Accessories",
    price: 12.99,
    rating: 4,
    reviewCount: 345,
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80",
  },
  {
    id: 50,
    name: "Wall Art",
    category: "Home",
    price: 39.99,
    rating: 4,
    reviewCount: 129,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&q=80",
  },
];

const CATEGORIES = [
  "All Categories",
  "Electronics",
  "Clothing",
  "Furniture",
  "Home",
  "Sports",
  "Accessories",
];
const SORT_OPTIONS = [
  "Featured",
  "Price: Low → High",
  "Price: High → Low",
  "Top Rated",
  "Lowest Rated",
];

// ── Custom Select ─────────────────────────────────────────────
function CustomSelect({ value, onChange, options, accentOnOpen = false }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`prod-select ${open ? "prod-select-open" : ""} ${accentOnOpen && open ? "prod-select-accent" : ""}`}
    >
      <button
        className="prod-select-trigger"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{value}</span>
        <span
          className={`prod-select-chevron ${open ? "prod-select-chevron-up" : ""}`}
        >
          <ChevronIcon />
        </span>
      </button>
      {open && (
        <ul className="prod-select-dropdown">
          {options.map((opt) => (
            <li
              key={opt}
              className={`prod-select-option ${opt === value ? "prod-select-option-active" : ""}`}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Products Page ─────────────────────────────────────────────
export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("Featured");

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    // search
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    // category
    if (category !== "All Categories") {
      list = list.filter((p) => p.category === category);
    }
    // sort
    if (sort === "Price: Low → High") list.sort((a, b) => a.price - b.price);
    if (sort === "Price: High → Low") list.sort((a, b) => b.price - a.price);
    if (sort === "Top Rated")
      list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
    if (sort === "Lowest Rated") list.sort((a, b) => a.rating - b.rating);
    return list;
  }, [search, category, sort]);

  return (
    <div className="products-page">
      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <h1 className="products-title">All Products</h1>
          <p className="products-count">{filtered.length} products found</p>
        </div>

        {/* Filters */}
        <div className="products-filters">
          <div className="products-search-wrap">
            <span className="products-search-icon">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="products-search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <CustomSelect
            value={category}
            onChange={setCategory}
            options={CATEGORIES}
            accentOnOpen
          />
          <CustomSelect
            value={sort}
            onChange={setSort}
            options={SORT_OPTIONS}
            accentOnOpen
          />
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="products-empty">No products match your search.</div>
        ) : (
          <div className="products-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={() => {}}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
