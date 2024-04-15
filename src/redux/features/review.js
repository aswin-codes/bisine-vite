import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
}


const review = createSlice({
    name: 'review',
    initialState,
    reducers: {
        // addReview: (state, action) => {
        //     state.reviews.push(action.payload);
        // }
        setReview : (state,action) => {
            state.reviews = action.payload
        }
    }
})

export const {setReview} = review.actions;
export default review.reducer;
