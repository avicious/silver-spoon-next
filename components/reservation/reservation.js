import styles from "./reservation.module.css";
import { heroMain } from "../../public/image";

export default function Reservation() {
  return (
    <section className={styles.hero}>
      <h2>Reservation</h2>
      <div className={styles.main}>
        <div className={styles.side}>
          <h3>Our Location</h3>
          <p>
            65 King Street.,
            <br /> New York, NY 25013 USA
          </p>
        </div>
        <div className={styles.mainImg}>
          <img src={heroMain.src} alt="restaurant" />
        </div>
        <div className={styles.side}>
          <h3>Opening Hours</h3>
          <p>
            Monday to Saturday <br /> From 11.30-16.00 <br /> From 18.30-22.30
          </p>
        </div>
      </div>
    </section>
  );
}
