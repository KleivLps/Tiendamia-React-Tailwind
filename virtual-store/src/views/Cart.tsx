import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import Product from "../assets/interface/product";

function Carrito() {
  const [productsOnCart, setProductsOnCart] = useState <Product[]>([]);
  


  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products = JSON.parse(localStorage.getItem("cart"));
      setProductsOnCart(products);
      calculateTotal(products); // Calcula el total cuando se carga el carrito
    }
  }, []);

  const updateTotal = () => {
    const products = JSON.parse(localStorage.getItem("cart")) || [];
    calculateTotal(products);
  };

  const calculateTotal = (products) => {
    const totalAmount = products.reduce((acc, item) => {
      return acc + item.preciodescuento * item.units;
    }, 0);
    setTotal(totalAmount);
  };

  const removeProduct = (productId) => {
    const updatedProducts = productsOnCart.filter((each) => each.id !== productId);
    setProductsOnCart(updatedProducts);
    calculateTotal(updatedProducts);
  };

  return (
    <>
      <Navbar search={false} />
      <Hero Primero="Mi carrito" segundo="De compras" />
      <main className="w-full flex flex-col md:flex-row justify-center items-center p-[20px]">
        <section className="flex flex-col">
          {productsOnCart.map((each) => (
            <CartCard key={each.id} product={each} updateTotal={updateTotal} removeProduct={removeProduct} />
          ))}
        </section>
        <CartResume total={total} />
      </main>
      <Footer />
    </>
  );
}

export default Carrito;
