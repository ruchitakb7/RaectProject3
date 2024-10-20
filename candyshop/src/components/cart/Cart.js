import React from "react"
import CartIcon from "../../assets/carticon.jpg"
import './Cart.css'

const Cart=()=>{

    return(
        <div className="box1">
                <img src={CartIcon} alt="" className="cartimg" ></img>
                <p> Your Cart </p>
                <spam className="cartamount"></spam>
        </div>
    )
}

export default Cart;