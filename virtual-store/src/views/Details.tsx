
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Oferta from "../components/Oferta";
import Footer from "../components/Footer";
import ImagesProductDetails from "../components/imagesProductDetails";
import ProductCheckout from "../components/ProductCheckout";
import ProductDescriptionDetail from "../components/ProductDescriptionDetails";
import { useParams } from "react-router-dom";
import products from "../assets/product";

function Detalles() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const { id } = useParams();
  const product = products.find((each) => each.id === id);
  if (product)
    return (
      <>
        <Navbar search={true} />
        <Hero Primero="Detalles" segundo="Del producto" />
        <main className="w-full flex justify-center items-center p-[20px] ">
          <div className=" w-[1080px] flex flex-wrap  justify-between"> {/* details-container */}
            {product && (
              <div id="details" className=" flex justify-center flex-wrap "> {/* columns-container */}
                <ImagesProductDetails product={product} />
                <ProductDescriptionDetail product={product} />
                <ProductCheckout product={product} />
              </div>
            )}
            <Oferta />
          </div>
        </main>
        <Footer />
      </>
    );
}

export default Detalles;
