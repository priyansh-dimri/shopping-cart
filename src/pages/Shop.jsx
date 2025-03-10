import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Shop() {
  const { products, updateProductCount, updateCart } = useOutletContext();
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} updateProductCount={updateProductCount} updateCart={updateCart}/>
      ))}
    </>
  );
}

export default Shop;
