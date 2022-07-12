import styles from "./OrderInfo.module.css";
import { useSelector } from "react-redux";

const OrderInfo = () => {
  const cart = useSelector((state) => state.cart.itemsList);
  const totalPrice = cart.reduce(
    (total, item) => total + item.itemInfo.price * item.quantity,
    0
  );

  return (
    <div className={styles.order_info_container}>
      <p>Total: ${totalPrice}</p>
      <button className={styles.order_button}>Place order</button>
    </div>
  );
};

export default OrderInfo;
