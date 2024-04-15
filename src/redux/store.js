import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user";
import shop from "./features/shop";
import shopError from "./features/shopError";
import cart from "./features/cart";
import product from "./features/product";
import checkout from "./features/checkout";
import review from "./features/review";
import order from "./features/orderedItems"
import admin from "./features/admin"

export const store = configureStore({
    reducer: {
        user: user,
        shop: shop,
        shopError: shopError,
        cart: cart,
        product : product,
        checkout: checkout,
        review: review,
        orderedItems: order,
        admin:admin
    }
})