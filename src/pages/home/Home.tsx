import React from "react";
import "./Home.css";

const Home = () => {
    const categoryArray = [
        ["Fruits", "Pasta", "Juice"],
        ["Meats", "Fish", "Vegetables"],
        ["Snacks", "Bakery", "Dairy"]
    ];

    const showImage = true;

    return (
        <div className="home-page">
            <header>
                <h1>Shoppy Shop</h1>
            </header>
            <div className="category-grid">
                {categoryArray.map((row, rowIndex) => (
                <div className="category-row" key={rowIndex}>
                    {row.map((category, cellIndex) => (
                    <button key={cellIndex} className="category-button">
                        {showImage && <img src=""/>}
                        {category}
                    </button>
                    ))}
                </div>
                ))}
            </div>
        </div>
    )
}

export default Home;