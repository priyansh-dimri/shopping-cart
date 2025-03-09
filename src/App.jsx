import "./styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./pages/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
