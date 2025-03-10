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
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
