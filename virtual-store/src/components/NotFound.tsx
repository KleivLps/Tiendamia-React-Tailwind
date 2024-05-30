import styles from "./NotFound.module.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

function NotFound() {
    return(
        <>
        <Navbar/>
        <main>
            <section className={styles["hero"]} >
            <h2>404 Not Found</h2>
            <p>
                Lo sentimos, la pagina que estas buscando no pudo ser encontrada.
            </p>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default NotFound