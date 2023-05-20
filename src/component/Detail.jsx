import React, { useState } from "react";
// import './Css/detail.css'; 
import { questions } from "../Data/Question";
import { useNavigate } from "react-router-dom";
import SubDetail1 from "./SubDetail/SubDetail1";
import SubDetail2 from "./SubDetail/SubDetail2";
import SubDetail3 from "./SubDetail/SubDetail3";


export default function Detail() {
    const [name, setName] = useState(null)
    const [nameError, setNameError] = useState('')
    const [phone, setPhone] = useState(null)
    const [phoneError, setPhoneError] = useState('')
    const [day, setDay] = useState(null)
    const [month, setMonth] = useState(null)
    const [year, setYear] = useState(null)
    const [email, setEmail] = useState(null)
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState(null)
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [questionsnumber, setQuestionNumber] = useState(0)
    const navigate = useNavigate();

    function changequtions() {
        let hasError = false;
        if (questionsnumber === 0) {
            if (name === null) {
                setNameError('Name is Required.')
                hasError = true;
            } else {
                setNameError('')
            }
            if (phone === null) {
                setPhoneError('Phone Number is Required.')
                hasError = true;
            } else {
                setPhoneError('')
            }
        } else if (questionsnumber === 2) {
            if (email === null) {
                setEmailError('Email Id is Required.')
                hasError = true;
            } else {
                setEmailError('')
            }
            if (password === null) {
                setPasswordError('Password is Required.')
                hasError = true;
            } else {
                setPasswordError('')
            }
            if (confirmPassword === null) {
                setConfirmPasswordError('Confirm Password is Required.')
                hasError = true;
            } else {
                setConfirmPasswordError('')
            }
        }

        if (hasError) {
            return;
        }
        if (questionsnumber < questions.length - 1 && questionsnumber + 1 !== questions[2].id) {
            setQuestionNumber(questionsnumber + 1);
        }
        else {
            fetch("http://localhost:8080/v1/users/signup", {
                body: JSON.stringify({
                    name, email, phone, password, confirmPassword, dob: `${day}-${month}-${year}`
                }),
                headers: {
                    "Accept": "application/json", "Content-Type": "application/json"
                }, method: "POST"
            }).then((res) => res.json()).then((data) => {
                if (data.responseCode === 1) {
                    alert(data.responseMessage)
                    navigate("/login")
                }
                else {
                    alert(data.responseMessage)
                }
            }).catch((err) => {
                alert(err.response.data.responseMessage)
            })
        }
    }

    return <>
        <div>
            {/* <span>{setQuestionNumber}{questionsnumber+1}.</span> */}
            <span>{questions[questionsnumber].questions}</span>
        </div>
        <div>
            {/* {questions[questionsnumber].option} */}
            {
                questionsnumber === 0 ? <SubDetail1 setName={setName} setPhone={setPhone} nameError={nameError} phoneError={phoneError} /> : questionsnumber === 1 ? <SubDetail2 setDay={setDay} setMonth={setMonth} setYear={setYear} /> : <SubDetail3 setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} emailError={emailError} passwordError={passwordError} confirmPasswordError={confirmPasswordError} />
            }
        </div>
        <div id="btn">
            <button onClick={changequtions} className="button">{questionsnumber + 1 === questions[2].id ? "Register" : "Continue"}</button>
        </div>


        {/* <div>
        <p className="date">
            What's your date of birth?
        </p>
        <div className="line">
            <input type="text" placeholder="Day" className="birth"></input>
            <input type="text" placeholder="Month" className="birth"></input>
            <input type="text" placeholder="Year" className="birth"></input>
        </div>
    </div> */}
    </>
}