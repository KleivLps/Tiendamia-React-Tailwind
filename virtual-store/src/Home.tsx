import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Productos from "./components/ProductCard";
import products from "./assets/product"
import styles from "./Home.module.css"

function Home() {
  return (
    <>
    <Navbar search={true} />
    <Hero Primero="Tecnologia" segundo="Renovada"  />
    <main>
    
    <div className={styles["product-container"]} id="products">
      {products.map((each,index) => (
    <Productos
    key={index}
    image={each.images[0]}
    id={each.id}
    title={each.title}
    price={each.price}
    color={each.colors[0]}
    descuento={each.descuento}
    
    />
    ))}
    
    </div>
    </main>
      <Footer/>
    
    </>
    
  );
}

export default Home;
