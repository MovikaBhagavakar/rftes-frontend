import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import {IoMdArrowRoundBack} from 'react-icons/io';
// import './Css/Add'

function Fogetpass() {
  const navigate = useNavigate()
    const[email, setEmail]=useState(null)
  return (
    <div>
<IoMdArrowRoundBack/>
    <form>
      {/* <Signup /> */}
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

                   
                    {/* <Detail /> */}



                </div>

  <div >
  <div className="mb-3" style={{marginTop:'200px'}}>
    <label htmlFor="exampleInputEmail1" className="form-label add"  >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email} onChange={(e)=>setEmail(e.target.value)} />
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
