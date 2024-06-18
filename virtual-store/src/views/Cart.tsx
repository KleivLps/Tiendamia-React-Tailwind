
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import CartCard from "../components/CartCard"
import CartResume from "../components/CartResume"


const precio = 2000;
const descuento = 90;
const preciodescuento = precio- (precio * descuento) / 100

function Carrito (){

  
  

    return (
        <>
        
        <Navbar search={false} />
        <Hero Primero=" Mi carrito"  segundo= "De compras" />
        <main className="w-full flex flex-col md:flex-row justify-center items-center p-[20px]">
        <CartCard
        id="123"
        title="Ipad"
        images="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
        description="description of the product"
        precio={precio}
        descuento={descuento}
        preciodescuento={preciodescuento}
        quantity="1"
        color="black"
        />
        <CartResume preciodescuento={preciodescuento} />
        
      </main>
        <Footer/>
        </>
    )
}

export default Carrito