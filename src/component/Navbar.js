import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./Css/navbar.css";
import Login from './Login';
import { useContext } from 'react';
import { wrapper } from '../App';



const Navbar = () => {
  const data = useLocation();
  const { searchvalue, setSearchValue } = useContext(wrapper)

  if (data.pathname === '/login' || data.pathname === '/signup' || data.pathname === '/forget' || data.pathname === '/reset' || data.pathname === '/forgetPassword' || data.pathname === '/resetPassword/:token') {
    return false;
  }
  return (

    <div className="row">

      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-darkblack">
        <div className="container1">
          <div className="rftes">
            <span className="abc" style={{ "--light": 1 }}>
              R
            </span>
            <span className=" abc" style={{ "--light": 2 }}>
              F
            </span>
            <span className="abc" style={{ "--light": 3 }}>
              T
            </span>
            <span className="  abc" style={{ "--light": 4 }}>
              E
            </span>
            <span className=" abc" style={{ "--light": 5 }}>
              S
            </span>
          </div>
        </div>

        <div className="container-fluid ">

          {/* titles */}
          <Login />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-1 ">
              {/* Home */}
              <li className="nav-item">
                <NavLink className="nav-link flex" style={{ color: 'white', marginLeft: '50px', marginTop: '8px' }} aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " style={{ color: 'white', marginTop: '8px' }} aria-current="page" to="/news">News</NavLink>
              </li>
              {/* Business */}
              <li className="nav-item">
                <NavLink className="nav-link" style={{ color: 'white', marginTop: '8px' }} aria-current="page" to="/business">Business</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" style={{ color: 'white', marginTop: '8px' }} aria-current="page" to="/try">Try</NavLink>
              </li> */}
              {/* Sports */}
              <li className="nav-item">
                <NavLink className="nav-link  " style={{ color: 'white', marginTop: '8px' }} aria-current="page" to="/sports">Sports</NavLink>
              </li>
              {/* Entertainment */}
              <li className="nav-item">
                <NavLink className="nav-link " style={{ color: 'white', marginTop: '8px' }} aria-current="page" to="/entertainment">Entertainment</NavLink>
              </li>
              {/* General */}

              {/* Health */}
              <li className="nav-item">
                <NavLink className="nav-link " style={{ color: 'white', marginTop: '8px' }} aria-current="page" to="/Health">Health</NavLink>
              </li>
              {/* Science */}
              <li className="nav-item">
                <NavLink className="nav-link " style={{ color: 'white', marginTop: '8px' }} aria-current="page" to="/Science">Science</NavLink>
              </li>
              {/* Technology */}
              <li className="nav-item">
                <NavLink className="nav-link " style={{ color: 'white', marginTop: '8px' }} aria-current="page" to="/Technology">Technology</NavLink>
              </li>
            </ul>
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control me-2" value={searchvalue} type="search" placeholder="Search your News" aria-label="Search"
                onChange={(e) => setSearchValue(e.target.value)} />



            </form>
            {
              localStorage.getItem("rftes") && <NavLink to="/create-article" style={{ border: '1px solid white', width: '100px', height: '50px', backgroundColor: 'blue', color: 'white', fontWeight: 'bold', fontSize: '15px', textDecoration: "none", marginLeft: "3px", borderRadius: '5px' }}>Create your Own article</NavLink>
            }

          </div>
        </div>
      </nav>

    </div>
  )

}

export default Navbar
