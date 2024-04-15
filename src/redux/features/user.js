import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
    name: 'user',
    initialState: {
        email : '',
        profileUrl: '',
        fullName: '',
        phoneNumber: '',
        shippingAddress : '',
        googleMapLink: '',
    },
    reducers: {
        setEmail : (state, action) => {
            state.email = action.payload
            
        },
        setProfileUrl : (state, action) => {
            state.profileUrl = action.payload
        },
        setFullName : (state, action) =>{
            state.fullName = action.payload
        },
        setPhoneNumber : (state, action) => {
            state.phoneNumber = action.payload
        },
    }
})

export const {setEmail, setProfileUrl,setFullName, setPhoneNumber} = user.actions
export default user.reducer