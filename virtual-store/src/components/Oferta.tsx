import products from "../assets/product";
import Productos from "./ProductCard";

function Oferta() {
  const onsale = products.filter((each) => each.onsale);
  return (
    <>
      <div className="w-[1080px] flex flex-wrap justify-center pt-20 pb-20 "> {/* sales-block */}
        <h2 className=" text-center text-4xl " /* sales-title */ >Ofertas de la semana</h2>
        <div id="product-container" className="W-[1080px] flex flex-wrap justify-between "> {/* product-container */}
          {onsale.map((each, index) => (
            <Productos
              key={index}
              images={each.images[0]}
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.colors[0]}
              descuento={each.descuento}
              
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Oferta;
