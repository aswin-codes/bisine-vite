import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
  name: "product",
  initialState: {
    name: "",
    description: "",
    productTags: [],
    images: [],
    variants: [
      { name: "", price: "", quantityInStock: null, weight: null, weightUnit: "kg" },
    ],
    weight: 0,
    unit: "",
    quantity: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setProductTags: (state, action) => {
      state.productTags = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setProductVariants: (state, action) => {
      state.variants = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const {
  setProductTags,
  setName,
  setDescription,
  setImages,
  setProductVariants,
  setUnit,
  setWeight,
  setQuantity,
} = product.actions;

export default product.reducer;