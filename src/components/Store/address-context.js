import { createContext } from "react";

const addressContext=createContext({
    storeDivision:(item)=>{},
    getDivision:{},
    storeDistrict:(item)=>{},
    getDistrict:{},
    storeArea:(item)=>{},
    getArea:{},
    setActiveType:(item)=>{},
    getActiveType:"",

})
export default addressContext;