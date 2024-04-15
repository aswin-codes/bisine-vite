import { createSlice } from "@reduxjs/toolkit";

const orderedItems = createSlice({
    name: "orderedItems",
    initialState: {
        orderedProducts: []
    },
    reducers: {
        setOrderedProducts : (state,action) => {
            state.orderedProducts = action.payload
        }
    }
})

export const {setOrderedProducts} = orderedItems.actions

export default orderedItems.reducer;