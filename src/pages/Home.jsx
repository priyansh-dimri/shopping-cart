import ShoppingCart from "../assets/images/shopping-cart.png";

function Home() {
  return (
    <div className="main">
      <img src={ShoppingCart} alt="Shopping Cart" id="hero-image" />
      <div id="hero-content">
        <div id="hero-title">HashCart</div>
        <div id="hero-subtitle">Smart Deals, Zero Compromise.</div>
      </div>
    </div>
  );
}

export default Home;
