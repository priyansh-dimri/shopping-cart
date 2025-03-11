import { useOutletContext } from "react-router-dom";
import CartCard from "../components/CartCard";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { cart, products, updateCart } = useOutletContext();
  return (
    <div id="cart-container">
      {Object.keys(cart).length === 0 ? (
        <div id="empty-cart">
          Nothing here… yet! Go grab some awesome stuff!
        </div>
      ) : (
        <>
          {Object.entries(cart).map(([id, count]) => (
            <CartCard
              key={id}
              product={products.find(
                (product) => Number(product.id) === Number(id)
              )}
              count={count}
              updateCart={updateCart}
            />
          ))}
          <CartTotal products={products} cart={cart} />
        </>
      )}
    </div>
  );
}

export default Cart;
