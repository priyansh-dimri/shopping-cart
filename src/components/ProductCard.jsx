function ProductCard({ product, updateProductCount }) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt="Product Image" />
      <div className="product-title">{product.title}</div>
      <div className="product-price">{product.price}$</div>
      <div className="product-count-container">
        <button
          type="button"
          className="product-count-button minus"
          onClick={() => updateProductCount(product.id, -1)}
        >
          -
        </button>
        <div className="product-count">{product.count}</div>
        <button
          type="button"
          className="product-count-button plus"
          onClick={() => updateProductCount(product.id, 1)}
        >
          +
        </button>
      </div>
      <button type="button" className="add-to-cart">
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductCard;
