import Items from "./items";
import styles from "./menuItem.module.css";

export default function MenuItem({ menu }) {
  return (
    <section className={styles.wrapper}>
      {menu.map((item) => (
        <Items key={item[0].type} items={[...item]} />
      ))}
    </section>
  );
}
