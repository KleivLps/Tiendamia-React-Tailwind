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
      <section className="flex w-[340px] p-[10px] m-2.5 "> {/* product-images-block */}
        <div className="w-[44px] m-1  "> {/* product-images */}
          {product.images.map(
            (each, index) =>
              (
                <img
                  key={index}
                  className=" w-[40px] h-[40px] object-cover " /* mini-img */
                  src={each}
                  alt={product.title}
                  onClick={()=> setThumb(each)}
                />
              )
          )}
        </div>
        <img
          className=" w-[280px] h-[280px] object-cover " /* big-img */
          id="big-img"
          src={thumb}
          alt={product.title}
        />
      </section>
    </>
  );
}
export default ImagesProductDetails;
