import styles from "./form.module.css";

export default function Form() {
  async function formSubmit(FormData) {
    "use server";
    const data = {
      name: FormData.get("fullname"),
      email: FormData.get("email"),
      message: FormData.get("message"),
    };
  }

  return (
    <section className={styles.form}>
      <h2>Make a reservation</h2>
      <form action={formSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          autoComplete="true"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="true"
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="Message and Phone Number"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
