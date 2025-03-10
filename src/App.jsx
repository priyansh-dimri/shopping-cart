import "./styles/global.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        setProducts(
          data.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            count: 0,
          }))
        )
      )
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const updateProductCount = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, count: Math.max(0, product.count + change) }
          : product
      )
    );
  };

  return (
    <div id="container">
      <Navbar cartCount={cartCount} />
      <main>
        <Outlet context={{ products, updateProductCount }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
