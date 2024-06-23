import { useRef, useState, useEffect } from "react";

export default function CartCard({ product, updateTotal, removeProduct }) {
  const { id, title, price, color, images, description, preciodescuento, descuento, quantity } = product;
  const units = useRef(null);
  const [unitCount, setUnitCount] = useState(quantity || 1);
  const [subtotal, setSubtotal] = useState(preciodescuento * unitCount);

  useEffect(() => {
    setSubtotal(preciodescuento * unitCount);
  }, [unitCount, preciodescuento]);

  const manageUnits = () => {
    let productsOnCart = JSON.parse(localStorage.getItem("cart")) || [];
    const one = productsOnCart.find((each) => each.id === id);

    if (one && units.current) {
      const newUnits = Number(units.current.value);
      one.units = newUnits;
      setUnitCount(newUnits);
      localStorage.setItem("cart", JSON.stringify(productsOnCart));
      updateTotal(); // Actualiza el total del carrito
    } else {
      console.error("Producto no encontrado o referencia de unidades no válida");
    }
  };

  const removeFromCart = () => {
    let productsOnCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = productsOnCart.filter((each) => each.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    removeProduct(id); // Llama a la función de eliminación pasada como prop
  };

  return (
    <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
      {images && images.length > 0 ? (
        <img
          className="hidden lg:inline-block w-[140px] h-[140px] rounded-sm"
          src={images[0]}
          alt={title}
        />
      ) : (
        <div className="hidden lg:inline-block w-[140px] h-[140px] rounded-sm bg-gray-200"></div>
      )}
      <div className="flex flex-col justify-start flex-grow">
        <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
          <span>
            <strong className="font-custom text-[14px] leading-6 font-bold flex flex-col overflow-hidden line-clamp-2">
              {title ? title : "Sin título"}{" "}
            </strong>
            {color && (
              <span className="block lg:inline-block text-[12px]">
                -{color}{" "}
              </span>
            )}
          </span>
          <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">
            {description ? description : "Sin descripción"}
          </p>
          <div className="flex flex-wrap justify-between ">
          <input
            className="w-[70px] rounded-sm border-1 border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
            type="number"
            name="quantity"
            value={unitCount}
            ref={units}
            onChange={manageUnits}
            min="1"
            id={id}
          />
          <button
            className=" mt-[10px] bg-red-500 text-white p-[8px] rounded w-[80px] "
            onClick={removeFromCart}
          >
            Eliminar
          </button>
          </div>
         
        </div>
        <strong className="text-start lg:text-end text-[14px] px-[10px]">
          Subtotal = S/{price !== undefined ? price.toFixed(2) : "0.00"}{" "}
        </strong>
        <strong className="text-start lg:text-end text-[14px] px-[10px]">
          {descuento} % off{" "}
        </strong>
        <strong className="text-start lg:text-end text-[14px] px-[10px]">
          Total = S/{subtotal.toFixed(2)}{" "}
        </strong>
      </div>
    </article>
  );
}
