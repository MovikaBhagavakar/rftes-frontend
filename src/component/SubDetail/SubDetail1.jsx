import React from 'react'

const SubDetail1 = ({setName, setPhone, nameError,phoneError}) => {
  return (
    <>
    <div className="call">

                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Yourname" className="name" ></input>
                <p style={{color:'red'}}>{nameError}</p>
                <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Phone No" className="name" ></input>
                <p  style={{color:'red'}}>{phoneError}</p>
        </div>
        </>
  )
}

export default SubDetail1
