import { createSlice } from "@reduxjs/toolkit";

const checkout = createSlice({
  name: "checkout",
  initialState: {
    totalPrice: 0,
    deliveryAddress: {},
    allAddresses: [],
    productIdVarList: [],
    productList: [],
  },
  reducers: {
    setDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
    setAllAddresses: (state, action) => {
      state.allAddresses = action.payload;
    },
    setProductIdVarList: (state, action) => {
      state.productIdVarList = action.payload;
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setTotalPrice: (state,action) => {
      state.totalPrice = action.payload
    }
  },
});

export const {
  setDeliveryAddress,
  setAllAddresses,
  setProductIdVarList,
  setProductList,
  setTotalPrice
} = checkout.actions;
export default checkout.reducer;
