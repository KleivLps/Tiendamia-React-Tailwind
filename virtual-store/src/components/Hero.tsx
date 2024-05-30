
import styles from "./Hero.module.css";



export default function Hero({Primero,segundo}) {
  return (
    <>
      <section className={styles["hero-section"]}>
        <article className={styles["hero-title"]}>
          <span className={styles["hero-span"]}>{Primero}</span>
          <span className={styles["hero-span"]}>{segundo}</span>
        </article>
      </section>
 </>
  );
}


