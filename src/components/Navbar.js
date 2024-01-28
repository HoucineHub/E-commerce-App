import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";
import {ShoppingCart} from '@phosphor-icons/react'

function Navbar(){
    return(
        <div className="navbar">
            <div className="links">
                <Link to="/" style={{fontSize:"30px"}}>Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar; 