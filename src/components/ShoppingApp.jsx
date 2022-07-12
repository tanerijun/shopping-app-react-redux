import styles from "./ShoppingApp.module.css";
import NavBar from "./NavBar";
import ItemCard from "./ItemCard";
import items from "../data/items";
import OrderInfo from "./OrderInfo";

const ShoppingApp = () => {
  return (
    <div className={styles.main_container}>
      <NavBar />
      <div className={styles.card_container}>
        {items.map((item) => (
          <ItemCard name={item.name} price={item.price} source={item.pic} />
        ))}
      </div>
      <OrderInfo />
    </div>
  );
};

export default ShoppingApp;
