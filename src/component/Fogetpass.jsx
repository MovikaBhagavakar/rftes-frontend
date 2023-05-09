import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Fogetpass() {
  const navigate = useNavigate()
    const[email, setEmail]=useState(null)
  return (
    <div>
    <form>
  <div>
  <div className="mb-3" style={{marginTop:'200px'}}>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  
  
  <button type="submit" className="btn btn-primary" onClick={(e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/v1/users/forgetPassword",{
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            email:email
        })
    }).then((res)=>res.json()).then((data)=>{
      alert(data.responseMessage)
    }).catch((err)=>console.log(err.message))
  }}>Submit</button>
</div>

</form>
    </div>
  )
}

export default Fogetpass
