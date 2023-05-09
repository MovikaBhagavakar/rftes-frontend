
import './App.css';

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
export const wrapper = createContext();



const App = () => {
  const [userData, setUserData] = useState(null);
  const [searchvalue, setSearchValue] = useState(" ")
  const pagesize = 15;
  return (

    <div>
      <wrapper.Provider value={{ searchvalue, setSearchValue }}>
        <Router>
          <Navbar />
          {/* <NewsItem/> */}

          <Routes>
            <Route path="/home " element={<Home />}></Route>
            <Route path="/news" element={<News userData={userData} setUserData={setUserData} key="General " pagesize={pagesize} country="in" category="General" color="red" />} />
            <Route path="/business" element={<News key="Business" pagesize={pagesize} country="in" category="Business" />} />
            <Route path="/sports" element={<News key="Sports" pagesize={pagesize} country="in" category="Sports" />} />
            <Route path="/entertainment" element={<News key="Entertainment" pagesize={pagesize} country="in" category="Entertainment" />} />
            <Route path="/General" element={<News key="General" pagesize={pagesize} country="in" category="General" />} />
            <Route path="/Health" element={<News key="Health" pagesize={pagesize} country="in" category="Health" />} />
            <Route path="/Science" element={<News key=" Science" pagesize={pagesize} country="in" category="Science" />} />
            <Route path="/Technology" element={<News key="Technology" pagesize={pagesize} country="in" category="Technology" />} />
            <Route path="/createarticle" element={<Artical />} />
            <Route path="/forgetPassword" element={<Fogetpass />} />
            <Route path="/resetPassword/:token" element={<Resetpassword />} />
            <Route path="/login" element={<LoginDetails />}></Route>
            <Route path="/signup" element={<SignupDetails />}  ></Route>
            <Route path="/news/:id" element={<FullNews />} />
            <Route path="/my-favorites" element={<Favorites userData={userData} setUserData={setUserData} />} />
          </Routes>

        </Router>
      </wrapper.Provider>
    </div>

  )

}
export default App