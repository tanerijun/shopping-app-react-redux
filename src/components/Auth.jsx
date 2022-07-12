import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form_container}>
        <div className={styles.form_section}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
          />
        </div>
        <div className={styles.form_section}>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.submit_button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Auth;
