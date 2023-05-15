import React from "react";
// import IMg1 from "./Images/R.jpg";
// import IMg2 from "./Images/F.jpg";
// import IMg3 from "./Images/T.jpg"
// import IMg4 from "./Images/E.jpg"
// import IMg5 from "./Images/S.jpg"
import "./Css/Signup.css";
// import Detail from "./Detail";




export default function Signup(props) {
    return (
        <>
            <div className="flex">
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
                        <p>{props.value} with The RFTES</p>

                    </div>
                    {/* <Detail /> */}



                </div>

                <div className="image">
                    <div id="rftes">
                        <div className="react">
                        <span>R</span>
                        </div>
                        <div>
                        <span>F</span>
                        </div>
                        <div>
                        <span>T</span>
                        </div>
                        <div>
                        <span>E</span>
                        </div>
                        <div>
                        <span>S</span>
                        </div>
                    </div>


                    {/* <img className="img" src={IMg1} alt="this pic was hidden"></img>

                    <img className="img" src={IMg2} alt="this pic was hidden"></img> 

                    <img className="img" src={IMg3 } alt="this pic was hidden"></img>
                    <img className="img" src={IMg4} alt="this pic was hidden"></img>
                     <img className="img" src={IMg5} alt="this pic was hidden"></img> */}
                </div>
            </div>
        </>
    );
}
