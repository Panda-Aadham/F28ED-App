import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
    const navigate = useNavigate();

    const handleClickCart = () => {
        window.localStorage.setItem("lastPath", window.location.pathname)
        navigate("/cart")
    }

    return(
        <div onClick={handleClickCart}>
            <ShoppingCartIcon fontSize="large" className="home-cart"/>
        </div>
    )
}

export default CartIcon;