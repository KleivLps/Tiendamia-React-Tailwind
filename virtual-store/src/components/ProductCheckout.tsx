import classNames from "classnames";
import { useState, useRef, useEffect } from "react";

interface Product {
  id: string;
  price: number;
  descuento: number;
  units: number;
}

interface ProductCheckoutProp {
  product: Product;
}

function ProductCheckout({ product }: ProductCheckoutProp) {
  const units = useRef<HTMLInputElement>(null);
  const [quantity, setQuantity] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [button, setButton] = useState(false);

  const storedProducts = localStorage.getItem("cart");
  let productosEnStorage: Product[] = storedProducts ? JSON.parse(storedProducts) : [];

  useEffect(() => {
    let productosEnCarrito: Product[] = [];
    if (storedProducts) {
      productosEnCarrito = JSON.parse(storedProducts);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = productosEnCarrito.find((item) => item.id === product.id);
    if (one) {
      setQuantity(one.units);
      setPrecio(one.units * (product.price - (product.price * product.descuento) / 100));
      setButton(true);
    } else {
      setQuantity(1);
      setPrecio(product.price - (product.price * product.descuento) / 100);
      setButton(false);
    }
  }, [product.id, storedProducts, product.price, product.descuento]);

  useEffect(() => {
    const newPrecio = quantity * (product.price - (product.price * product.descuento) / 100);
    setPrecio(newPrecio);
  }, [quantity, product.price, product.descuento]);

  const manageCart = () => {
    const one = productosEnStorage.find((each) => each.id === product.id);
    if (!one) {
      const nuevoProducto = {
        ...product,
        units: quantity,
        preciodescuento: quantity * (product.price - (product.price * product.descuento) / 100)
      };
      productosEnStorage.push(nuevoProducto);
      setButton(true);
    } else {
      productosEnStorage = productosEnStorage.filter((each) => each.id !== product.id);
      setQuantity(1);
      setPrecio(product.price - (product.price * product.descuento) / 100);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productosEnStorage));
  };

  return (
    <>
      <div className="w-[340px] p-[10px] m-[10px] flex-col">
        <div className="bg-[#ebebeb] p-[33px] rounded-sm">
          <span className="text-[#ff3b3c] flex">SubTotal:</span>
          <h2 id="price" className="text-3xl font-bold my-2.5 line-through">
            S/{product.price}
          </h2>
          <span className="text-[#ff3b3c]">Total:</span>
          <h2 id="price" className="text-3xl font-bold flex items-center justify-center pb-2 mx-2.5">
            S/{precio.toLocaleString()}{"  "}
            <li className="text-lg font-bold flex items-center ml-2.5 text-[#428f13]">
              {product.descuento}% OFF
            </li>
          </h2>
          <p className="leading-5 break-words pb-2">
            Incluye impuesto general de ventas (I.G.V), no incluye costo de
            envio.
          </p>
          <ul className="p-0 list-none mb-7">
            <li>
              <span className="mr-3.5">
                <img src="/truck.png" alt="Truck" />
              </span>
              <span className="pb-2">
                Agrega el producto al carrito para conocer los costos de envío
                rapido
              </span>
            </li>
            <li>
              <span className="mr-3.5">
                <img src="/plane.png" alt="Plane" />
              </span>
              <span className="pb-2">
                Recibelo aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal
              </span>
            </li>
          </ul>
          <div className="gap-y-5">
            <div className="flex mb-2.5">
              <input
                className="h-[40px] rounded-xl border-none w-[62px] mr-2.5 p-[0 10px 0 20px] box-border"
                type="number"
                min="1"
                ref={units}
                value={quantity}
                onChange={() => {
                  if (units.current) {
                    setQuantity(Number(units.current.value));
                  }
                }}
              />
              <button
                type="button"
                className={classNames({
                  'w-full bg-[#202020] text-white font-bold border-none h-[40px] rounded-xl': button,
                  'w-full bg-[#ff3b3c] text-white font-bold border-none h-[40px] rounded-xl': !button,
                })}
                onClick={manageCart}
              >
                {button ? "Remover del Carrito" : "Añadir al Carrito"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
