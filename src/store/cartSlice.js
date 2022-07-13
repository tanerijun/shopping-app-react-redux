import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.itemsList.find(
        (item) => item.itemInfo.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      } else {
        state.itemsList.push({ itemInfo: action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.itemsList.find(
        (item) => item.itemInfo.id === action.payload.id
      );
      item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.itemsList.findIndex(
        (item) => item.itemInfo.id === action.payload.id
      );
      if (state.itemsList[itemIndex].quantity > 1) {
        state.itemsList[itemIndex].quantity--;
      } else {
        // delete from cart when quantity = 0
        state.itemsList.splice(itemIndex, 1);
      }
    },
  },
});

export default cartSlice;
