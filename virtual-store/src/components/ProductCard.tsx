import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { id, title, price, color, images, descuento } = props;

  //calculando el precio con descuento

  const PrecioDescuento = price - (price * descuento) / 100;
  return (
    <>
      <Link key={id} className={styles["product-card"]} to={"./details/" + id}>
        <img className={styles["product-img"]} src={images} alt={title} />
        <div className={styles["product-info"]}>
          <span className={styles["product-title"]}>{title}</span>
          <span className={styles["product-description"]}>{color}</span>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price-2"]}>S/{price}</span>
          </div>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price"]}>S/{PrecioDescuento}</span>
          </div>
          <div className={styles["product-price-block"]}>
            {descuento > 0 && (
              <span className={styles["product-discount"]}>
                {descuento}% OFF
              </span>
            )}
          </div>
          <div className={styles["product-tax-policy"]}>
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
