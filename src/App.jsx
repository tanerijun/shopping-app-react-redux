import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import ShoppingApp from "./components/ShoppingApp";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <div>{isLoggedIn ? <ShoppingApp /> : <Auth />}</div>;
}

export default App;
