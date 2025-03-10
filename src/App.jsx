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
            change: 0,
          }))
        )
      )
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const updateProductCount = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, change: Math.max(0, product.change + change) }
          : product
      )
    );
  };

  const updateCart = (id, change) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      newCart[id] = (newCart[id] || 0) + change;
      if (newCart[id] <= 0) delete newCart[id];

      setCartCount((prevCartCount) => prevCartCount + change);

      return newCart;
    });
  };

  return (
    <div id="container">
      <Navbar cartCount={cartCount} />
      <main>
        <Outlet context={{ products, updateProductCount, updateCart }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
