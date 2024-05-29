import styles from "./NavButton.module.css";

function NavButton ({title,link}) {

    return( <>
<li className={styles["nav-li"]}>
        <a className={styles["nav-a"]} href={link}>
          {title}
        </a>
      </li>
    </>
    )
    }


export default NavButton