import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

function CartItem(props) {

    const {id,productName,price,productImage} = props.data;
    const { cartItems , addToCart , removeFromCart , updateCartItemCount } = useContext(ShopContext);


    return(
        <div className="cartItem">
            <img src={productImage} alt="" />
            <div className="description">
                <p className="name">
                    <b> {productName} </b>
                </p>
                <p className="price"> {price} MAD</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)}/>
                    <button onClick={() => addToCart(id)}> + </button>
                </div> 
            </div>
        </div>
    )
}

export default CartItem; 