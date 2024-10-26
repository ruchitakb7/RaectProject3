import React ,{useContext} from "react"
import CartContext from "../../store/cart-context"
import ReactDOM from "react-dom"
import "./CartModal.css"

const CartModal=({onClose})=>{
 
    const ctx=useContext(CartContext)

    const addItem=(candy)=>{

        ctx.addItem({
            id: candy.id,
            candyname: candy.candyname,
            candyprice: candy.candyprice,
            quantity: 1

        })

    }

    const OrderHandler=()=>{
        ctx.clearCart()
        onClose()
    
    }

    const removeItem=(id)=>{
        ctx.removeItem(id)
    }

    if(!ctx.items || ctx.items.length>0)
    {
        return ReactDOM.createPortal(
            <div className="modalstyle">
                
                <div className="cart-box1">
                    { ctx.items.map((item)=>(
                        <div className="cart-container">
                            <div key={item.id} className="cartlist">
                                <p style={{fontWeight:'bold',color:"green"}}>{item.candyname}</p>
                                <p style={{fontWeight:'bold'}}>${item.candyprice.toFixed(2)}<span style={{marginLeft:"50px",fontStyle:"italic"}}>x{item.quantity}</span>
                                </p>
                            </div>
                            <div className="button-control">
                                <button onClick={()=>addItem(item)}>+</button>
                                <button onClick={()=>{removeItem(item.id)}}>-</button>
                            </div>
                        </div>
                        ))}
                        
                    <h4 >Total Amount <span style={{ marginLeft:"20px"}} >${ctx.totalOrderprice.toFixed(2)}</span></h4>
                    <div className="button-div" style={{float:"right"}}>
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={OrderHandler}>Order</button>
                    </div>
                </div>
               
            </div>,
           
            document.getElementById('cart')
        )
    }

    return ReactDOM.createPortal(
        <div className="modalstyle">
          <div className="cart-box1">
         <p> No Item In The Cart.</p>
         <button onClick={onClose}>Cancel</button>
          </div>
        </div>,
        document.getElementById('cart')
    )
}

export default CartModal