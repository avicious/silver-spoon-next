import styles from "./hero.module.css";
import { heroMain, heroLeft, heroRight } from "../../public/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Welcome to Silver Spoon</h1>
      <div className={styles.imageSection}>
        <div className={styles.sideImg}>
          <img src={heroLeft.src} alt="food" />
          <p>From 2007 Silver Spoon provides a unique dining experience</p>
        </div>
        <div className={styles.mainImg}>
          <img src={heroMain.src} alt="restaurant" />
        </div>
        <div className={styles.sideImg}>
          <img src={heroRight.src} alt="food" />
          <p>
            Welcome to Silver Spoon, where exquisite cuisine meets warm
            hospitality
          </p>
        </div>
      </div>
    </section>
  );
}
