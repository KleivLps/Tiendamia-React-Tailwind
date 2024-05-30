import styles from "./Details.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Oferta from "../components/Oferta";
function Detalles() {
  return (
    <>
      <Navbar />
      <Hero Primero="Detalles" segundo="Del producto"/>
        <main>
          <div className={styles["details-container"]}>
            <div id="details" className={styles["columns-container"]}>
              <section className={styles["product-images-block"]}>
                <div className={styles["product-images"]}>
                  <img
                    className={styles["mini-img"]}
                    src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                    alt="MacBook Pro 13'4"
                  />
                  <img
                    className={styles["mini-img"]}
                    src="https://i.postimg.cc/Y91Q1tYQ/mock2.jpg"
                    alt="MacBook Pro 13'4"
                  />
                </div>
                <img
                  className={styles["big-img"]}
                  id="big-img"
                  src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                  alt="MacBook Pro 13'4"
                />
              </section>
              <div className={styles["product-description-block"]}>
                <h1 className={styles["product-title"]}>MacBook Pro 13'4</h1>
                <form className={styles["product-selector"]}>
                  <fieldset className={styles["product-fieldset"]}>
                    <label className={styles["product-label"]} htmlFor="color">
                      Color
                    </label>
                    <select
                      className={styles["product-select"]}
                      id="color"
                    >
                      <option value="Silver">Silver</option>
                    </select>
                  </fieldset>
                </form>
                <div className={styles["product-description"]}>
                  <span className={styles["product-label"]}>Descripción</span>
                  <p>
                    Experience the power of creativity with the MacBook Pro
                    13'4. Featuring 8GB of RAM and 512GB of storage, this laptop
                    provides the performance and storage capacity needed for
                    demanding tasks. The sleek design in silver and space gray
                    adds a touch of sophistication. The high-resolution Retina
                    display brings your visuals to life, whether you're editing
                    photos, creating videos, or simply browsing the web. With
                    the latest technology and a lightweight build, the MacBook
                    Pro 13'4 is the perfect companion for professionals and
                    creative individuals alike.
                  </p>
                </div>
              </div>
              <div className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                  <span className={styles["checkout-total-label"]}>Total:</span>
                  <h2 id="price" className={styles["checkout-total-price"]}>
                    $750000
                  </h2>
                  <p className={styles["checkout-description"]}>
                    Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                    50711 haciendo la solicitud en AFIP.
                  </p>
                  <ul className={styles["checkout-policy-list"]}>
                    <li>
                      <span className={styles["policy-icon"]}>
                        <img src="./assets/truck.png" alt="Truck" />
                      </span>
                      <span className={styles["policy-desc"]}>
                        Agrega el producto al carrito para conocer los costos de
                        envío
                      </span>
                    </li>
                    <li>
                      <span className={styles["policy-icon"]}>
                        <img src="./assets/plane.png" alt="Plane" />
                      </span>
                      <span className={styles["policy-desc"]}>
                        Recibelo aproximadamente entre 10 y 15 días hábiles,
                        seleccionando envío normal
                      </span>
                    </li>
                  </ul>
                  <div className={styles["checkout-process"]}>
                    <div className={styles["top"]}>
                      <input type="number" min="1" value="1" />
                      <button type="button" className={styles["cart-btn"]}>
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Oferta />
          </div>
        </main>
        <Footer/>
    </>
  );
}

export default Detalles;
