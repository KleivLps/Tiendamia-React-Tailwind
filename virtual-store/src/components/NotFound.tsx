import styles from "./NotFound.module.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

function NotFound() {
    return(
        <>
        <Navbar search={false}/>
        <main>
            <section className={styles["hero"]} >
            <img
              className={styles["header-logo-img"]}
              src="/cheems.jpg"
              width="218"
              alt="404"
            />
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