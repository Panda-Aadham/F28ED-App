import React, { useEffect, useState } from "react";
import categories from "../../data/categories.tsx";
import { grocery } from "../../data/interfaces";
import { useNavigate, useParams } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Item.css";

const Item = () => {
    const { categoryName, itemName } = useParams();
    const navigate = useNavigate();
    const [itemData, setItemData] = useState<grocery>();
    const [quantity, setQuantity] = useState(0);

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

    const handleClickBack = () => {
        navigate("/category/" + categoryName)
    }

    const handleClickQuantity = (value: number) => {
        if (quantity == 0) {
            if (value != -1)
                setQuantity(quantity + value)
        } else setQuantity(quantity + value)
    }
    
    return(
        itemData && <div className="item-page">
            <header className="item-header">
                <h1 className="item-title">{itemData.title}</h1>
                <div>
                    <ShoppingCartIcon fontSize="large" className="item-cart"/>
                </div>
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
                    <button
                        onClick={() => handleClickQuantity(-1)}
                        className="item-cart-button">-</button>
                    <span className="number">{quantity}</span>
                    <button
                        onClick={() => handleClickQuantity(1)}
                        className="item-cart-button">+</button>
                </div>
                <button
                    className="item-cart-button item-add-cart">Add to cart</button>
                <button
                    className="item-back-button"
                    onClick={handleClickBack}>
                    Back
                </button>
            </div>
        </div>
    )
}

export default Item;