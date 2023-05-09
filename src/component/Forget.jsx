import React from 'react'
import { NavLink } from 'react-router-dom'

function Forget() {
  return (
    <div>
      <NavLink to="/forgetPassword" className="forget">Forget Password</NavLink>
    </div>
  )
}

export default Forget
