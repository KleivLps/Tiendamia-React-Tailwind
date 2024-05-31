import styles from "./Oferta.module.css";
import products from "../assets/product";
import Productos from "./ProductCard";

function Oferta() {
  const onsale = products.filter((each) => each.onsale);
  return (
    <>
      <div className={styles["sales-block"]}>
        <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
        <div id="product-container" className={styles["product-container"]}>
          {onsale.map((each, index) => (
            <Productos
              key={index}
              image={each.images[0]}
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.colors[0]}
              
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Oferta;
