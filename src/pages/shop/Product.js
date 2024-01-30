import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

function Product(props){

    const {id,productName,price,productImage} = props.data;

    const { addToCart , cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    return(
        <div className="product">
            <img src={productImage} alt="" />
            <div className="description">
                <p className="name">
                    <b>{productName}</b>
                </p>
                <p className="price">{price} MAD</p>
            </div>
            <button className="addToCartBtn" onClick={ () =>addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <> {cartItemAmount} </>} 
            </button>
        </div>
    )
}

export default Product;