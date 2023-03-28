import React from 'react'
import { Link } from 'react-router-dom';
import {ShoppingCart} from "phosphor-react";
import "./header.css"



const Header = () => {
  return (
    <div className='header'>
    <div className='links'> 
    <Link to={"/"} className="shop">Shop</Link>
    <Link to={"/cart"} className="cartimg">
        <ShoppingCart size={32}/>
    </Link>
    </div>
</div>
  )
}

export default Header