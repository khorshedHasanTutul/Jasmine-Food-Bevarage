import React, { useReducer } from "react";
import cartContext from "./cart-context";

const initialState = () => {
  const initial = {
    CartModel: { TotalItems: 0, TotalAmmount: 0, Items: [] }
  };

  let getCartFromLocalStorage = localStorage.getItem("cartModel");
  let updatedTotalItems = 0;
  let updatedTotalAmmount = 0;
  let updatedCartItems = [];
  if (getCartFromLocalStorage) {
    let cartModel = JSON.parse(getCartFromLocalStorage);
    updatedTotalItems = cartModel.TotalItems;
    updatedTotalAmmount = cartModel.TotalAmmount;
    updatedCartItems = cartModel.Items;
  }
  return {
    ...initial,
    CartModel: {
      TotalItems: updatedTotalItems,
      TotalAmmount: updatedTotalAmmount,
      Items: updatedCartItems,
    }
  };
};

const reducer = (state, action) => {

  if (action.type === "Store_Cart_Item") {
    let cartItemsArray=state.CartModel.Items;
    let cartTotalItem=state.CartModel.TotalItems;
    let cartTotalAmmount=state.CartModel.TotalAmmount;
    cartTotalItem+=1;
    if(action.item.Ds>0){
        let productPrice=(action.item.MRP-((action.item.MRP)*action.item.Ds)/100);
        cartTotalAmmount += productPrice;
    }
    else{
        cartTotalAmmount += action.item.MRP;
    } 
    cartItemsArray.push(action.item);
    localStorage.setItem("cartModel", JSON.stringify(state.CartModel));
    return {
      ...state,
      CartModel: {
        TotalItems: cartTotalItem, TotalAmmount: cartTotalAmmount, Items: cartItemsArray
      },
    }
  }
//   if(action.type==="REMOVE_SINGLE_ITEM"){
//     let cartcontext = state.CartModel
//     //local storage update
//     let getCartFromLocalStorage = localStorage.getItem("cartModel");
//     getCartFromLocalStorage=JSON.parse(getCartFromLocalStorage)
//     const index = getCartFromLocalStorage.Items.findIndex(item2 => item2.Id === action.item.Id);
//     getCartFromLocalStorage.TotalAmount-=action.item.MRP;
//     getCartFromLocalStorage.Items.splice(index, 1);
//     //context update
//     const getOrginalItems=cartcontext.Items.filter(item=>item.Id!==action.item.Id)
//     cartcontext.TotalAmmount-=action.item.MRP
//     cartcontext.TotalItems-=1
//     cartContext.Items=getOrginalItems
//     return {
//       ...state,
//       CartModel:cartcontext
//     }
//   }

  if(action.type==="CLEAR_CART_ITEMS"){
      localStorage.removeItem('cartModel')
      return{
          ...state,
          CartModel:{ TotalItems: 0, TotalAmmount: 0, Items: []}
      }
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const storeCartHandler = (item) => {
    dispatch({ type: "Store_Cart_Item", item: item });
  }

  const clearCartHandler=()=>{
      dispatch({type:"CLEAR_CART_ITEMS"})
  }
//   const CartItemRemoverHandler=(item)=>{
//       dispatch({type:"REMOVE_SINGLE_ITEM",item:item})
//   }

  const context = {
    storeCartItems: storeCartHandler,
    getCartModel:state.CartModel,
    clearCart:clearCartHandler,
    // singleItemRemover:CartItemRemoverHandler,
  };

  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
