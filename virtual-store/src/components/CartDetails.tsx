
import products from "../assets/product"

interface Product {
  id: string;
  price: number;
  descuento: number;
  //Añadido de unit Numbers para despues reemplazarlo en ref
  units: number;
  description:string;
  quantity:number;
  color:string;
  title:string;
  images:string;
}

interface CartCardProp {
  product: Product;
}

function CartCard({ product }: CartCardProp) {
  //añadido del useRef
 
  const PrecioDescuento =
    product.price - (product.price * product.descuento) / 100;

  
  return(
    <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
          <img
            className="hidden lg:inline-block w-[140px] h-[140px] rounded-sm"
            src={product.images}
            alt="ipad"
          />
          <div className="flex flex-col justify-start flex-grow">
          <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
            <span>
            <strong className="block lg:inline-block text-[16px]">{product.title} </strong>
            <span className="block lg:inline-block text-[12px]">-{product.color} </span>
            </span>
            <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">
                {product.description}
            </p>
            <input
              className="w-[70px] rounded-sm border-1 border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
              type="number"
              name="quantity"
              defaultValue={product.quantity}
              min="1"
              id={product.id}
            />
          </div>
          <strong className="text-start lg:text-end text-[14px] px-[10px]"> S/{PrecioDescuento} </strong>
          </div>
        </article>

  )
}

export default CartCard





function CartDetails (){


return (
    <div className={styles["cart-resume"]}>
          <div className={styles["cart-data"]}>
            <h2 className={styles["cart-title"]}>
              <span>Resumen</span>
              <span>del</span>
              <span>pedido</span>
            </h2>
            <div className={styles["cart-total"]}>
              <h3>Total</h3>
              <strong className={styles["cart-price"]}>S/800000</strong>
            </div>
            <small className={styles["cart-tax"]}>
              Incluye impuesto PAIS y percepción AFIP.
            </small>
          </div>
          <button className={styles["cart-btn"]} id="buy" type="button">
            COMPRAR
          </button>
        </div>
)}

export default CartDetails