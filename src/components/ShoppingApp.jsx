import { useDispatch } from "react-redux";
import authSlice from "../store/authSlice";

const ShoppingApp = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authSlice.actions.logout());
  };

  return (
    <div>
      <h2>Shopping App with Redux</h2>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default ShoppingApp;
