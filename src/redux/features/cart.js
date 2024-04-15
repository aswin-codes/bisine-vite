import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name:"cart",
    initialState: {
        productList:[
            
            
          ],
    },
    reducers:{
        setProductList: (state, action) => {
            state.productList = action.payload
        }
    }
})

export const { setProductList} = cart.actions
export default cart.reducer