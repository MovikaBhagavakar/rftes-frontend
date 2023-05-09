import React from 'react'

const SubDetail1 = ({setName, setPhone}) => {
  return (
    <div className="call">
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Yourname" className="name" required></input>
                <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Phone No" className="name" required></input>
        </div>
  )
}

export default SubDetail1
