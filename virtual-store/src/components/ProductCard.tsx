import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom"

function Productos() {

    return(
        <>
    <Link className={styles["product-card"]} to="./Details/1">
          <img
            className={styles["product-img"]}
            src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
            alt="iPad Pro 12.9"
          />
          <div className={styles["product-info"]}>
            <span className={styles["product-title"]}>iPad Pro 12.9</span>
            <span className={styles["product-description"]}>Silver</span>
            <div className={styles["product-price-block"]}>
              <span className={styles["product-price"]}>900000</span>
              <span className={styles["product-discount"]}>50% Off</span>
            </div>
            <div className={styles["product-tax-policy"]}>
              Incluye impuesto País y percepción AFIP
            </div>
          </div>
        </Link>
        </>
    )
} 

export default Productos