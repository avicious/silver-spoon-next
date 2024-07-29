"use client";
import styles from "./menu.module.css";
import { useState } from "react";
import { mealsMenu, drinksMenu } from "./menuItems";
import MenuItem from "./menuItem";

export default function Menu() {
  const [menuItem, setMenuItem] = useState("meals");
  const setMeals = () => {
    setMenuItem("meals");
  };
  const setDrinks = () => {
    setMenuItem("drinks");
  };

  return (
    <section className={styles.hero}>
      <div>
        <h2>Restaurant Menu</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <button
              className={menuItem === "meals" ? styles.active : undefined}
              onClick={setMeals}
            >
              MEALS
            </button>
          </li>
          <li>
            <button
              className={menuItem === "drinks" ? styles.active : undefined}
              onClick={setDrinks}
            >
              DRINKS
            </button>
          </li>
        </ul>
      </nav>
      {menuItem === "meals" ? (
        <MenuItem menu={mealsMenu} />
      ) : (
        <MenuItem menu={drinksMenu} />
      )}
    </section>
  );
}
