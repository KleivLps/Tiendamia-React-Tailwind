import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import products from "./assets/product";
import styles from "./Home.module.css";


function Home() {

  
  return (
    <>
      <Navbar search={true} />
      <Hero Primero="Tecnologia" segundo="Renovada" />
      <main>
        <div className={styles["product-container"]} id="products">
          {products.map((each,index) => ( // Eliminamos 'index' ya que no lo estamos utilizando
            <ProductCard
              key={index} // Usamos el 'id' del producto como clave
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.color}
              descuento={each.descuento}
              images={each.images[0]} // Solo si quieres la primera imagen
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;