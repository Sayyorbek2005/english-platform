import React from 'react'
import './Sidebar.css'
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdContacts } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
const Sidebar = () => {
  
  
  return (
    
    
    
    <div className='sidebar' data-aos="fade-right">
      <div class="one linear"></div>
      <div class="two linear"></div>
      <div class="three linear"></div>
      <div class="four linear"></div>
      <div className="Ismoilov">
        <h3>Ismailov</h3>
      </div>
      <div className="ullar">
        <ul>

          <div className='display homelar '>
          <li className='home font-size25 '><FaHome/></li>
          <b className='font-size25'>Home</b>
          </div>

          <div className="display homelar ">
          <li className=' font-size25 resume'><IoMdPerson/></li>
          <b className='font-size25'>About</b>
          </div>

          <div className="display homelar ">
          <li className=' font-size25 menu'><TfiMenuAlt/></li>
          <b className='font-size25'>Services</b>
          </div>

          <div className="display homelar ">
          <li className='font-size25 work'><PiSuitcaseSimpleBold/></li>
          <b className='font-size25'>Work</b>
          </div>

          <div className="display homelar ">
          <li className=' font-size25 contact'><MdContacts/></li>
          <b className='font-size25'>Contact</b>
          </div>
          
        </ul>

      </div>
      <div className="icon">
        <li><RiMenu2Fill /></li>
      </div>
    </div>
  )
}

export default Sidebar
