import logo from '../../assets/img/finish-logo.png'
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
          <NavLink 
            to="/"
            className={({ isActive }) => isActive ? "active" : ""}
            end
          >
            <li>Page</li>
          </NavLink>

          <NavLink 
            to="books"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <li>Book 1</li>
          </NavLink>

          <NavLink 
            to="twobook"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <li>Book 2</li>
          </NavLink>

          <NavLink 
            to="test1"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <li>Test 1</li>
          </NavLink>

          <NavLink 
            to="test2"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <li>Test 2</li>
          </NavLink>
{/* 
          <NavLink 
            to="teacher"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            <li>Teacher</li>
          </NavLink> */}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
