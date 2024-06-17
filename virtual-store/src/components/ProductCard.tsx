
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { id, title, price, color, images, descuento } = props;

  //calculando el precio con descuento

  const PrecioDescuento = price - (price * descuento) / 100;
  return (
    <>
      <Link key={id} className=" bg-[#f0f0f0] text-[#383838] rounded-3xl w-[300px] m-[15px] no-underline " to={"./details/" + id}> {/* product-card */}
        <img className="w-full h-[250px] object-cover object-center rounded-t-2xl rounded-r-2xl  " src={images} alt={title} /> {/* product-img */}
        <div className=" p-[20px] box-border "> {/* product-info */}
          <span className=" font-custom text-xl leading-6 font-bold flex flex-col overflow-hidden line-clamp-2  ">{title}</span> {/* product-title */}
          <span className=" text-xs font-normal text-[#383838] mb-[5px 0] ">{color}</span> {/* product-description */}
          <div className= " flex m-[5px 0] justify-between items-center "> {/* product-price-block */}
            <span className="text-[25px] font-bold line-through  ">S/{price}</span> {/* product-price-2 */}
          </div>
          <div className="flex m-[5px 0] justify-between items-center "> {/* product-price-block */}
            <span className= " text-2xl font-bold ">S/{PrecioDescuento}</span> {/* product-price */}
          </div>
          <div className="flex m-[5px 0] justify-between items-center "> {/* product-price-block */}
            {descuento > 0 && (
              <span className=" text-sm font-bold text-[#428f13] "> {/* product-discount */}
                {descuento}% OFF 
              </span>
            )}
          </div>
          <div className=" text-xs font-light "> {/* product-tax-policy */}
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;

