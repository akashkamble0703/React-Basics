import React,{useState} from 'react'


function Login()
{

const [user, setUser]=useState("")

function userHandler(e)
{
   console.warn(e.target.value);
}

  function loginHandler(e)
  {
    e.preventDefault()
  }
    return(
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
              <input type="text" placeholder='Enter FirstName' onChange={userHandler}  /> <br /> <br />

              <input type="text" placeholder='Enter LastName' onChange={userHandler} /> <br /> <br />
              <input type="email" placeholder='Enter EmailID'  /> <br /> <br />
              <input type="address" placeholder='Enter address' /> <br /> <br />
              <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    )
}


export default Login;