import styles from "./imagesProductDetails.module.css";
import { useState } from "react";
import { useEffect } from "react";

interface Product {
  title: string
  images: string[];
}

interface ImagesProductDetailsProp{
	product: Product
}

function ImagesProductDetails({ product }: ImagesProductDetailsProp) {
  //añadido del state para renderizar las fotos en miniatura

const[thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");

//añadido de efect para renderizar las fotos mas grandes
useEffect(()=> {
  setThumb(product.images[0] || "/mock1.jpg")
},[product])

  return (
    <>
      <section className={styles["product-images-block"]}>
        <div className={styles["product-images"]}>
          {product.images.map(
            (each, index) =>
              (
                <img
                  key={index}
                  className={styles["mini-img"]}
                  src={each}
                  alt={product.title}
                  onClick={()=> setThumb(each)}
                />
              )
          )}
        </div>
        <img
          className={styles["big-img"]}
          id="big-img"
          src={thumb}
          alt={product.title}
        />
      </section>
    </>
  );
}
export default ImagesProductDetails;
