import styles from "./item.module.css";

export default function Item(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h4>{props.name}</h4>
        <p className={styles.price}>${props.price}</p>
      </div>
      <p className={styles.desc}>{props.description}</p>
    </div>
  );
}
