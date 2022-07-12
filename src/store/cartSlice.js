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
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export default cartSlice;
