import React,{ createContext } from "react";

const CartContext= React.createContext({
    items:[],
    totalQuantity:0,
    totalOrderprice:0,
    addItem:()=>{},
    removeItem:()=>{},
    clearCart: () => {}

})
export default CartContext