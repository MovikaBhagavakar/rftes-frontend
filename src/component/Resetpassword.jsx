import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Resetpassword() {
    const location = useLocation()
  const navigate = useNavigate()
    const[password, setPassword]=useState(null)
    const[confirmPassword, setConfirmPassword]=useState(null)
  return (
    <>
    <div className="code">
      <div className="group">
                    <div className="fcontainer">
                        <span className="customslide" style={{ "--wave": 1 }}>
                            R
                        </span>
                        <span className="customslide" style={{ "--wave": 2 }}>
                            F
                        </span>
                        <span className="customslide" style={{ "--wave": 3 }}>
                            T
                        </span>
                        <span className="customslide" style={{ "--wave": 4 }}>
                            E
                        </span>
                        <span className="customslide" style={{ "--wave": 5 }}>
                            S
                        </span>
                    </div>

                    <div className="sign">
                        <p> Password Change</p>

                    </div>
                    {/* <Detail /> */}



                </div>
 <div className="passchange">
    <form>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label add">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Your New Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <label for="exampleInputPassword1"  class="form-label add">Confirm Password</label>
    <input type="password" class="form-control" placeholder="Enter Your confirm Password" id="exampleInputPassword1" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
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
  }} type="submit" class="btn btn-primary sub">Submit</button>
</form>
  </div>
  </div>
   </>
  )
}

export default Resetpassword
