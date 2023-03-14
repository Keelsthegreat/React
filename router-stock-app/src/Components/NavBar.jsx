import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div> 
        <ul className='navBar'>
            <li><Link to ='/'>iStocks</Link></li>
            <li><Link to ='/Stock'>Stocks</Link></li>
            <li><Link to ='/About'>About</Link></li>
            
        </ul>
    </div>
  )
}

export default NavBar