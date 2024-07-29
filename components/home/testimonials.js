import styles from "./testimonials.module.css";
import { alina, angie, james, michael, quote } from "../../public/image";
import Customer from "./customer";

const customerArr = [
  {
    id: 1,
    image: james,
    user: "James Doe",
    comment: "Thoughtfully prepared and beautifully presented.",
  },
  {
    id: 2,
    image: angie,
    user: "Angie Mackgyver",
    comment: "Each dish is thoughtfully prepared and beautifully presented.",
  },
  {
    id: 3,
    image: alina,
    user: "Alina Versa",
    comment: "The service was exceptional, and the atmosphere was lovely.",
  },
  {
    id: 4,
    image: michael,
    user: "Michael Jersey",
    comment: "The atmosphere of this restaurant is so warm and inviting.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={`${styles.title} left-child`}>
          <img src={quote.src} alt="quote" />
          <h2>Testimonials</h2>
        </div>
        <div className={`${styles.customers} right-child`}>
          {customerArr.map((cust) => (
            <Customer key={cust.id} {...cust} />
          ))}
        </div>
      </div>
    </section>
  );
}
