import React from 'react';
import Product from "../assets/interface/product";
import { Link } from "react-router-dom";




const ProductCard: React.FC<Product> = ({ id, title, price, colors, descuento, images }) => {
  const PrecioDescuento = price - (price * descuento) / 100;
  const colorsList = colors || []; // Usamos un array vacío si colors es undefined

  

  return (
    <>
      <Link key={id} className="bg-[#f0f0f0] text-[#383838] rounded-3xl w-[300px] m-[15px] no-underline" to={`/details/${id}`}>
        <img className="w-full h-[250px] object-cover object-center rounded-t-2xl rounded-r-2xl" src={images} alt={title} /> 
        <div className="p-[20px] box-border">
          <span className="font-custom text-xl leading-6 font-bold flex flex-col overflow-hidden line-clamp-2">{title}</span>
          <span className="text-xs font-normal text-[#383838] mb-[5px 0]">{colorsList.join(', ')}</span> 
          <div className="flex m-[5px 0] justify-between items-center">
            <span className="text-[25px] font-bold line-through">S/{price}</span>
          </div>
          <div className="flex m-[5px 0] justify-between items-center">
            <span className="text-2xl font-bold">S/{PrecioDescuento}</span>
          </div>
          <div className="flex m-[5px 0] justify-between items-center">
            {descuento > 0 && (
              <span className="text-sm font-bold text-[#428f13]">
                {descuento}% OFF 
              </span>
            )}
          </div>
          <div className="text-xs font-light">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
