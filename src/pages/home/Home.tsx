import React from "react";
import categories from "../../data/categories.tsx"
import "./Home.css";

const Home = () => {
    const categoryArray = [
        ["Fruits", "Pasta", "Juice"],
        ["Meats", "Fish", "Vegetables"],
        ["Snacks", "Bakery", "Dairy"]
    ];

    console.log(categories)
    const showImage = true;

    return (
        <div className="home-page">
            <header>
                <h1>Shoppy Shop</h1>
            </header>
            <div className="category-grid">
                {categories.map((row, rowIndex) => (
                <div className="category-row" key={rowIndex}>
                    {row.map((category, cellIndex) => (
                    <button key={cellIndex} className="category-button">
                        {showImage && <img src=""/>}
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