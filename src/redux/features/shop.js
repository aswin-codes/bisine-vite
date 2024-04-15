import { createSlice } from "@reduxjs/toolkit";

export const shop = createSlice({
    //Address should be given as pincode,flat,area,landmark as csv to the backend
    name: 'shop',
    initialState: {
        shopName: '',
        shopDescription: '',
        shopId:'',
        shopTags:[],
        pincode:'',
        flat:'',
        area:'',
        landmark:'',
        city:'',
        state:'',
        contactNumber:'',
        emailID:'',
        socialMediaLink:'',
        logo:'',
        banner: '',
        products:[]
    },
    reducers: {
        setShopName : (state, action) => {
            state.shopName = action.payload
        },
        setShopId: (state,action) => {
            state.shopId = action.payload
        },
        setShopDescription: (state,action) => {
            state.shopDescription = action.payload
        },
        setShopTags : (state,action) => {
            state.shopTags = action.payload
        },
        setPinCode: (state,action) => {
            state.pincode = action.payload
        },
        setFlat : (state,action) => {
            state.flat = action.payload
        },
        setArea: (state,action) => {
            state.area = action.payload
        },
        setLandmark: (state,action) => {
            state.landmark = action.payload
        },
        setCity: (state,action) => {
            state.city = action.payload
        },
        setState: (state,action) => {
            state.state = action.payload
        },
        setContactNumber: (state,action) => {
            state.contactNumber = action.payload
        },
        setEmailID: (state,action) => {
            state.emailID = action.payload
        },
        setSocialMediaLink: (state,action) => {
            state.socialMediaLink = action.payload
        },
        setLogo : (state,action) => {
            state.logo = action.payload
        },
        setBanner: (state, action) => {
            state.banner = action.payload
        },
        setProducts: (state,action) => {
            state.products = action.payload
        }
        
    }
})

export const {setShopName, setShopDescription,setShopTags,setPinCode,setFlat, setArea,setLandmark,setCity,setState, setContactNumber, setEmailID, setSocialMediaLink, setBanner, setLogo,setShopId, setProducts, } = shop.actions

export default shop.reducer