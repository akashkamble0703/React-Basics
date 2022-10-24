import react from 'react';
import {useContext} from 'react'
import {MyContext} from './Context'


function ComponentOne(){
    const myvalue=useContext(MyContext);
    const [myvalue,setMyValue]=react.useState()
    const changeValue = () =>{
        setMyValue(myvalue+10)
    }
    return(
        <div>
            <h1>ComponentOne</h1>
            <button conclick={changeValue}>C1</button>
            <p>Value in Component One : {myvalue}</p>
        </div>
    )
}


export default ComponentOne