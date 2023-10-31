import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../data/categories"
import { category } from "../../data/interfaces";
import { setLastPath } from "../cart/cartHelpers";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExperimentPage from "../ExperimentPage";
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
            <div className="home-page">
                <header className="home-header">
                    <h1 className="home-title">Shoppy Shop</h1>
                    <div onClick={handleClickCart}>
                        <ShoppingCartIcon fontSize="large" className="home-cart"/>
                    </div>
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
                
            </div>
        </ExperimentPage>
    )
}

export default Home;