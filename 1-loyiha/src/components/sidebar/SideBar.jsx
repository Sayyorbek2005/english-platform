import React from 'react'
import logo from '../../assets/img/remove-back_logo.png'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
const SideBar = () => {


  
  return (
    <div data-aos="fade-right" className="sidebar">
      <div className="sidebar-text">
    <div className="cont-logo">

      <img src={logo} alt="logo" />
    </div>
      <ul>
        <NavLink to="">
        <li>Sahifa</li>
        </NavLink>
        
        <NavLink to='books'>

        <li>1-kitob</li>

        </NavLink>
        <NavLink to="twobook">

        <li>2-kitob</li>

        </NavLink>
        
        <NavLink to="test1">

        <li>1-test</li>

        </NavLink>
        
         <NavLink to="test2">

        <li>2-test</li>

        </NavLink>

        <NavLink to="teacher">

        <li>Teacher</li>

        </NavLink>
      </ul>
      
      </div>
    </div>
  )
}

export default SideBar
