import { createSlice } from "@reduxjs/toolkit";

export const shopError = createSlice({
    name: "shopError",
    initialState: {
        shopNameError: '',
        shopDescriptionError: '',
        shopIdError:'',
        shopTagsError:[],
        pincodeError:'',
        flatError:'',
        areaError:'',
        landmarkError:'',
        cityError:'',
        stateError:'',
        contactNumberError:'',
        emailIDError:'',
        socialMediaLinkError:'',
    },
    reducers: {
        setShopNameError : (state, action) => {
            state.shopNameError = action.payload
        },
        setShopIdError: (state,action) => {
            state.shopIdError = action.payload
        },
        setShopDescriptionError: (state,action) => {
            state.shopDescriptionError = action.payload
        },
        setShopTagsError : (state,action) => {
            state.shopTagsError = action.payload
        },
        setPinCodeError: (state,action) => {
            state.pincodeError = action.payload
        },
        setFlatError : (state,action) => {
            state.flatError = action.payload
        },
        setAreaError: (state,action) => {
            state.areaError = action.payload
        },
        setLandmarkError: (state,action) => {
            state.landmarkError = action.payload
        },
        setCityError: (state,action) => {
            state.cityError = action.payload
        },
        setStateError: (state,action) => {
            state.stateError = action.payload
        },
        setContactNumberError: (state,action) => {
            state.contactNumberError = action.payload
        },
        setEmailIDError: (state,action) => {
            state.emailIDError = action.payload
        },
        setSocialMediaLinkError: (state,action) => {
            state.socialMediaLinkError = action.payload
        }
    }
})

export const {setShopNameError, setShopDescriptionError,setShopTagsError,setPinCodeError,setFlatError, setAreaError,setLandmarkError,setCityError,setStateError, setContactNumberError, setEmailIDError, setSocialMediaLinkError,setShopIdError} = shopError.actions

export default shopError.reducer