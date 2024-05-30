import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Productos from "./components/ProductCard";
import styles from "./Home.module.css"
function Home() {
  return (
    <>
    <Navbar/>
    <Hero Primero="Tecnologia" segundo="Renovada"  />
    <main>
    <div className={styles["product-container"]} id="products">
    <Productos/>
    <Productos/>
    <Productos/>
    <Productos/>
    <Productos/>
    <Productos/>
    </div>
    </main>
      <Footer/>
    
    </>
  );
}

export default Home;
