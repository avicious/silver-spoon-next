import Item from "./item";
import styles from "./items.module.css";

export default function Items({ items }) {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.heading}>{items[0]["type"]}</h3>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  );
}
