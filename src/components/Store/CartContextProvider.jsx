import React, { useReducer } from "react";
import cartContext from "./cart-context";

//#region initial state
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
//#endregion initial state

const reducer = (state, action) => {
  //calculation Discount ammount of price
  const calcDiscountAmmount = (item) => {
    let productPrice = item.currentPrice;
    return productPrice;
  };

  //calculation without discounted price
  const calcAmmount = (item) => {
    let productPrice = item.currentPrice;
    return productPrice;
  };

  //add to cart reducer  action
  if (action.type === "Store_Cart_Item") {
    action.item.quantity = 1;
    const stateItems = [...state.Items];
    stateItems.push(action.item);
    let stateTotalItems = state.TotalItems;
    stateTotalItems += 1;
    let stateTotalAmmount = state.TotalAmmount;
    if (action.item.discountedPrice > 0) {
      let productPrice = calcDiscountAmmount(action.item);
      stateTotalAmmount += productPrice;
    } else {
      stateTotalAmmount += calcAmmount(action.item);
    }
    //store localStorage
    localStorage.setItem(
      "CARTV1",
      JSON.stringify({
        TotalItems: stateTotalItems,
        TotalAmmount: stateTotalAmmount,
        Items: stateItems,
      })
    );
    //update context state
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
    let cartcontextItems = [...state.Items];
    //local storage update
    let getCartFromLocalStorage = localStorage.getItem("CARTV1");
    getCartFromLocalStorage = JSON.parse(getCartFromLocalStorage);
    const index = getCartFromLocalStorage.Items.findIndex(
      (item2) => item2.id === action.item.id
    );
    getCartFromLocalStorage.Items.splice(index, 1);

    let totalAmmount = 0;
    //context update
    const stateItems = cartcontextItems.filter(
      (item) => item.id !== action.item.id
    );

    let stateTotalItems = state.TotalItems;
    stateTotalItems -= 1;
    stateItems.forEach((element) => {
      let mrpPriceOfSingleProduct;
      if (element.discountedPrice > 0) {
        mrpPriceOfSingleProduct = calcDiscountAmmount(element);
      } else {
        mrpPriceOfSingleProduct = calcAmmount(element);
      }
      totalAmmount += mrpPriceOfSingleProduct * element.quantity;
    });

    //update local storage
    localStorage.setItem(
      "CARTV1",
      JSON.stringify({
        TotalItems: stateTotalItems,
        TotalAmmount: totalAmmount,
        Items: stateItems,
      })
    );
    //return context update
    return {
      ...state,
      TotalItems: stateTotalItems,
      TotalAmmount: totalAmmount,
      Items: stateItems,
    };
  }
  //#endregion Some

  //update Quantity
  if (action.type === "UPDATE_QTY") {
    let CtxItems = [...state.Items];
    const findCtxItem = CtxItems.find(
      (itemfind) => itemfind.id === action.item.id
    );

    if (action.qty === 0) {
      let getCartFromLocalStorage = localStorage.getItem("CARTV1");
      getCartFromLocalStorage = JSON.parse(getCartFromLocalStorage);
      const index = getCartFromLocalStorage.Items.findIndex(
        (item2) => item2.id === action.item.id
      );
      getCartFromLocalStorage.Items.splice(index, 1);

      CtxItems = CtxItems.filter((item) => item.id !== action.item.id);
    }

    findCtxItem.quantity = action.qty;
    let totalAmmount = 0;

    CtxItems.forEach((element) => {
      let mrpPriceOfSingleProduct;
      if (element.discountedPrice > 0) {
        mrpPriceOfSingleProduct = calcDiscountAmmount(element);
      } else {
        mrpPriceOfSingleProduct = calcAmmount(element);
      }
      totalAmmount += mrpPriceOfSingleProduct * element.quantity;
    });

    localStorage.setItem(
      "CARTV1",
      JSON.stringify({
        TotalItems: CtxItems.length,
        TotalAmmount: totalAmmount,
        Items: CtxItems,
      })
    );
    return {
      ...state,
      TotalItems: CtxItems.length,
      TotalAmmount: totalAmmount,
      Items: CtxItems,
    };
  }

  //Update Editable quantity update
  if (action.type === "UPDATE_EDITABLE_QTY") {
    let CtxItems = [...state.Items];
    const findCtxItem = CtxItems.find(
      (itemfind) => itemfind.id === action.item.id
    );
    if (action.qty === "") {
      action.qty = parseInt(0);
    }

    findCtxItem.quantity = parseInt(action.qty);
    let totalAmmount = 0;

    CtxItems.forEach((element) => {
      let mrpPriceOfSingleProduct;
      if (element.discountedPrice > 0) {
        mrpPriceOfSingleProduct = calcDiscountAmmount(element);
      } else {
        mrpPriceOfSingleProduct = calcAmmount(element);
      }
      totalAmmount += mrpPriceOfSingleProduct * element.quantity;
    });

    localStorage.setItem(
      "CARTV1",
      JSON.stringify({
        TotalItems: CtxItems.length,
        TotalAmmount: totalAmmount,
        Items: CtxItems,
      })
    );
    return {
      ...state,
      TotalItems: CtxItems.length,
      TotalAmmount: totalAmmount,
      Items: CtxItems,
    };
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
  const QuantityHandler = (item, qty) => {
    dispatch({ type: "UPDATE_QTY", item: item, qty: qty });
  };
  const updateEditableQtyhandler = (item, qty) => {
    dispatch({ type: "UPDATE_EDITABLE_QTY", item: item, qty: qty });
  };

  const context = {
    storeCartItems: storeCartHandler,
    getCartModel: state,
    clearCart: clearCartHandler,
    singleItemRemover: CartItemRemoverHandler,
    updateQuantity: QuantityHandler,
    updateEditableQuantity: updateEditableQtyhandler,
  };

  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
