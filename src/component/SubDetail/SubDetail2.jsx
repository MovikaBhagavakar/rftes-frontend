import React from "react";
// import {IoMdArrowRoundBack} from 'react-icons/io';

function SubDetail2({
  setDay,
  setMonth,
  setYear,
  day,
  month,
  year,
  dayError,
  monthError,
  yearError,
}) {
  return (
    <>
      <div className="birthdate">
        <input
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Day"
          className="birth"
          id="day"
          value={day}
        ></input>
        <input
          onChange={(e) => setMonth(e.target.value)}
          type="text"
          placeholder="Month"
          className="birth"
          value={month}
        ></input>
        <input
          onChange={(e) => setYear(e.target.value)}
          type="text"
          placeholder="Year"
          className="birth"
          value={year}
        ></input>
        {/* <script>
                var a={document.getElementById("day").value}

            </script> */}
      </div>
      <p className="error" style={{ color: "red" }}>
        {dayError || monthError || yearError}
      </p>
    </>
  );
}

export default SubDetail2;
