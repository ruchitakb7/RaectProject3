import React, {useState,useEffect} from "react"
import "./candyform.css"
import CandyTable from "../candytable/CandyTable"

const CandyForm =()=>{
  const [candyname,setCandyName]=useState('')
  const [candydesc,setDesc]=useState('')
  const [candyprice,setPrice]=useState()
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
        <center>
        <form onSubmit={submitHandler}>
           
            <div className="container-candyfrom">
                <label>Candy Name</label>
                <input type="text" onChange={CandyNameHandler} value={candyname}></input>
                <label> Description</label>
                <input type="text" onChange={CandyDescHandler} value={candydesc}></input>
                <label>Price</label>
                <input type="number" min={1} onChange={CandyPriceHandler} value={candyprice} 
                style={{width:'50px'}}
                 ></input>
                <button type="submit">Add Candy</button>
            </div>
           
        </form>
        <CandyTable candyArray={candyArray}></CandyTable>
        </center>
    )
}
export  default CandyForm 