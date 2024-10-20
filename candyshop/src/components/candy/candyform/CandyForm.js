import Raect, {useState,Fragment,useEffect} from "react"
import "./candyform.css"
import CandyTable from "../candytable/CandyTable"

const CandyForm =()=>{
  const [candyname,setCandyName]=useState('')
  const [candydesc,setDesc]=useState('')
  const [candyprice,setPrice]=useState(0)
  const [candyArray,setcandyArray]=useState([])

const CandyNameHandler=(event)=>{
    setCandyName(event.target.value.trim())
}

const CandyDescHandler=(event)=>{
     setDesc(event.target.value.trim())
 }

 const CandyPriceHandler=(event)=>{
    setPrice(Number(event.target.value));
 }

 const submitHandler=(event)=>{

    event.preventDefault();

    if(candyname.length===0 || candydesc.length===0 || candyprice<=0)
    {
        alert('something went wrong.plz try again one more time')
        return;
    }
    
    const newcandy={
        candyname:candyname,
        candydesc:candydesc,
        candyprice:candyprice
    }

    console.log(candyArray)

    setcandyArray((prevArray) => [...prevArray, newcandy]);
    setCandyName('')
    setDesc('')
    setPrice(0)

 }

 useEffect(()=>{
    console.log(candyArray)
 },[candyArray])

    return(
        <Fragment>
        <form onSubmit={submitHandler}>
            <center>
            <div className="container-candyfrom">
                <label>Candy Name</label>
                <input type="text" onChange={CandyNameHandler} value={candyname}></input>
                <label> Description</label>
                <input type="text" onChange={CandyDescHandler} value={candydesc}></input>
                <label>Price</label>
                <input type="number" min={0} onChange={CandyPriceHandler} value={candyprice}  ></input>
                <button type="submit" className="button-candy">Add Candy</button>
            </div>
            </center>
        </form>
        <CandyTable candyArray={candyArray}></CandyTable>
        </Fragment>
    )
}
export  default CandyForm 