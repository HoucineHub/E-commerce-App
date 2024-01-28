import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/Shop-context";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";



function Cart(){

    const {cartItems , getTotalCardAmount} = useContext(ShopContext);
    const totalAmount = getTotalCardAmount()
    const navigate = useNavigate()

    return(
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product)=>{
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })} 
            </div>


            {totalAmount > 0 ? 
            <div className="checkout">
                <p className="subtotal"> Subtotal : {totalAmount} MAD</p>
                <button onClick={ () => navigate("/")}> Continue Shopping </button>
            </div>
            : <h1 style={{fontFamily:"sans-serif"}}>Your Cart is Empty !</h1>}
        </div>
    )
}

export default Cart;