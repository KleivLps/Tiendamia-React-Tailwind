import Home from "./Home"
import Detalles from "./views/Details";
import Carrito from "./views/Cart";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
   const browserRouter = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/Details/:id", element: <Detalles/>},
    { path: "/Cart", element: <Carrito/>},
    { path: "/*", element: <NotFound/>}  
  ]) 
  return (
    <RouterProvider router={browserRouter} /> 
  );
}

export default App;
