import styles from "./CartDetails.module.css";
import { useSelector } from "react-redux";
import CartDetail from "./CartDetail";

const CartDetails = () => {
  const cart = useSelector((state) => state.cart.itemsList);

  return (
    <div>
      {cart.map((item) => (
        <CartDetail key={item.itemInfo.id} item={item} />
      ))}
    </div>
  );
};

export default CartDetails;
