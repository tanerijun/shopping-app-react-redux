import { useSelector } from "react-redux";
import Auth from "./components/Auth";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <div>{isLoggedIn ? <h1>Logged In</h1> : <Auth />}</div>;
}

export default App;
