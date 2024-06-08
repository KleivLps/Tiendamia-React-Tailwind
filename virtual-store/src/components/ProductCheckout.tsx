import styles from "./ProductCheckout.module.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
interface Product {
  id: string;
  price: number;
  descuento: number;
  //Añadido de unit Numbers para despues reemplazarlo en ref
  units: number;
}

interface ProductCheckoutProp {
  product: Product;
}

function ProductCheckout({ product }: ProductCheckoutProp) {
  //añadido del useRef
  const units = useRef<HTMLInputElement>(null);
  const PrecioDescuento =
    product.price - (product.price * product.descuento) / 100;

  //Manejo de estados para la cantidad de productos
  const [quantity, setQuantity] = useState(1);
  const [precio, actualizarPrecio] = useState(PrecioDescuento * quantity);

  //Manejo de estados para los estilos del botón "Añadir al carrito"
  const [button, setButton] = useState(false);

  //Lógica para setear el LocalStorage el array de productos del carrito

  const storedProducts = localStorage.getItem("cart");
  let productosEnStorage: Product[] = storedProducts
    ? JSON.parse(storedProducts)
    : [];

  //añadiendo el efecto del boton
  useEffect(() => {
    let productosEnCarrito: Product[] = [];
    if (storedProducts) {
      productosEnCarrito = productosEnStorage ? JSON.parse(storedProducts) : [];
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = productosEnCarrito.find((item) => item.id === product.id);
    if (one) {
      actualizarPrecio(one.units * PrecioDescuento);
      setButton(true);
    } else {
      setQuantity(1);
      setButton(false);
      actualizarPrecio(PrecioDescuento);
    }
  }, [product.id, storedProducts, PrecioDescuento]);

  //Añadiendo Logica para incluir el Localstorage con el array de los productos del carrito

  const manageCart = () => {
    const one = productosEnStorage.find((each) => each.id === product.id);
    if (!one) {
      const nuevoProducto = {
        ...product,
        units: quantity,
        price: PrecioDescuento * quantity,
      };
      productosEnStorage.push(nuevoProducto);
      setButton(true);
    } else {
      productosEnStorage = productosEnStorage.filter(
        (each) => each.id !== product.id
      );
      setQuantity(1);
      actualizarPrecio(PrecioDescuento);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productosEnStorage));
  };

  return (
    <>
      <div className={styles["product-checkout-block"]}>
        <div className={styles["checkout-container"]}>
          <span className={styles["checkout-total-label-2"]}>SubTotal:</span>
          <h2 id="price" className={styles["checkout-total-price-2"]}>
            S/{product.price}
          </h2>
          <span className={styles["checkout-total-label"]}>Total:</span>
          <h2 id="price" className={styles["checkout-total-price" ]}>
            S/{precio.toLocaleString()}{" "}
            <h6 className={styles["checkout-total-price tamaño"]}>
              {product.descuento}% OFF
            </h6>
          </h2>
          <p className={styles["checkout-description"]}>
            Incluye impuesto general de ventas (I.G.V), no incluye costo de
            envio.
          </p>
          <ul className={styles["checkout-policy-list"]}>
            <li>
              <span className={styles["policy-icon"]}>
                <img src="/truck.png" alt="Truck" />
              </span>
              <span className={styles["policy-desc"]}>
                Agrega el producto al carrito para conocer los costos de envío
                rapido
              </span>
            </li>
            <li>
              <span className={styles["policy-icon"]}>
                <img src="/plane.png" alt="Plane" />
              </span>
              <span className={styles["policy-desc"]}>
                Recibelo aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal
              </span>
            </li>
          </ul>
          <div className={styles["checkout-process"]}>
            <div className={styles["top"]}>
              <input
                type="number"
                min="1"
                ref={units}
                value={
                  button
                    ? productosEnStorage.find((item) => item.id === product.id)
                        ?.units
                    : quantity
                } //Añadiendo un comprobador para evitar que units.current alerte de un problema
                onChange={() => {
                  if (units.current) {
                    setQuantity(Number(units.current.value));
                    actualizarPrecio(
                      Number(units.current.value) * PrecioDescuento
                    );
                  }
                }}
              />
              <button
                type="button"
                className={button ? styles["remove-btn"] : styles["cart-btn"]}
                onClick={manageCart}
              >
                {button ? "Remover del Carrito" : "Añadir al Carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
