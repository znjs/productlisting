import { useContext, useReducer } from "react";
import { createContext } from "react";
import { cartReducer } from "../reducer";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const initalState = {
    cart: [],
    saveForLater: [],
  };
  const [cartState, cartDispatch] = useReducer(cartReducer, initalState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>{children}</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
