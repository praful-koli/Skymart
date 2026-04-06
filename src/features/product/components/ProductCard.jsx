import { useCart } from "../hook/useCart";
import "../styles/ProductCard.scss";
import {useNavigate} from 'react-router'
const CartIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

function StarRating({ rating, count }) {
  return (
    <div className="pc-rating">
      <div className="pc-stars">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`pc-star ${i <= Math.round(rating) ? "pc-star-filled" : "pc-star-empty"}`}>
            <StarIcon />
          </span>
        ))}
      </div>
      <span className="pc-rating-count">({count})</span>
    </div>
  );
}

export default function ProductCard({ product }) {
  console.log(product)
     const {addToCart, items,
        isOpen,
        openCart,
        closeCart,
        removeItem,
        updateQty,
        clearCart,
        total,
        count,} = useCart()
       
        // console.log('prduct ' , product)
        const navigate  = useNavigate()
  return (
    <div className="pc-card">
      <div className="pc-image-wrap" onClick={()=> navigate(`/home/productdetail/${product.id}`)}>
        <span className="pc-badge">{product.category}</span>
        <img src={product.image} alt={product.name} className="pc-image" />
      </div>
      <div className="pc-body">
        <span className="pc-category">{product.category}</span>
        <h3 className="pc-name">{product.name}</h3>
        <StarRating rating={product.rating} count={product.reviewCount} />
        <div className="pc-divider" />
        <div className="pc-footer">
          <span className="pc-price">${product.price.toFixed(2)}</span>
          <button className="pc-add-btn" onClick={() => addToCart(product) }>
            <CartIcon /> Add
          </button>
        </div>
      </div>
    </div>
  );
}