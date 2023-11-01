import React, { useEffect, useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import "./CartIcon.css";

const CartIcon = () => {
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

    const handleClickCart = () => {
        window.localStorage.setItem("lastPath", window.location.pathname)
        navigate("/cart")
    }

    useEffect(() => {
        const cartString = window.localStorage.getItem("cart")
        if (cartString) {
            const cart = JSON.parse(cartString)
            setCartCount(cart.length)
        }
    }, [window.localStorage.getItem("cart")])

    return(
        <div className="cart-icon" onClick={handleClickCart}>
            <div className="cart-circle">{cartCount}</div>
            <ShoppingCartIcon fontSize="large" className="home-cart"/>
        </div>
    )
}

export default CartIcon;