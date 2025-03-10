import Cart from "./Cart";
import Home from "./Home";
import NotFound from "./NotFound";
import Shop from "./Shop";
import App from "../App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
