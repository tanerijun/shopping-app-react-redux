import styles from "./ItemCard.module.css";
import { useDispatch } from "react-redux";
import cartSlice from "../store/cartSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartSlice.actions.addToCart(item));
  };

  return (
    <div className={styles.card_container}>
      <img src={item.pic} alt={item.name} />
      <div className={styles.label_container}>
        <p className={styles.name_label}>{item.name}</p>
        <p>${item.price}</p>
      </div>
      <button onClick={handleAddToCart} className={styles.card_button}>
        Add to cart
      </button>
    </div>
  );
};

export default ItemCard;
