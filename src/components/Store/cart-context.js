import { createContext } from "react";

const cartContext=createContext({
    storeCartItems:(item)=>{},
    getCartModel:{},
    clearCart:{},
    // singleItemRemover:(item)=>{},
})
export default cartContext;