import Home from "./Home";
import Detalles from "./views/Details";
import Carrito from "./views/Cart";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./store";

const browserRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/details/:id", element: <Detalles /> },
  { path: "/Cart", element: <Carrito /> },
  { path: "/*", element: <NotFound /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  );
}

export default App;
