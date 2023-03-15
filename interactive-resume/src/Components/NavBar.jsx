// import React from "react"
import { Link } from "react-router-dom"


function NavBar() {
  return (
    <div className="navBar">
        <ul>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='Education'>Education</Link></li>
            <li><Link to ='Experience'>Experience</Link></li>
            <li><Link to ='Skills'>Skills</Link></li>
            <li><Link to ='Contact'>Contact</Link></li>
            <li><Link to ='Portfolio'>Portfolio</Link></li>
        </ul>
    </div>
  )
}

export default NavBar