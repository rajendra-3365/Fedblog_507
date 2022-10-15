import React from 'react';

function Header() {
  return (
    <div className='header'>
        <header>
        <nav>
            <div className='header-logo'>
            <span>
            <img src="https://www.freepnglogos.com/uploads/logo-home-png/home-icons-icons-devine-icons-part-icon-19.png" width="38px" height="38px" alt=''/>
            </span>
           
            <p>Canvas</p>
            </div>
            <ul>
                <li><a href='localhost:3000/'>Home</a></li>
                <li><a href='localhost:3000/'> About</a></li>
                <li><a href='localhost:3000/'>Contact Us</a></li>
                <li><a href='localhost:3000/'>Help</a></li>
                
            </ul>
            

        </nav>
        </header>
  

    </div>
  )
}

export default Header;