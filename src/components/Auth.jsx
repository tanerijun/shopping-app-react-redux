import styles from "./Auth.module.css";
import authSlice from "../store/authSlice";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authSlice.actions.login());
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <div className={styles.form_section}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.form_section}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            required
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
