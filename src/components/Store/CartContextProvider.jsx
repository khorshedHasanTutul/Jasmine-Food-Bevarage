import React, { useReducer } from "react";
import cartContext from "./cart-context";

const initialState = () => {
  // set initial cartContext 
  const initial = {
    TotalItems: 0,
    TotalAmmount: 0,
    Items: [],
  };

  //get local storage items
  let getCartFromLocalStorage = localStorage.getItem("CARTV1");
  let TotalItems = 0,
    TotalAmmount = 0,
    Items = [];
  if (getCartFromLocalStorage) {
    let cartModel = JSON.parse(getCartFromLocalStorage);
    TotalItems = cartModel.TotalItems;
    TotalAmmount = cartModel.TotalAmmount;
    Items = cartModel.Items;
  }

  //return items in context
  return {
    ...initial,
    TotalItems,
    TotalAmmount,
    Items,
  };

};

const reducer = (state, action) => {
  //add to cart items
  if (action.type === "Store_Cart_Item") {
    action.item.quantity=1;
    const stateItems = [...state.Items];
    stateItems.push(action.item);
    let stateTotalItems = state.TotalItems;
    stateTotalItems += 1;
    let stateTotalAmmount = state.TotalAmmount;
    if (action.item.Ds > 0) {
      let productPrice =
        action.item.MRP - (action.item.MRP * action.item.Ds) / 100;
      stateTotalAmmount += productPrice;
    } else {
      stateTotalAmmount += action.item.MRP;
    }
    localStorage.setItem(
      "CARTV1",
      JSON.stringify({
        TotalItems: stateTotalItems,
        TotalAmmount: stateTotalAmmount,
        Items: stateItems,
      })
    );
    return {
      ...state,
      TotalItems: stateTotalItems,
      TotalAmmount: stateTotalAmmount,
      Items: stateItems,
    };
    
  }

  //remove a single item
// #region Some
  if (action.type === "REMOVE_SINGLE_ITEM") {
    let cartcontext = state;
    //local storage update
    let getCartFromLocalStorage = localStorage.getItem("CARTV1");
    getCartFromLocalStorage = JSON.parse(getCartFromLocalStorage);
    const index = getCartFromLocalStorage.Items.findIndex(
      (item2) => item2.Id === action.item.Id
    );
    getCartFromLocalStorage.TotalAmount -= action.item.MRP;
    getCartFromLocalStorage.Items.splice(index, 1);
    

    //context update
    const stateItems = cartcontext.Items.filter(
      (item) => item.Id !== action.item.Id
    );
    let stateTotalAmmount = cartcontext.TotalAmmount;
    stateTotalAmmount -= action.item.MRP;
    let stateTotalItems = cartcontext.TotalItems;
    stateTotalItems -= 1;

    //update local storage
    localStorage.setItem(
      "CARTV1",
      JSON.stringify({
        TotalItems: stateTotalItems,
        TotalAmmount: stateTotalAmmount,
        Items: stateItems,
      })
    );
    //return context update
    return {
      ...state,
      TotalItems: stateTotalItems,
      TotalAmmount: stateTotalAmmount,
      Items: stateItems,
    };
  }
//#endregion Some

//increment item
if(action.type==="INCREMENT_QTY"){
  const CtxItems=[...state.Items];
  const findCtxItem=CtxItems.find(itemfind=>itemfind.Id===action.item.Id)
  findCtxItem.quantity=action.qty
  let stateTotalAmmount=state.TotalAmmount;
  stateTotalAmmount+=action.item.MRP;
  localStorage.setItem(
    "CARTV1",
    JSON.stringify({
      TotalItems: state.TotalItems,
      TotalAmmount: stateTotalAmmount,
      Items: state.Items,
    })
  );
  return{
    ...state,
    TotalItems: state.TotalItems,
    TotalAmmount: stateTotalAmmount,
    Items: state.Items,
  }
}

  // clear cart & LocalStorage 

  if (action.type === "CLEAR_CART_ITEMS") {
    localStorage.removeItem("CARTV1");
    return {
      ...state,
      TotalItems: 0,
      TotalAmmount: 0,
      Items: [],
    };
  }


};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const storeCartHandler = (item) => {
    dispatch({ type: "Store_Cart_Item", item: item });
  };

  const clearCartHandler = () => {
    dispatch({ type: "CLEAR_CART_ITEMS" });
  };
  const CartItemRemoverHandler = (item) => {
    dispatch({ type: "REMOVE_SINGLE_ITEM", item: item });
  };
  const IncQuantityHandler=(item,qty)=>{
    dispatch({type:"INCREMENT_QTY",item:item,qty:qty})
  }
  const context = {
    storeCartItems: storeCartHandler,
    getCartModel: state,
    clearCart: clearCartHandler,
    singleItemRemover: CartItemRemoverHandler,
    incrementQuantity:IncQuantityHandler,
    
  };

  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
