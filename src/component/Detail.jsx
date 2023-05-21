import React, { useState } from "react";
// import './Css/detail.css';
import { questions } from "../Data/Question";
import { useNavigate } from "react-router-dom";
import SubDetail1 from "./SubDetail/SubDetail1";
import SubDetail2 from "./SubDetail/SubDetail2";
import SubDetail3 from "./SubDetail/SubDetail3";
import * as Yup from "yup";
import { useFormik } from "formik";

const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is a required field."),
  password: Yup.string().required("Password is a required field."),
  confirmPassword: Yup.string().required(
    "Confirm Password is a required field."
  ),
});

const firstValidationSchema = Yup.object({
  name: Yup.string().required("Name is a required field."),
  phone: Yup.number().required("Phone is a required field."),
});

const secondValidationSchema = Yup.object({
  day: Yup.number().min(1).max(31).required("Day is a required field."),
  month: Yup.number().min(1).max(12).required("Month is a required field."),
  year: Yup.number().min(1901).max(2100).required("Year is a required field."),
});

export default function Detail() {
  const [questionsnumber, setQuestionNumber] = useState(0);
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit(values) {
      let formValues = {
        name: firstValue.name,
        phone: firstValue.phone,
        dob: `${secondValue.day}-${secondValue.month}-${secondValue.year}`,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };

      fetch(`${process.env.REACT_APP_SERVER_URL}/v1/users/signup`, {
        body: JSON.stringify(formValues),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.responseCode === 1) {
            alert(data.responseMessage);
            navigate("/login");
          } else {
            alert(data.responseMessage);
          }
        })
        .catch((err) => {
          alert(err.response.data.responseMessage);
        });
    },
  });

  const firstFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: firstValidationSchema,
    onSubmit(values) {
      setFirstValue(values);
      setQuestionNumber(questionsnumber + 1);
    },
  });

  const secondFormik = useFormik({
    initialValues: {
      day: "",
      month: "",
      year: "",
    },
    validationSchema: secondValidationSchema,
    onSubmit(values) {
      setSecondValue(values);
      setQuestionNumber(questionsnumber + 1);
    },
  });

  return (
    <>
      <div>
        {/* <span>{setQuestionNumber}{questionsnumber+1}.</span> */}
        <span>{questions[questionsnumber].questions}</span>
      </div>

      {/* {questions[questionsnumber].option} */}
      {questionsnumber === 0 ? (
        <form onSubmit={firstFormik.handleSubmit}>
          <SubDetail1
            setName={(value) => firstFormik.setFieldValue("name", value)}
            setPhone={(value) => firstFormik.setFieldValue("phone", value)}
            nameError={firstFormik.touched.name && firstFormik.errors.name}
            phoneError={firstFormik.touched.phone && firstFormik.errors.phone}
            name={firstFormik.values.name}
            phone={firstFormik.values.phone}
          />
          <button type="submit" className="button my-2">
            {questionsnumber + 1 === questions[2].id ? "Register" : "Continue"}
          </button>
        </form>
      ) : questionsnumber === 1 ? (
        <form onSubmit={secondFormik.handleSubmit}>
          <SubDetail2
            setDay={(value) => secondFormik.setFieldValue("day", value)}
            setMonth={(value) => secondFormik.setFieldValue("month", value)}
            setYear={(value) => secondFormik.setFieldValue("year", value)}
            day={secondFormik.values.day}
            month={secondFormik.values.month}
            year={secondFormik.values.year}
            dayError={secondFormik.touched.day && secondFormik.errors.day}
            monthError={secondFormik.touched.month && secondFormik.errors.month}
            yearError={secondFormik.touched.year && secondFormik.errors.year}
          />
          <button type="submit" className="button my-2">
            {questionsnumber + 1 === questions[2].id ? "Register" : "Continue"}
          </button>
        </form>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <SubDetail3
            setEmail={(value) => formik.setFieldValue("email", value)}
            setPassword={(value) => formik.setFieldValue("password", value)}
            setConfirmPassword={(value) =>
              formik.setFieldValue("confirmPassword", value)
            }
            emailError={formik.touched.email && formik.errors.email}
            passwordError={formik.touched.password && formik.errors.password}
            confirmPasswordError={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            email={formik.values.email}
            password={formik.values.password}
            confirmPassword={formik.values.confirmPassword}
          />
          <div className="d-flex flex-column" id="btn">
            <button type="submit" className="button my-2">
              {questionsnumber + 1 === questions[2].id
                ? "Register"
                : "Continue"}
            </button>
          </div>
        </form>
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          setQuestionNumber(questionsnumber - 1);
        }}
        className={`button my-2 ${questionsnumber === 0 && "d-none"}`}
      >
        Back
      </button>
    </>
  );
}
