import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Dashboard = () => {
  return (
    <div className='flex justify-evenly '>
      <Login/>
      <Signup/>
    
    </div>
  )
}

export default Dashboard