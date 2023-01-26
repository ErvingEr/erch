import Section from "./section"
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home"
import TakeTime from "../pages/takeTime"
import {Link , NavLink} from "react-router-dom"
import { useState } from "react";
import * as React from 'react';
import Practice from "../practice";
import SignIn from "../pages/signIn";
export default function Header(){
 const styleObj ={
  color :"black"
 }
 const activeStyle ={
  color :"black"
 }
    return (
        <div>
            <div>
      <div className="d-flex justify-content-between fixed-top" id="navbar">
        <div className="container-fluid d-flex align-items-center">
            <div id="logo"></div>
              <div style={{fontFamily:"montserrat",fontSize:"5px"}} className="d-md-flex d-none fs-1"><strong>Эрч Гранд</strong></div>
        </div>
      <div className=" container-fluid d-md-flex d-none gap-4 align-items-center justify-content-end">
        <NavLink to="/"  style={({ isActive }) => isActive ? activeStyle : styleObj}>Нүүр</NavLink>
        <TakeTime/>
        <NavLink to="/aboutUs" style={({isActive}) => isActive ? activeStyle : styleObj}>Бидний тухай</NavLink>
        <NavLink to="" style={({isActive}) => isActive ? activeStyle : styleObj}>
          <SignIn/>
          </NavLink>
      </div>  
      <div className="container-fluid d-md-none d-flex justify-content-end">
        <Practice/>
        </div>
      </div>
      </div>
      <Section/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </div>
        </div>
    )
}