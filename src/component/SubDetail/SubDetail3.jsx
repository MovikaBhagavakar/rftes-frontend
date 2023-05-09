import React from 'react'

export default function SubDetail3({setEmail, setPassword, setConfirmPassword}) {
  return (
    <div id="email">
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="email" placeholder="Email" autoComplete='off'></input>,
                <input onChange={(e)=>setPassword(e.target.value)} type="password" className="email" placeholder="Password" autoComplete='off'></input>
                <br></br>
                <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" className="email" placeholder="CPassword" autoComplete='off'></input>
                
      
    </div>
  )
}
