import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../data/categories.tsx"
import { category } from "../../data/interfaces.tsx";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const showImage = true;

    const handleClick = (category: category) => {
        navigate("/category" + category.path)
    }

    return (
        <div className="home-page">
            <header className="home-header">
                <h1 className="home-title">Shoppy Shop</h1>
                <div>
                    <ShoppingCartIcon fontSize="large" className="home-cart"/>
                </div>
            </header>
            <div className="category-grid">
                {categories.map((row, rowIndex) => (
                <div className="category-row" key={rowIndex}>
                    {row.map((category, cellIndex) => (
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
    )
}

export default Home;