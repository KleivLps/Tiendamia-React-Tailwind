import styles from "./CardDescuento.module.css"
import { Link } from "react-router-dom"

export interface InfoProductos {
    id: string
    title: string
    color: string
    price: number
    images: string
    discount: number
    
}

  

interface Product {
    product: InfoProductos
}
function CardDescuento ({product}: Product) {
    return(
        <>
      <Link key={product.id} className={styles["product-card"]} to={"/details/" + product.id}>
        <img className={styles["product-img"]} src={product.images} alt={product.id} />
        <div className={styles["product-info"]}>
          <span className={styles["product-title"]}>{product.title}</span>
          <span className={styles["product-description"]}>{product.color}</span>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price"]}>{product.price}</span>
            <span className={styles["product-discount"]}>{product.discount}</span>
          </div>
          <div className={styles["product-tax-policy"]}>
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
    )
}

export default CardDescuento