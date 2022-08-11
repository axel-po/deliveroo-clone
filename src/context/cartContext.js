import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";

const CartContext = createContext();

export function CartContextProvider(props) {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  // Function --> Add to cart
  const addToCart = (item) => {
    dispatch({ type: "ADDITEM", payload: item });
  };

  return <CartContext.Provider value={{ state, dispatch, addToCart }}>{props.children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart s'utilise avec CartContext.Provider");
  }

  return context;
};
