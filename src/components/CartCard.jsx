function CartCard({ product, count, updateCart }) {
  return (
    <div className="cart-card">
      <div className="cart-title">{product.title}</div>
      <div className="cart-price">{product.price}$</div>
      <div className="cart-count-container">
        <button
          type="button"
          className="cart-count-button minus"
          onClick={() => updateCart(product.id, -1)}
        >
          -
        </button>
        <div className="cart-count">{count}</div>
        <button
          type="button"
          className="cart-count-button plus"
          onClick={() => updateCart(product.id, 1)}
        >
          +
        </button>
      </div>
      <div className="cart-product-price">{(product.price * count).toFixed(2)}$</div>
    </div>
  );
}

export default CartCard;
