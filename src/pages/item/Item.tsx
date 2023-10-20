import React, { useEffect, useState } from "react";
import categories from "../../data/categories.tsx";
import { category, grocery } from "../../data/interfaces";
import { useParams } from "react-router-dom";
import "./Item.css";

const Item = () => {
    const { categoryName, itemName } = useParams()
    const [itemData, setItemData] = useState<grocery>()

    useEffect(() => {
        categories.forEach((row) => {
            const foundCell = row.find(
                (cell) => cell.title.toLowerCase() === categoryName)
            if (foundCell) {
                setItemData(foundCell.items.find(
                    (item) => item.title.toLowerCase() == itemName
                    ))
            }
        })
    }, [])

    
    return(
        itemData && <div className="item-page">
            <header className="item-title">
                <h1>{itemData.title}</h1>
            </header>
        </div>
    )
}

export default Item;