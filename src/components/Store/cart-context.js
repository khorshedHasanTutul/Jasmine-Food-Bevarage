import { createContext } from "react";

const cartContext=createContext({
    storeCartItems:(item)=>{},
    getCartModel:{},
    clearCart:{},
    singleItemRemover:(item)=>{},
    incrementQuantity:(item,qty)=>{},
})
export default cartContext;