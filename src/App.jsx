import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./pages/routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div id="container">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
