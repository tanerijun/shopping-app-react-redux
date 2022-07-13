import styles from "./CartDetail.module.css";
import { useDispatch } from "react-redux";
import cartSlice from "../store/cartSlice";

const CartDetail = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(cartSlice.actions.increaseQuantity(item.itemInfo));
  };

  const handleDecreaseQuantity = () => {
    dispatch(cartSlice.actions.decreaseQuantity(item.itemInfo));
  };

  return (
    <div className={styles.detail_container}>
      <span>{item.itemInfo.name}</span>
      <span>${item.itemInfo.price}</span>
      <span>x{item.quantity}</span>
      <span>Total: ${item.quantity * item.itemInfo.price} </span>
      <div className={styles.button_container}>
        <button
          className={styles.quantity_change_button}
          onClick={handleDecreaseQuantity}
        >
          -
        </button>
        <button
          className={styles.quantity_change_button}
          onClick={handleIncreaseQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
