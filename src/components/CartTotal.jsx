function CartTotal({ products, cart }) {
  const totalPrice = Object.entries(cart).reduce((sum, [id, count]) => {
    const product = products.find(
      (product) => Number(product.id) === Number(id)
    );
    return sum + (product ? product.price * count : 0);
  }, 0);

  return (
    <div className="cart-card">
      <div className="cart-title" id="cart-total-title">TOTAL</div>
      <div className="cart-product-price" id="cart-total">{totalPrice.toFixed(2)}$</div>
    </div>
  );
}

export default CartTotal;
