import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.itemsList);
  const quantity = cart.reduce((qty, item) => qty + item.quantity, 0);

  return (
    <div className={styles.cart_container}>
      <p>Cart: {quantity} items</p>
    </div>
  );
};

export default Cart;
