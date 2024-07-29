import styles from "./chef-hero.module.css";
import { chefCircle, chefLeft, chefRight } from "../../public/image";

export default function ChefHero() {
  return (
    <section className={styles.hero}>
      <h2>
        Ted Nasso,
        <br /> The Architect Of Cuisine
      </h2>
      <div className={styles.imageSection}>
        <div className={styles.sideImg}>
          <img src={chefLeft.src} alt="food" />{" "}
          <p>
            The food is arranged on the plate in an aesthetically pleasing way
          </p>
        </div>
        <div className={styles.mainImg}>
          <img src={chefCircle.src} alt="restaurant" />
        </div>
        <div className={styles.sideImg}>
          <img src={chefRight.src} alt="food" />
          <p>
            Typically sourced from local farmers and markets to ensure their
            freshness
          </p>
        </div>
      </div>
    </section>
  );
}
