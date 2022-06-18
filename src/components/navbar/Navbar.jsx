import React from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';


const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gtp3__navbar-links_logo'>
          <img src="../../assets/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar