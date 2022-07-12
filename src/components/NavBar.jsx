import styles from "./NavBar.module.css";
import Cart from "./Cart";

const NavBar = () => {
  return (
    <div className={styles.navigation_container}>
      <h2>Redux Shopping</h2>
      <Cart />
    </div>
  );
};

export default NavBar;
