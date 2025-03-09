import Cart from "./Cart";
import Home from "./Home";
import NotFound from "./NotFound";
import Shop from "./Shop";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />
  }
];

export default routes;
