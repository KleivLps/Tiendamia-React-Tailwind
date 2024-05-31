import styles from "./imagesProductDetails.module.css";

interface Product {
  images: string[];
}

interface ImagesProductDetailsProp{
	product: Product
}

function ImagesProductDetails({ product }: ImagesProductDetailsProp) {
  return (
    <>
      <section className={styles["product-images-block"]}>
        <div className={styles["product-images"]}>
          {product.images.map(
            (each, index) =>
              index > 0 && (
                <img
                  key={index}
                  className={styles["mini-img"]}
                  src={each}
                  alt="MacBook Pro 13'4"
                />
              )
          )}
        </div>
        <img
          className={styles["big-img"]}
          id="big-img"
          src={product.images[0]}
          alt="MacBook Pro 13'4"
        />
      </section>
    </>
  );
}
export default ImagesProductDetails;
