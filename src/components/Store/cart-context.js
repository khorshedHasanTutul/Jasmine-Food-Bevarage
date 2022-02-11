import { createContext } from "react";

const cartContext=createContext({
    storeCartItems:(item)=>{}
})
export default cartContext;