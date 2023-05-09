import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import Signup from './Signup'
import RFTES from './RFTES'
import Signup from './Signup'
import Forget from './Forget'


function LoginDetails() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState(null)
  const [password, setPassword] = React.useState(null)
  return (
    <div>
       <div className="fflex">
        <Signup  value=" Login"/>
        <div id="email" className="">
            <input onChange={(e) => setEmail(e.target.value)} type="email"  className="email" placeholder="Email" autoComplete='off'></input>,
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="email" placeholder="Password" autoComplete='off'></input>
            <Forget/>
           
           
        </div>
        <button className="btn btn-primary " style={{width: '500px', marginTop:"20px", fontSize:"20px", padding:"8px", marginLeft:"100px"}} onClick={(e)=>{
          e.preventDefault();
          fetch("http://localhost:8080/v1/users/signin", {
            body:JSON.stringify({
              email, password
            }),
            method:"POST",
            headers:{
              "Accept":"application/json",
              "Content-Type":"application/json",
            }
          }).then((res)=>res.json()).then((data)=>{
            if(data.responseCode === 1){
              navigate("/")
              localStorage.setItem("rftes", JSON.stringify(data.responseData))
              alert(data.responseMessage)
            }
            else {
              alert(data.responseMessage)
            }
          }).catch((err)=>{
            alert(err.response.data.responseMessage)
          })
        }}>Login</button>
        <br />
        <br/>
        <div className="center">
        <p className="account">Don't have RFTES Account?</p>
        <NavLink to="/signup" style={{marginLeft:'100px', fontSize:'20px' }}> Register Now</NavLink>
        </div>
        
        </div>
        
        

      
    </div>
  )
}

export default LoginDetails
