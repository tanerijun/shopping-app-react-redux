import { useState } from "react";
import styles from "./ShoppingApp.module.css";
import NavBar from "./NavBar";
import ItemCard from "./ItemCard";
import items from "../data/items";
import OrderInfo from "./OrderInfo";
import CartDetailsModal from "./CartDetailsModal";

const ShoppingApp = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.main_container}>
      <NavBar handleOpenModal={handleOpenModal} />
      <div className={styles.card_container}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <OrderInfo />
      {showModal && <CartDetailsModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default ShoppingApp;
