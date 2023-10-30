import React, { useEffect, useState } from "react";
import { addItem, removeItem, cart, getCart, validateCheckout, cartItem } from "./cartHelpers";
import { useNavigate } from "react-router-dom";
import { grocery } from "../../data/interfaces.js";
import "./Cart.css";

const Cart = () => {
    const [cartData, setCartData] = useState<cart>([]);
    const navigate = useNavigate();

    const handleRemoveItem = (item: grocery) => {
        removeItem(item, 1)
        setCartData(getCart());
    }
    
    const handleAddItem = (item: grocery) => {
        addItem(item, 1)
        setCartData(getCart());
    }

    const handleCheckout = () => {
        if (validateCheckout()) {
            const endTime = new Date().getTime();
            window.localStorage.setItem("endTime", endTime.toString())
            navigate("/end")
        }
    }

    // Refresh cart data
    useEffect(() => {
        setCartData(getCart());
    }, [])

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
                {cartData.map((grocery: cartItem, index: number) => (
                    <div key={index} className="cart-item">
                        <div className="cart-item-title">{grocery.item.title}</div>
                        <div className="cart-quantity">
                            <button
                            onClick={() => handleRemoveItem(grocery.item)}
                            className="cart-item-qbtn">-</button>
                            <div className="cart-item-quantity">{grocery.quantity}</div>
                            <button
                            onClick={() => handleAddItem(grocery.item)}
                            className="cart-item-qbtn">+</button>
                        </div>
                    </div>
                ))}
                <div className="cart-buttons">
                    <button
                        className="cart-back-button"
                        onClick={handleClickBack}>
                        Back
                    </button>
                    <button
                        className="cart-checkout-button"
                        onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;