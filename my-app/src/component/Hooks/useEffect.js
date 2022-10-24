import React, { useState, useEffect } from "react";

const useEffect = () => {
   const data=[{
     id:1,
     name:"john",
     city:"pune",

   },{
     id:2,
     name:"peter",
     city:"mumbai"
   }]
}


const [data,setData]=React.useState([])
const [count,setCount]=React.useState(0)
useEffect(()=>{
  console.log("hiiii");
  axios.get("")
  .then(response=>response.data)
  .then(res=>{
    setData(res)
  })
},[count])

const incrementValue=()=>{
  setCount(count+1)
}

return(
  <div>
    <ul>
      {
        data.map((item)=>(
          <li key={item.id}>{item.name+' '+item.city}</li>
        ))
      }
      <button onClick={incrementValue}>add</button>
    </ul>
  </div>
)


export default useEffect;