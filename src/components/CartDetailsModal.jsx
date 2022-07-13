import styles from "./CartDetailsModal.module.css";
import CartDetails from "./CartDetails";
import OrderInfo from "./OrderInfo";

const CartDetailsModal = ({ handleCloseModal }) => {
  return (
    <>
      <div className={styles.modal_overlay} />
      <div className={styles.modal_container}>
        <div className={styles.modal_header}>
          <p className={styles.modal_header_label}>Your cart</p>
          <button className={styles.close_button} onClick={handleCloseModal}>
            &#x2716;
          </button>
        </div>
        <CartDetails />
        <OrderInfo />
      </div>
    </>
  );
};

export default CartDetailsModal;
