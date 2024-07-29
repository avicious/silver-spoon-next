import styles from "./chef.module.css";
import { chefCircle, chefSquare } from "../../public/image";

export default function Chef() {
  return (
    <section className={styles.chef}>
      <div className="container">
        <div className={`${styles.text} left-child`}>
          <h2>Chef</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            perferendis rem, ducimus repellendus facere libero consequatur
            assumenda consequuntur eaque, accusantium necessitatibus aut quam
            sit perspiciatis non distinctio sunt harum cumque.
          </p>
        </div>
        <div className={`${styles.image} right-child`}>
          <img className={styles.chefCircle} src={chefCircle.src} alt="chef" />
          <img className={styles.chefSquare} src={chefSquare.src} alt="chef" />
        </div>
      </div>
    </section>
  );
}
