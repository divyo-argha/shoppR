import { createContext, useState } from "react";

const CartContext = createContext({
  increment: () => {},
  decrement: () => {},
  state: [],
});
export default CartContext;
const initialState = [
  {
    id: "64df52ad938bab52831de01f",
    quantity: 0,
  },
  {
    id: "64df540f938bab52831de020",
    quantity: 0,
  },
  {
    id: "64df547d938bab52831de021",
    quantity: 0,
  },
];
export function CartContextProvider({ children }) {
  const [state, setState] = useState(initialState);
  function incrementProduct(id) {
    console.log("inc");
    const updateState = state.map((e) => {
      if (id === e.id) {
        return {
          ...e,
          quantity: e.quantity + 1,
        };
      }

      return {
        ...e,
      };
    });
    setState(updateState);
  }
  function decrementProduct(id) {
    const updateState = state.map((e) => {
      if (id === e.id) {
        if(e.quantity>0)
        return {
          ...e,
          quantity: e.quantity - 1,
        };
      }

      return {
        ...e,
      };
    });
    setState(updateState);
  }
  return (
    <CartContext.Provider
      value={{
        incrementProduct,
        decrementProduct,
        state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
