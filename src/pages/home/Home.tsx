import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../data/categories"
import { category } from "../../data/interfaces";
import { setLastPath } from "../cart/cartHelpers";
import ExperimentPage from "../experimentPage/ExperimentPage";
import CartIcon from "../cart/CartIcon";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const showImage = window.localStorage.getItem("showImages") === "true";

    const handleClick = (category: category) => {
        navigate("/category" + category.path)
    }

    const handleClickCart = () => {
        setLastPath();
        navigate("/cart")
    }

    return (
        <ExperimentPage>
            <header className="home-header">
                <h1 className="home-title">Shoppy Shop</h1>
                <CartIcon/>
            </header>
            <div className="category-grid">
                {categories.map((row: category[], rowIndex: number) => (
                <div className="category-row" key={rowIndex}>
                    {row.map((category: category, cellIndex: number) => (
                    <button
                        key={cellIndex}
                        className="category-button"
                        onClick={() => handleClick(category)}>
                        {showImage && <img 
                            src={category.image}
                            className="category-image"
                            alt="category image"/>}
                        {category.title}
                    </button>
                    ))}
                </div>
                ))}
            </div>
        </ExperimentPage>
    )
}

export default Home;