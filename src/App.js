
// import './App.css';

// import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginDetails from './component/LoginDetails';
// import Signup from './component/Signup';
import SignupDetails from './component/SignupDetails';
import { createContext } from 'react';
import { useState } from 'react';
import Artical from './component/Artical';
import Fogetpass from './component/Fogetpass';
import Resetpassword from './component/Resetpassword';
import Home from './component/Home';
import FullNews from './component/FullNews';
import Favorites from './component/Favorites';
import Admin from "./Admin"
import MyArticles from './component/Myarticles';
export const wrapper = createContext();



const App = () => {
  const [nav, setNav] = useState("flex");
  const [searchvalue, setSearchValue] = useState("")
  const pagesize = 15;
  return (

    <div>
      <wrapper.Provider value={{ searchvalue, setSearchValue }}>
        <Router>
          <Navbar nav={nav} />
          {/* <NewsItem/> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News key="General " pagesize={pagesize} country="in" category="General" color="red" />} />
            <Route path="/business" element={<News key="Business" pagesize={pagesize} country="in" category="Business" />} />
            <Route path="/sports" element={<News key="Sports" pagesize={pagesize} country="in" category="Sports" />} />
            <Route path="/entertainment" element={<News key="Entertainment" pagesize={pagesize} country="in" category="Entertainment" />} />
            <Route path="/General" element={<News key="General" pagesize={pagesize} country="in" category="General" />} />
            <Route path="/Health" element={<News key="Health" pagesize={pagesize} country="in" category="Health" />} />
            <Route path="/Science" element={<News key=" Science" pagesize={pagesize} country="in" category="Science" />} />
            <Route path="/Technology" element={<News key="Technology" pagesize={pagesize} country="in" category="Technology" />} />
            <Route path="/create-article" element={<Artical />} />
            <Route path="/update-article/:id" element={<Artical />} />
            <Route path="/try" element={<Home />} />
            <Route path="/forgetPassword" element={<Fogetpass />} />
            <Route path="/resetPassword/:token" element={<Resetpassword setNav={setNav} />} />
            <Route path="/login" element={<LoginDetails />}></Route>
            <Route path="/signup" element={<SignupDetails />}  ></Route>
            <Route path="/news/:id" element={<FullNews />} />
            <Route path="/my-favorites" element={<Favorites />} />
            <Route path="/my-articles" element={<MyArticles />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>

        </Router>
      </wrapper.Provider>
    </div>

  )

}
export default App