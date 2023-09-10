import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleShowCart = () => {
    setCartIsShown((prev) => !prev);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart toggleShowCartButton={toggleShowCart} />}
      <Header toggleShowCartButton={toggleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
