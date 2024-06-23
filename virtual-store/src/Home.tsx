import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./components/Button";
import Product from "./assets/interface/product";
import { useSelector } from "react-redux";

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const productsPerPage = 9;
  const text = useSelector((store) => store.products.text);

  useEffect(() => {
    axios
      .get<Product[]>("/product.json")
      .then((res) => {
        const filterData = res.data.filter((each) =>
          each.title.toLowerCase() .includes(text.toLowerCase())
        );
        setProducts(filterData);
      })
      .catch((err) => console.log(err));
  }, [text]);
  console.log(text);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, products.length);
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <Navbar search={true} />
      <Hero Primero="Tecnologia" segundo="Renovada" />
      <main className="w-full flex justify-center items-center p-[20px]">
        <div
          className="w-[1080px] flex flex-wrap justify-between"
          id="products"
        >
          {displayedProducts.map((each: Product) => (
            <ProductCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              colors={each.colors}
              descuento={each.descuento}
              images={each.images[0]} // Aquí estamos pasando la URL correcta
            />
          ))}
        </div>
      </main>
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="secondary"
          disabled={currentPage === 0}
          onClick={handlePrevPage}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <span>{`Pagina ${currentPage + 1} de ${totalPages}`}</span>
        <Button
          variant="secondary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
