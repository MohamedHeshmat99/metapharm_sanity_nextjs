import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart';
import { useStateContext } from '@/context/StateContext';


const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();



  
  return ( 
    <header>
      <nav className="navigation">
        <div className="logo" >
          <Link href="/">
            <img src="/assets/logo-no-background.png" alt="" style={{width:"200px;"}} />
          </Link>
        </div>
          <ul className="menu-list">
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/shop'><a>shop</a></Link></li>
            <li><Link href='/services'><a>Services</a></Link></li>
            <li><Link href='/doctors'><a>Cyber Doctors</a></Link></li>
            <li><Link href='/contactUs'><a>Contact Us</a></Link></li>
            <li><Link href='/subscriptions'><a>Subscription</a></Link></li>
            <li><Link href='/aboutUs'><a>About</a></Link></li>
          </ul>

  
        <div style={{display: "flex;",columnGap: "60px;",marginRight: "30px;"}}>
          <Link href='/login'>
            <div className="header__option">
            <button> Login </button>
            </div>
          </Link>
  
          <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </div>
  
        {showCart && <Cart />}
      </nav> 
    </header>
  )
}

export default Navbar