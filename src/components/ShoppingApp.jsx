import { useDispatch } from "react-redux";
import authSlice from "../store/authSlice";
import NavBar from "./NavBar";

const ShoppingApp = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authSlice.actions.logout());
  };

  return (
    <div>
      <NavBar />
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default ShoppingApp;
