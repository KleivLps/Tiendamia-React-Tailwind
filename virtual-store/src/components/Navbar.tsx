/* import { useState, useRef } from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/actions/products";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

interface NavbarProp {
  search: boolean;
}

const { captureText } = productsActions;

function Navbar({ search }: NavbarProp) {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;
  const text = useRef<HTMLInputElement>(null);
  const textStore = useSelector((store) => store.products.text);
  const dispatch = useDispatch();
  const setText = () => {
    if (text.current) {
      dispatch(captureText({ text: text.current.value }));
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="w-full h-[150px] bg-[#ff3b3c] p-2 flex flex-col items-center">
        <div className="w-full max-w-[1080px] flex justify-between items-center flex-grow px-4">
          <Link to="/" className="w-1/3 flex items-center flex-grow-1">
            <img
              className="h-[50px]"
              src="/tiendamia-logo.svg"
              width="218"
              alt="Logo store"
            />
          </Link>
          {search && (
            <form className="hidden md:flex w-1/3 items-center flex-grow-1">
              {pathname === "/" && (
                <input
                  className="h-[60px] rounded-2xl border-none w-full p-2 text-sm text-center"
                  type="text"
                  placeholder="Buscar..."
                  id="search"
                  ref={text}
                  defaultValue={textStore}
                  onChange={setText}
                />
              )}
            </form>
          )}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            ☰
          </button>
          <ul className="hidden md:flex w-1/3 items-center grow justify-end list-none">
            <li id="facebook" className="w-[50px] h-[50px]">
              <a className="w-[50px] h-[50px]" href="https://facebook.com">
                <svg
                  className="w-[50px] h-[50px] text-white pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </li>
            <li id="instagram" className="w-[50px] h-[50px]">
              <a className="w-[50px] h-[50px]" href="https://instagram.com">
                <svg
                  className="w-[50px] h-[50px] text-white pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </li>
            <li id="cart" className="w-[50px] h-[50px]">
              <Link className="w-[50px] h-[50px]" to="../Cart">
                <FontAwesomeIcon
                  className="w-[50px] h-[50px] text-white pr-2"
                  icon={faCartShopping}
                />
              </Link>
            </li>
          </ul>
        </div>
        {menuOpen && (
          <nav
            className={`md:static md:hidden w-full top-0 left-0 flex flex-col items-center p-4 md:w-auto bg-[#ff3b3b80] md:bg-transparent transform ${
              menuOpen ? "translate-y-0" : "-translate-y-full"
            } md:translate-y-0 transition-transform duration-1000 ease-in-out`}
          >
            <NavButton title="Ofertas" link="#" />
            <NavButton title="Cómo comprar" link="#" />
            <NavButton title="Costos y tarifas" link="#" />
            <NavButton title="Mis pedidos" link="#" />
            <NavButton title="Garantía" link="#" />
          </nav>
        )}
        <nav
          className="hidden md:flex w-full max-w-[1080px] p-4 px-4 bg-[#ff3b3c] justify-between list-none text-sm"
          id="navbar"
        >
          <NavButton title="Ofertas" link="#" />
          <NavButton title="Cómo comprar" link="#" />
          <NavButton title="Costos y tarifas" link="#" />
          <NavButton title="Mis pedidos" link="#" />
          <NavButton title="Garantía" link="#" />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
 */

import { useState, useRef } from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/actions/products";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { RootState } from "../store/reducers";

interface NavbarProp {
  search: boolean;
}

const { captureText } = productsActions;

function Navbar({ search }: NavbarProp) {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;
  const text = useRef<HTMLInputElement>(null);
  const textStore = useSelector((store: RootState) => store.products.text);
  const cartItems = useSelector((store: RootState) => store.cart.items);
  const dispatch = useDispatch();
  const setText = () => {
    if (text.current) {
      dispatch(captureText({ text: text.current.value }));
    }
  };

  // Log the cart items to ensure we are getting the correct data
  console.log("Cart Items: ", cartItems);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="w-full h-[150px] bg-[#ff3b3c] p-2 flex flex-col items-center">
        <div className="w-full max-w-[1080px] flex justify-between items-center flex-grow px-4">
          <Link to="/" className="w-1/3 flex items-center flex-grow-1">
            <img
              className="h-[50px]"
              src="/tiendamia-logo.svg"
              width="218"
              alt="Logo store"
            />
          </Link>
          {search && (
            <form className="hidden md:flex w-1/3 items-center flex-grow-1">
              {pathname === "/" && (
                <input
                  className="h-[60px] rounded-2xl border-none w-full p-2 text-sm text-center"
                  type="text"
                  placeholder="Buscar..."
                  id="search"
                  ref={text}
                  defaultValue={textStore}
                  onChange={setText}
                />
              )}
            </form>
          )}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            ☰
          </button>
          <ul className="hidden md:flex w-1/3 items-center grow justify-end list-none">
            <li id="facebook" className="w-[50px] h-[50px]">
              <a className="w-[50px] h-[50px]" href="https://facebook.com">
                <svg
                  className="w-[50px] h-[50px] text-white pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </li>
            <li id="instagram" className="w-[50px] h-[50px]">
              <a className="w-[50px] h-[50px]" href="https://instagram.com">
                <svg
                  className="w-[50px] h-[50px] text-white pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </li>
            <li id="cart" className="w-[50px] h-[50px] relative">
              <Link className="w-[50px] h-[50px]" to="../Cart">
                <FontAwesomeIcon
                  className="w-[50px] h-[50px] text-white pr-2"
                  icon={faCartShopping}
                />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 rounded-full bg-blue-600 text-white w-6 h-6 flex items-center justify-center overflow-hidden">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
        {menuOpen && (
          <nav
            className={`md:static md:hidden w-full top-0 left-0 flex flex-col items-center p-4 md:w-auto bg-[#ff3b3b80] md:bg-transparent transform ${
              menuOpen ? "translate-y-0" : "-translate-y-full"
            } md:translate-y-0 transition-transform duration-1000 ease-in-out`}
          >
            <NavButton title="Ofertas" link="#" />
            <NavButton title="Cómo comprar" link="#" />
            <NavButton title="Costos y tarifas" link="#" />
            <NavButton title="Mis pedidos" link="#" />
            <NavButton title="Garantía" link="#" />
          </nav>
        )}
        <nav
          className="hidden md:flex w-full max-w-[1080px] p-4 px-4 bg-[#ff3b3c] justify-between list-none text-sm"
          id="navbar"
        >
          <NavButton title="Ofertas" link="#" />
          <NavButton title="Cómo comprar" link="#" />
          <NavButton title="Costos y tarifas" link="#" />
          <NavButton title="Mis pedidos" link="#" />
          <NavButton title="Garantía" link="#" />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
