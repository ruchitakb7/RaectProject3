import React from "react"
import classes from "./Header.module.css"
import Cart from "../cart/Cart"


const Header=(props)=>{
    return(
           <div>
             <header className={classes.header}>
              <div className={classes.container}>
              <div className={classes.box1}>
              <h1 >CandyShop</h1>
              </div>
               <Cart openModal={props.openModal}></Cart>
             </div>
             </header> 
           </div> 
    )
}

export default Header