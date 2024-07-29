import styles from "./dish.module.css";
import { dishSquare, dishCircle } from "../../public/image";

export default function Dish() {
  return (
    <section className={styles.dish}>
      <div className="container">
        <div className={`${styles.image} right-child`}>
          <img className={styles.dishCircle} src={dishCircle.src} alt="dish" />
          <img className={styles.dishSquare} src={dishSquare.src} alt="dish" />
        </div>
        <div className={`${styles.text} left-child`}>
          <h2>New Dish</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptas accusantium laudantium voluptatem temporibus! Vero sequi ut
            aliquid mollitia, unde cumque odio eligendi eos porro maiores
            consequatur explicabo, quibusdam eum.
          </p>
        </div>
      </div>
    </section>
  );
}
