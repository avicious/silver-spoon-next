import styles from "./customer.module.css";

export default function Customer({ image, user, comment }) {
  return (
    <div className={styles.customer}>
      <div className={styles.person}>
        <img src={image.src} alt={user} />
        <div>
          <p>{user}</p>
          <p>Customer</p>
        </div>
      </div>
      <p>"{comment}"</p>
    </div>
  );
}
