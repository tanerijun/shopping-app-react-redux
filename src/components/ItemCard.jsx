import styles from "./ItemCard.module.css";

const ItemCard = ({ name, price, source }) => {
  return (
    <div className={styles.card_container}>
      <img src={source} alt={name} />
      <div className={styles.label_container}>
        <p className={styles.name_label}>{name}</p>
        <p>${price}</p>
      </div>
      <button className={styles.card_button}>Add to cart</button>
    </div>
  );
};

export default ItemCard;
