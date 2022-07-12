import styles from "./OrderInfo.module.css";

const OrderInfo = () => {
  return (
    <div className={styles.order_info_container}>
      <p>Total: $100</p>
      <button className={styles.order_button}>Place order</button>
    </div>
  );
};

export default OrderInfo;
