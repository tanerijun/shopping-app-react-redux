import styles from "./ShoppingApp.module.css";
import { useDispatch } from "react-redux";
import authSlice from "../store/authSlice";
import NavBar from "./NavBar";
import ItemCard from "./ItemCard";
import items from "../data/items";

const ShoppingApp = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authSlice.actions.logout());
  };

  return (
    <div>
      <NavBar />
      <div className={styles.card_container}>
        {items.map((item) => (
          <ItemCard name={item.name} price={item.price} source={item.pic} />
        ))}
      </div>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default ShoppingApp;
