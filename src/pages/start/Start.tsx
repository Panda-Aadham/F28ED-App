import React from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";


var validItems = ['Croissant', 'Baguette', 'Muffin', 'Milk', 'Cheese', 'Yogurt', 'Salmon', 'Tuna', 'Cod', 'Banana', 'Pineapple', 'Lemon', 'Orange Juice', 'Apple Juice', 'Grape Juice', 'Chicken', 'Beef', 'Pork', 'Spaghetti', 'Penne', "Fusilli", 'Crips', 'Candy', 'Pretzels', 'Broccoli', 'Carrots', 'Cabbage']

const Start = () => {
    const navigate = useNavigate();


    function generateItems(){
        var item1 = validItems[Math.floor(Math.random() * validItems.length)];
        var item2 = validItems[Math.floor(Math.random() * validItems.length)];

        while(item1 === item2){
            item2 = validItems[Math.floor(Math.random() * validItems.length)];
        }

        return([item1, item2])
    }


   
    
    const items =  generateItems()

    const handleClick = (showImage: boolean) => {
        const now = new Date().getTime();
        window.localStorage.setItem("items", JSON.stringify(items));
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
            <div className="start-items">
            Items to find
            <div className="start-find-items">
                {items.map((item, index) => (
                    <div key={index} className="start-item">
                        {item}
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Start;