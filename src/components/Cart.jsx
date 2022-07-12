import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = cart.itemsList.reduce((qty, item) => qty + item.quantity, 0);
  console.log(cart);

  return (
    <div className={styles.cart_container}>
      <p>Cart: {quantity} items</p>
    </div>
  );
};

export default Cart;
