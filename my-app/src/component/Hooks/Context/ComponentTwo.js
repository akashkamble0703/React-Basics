import {useContext} from 'react'
import { MyContext } from './Context'



function ComponentTwo(){
    const myvalue=useContext(MyContext)
    return(
        <div>
            <h1>ComponentTwo</h1>
            <p>Value in Component Two : {myvalue}</p>
        </div>
    )
}


export default ComponentTwo