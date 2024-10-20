import React from "react"
import classes from "./Header.module.css"
import Cart from "../cart/Cart"


const Header=()=>{
    return(
           <div>
             <header className={classes.header}>
              <div className={classes.container}>
              <div className={classes.box1}>
              <h1 >CandyShop</h1>
              </div>
               <Cart ></Cart>
             </div>
             </header> 
           </div> 
    )
}

export default Header