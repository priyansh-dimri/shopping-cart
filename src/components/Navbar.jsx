import CartIcon from "./../assets/images/cart.svg";

function Navbar() {
  return (
    <div id="navbar">
      <div id="title">HashCart</div>
      <div className="nav-link home">Home</div>
      <div className="nav-link">Shop</div>
      <div id="cart" type="button">
        <div id="cart-count"></div>
        <img src={CartIcon} alt="Shopping Cart" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
