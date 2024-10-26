import React ,{useContext} from "react";
import "./candytable.css"
import CartContext from "../../../store/cart-context";

const CandyTable = (props) => {
    
  const { candyArray } = props;

  const ctx=useContext(CartContext)

  const candyQuantityHandler=(quantity,candy,id)=>{

    ctx.addItem({
      id: id,
      candyname: candy.candyname,
      candyprice: candy.candyprice,
      quantity: quantity,
    })

  }

  
  if (candyArray.length === 0) {
    return ;
  }

  return (
    <div className="container">
                <table>
        {
            candyArray.map((candy,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td style={{fontWeight:"bold",color:"green",fontSize:'20px'}}>{candy.candyname}</td>
                    <td>{candy.candydesc}</td>
                    <td style={{fontWeight:'bold'}}>${candy.candyprice.toFixed(2)}</td>
                    <td className="button-td">
                        <button onClick={()=>candyQuantityHandler(1,candy,index+1)}>Buy 1</button>
                        <button onClick={()=>candyQuantityHandler(2,candy,index+1)}>Buy 2</button>
                        <button onClick={()=>candyQuantityHandler(3,candy,index+1)}>Buy 3</button>
                    </td>
                </tr>
            ))
        }
    </table>
    </div>
   
  )
};

export default CandyTable;
