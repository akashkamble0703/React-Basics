import React, {createContext} from 'react'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'

 export const MyContext = createContext()

function Context() {
    const [myvalue,setMyValue]=React.useState(100)
  
    const changeValue = ()=>{
        setMyValue(myvalue + 4)
    }
    
    return(
        <MyContext.Provider value={myvalue}>
            <h1>ContextDemo</h1>
            <button onClick={changeValue}>B1</button>
            <ComponentOne/>
            <ComponentTwo/>
        </MyContext.Provider>
    )
}


export default Context