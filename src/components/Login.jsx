import React, { useState } from 'react'

const Login = () => {
  const [data,setData] = useState({
    email:"",
    password:""
  })
  return (
    <div className='w-[20%] h-[30%] bg-slate-400 p-1'> 
    <form action="" className='flex flex-col space-y-5 items-center'>
      <label>Email</label>
      <input 
      type="email"
       />
      <label>Password</label>
      
      <input type="password" />
      <button className='border border-black rounded-md w-[50%]'>Login</button>
    </form>

    </div>
  )
}

export default Login