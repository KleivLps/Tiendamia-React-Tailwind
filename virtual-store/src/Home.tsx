
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import products from "./assets/product";
import styles from "./Home.module.css";
import { useState } from "react";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./components/Button";

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 9;
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
      <main>
        <div className={styles["product-container"]} id="products">
          {displayedProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              color={product.color}
              descuento={product.descuento}
              images={product.images[0]}
            />
          ))}
        </div>
      </main>
      <div className='flex items-center justify-center gap-4'>
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
