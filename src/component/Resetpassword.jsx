import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Resetpassword() {
    const location = useLocation()
  const navigate = useNavigate()
    const[password, setPassword]=useState(null)
    const[confirmPassword, setConfirmPassword]=useState(null)
  return (
    <div style={{marginTop: '200px'}}>
    <form>
 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
  </div>
  
  <button onClick={(e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/v1/users/resetPassword",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "resetToken": location.pathname.split("/")[2]
      },
      body:JSON.stringify({
        password,confirmPassword
      })
    }).then((res)=>res.json()).then((data)=>{
      alert(data.responseMessage);
      navigate("/login")
    })
    .catch((err)=>{
     alert(err.response.data.responseMessage);
    })
  }} type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Resetpassword
