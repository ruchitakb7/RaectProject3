import React, { useContext } from "react"
import CartIcon from "../../assets/carticon.jpg"
import './Cart.css'
import CartContext from "../../store/cart-context"

const Cart=(props)=>{

    const ctx=useContext(CartContext)

    return(
        <div className="box1">
                <img src={CartIcon} alt="" className="cartimg" onClick={props.openModal} ></img>
                <p> Your Cart </p>
                <spam className="cartamount">{ctx.totalQuantity}</spam>
        </div>
    )
}

export default Cart;