import React from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
    const navigate = useNavigate();

    const handleClick = (showImage: boolean) => {
        const now = new Date().getTime();
        window.localStorage.setItem("showImages", `${showImage}`);
        window.localStorage.setItem("startTime", now.toString())
        window.localStorage.setItem("cart", "[]");
        navigate("/home")
    }

    return(
        <div className="start-page">
            <header className="start-title">
                <h1>Start</h1>
            </header>
            <button
                onClick={() => handleClick(true)} 
                className="start-button">
                With images
            </button>
            <button
                onClick={() => handleClick(false)} 
                className="start-button">
                Without images
            </button>
        </div>
    )
}

export default Start;