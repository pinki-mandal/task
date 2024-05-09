import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
const Nav = () => {
  return (
    <div>
      <header>
        <nav>
            <div class="logo">
              <h2>Karo Abhayaas</h2>
                
            </div>
            <div class="right">
              <ul>
              <li className='link'><Link className='item' to="/" style={{ color: 'white' , textDecoration: 'none' }}>Join Us</Link></li>
              <li className='link'><Link  className='item'to="/classes"   style={{ color: 'white' , textDecoration: 'none' }}>Classes</Link></li>
              <li className='link'><Link className='item' to="/products"  style={{ color: 'white' , textDecoration: 'none' }}>Products</Link></li>
              <li className='link'><Link className='item'to="/about"  style={{ color: 'white' , textDecoration: 'none' }}>About Us</Link></li>

              <Link  className='item' to="/login"><IoMdContact size={20} /></Link>
                {/* <IoMdContact size={20} /> */}
                <FaShoppingCart size={20}/>
              
              </ul>
                
            </div>
        </nav>
    </header>
      
    </div>
  )
}

export default Nav
