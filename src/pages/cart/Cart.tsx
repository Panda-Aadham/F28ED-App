import React, { useEffect, useState } from "react";
import { cart, getCart } from "./cartHelpers.tsx";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartData, setCartData] = useState<cart>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setCartData(getCart());
    }, [window.localStorage.getItem("cart")])

    const handleClickBack = () => {
        const path = window.localStorage.getItem("lastPath")
        if (path) navigate(path)
    }

    return(
        <div className="cart-page">
            <header className="cart-header">
                <h1>Shopping Cart</h1>
            </header>
            <div className="cart-items">
                {cartData.map((item, index) => (
                    <div key={index} className="cart-item">
                        
                    </div>
                ))}
                <button
                    className="cart-back-button"
                    onClick={handleClickBack}>
                    Back
                </button>
            </div>
        </div>
    )
}

export default Cart;