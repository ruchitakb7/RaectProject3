import React ,{useReducer} from "react"
import CartContext from "./cart-context"

const initalcartstate={
    items:[],
    totalQuantity:0,
    totalOrderprice:0

}

const cartReducer=(state,action)=>{

    
    if(action.type=="ADD-ITEM")
    {
        const newtotalQyantity=state.totalQuantity+action.item.quantity;

        const newtotalOrder=state.totalOrderprice+action.item.quantity*action.item.candyprice;

        const isItemExist=state.items.findIndex((item)=>action.item.id===item.id)

        const existingCartItem = state.items[isItemExist];
        
        let newCartItems;

        if(isItemExist===-1)
        {
            newCartItems = state.items.concat(action.item); 
        }
        else
        {    const updatedItem = 
            {...existingCartItem,quantity: existingCartItem.quantity + action.item.quantity};

            newCartItems = [...state.items];
            newCartItems[isItemExist] = updatedItem;
        }
        console.log(newCartItems)

        return {
            items:newCartItems,
            totalQuantity:newtotalQyantity,
            totalOrderprice:newtotalOrder
        }
    }
    if(action.type==='REMOVE-ITEM')
    {
        const isItemExist=state.items.findIndex((item)=>action.id===item.id)

        const existingCartItem = state.items[isItemExist];

        const newtotalQyantity=state.totalQuantity-1;

        const newtotalOrder=state.totalOrderprice-existingCartItem.candyprice

        const checkquantity=existingCartItem.quantity-1;

        let updatedItem;

        if(checkquantity>0)
        {
           const updated={...existingCartItem,quantity:checkquantity}
           updatedItem=[...state.items]
           updatedItem[isItemExist]=updated
        }
        else
        {
            updatedItem=state.items.filter((item)=>item.id!==action.id)
        }
        return {
            items:updatedItem,
            totalQuantity:newtotalQyantity,
            totalOrderprice:newtotalOrder
        }
          
    }
    return initalcartstate
}

const CartProvider=(props)=>{

    const [currentState,actionHandler]=useReducer(cartReducer,initalcartstate)

    const addItemHandler=(item)=>{
      //  console.log(item)
       actionHandler({type:"ADD-ITEM",item:item})
    }

    const removeItemHandler=(id)=>{
        actionHandler({type:"REMOVE-ITEM",id:id})
    }


    const cartContext={
        items:currentState.items,
        totalQuantity:currentState.totalQuantity,
        totalOrderprice:currentState.totalOrderprice,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }


    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider