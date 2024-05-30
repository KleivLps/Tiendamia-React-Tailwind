import styles from "./Oferta.module.css"

function Oferta (){
    return(
        <div className={styles["sales-block"]}>
              <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
              <div id="product-container" className={styles["product-container"]}>
                <a className={styles["product-card"]} href="./details.html">
                  <img
                    className={styles["product-img"]}
                    src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                    alt="Kindle Paperwhite"
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>Kindle Paperwhite</span>
                    <span className={styles["product-description"]}>Black</span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>100000</span>
                      <span className={styles["product-discount"]}>50% Off</span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </a>
                <a className={styles["product-card"]} href="./details.html">
                  <img
                    className={styles["product-img"]}
                    src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                    alt="Kindle Paperwhite"
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>Kindle Paperwhite</span>
                    <span className={styles["product-description"]}>Black</span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>100000</span>
                      <span className={styles["product-discount"]}>50% Off</span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </a>
                <a className={styles["product-card"]} href="./details.html">
                  <img
                    className={styles["product-img"]}
                    src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                    alt="Kindle Paperwhite"
                  />
                  <div className={styles["product-info"]}>
                    <span className={styles["product-title"]}>Kindle Paperwhite</span>
                    <span className={styles["product-description"]}>Black</span>
                    <div className={styles["product-price-block"]}>
                      <span className={styles["product-price"]}>100000</span>
                      <span className={styles["product-discount"]}>50% Off</span>
                    </div>
                    <div className={styles["product-tax-policy"]}>
                      Incluye impuesto País y percepción AFIP
                    </div>
                  </div>
                </a>
              </div>
            </div>
    )
}

export default Oferta