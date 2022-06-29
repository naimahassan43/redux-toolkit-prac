/* eslint-disable react-hooks/exhaustive-deps */
import CartContainer from "./components/CartContainer";
import NavBar from "./components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
