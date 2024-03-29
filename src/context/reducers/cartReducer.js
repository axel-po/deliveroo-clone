export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDITEM":
      //Test if item exist in cart
      const indexItemAdd = state.cart.findIndex((obj) => obj._id === action.payload._id);

      if (indexItemAdd !== -1) {
        const updatedQuantity = {
          ...state.cart[indexItemAdd],
          quantity: state.cart[indexItemAdd].quantity + action.payload.quantity,
        };

        const newArr = [...state.cart];
        newArr.splice(indexItemAdd, 1, updatedQuantity);
        return {
          cart: newArr,
        };
      } else {
        const newArr = [...state.cart];
        newArr.push(action.payload);
        return {
          cart: newArr,
        };
      }

    default:
      throw new Error("Action non supportée");
  }
};
