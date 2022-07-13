export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload.item, count: 1 }] };
    case "INC_ITEM_COUNT":
      return {
        ...state,
        cart: [...state.cart].map((item) => {
          if (item._id === action.payload._id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        }),
      };
    case "DEC_ITEM_COUNT":
      let removeFlag = state.cart.find((item) => item._id === action.payload._id).count === 1;
      if (removeFlag) {
        return {
          ...state,
          cart: [...state.cart].filter((item) => item._id !== action.payload._id),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart].map((item) => {
            if (item._id === action.payload._id) {
              return { ...item, count: item.count - 1 };
            }
            return item;
          }),
        };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: [...state.cart].filter((item) => item._id !== action.payload._id),
      };
    case "ADD_TO_SAVELATER":
      return {
        ...state,
        cart: [...state.cart].filter((item) => item._id !== action.payload.item._id),
        saveForLater: [...state.saveForLater, action.payload.item],
      };
    case "MOVE_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
        saveForLater: [...state.saveForLater].filter(
          (item) => item._id !== action.payload.item._id,
        ),
      };
    case "REMOVE_ITEM_FROM_SAVE_LATER":
      return {
        ...state,
        saveForLater: [...state.saveForLater].filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};
