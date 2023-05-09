import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
function Login() {
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    if (localStorage.getItem("rftes")) {
      setUserData(JSON.parse(localStorage.getItem("rftes")))
    }
  }, [])
  function Logout(){
    localStorage.clear();
   

  }
  return (
    <div className="d-flex align-items-center">
      {/* <div className='me-3'>
            <i className="fa-solid fa-user user"></i>
          </div> */}
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <div className='me-3'>
            <i className="fa-solid fa-user user"></i>
          </div>
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href=" " onClick={Logout}>Logout</a></li>

        </ul>
      </li>

      <div>
        {
          userData !== null ? <span className='text-white'>{userData.userExist.name}</span> : <NavLink to="/login" className="login">Login</NavLink>


        }
        


      </div>
      <div className='line'></div>
    </div>
  )
}

export default Login
