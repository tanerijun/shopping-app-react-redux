import styles from "./Cart.module.css";

const Cart = () => {
  const quantity = 3;

  return (
    <div className={styles.cart_container}>
      <p>Cart: {quantity} items</p>
    </div>
  );
};

export default Cart;
