
import React from 'react';

import angrycat from '../images/angrycat.jpg';

// this is a comment yo //

const Header = () => {
  return (
    <nav>
      <div className='nav_container'>
        
          <img src={angrycat} alt='Navbar Logo' />
        
        <ul className='nav_menu'>
          <li> <a href="/">Home</a></li>
          <li> <a href="Contact_Us">Contact</a></li>
     
        </ul>
    
      </div>   
      
    </nav>
  )
}

export default Header
