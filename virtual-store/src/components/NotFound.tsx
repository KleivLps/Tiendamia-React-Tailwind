import Navbar from "./Navbar"
import Footer from "./Footer"

function NotFound() {
    return(
        <>
        <Navbar search={true}/>
        <main>
            <section className="text-center pt-50 pb-50 bg-[#f4f4f4] " /* hero */ >
            <img
              className="w-full flex items-center grow " /* header-logo-img */
              src="/cheems.jpg"
              width="218"
              alt="404"
            />
            <h2 className="text-4xl mb-5 ">404 Not Found</h2>
            <p className="text-lg ">
                Lo sentimos, la pagina que estas buscando no pudo ser encontrada.
            </p>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default NotFound