import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function Productos(props) {
  const { id, title, price, color, image, descuento } = props;

  return (
    <>
      <Link key={id} className={styles["product-card"]} to={"./details/" + id}>
        <img className={styles["product-img"]} src={image} alt={id} />
        <div className={styles["product-info"]}>
          <span className={styles["product-title"]}>{title}</span>
          <span className={styles["product-description"]}>{color}</span>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price"]}>S/{price}</span>
            <span className={styles["product-discount"]}>{descuento}</span>
          </div>
          <div className={styles["product-tax-policy"]}>
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}

export default Productos;
