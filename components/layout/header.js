import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">
          SILVER SPOON
        </Link>
      </div>
      <nav className={styles.desktopNav}>
        <ul>
          <li>
            <Link href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/chef">CHEF</Link>
          </li>
          <li>
            <Link href="/menu">MENU</Link>
          </li>
          <li>
            <Link href="/reservation">RESERVATION</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
