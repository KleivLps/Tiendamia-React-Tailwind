
import styles from "./Hero.module.css";

function Hero() {
  return (
    <>
      <section className={styles["hero-section"]}>
        <article className={styles["hero-title"]}>
          <span className={styles["hero-span"]}>tecnología</span>
          <span className={styles["hero-span"]}>renovada</span>
        </article>
      </section>
 </>
  );
}

export default Hero;
