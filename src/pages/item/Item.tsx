import React, { useEffect, useState } from "react";
import categories from "../../data/categories.tsx";
import { grocery } from "../../data/interfaces";
import { useParams } from "react-router-dom";
import "./Item.css";

const Item = () => {
    const { categoryName, itemName } = useParams()
    const [itemData, setItemData] = useState<grocery>()

    const showImage = true;

    useEffect(() => {
        categories.forEach((row) => {
            const foundCell = row.find(
                (cell) => cell.title.toLowerCase() === categoryName)
            if (foundCell) {
                setItemData(foundCell.items.find((item) =>
                    item.title.toLowerCase().replace(" ","") == itemName
                ))
            }
        })
    }, [])

    
    return(
        itemData && <div className="item-page">
            <header className="item-title">
                <h1>{itemData.title}</h1>
            </header>
            <div className="item-display">
                {showImage && <img 
                    src={itemData.image}
                    className="item-display-image"/>}
                <h3>{itemData.description}</h3>
            </div>
            <div className="item-control">
                <h3>Quantity</h3>
                <div className="item-cart-grid">
                    <button className="item-cart-button">-</button>
                    <span className="number">42</span>
                    <button className="item-cart-button">+</button>
                </div>
            </div>
        </div>
    )
}

export default Item;