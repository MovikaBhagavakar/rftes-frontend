import React from 'react'

export default function SubDetail3({setEmail, setPassword, setConfirmPassword, emailError, passwordError, confirmPasswordError}) {
  return (
    <div id="email">
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="email" placeholder="Email" autoComplete='off'></input>,
                <p style={{color:'red'}}>{emailError}</p>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" className="email" placeholder="Password" autoComplete='off'></input>
                <br></br>
                <p style={{color:'red'}}>{passwordError}</p>
                <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" className="email" placeholder="CPassword" autoComplete='off'></input>
                <p style={{color:'red'}}>{confirmPasswordError}</p>
                
      
    </div>
  )
}
