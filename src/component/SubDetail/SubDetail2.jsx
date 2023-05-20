import React from 'react'
    import {IoMdArrowRoundBack} from 'react-icons/io';

function SubDetail2({setDay, setMonth, setYear}) {
  return (
    <>
   
    <div className="birthdate">
                <input onChange={(e)=>setDay(e.target.value)} type="text" placeholder="Day" className="birth" id="day" required></input>
                <input onChange={(e)=>setMonth(e.target.value)} type="text" placeholder="Month" className="birth" required></input>
                <input onChange={(e)=>setYear(e.target.value)} type="text" placeholder="Year" className="birth" required></input>
                {/* <script>
                var a={document.getElementById("day").value}

            </script> */}
               
            </div>
       
            </>
  )
}

export default SubDetail2
