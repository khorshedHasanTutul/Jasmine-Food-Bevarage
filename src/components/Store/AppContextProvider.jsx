import React, { useReducer } from 'react'
import cartContext from './cart-context'

const initialState=()=>{
    const initial={
        CartModel:{TotalItems:0,TotalAmmount:0,Items:[]}
    }
    let getCartFromLocalStorage =localStorage.getItem("cartModel");
    let updatedTotalItems=0
    let updatedTotalAmmount=0
    let updatedCartItems=[]
    if(getCartFromLocalStorage){
        let cartModel=JSON.parse(getCartFromLocalStorage)
        updatedTotalItems=cartModel.TotalItems
        updatedTotalAmmount=cartModel.TotalAmmount
        updatedCartItems=cartModel.Items
    }
    return{
        ...initial,
        CartModel:{TotalItems:updatedTotalItems,TotalAmmount:updatedTotalAmmount,Items:updatedCartItems}
    }
}

const reducer=(state,action)=>{
    if(action.type==="Store_Cart_Item"){
        let remainingCartModel=[...state.CartModel]
        
        localStorage.setItem("cartModel",JSON.stringify(state.CartModel))

        return{
            ...state
        }
    }
}

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState())

    const storeCartHandler=({item})=>{
        dispatch({type:"Store_Cart_Item",item:item})
    }

    const context={
        storeCartItems:storeCartHandler,
    };

  return (
      <cartContext.Provider value={context} >{children}</cartContext.Provider>
  )
}

export default AppContextProvider