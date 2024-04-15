import { createSlice } from "@reduxjs/toolkit";

const admin = createSlice({
    name: "admin",
    initialState: {
        editProductId : ""
    },
    reducers: {
        setEditProductId: (state,action) => {
            state.editProductId = action.payload
        }
    }
})

export const {setEditProductId} = admin.actions

export default admin.reducer