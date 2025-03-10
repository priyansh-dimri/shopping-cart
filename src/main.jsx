import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import routes from "./pages/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
