import { useDispatch } from "react-redux";
import authSlice from "../store/authSlice";
import styles from "./NavBar.module.css";
import Cart from "./Cart";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authSlice.actions.logout());
  };

  return (
    <div className={styles.navigation_container}>
      <h2 className={styles.logo} onClick={handleLogOut}>
        Redux Shopping
      </h2>
      <Cart />
    </div>
  );
};

export default NavBar;
