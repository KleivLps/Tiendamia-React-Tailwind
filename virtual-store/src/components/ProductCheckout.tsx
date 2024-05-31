import styles from "./ProductCheckout.module.css";
import { useState } from "react";

interface Product {
	id: string;
	price: number;
}
interface ProductCheckoutProp {
	product: Product;
}

function ProductCheckout({product}: ProductCheckoutProp) {
	//Manejo de estados para la cantidad de productos
	const [quantity, setQuantity] = useState(1);

	//Manejo de estados para los estilos del botón "Añadir al carrito"
	const [button, setButton] = useState(false);
	
	//Lógica para setear el LocalStorage el array de productos del carrito
	const manageCart = () => {
		const storedProducts = localStorage.getItem("cart");
		let productsInStorage: Product[] = storedProducts ? JSON.parse(storedProducts) : [];
		
		const one = productsInStorage.find(each => each.id === product.id);
		if (!one) {
			productsInStorage.push(product);
			setButton(true);
		} 
		else {
			productsInStorage = productsInStorage.filter(each => each.id !== product.id);
			setButton(false);
		}
	localStorage.setItem("cart", JSON.stringify(productsInStorage));
	};

  return (
    <>
      <div className={styles["product-checkout-block"]}>
        <div className={styles["checkout-container"]}>
          <span className={styles["checkout-total-label"]}>Total:</span>
          <h2 id="price" className={styles["checkout-total-price"]}>
            S/{(product.price * quantity).toLocaleString()}
          </h2>
          <p className={styles["checkout-description"]}>
            Incluye impuesto general de ventas (I.G.V), no incluye costo de envio.
          </p>
          <ul className={styles["checkout-policy-list"]}>
            <li>
              <span className={styles["policy-icon"]}>
                <img src="/truck.png" alt="Truck" />
              </span>
              <span className={styles["policy-desc"]}>
                Agrega el producto al carrito para conocer los costos de envío rapido
              </span>
            </li>
            <li>
              <span className={styles["policy-icon"]}>
                <img src="/plane.png" alt="Plane" />
              </span>
              <span className={styles["policy-desc"]}>
                Recibelo aproximadamente entre 10 y 15 días hábiles, seleccionando
                envío normal
              </span>
            </li>
          </ul>
          <div className={styles["checkout-process"]}>
            <div className={styles["top"]}>
              <input type="number" min="1" defaultValue={quantity} onChange={(event) => setQuantity(Number(event?.target.value))}/>
              <button type="button" className={button ? styles["remove-btn"] : styles["cart-btn"]} onClick={manageCart}>
                {button ? "Remove from cart" : "Añadir al Carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
