import { useCart } from "./CartContext";
import "../styles/Cartslider.scss";

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

const CartBagIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const ArrowIcon = () => (
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

export default function CartSlider() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQty,
    clearCart,
    total,
    count,
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop ${isOpen ? "cart-backdrop-visible" : ""}`}
        onClick={closeCart}
      />

      {/* Slider Panel */}
      <div className={`cart-slider ${isOpen ? "cart-slider-open" : ""}`}>
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-left">
            <CartBagIcon />
            <span className="cart-title">Cart</span>
            {count > 0 && (
              <span className="cart-badge">
                {count} item{count !== 1 ? "s" : ""}
              </span>
            )}
          </div>
          <button className="cart-close-btn" onClick={closeCart}>
            <CloseIcon />
          </button>
        </div>

        {/* Items */}
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <CartBagIcon />
              <p>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                  <p className="cart-item-each">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
                <div className="cart-item-controls">
                  <div className="cart-qty">
                    <button
                      className="cart-qty-btn"
                      onClick={() => updateQty(item.id, -1)}
                    >
                      −
                    </button>
                    <span className="cart-qty-val">{item.qty}</span>
                    <button
                      className="cart-qty-btn"
                      onClick={() => updateQty(item.id, +1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="cart-item-delete"
                    onClick={() => removeItem(item.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-value">${total.toFixed(2)}</span>
            </div>
            <button className="cart-checkout-btn">
              Checkout <ArrowIcon />
            </button>
            <button className="cart-clear-btn" onClick={clearCart}>
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
