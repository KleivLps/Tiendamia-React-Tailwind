import classNames from "classnames";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
interface Product {
  id: string;
  price: number;
  descuento: number;
  //Añadido de unit Numbers para despues reemplazarlo en ref
  units: number;
}

interface ProductCheckoutProp {
  product: Product;
}

function ProductCheckout({ product }: ProductCheckoutProp) {
  //añadido del useRef
  const units = useRef<HTMLInputElement>(null);
  const PrecioDescuento =
    product.price - (product.price * product.descuento) / 100;

  //Manejo de estados para la cantidad de productos
  const [quantity, setQuantity] = useState(1);
  const [precio, actualizarPrecio] = useState(PrecioDescuento * quantity);

  //Manejo de estados para los estilos del botón "Añadir al carrito"
  const [button, setButton] = useState(false);

  //Lógica para setear el LocalStorage el array de productos del carrito

  const storedProducts = localStorage.getItem("cart");
  let productosEnStorage: Product[] = storedProducts
    ? JSON.parse(storedProducts)
    : [];

  //añadiendo el efecto del boton
  useEffect(() => {
    let productosEnCarrito: Product[] = [];
    if (storedProducts) {
      productosEnCarrito = productosEnStorage ? JSON.parse(storedProducts) : [];
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = productosEnCarrito.find((item) => item.id === product.id);
    if (one) {
      actualizarPrecio(one.units * PrecioDescuento);
      setButton(true);
    } else {
      setQuantity(1);
      setButton(false);
      actualizarPrecio(PrecioDescuento);
    }
  }, [product.id, storedProducts, PrecioDescuento]);

  //Añadiendo Logica para incluir el Localstorage con el array de los productos del carrito

  const manageCart = () => {
    const one = productosEnStorage.find((each) => each.id === product.id);
    if (!one) {
      const nuevoProducto = {
        ...product,
        units: quantity,
        price: PrecioDescuento * quantity,
      };
      productosEnStorage.push(nuevoProducto);
      setButton(true);
    } else {
      productosEnStorage = productosEnStorage.filter(
        (each) => each.id !== product.id
      );
      setQuantity(1);
      actualizarPrecio(PrecioDescuento);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productosEnStorage));
  };

  return (
    <>
      <div className="w-[340px] p-[10px] m-[10px] flex-col"> {/* product-checkout-block */}
        <div className=" bg-[#ebebeb] p-[33px] rounded-sm  "> {/* checkout-container */}
          <span className="text-[#ff3b3c] flex ">SubTotal:</span> {/* checkout-total-label-2 */}
          <h2 id="price" className=" text-3xl font-bold my-2.5 line-through "> {/* checkout-total-price-2 */}
            S/{product.price}
          </h2>
          <span className="text-[#ff3b3c] ">Total:</span> {/* checkout-total-label */}
          <h2 id="price" className=" text-3xl font-bold flex items-center justify-center pb-2 mx-2.5 "> {/* checkout-total-price */}
            S/{precio.toLocaleString()}{"  "}
            <li className=" text-lg font-bold flex items-center ml-2.5 text-[#428f13]  "> {/* precio */}
              {product.descuento}% OFF
            </li>
          </h2>
          <p className=" leading-5 break-words pb-2 "> {/* checkout-description */}
            Incluye impuesto general de ventas (I.G.V), no incluye costo de
            envio.
          </p>
          <ul className=" p-0 list-none mb-7 "> {/* checkout-policy-list */}
            <li >
              <span className="mr-3.5 "> {/* policy-icon */}
                <img src="/truck.png" alt="Truck" />
              </span>
              <span className="pb-2 "> {/* policy-desc */}
                Agrega el producto al carrito para conocer los costos de envío
                rapido
              </span>
            </li>
            <li >
              <span className="mr-3.5 "> {/* policy-icon */}
                <img src="/plane.png" alt="Plane" />
              </span>
              <span className="pb-2 "> {/* policy-desc */}
                Recibelo aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal
              </span>
            </li>
          </ul>
          <div className="gap-y-5 "> {/* checkout-process */}
            <div className=" flex mb-2.5  "> {/* top */}
              <input className=" h-[40px] rounded-xl border-none w-[62px] mr-2.5 p-[0 10px 0 20px] box-border  "
                type="number"
                min="1"
                ref={units}
                value={
                  button
                    ? productosEnStorage.find((item) => item.id === product.id)
                        ?.units
                    : quantity
                } //Añadiendo un comprobador para evitar que units.current alerte de un problema
                onChange={() => {
                  if (units.current) {
                    setQuantity(Number(units.current.value));
                    actualizarPrecio(
                      Number(units.current.value) * PrecioDescuento
                    );
                  }
                }}
              />
              <button
                type="button"
                className={classNames({
                  'w-full bg-[#202020] text-white font-bold border-none h-[40px] rounded-xl':button,//remove-btn
                  'w-full bg-[#ff3b3c] text-white font-bold border-none h-[40px] rounded-xl  ':!button,//cart-btn
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
