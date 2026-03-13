import image from "next/image"
import styles from "./page.module.css";

function home () {
    return(
        <div classname={styles.containerHome}>
        <div className={styles.containerListas}>
            <h1>Exemplos</h1>
            </div>
            <div>
            <div className={styles.containerListas}></div>
            <h1>atividades </h1>
        
         </div>
        </div>
    );
}

export default home;