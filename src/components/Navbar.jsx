import { NavLink } from "react-router-dom";
import CartIcon from "./../assets/images/cart.svg";

function Navbar({ cartCount }) {
  return (
    <div id="navbar">
      <div id="title">HashCart</div>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/shop" className="nav-link">
        Shop
      </NavLink>
      <NavLink to="/cart" id="cart" type="button">
        <div id="cart-count">{cartCount > 99 ? "99+" : cartCount}</div>
        <img src={CartIcon} alt="Shopping Cart" className="icon" />
      </NavLink>
    </div>
  );
}

export default Navbar;
