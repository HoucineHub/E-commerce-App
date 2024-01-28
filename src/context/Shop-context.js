import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Products";

export const ShopContext = createContext(null);

function getDefaultCard(){
    let cart ={}
    for (let i = 1 ; i<PRODUCTS.length + 1 ; i++){
        cart[i] = 0 ;
    }
    return cart ;
}


function ShopContextProvider(props){

    const [cartItems , setCartIems] = useState(getDefaultCard());

    const getTotalCardAmount = () => {
        let totalAmount = 0 ;
        for (const item in cartItems){
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount ;
    }

    const addToCart = (itemId)=>{
        setCartIems((prev) => ({...prev , [itemId] : prev[itemId] + 1}))
    }

    const removeFromCart = (itemId)=>{
        setCartIems((prev) => ({...prev , [itemId] : prev[itemId] - 1}))
    }

    const updateCartItemCount = ( newAmount , itemId ) => {
        setCartIems((prev) => ({...prev , [itemId] : newAmount}))
    }

    const contextValue = {cartItems , addToCart , removeFromCart , updateCartItemCount , getTotalCardAmount}


    return(
        <div>
            <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
        </div>
    )
}


export default ShopContextProvider;